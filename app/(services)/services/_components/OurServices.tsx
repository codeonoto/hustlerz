import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin"; // Import ScrollToPlugin
import Link from "next/link";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface Section {
  id: string;
  title: string;
  link: string;
}

const sections: Section[] = [
  { id: "app-development", title: "App Development", link: "services/app-developement" },
  { id: "data-science", title: "Data Science" ,link: "services/data-science"},
  { id: "Web Developement", title: "Web Developement" ,link: "services/web-development"},
  { id: "ui-ux", title: "UI/UX",link: "services/uiux" },
];

const OurServices = () => {
  const [activeSection, setActiveSection] = useState<string>("app-development");
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});  // Use HTMLDivElement type
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sectionElements = Object.values(sectionRefs.current);

    // GSAP ScrollTrigger setup
    if (containerRef.current) {
      sectionElements.forEach((section) => {
        if (section) {
          ScrollTrigger.create({
            trigger: section,
            start: "top center", // When the section's top reaches the center of the viewport
            end: "bottom center",
            onEnter: () => setActiveSection(section.id),
            onEnterBack: () => setActiveSection(section.id),
          });
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      gsap.to(window, { scrollTo: { y: element.offsetTop, autoKill: false }, duration: 0.8 });
      setActiveSection(id);
    }
  };

  return (
    <div className="relative w-full h-screen flex">
      {/* Sidebar (Fixed) */}
      <motion.div
        className="sticky top-0 h-screen w-1/4 p-4  text-white shadow-md z-10"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ul className="space-y-4">
          {sections.map((section) => (
           <Link href={section.link}>
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
           </Link>
          ))}
        </ul>
      </motion.div>

      {/* Scrollable Content */}
      <div className=" w-full overflow-y-scroll">
        {sections.map((section, index) => (
          <section
            id={section.id}
            key={section.id}
            ref={(el) => (sectionRefs.current[section.id] = el)} // Ref callback
            className={`h-screen flex items-center justify-center ${
              index % 2 === 0
                ? "bg-gray-100 text-black"
                : "bg-white text-gray-900"
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
