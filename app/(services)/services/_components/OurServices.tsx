import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface Section {
  id: string;
  title: string;
}

const sections: Section[] = [
  { id: "app-development", title: "App Development" },
  { id: "data-science", title: "Data Science" },
  { id: "web-development", title: "Web Developement" },
  { id: "ui-ux", title: "UI/UX" },

];

const OurServices = () => {
  const [activeSection, setActiveSection] = useState<string>("app-development");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const { scrollY } = useViewportScroll();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // 60% of the section needs to be visible
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  // Parallax effect for the background
  const parallaxBackground = useTransform(scrollY, [0, 1000], ["0%", "50%"]);

  return (
    <div className="relative w-full h-screen flex">
      {/* Sidebar */}
      <motion.div
        className="sticky top-0 h-screen w-1/4 p-4  text-white shadow-md"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ul className="space-y-4">
          {sections.map((section) => (
            <li
              key={section.id}
              onClick={() => handleScrollToSection(section.id)}
              className={`cursor-pointer p-2 rounded-md ${
                activeSection === section.id
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-100"
              }`}
            >
              {section.title}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto over space-y-16">
        {sections.map((section, index) => (
          <section
            id={section.id}
            key={section.id}
            ref={(el) => (sectionRefs.current[section.id] = el)}
            className={`h-screen flex items-center justify-center p-8 ${
              index % 2 === 0
                ? "bg-white text-black"
                : "bg-gray-100 text-gray-900"
            }`}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-4">{section.title}</h2>
              <p className="text-lg">
                This is the content for the {section.title} section. Customize
                this as needed for your project.
              </p>
            </motion.div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
