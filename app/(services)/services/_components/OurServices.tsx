import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import img1 from "../images/appdev.png";
import img2 from "../images/datascience.png";
import img3 from "../images/web.png";
import img4 from "../images/uiux.png";
import Image from "next/image";
import Link from "next/link";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface Section {
  id: string;
  title: string;
  link: string;
  description: string;
  tech: string[];
  img: any;
}

const sections: Section[] = [
  {
    id: "app-developement",
    img: img1,
    title: "App Developement",
    link: "services/app-developement",
    description:
      "We create innovative mobile and web applications that drive user engagement, growth, and profitability.",
    tech: ["React Native", "Mobile Testing"],
  },
  {
    id: "data-science",
    img: img2,
    title: "Data Science",
    link: "services/data-science",
    description:
      "Leverage our data science expertise to extract valuable insights from your data and make data-driven decisions.",
    tech: ["Python", "Machine Learning", "Data Visualization"],
  },
  {
    id: "web-development",
    img: img3,
    title: "Web Development",
    link: "services/web-development",
    description:
      "Build high-performance, user-friendly websites that represent your brand and achieve your business goals.",
    tech: ["React", "Node.js", "MongoDB", "Express.js"],
  },
  {
    id: "ui-ux",
    img: img4,
    title: "UI/UX",
    link: "services/uiux",
    description:
      "Craft exceptional user experiences with our UI/UX design services, ensuring usability, accessibility, and visual appeal.",
    tech: ["Figma", "Sketch", "Adobe XD"],
  },
];

const OurServices = () => {
  const [activeSection, setActiveSection] = useState<string>("app-development");
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const parallaxRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const sectionElements = Object.values(sectionRefs.current).filter(
      Boolean
    ) as HTMLDivElement[];

    // Set up parallax effect for each section
    parallaxRefs.current.forEach((parallaxElement, index) => {
      if (parallaxElement) {
        gsap.to(parallaxElement, {
          y: "-30%", // Adjust the amount of parallax scroll
          ease: "none",
          scrollTrigger: {
            trigger: sectionElements[index],
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    });

    // Set up ScrollTrigger for section tracking
    sectionElements.forEach((section) => {
      if (section) {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveSection(section.id),
          onEnterBack: () => setActiveSection(section.id),
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      gsap.to(window, {
        scrollTo: { y: element.offsetTop, autoKill: true },
        duration: 0.8,
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="relative w-full flex flex-col lg:flex-row">
      {/* Sidebar */}
      <motion.div
        className="sticky top-0 lg:h-screen w-full lg:w-1/4 text-white shadow-md z-10 flex flex-row lg:flex-col border-r-2 border-darkBlue justify-between p-6"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ul className="flex lg:flex-col lg:space-y-4 space-x-4 lg:space-x-0">
          {sections.map((section) => (
            <li
              key={section.id}
              onClick={() => handleScrollToSection(section.id)}
              className={`cursor-pointer p-3 rounded-md transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-darkBlue text-white scale-105"
                  : "hover:bg-blue-600 text-white hover:scale-105 hover:text-black"
              }`}
            >
              {section.title}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1">
        {sections.map((section, index) => (
          <section
            id={section.id}
            key={section.id}
            ref={(el) => (sectionRefs.current[section.id] = el)}
            className={`relative h-[120vh] flex items-center px-4 sm:px-8 ${
              index % 2 === 0 ? "text-black bg-gray-950  " : " "
            } rounded-lg shadow-lg overflow-hidden`}
          >
            <div
              ref={(el) => (parallaxRefs.current[index] = el!)}
              className="absolute inset-0 flex items-center justify-center"

            >
              <Image src={section.img} alt="" className="w-96 h-96 object-cover" />
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
                className=" text-white p-8  bg-opacity-50 rounded-lg"
              >
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
                  {section.title}
                </h2>
                <p className="text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-6">
                  {section.description}
                </p>
                <div className="text-sm text-gray-300">
                  <strong>Technologies:</strong> {section.tech.join(", ")}
                </div>

                <Link href={section.link}>
                <button className="inline-flex items-center px-6 py-3 bg-white text-gray-950 font-medium rounded-lg shadow-lg hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out">
                  Know More
            </button>
                </Link>
              </motion.div>

            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
