"use client "
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
      "Unlock the potential of your business with our tailored app development solutions. From innovative mobile apps to seamless user experiences, we create applications that engage users and drive growth. Let us transform your ideas into reality.",
    tech: [
      "React Native",
      "Mobile Testing",
      "Cross-Platform Development",
      "Hybrid Apps",
      "Mobile App Testing",
      "Agile Development",
      "Mobile App",
    ],
  },
  {
    id: "data-science",
    img: img2,
    title: "Data Science",
    link: "services/data-science",
    description:
      "Unlock the potential of your business with our comprehensive data science solutions. From advanced analytics to predictive modeling, we empower organizations to make data-driven decisions that enhance performance and drive innovation. Let us transform your data into actionable insights.",
    tech: [
      "Python",
      "Machine Learning",
      "Data Visualization",
      "Predictive Analytics",
      "Machine Learning Solutions",
      "Big Data Solutions",
      "Data Warehousing & Management",
    ],
  },
  {
    id: "web-development",
    img: img3,
    title: "Web Development",
    link: "services/web-development",
    description:
      "Design and develop high-performance, visually stunning, and user-friendly websites that not only reflect the unique identity of your brand but also provide seamless navigation and functionality. Our web development solutions ensure optimal performance, faster load times, and mobile responsiveness, creating an exceptional online experience for your audience. By combining cutting-edge technologies and creative design, we help you establish a strong digital presence that aligns with your business objectives and drives measurable growth.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Next.js",
      "Javascript",
      "Typescript",
      "Sql",
      "FireBase",
    ],
  },
  {
    id: "ui-ux",
    img: img4,
    title: "UI/UX",
    link: "services/uiux",
    description:
      "Transform your digital presence with our expert UI/UX design services. We create intuitive and engaging interfaces that not only enhance user satisfaction but also drive conversion. Let us help you craft seamless user journeys that captivate and retain your audience.",
    tech: [
      "Figma",
      "Sketch",
      "Adobe XD",
      "User Research & Personas",
      "Wireframing & Prototyping",
      "Visual Design & Branding",
      "Usability Testing & Feedback",
      "Responsive & Adoptive Design",
    ],
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
        className="sticky top-0 lg:h-screen w-full lg:w-1/4 text-white shadow-md z-10 flex flex-row lg:flex-col border-r-2 bg-gray border-darkBlue justify-between p-6"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ul className="flex lg:flex-col lg:space-y-4 space-x-4 lg:space-x-0">
          {sections.map((section) => (
            <li
              key={section.id}
              onClick={() => handleScrollToSection(section.id)}
              className={`cursor-pointer p-3 rounded-md transition-all  duration-300 ${
                activeSection === section.id
                  ? "bg-darkBlue text-black font-semibold scale-105"
                  : "hover:bg-darkBlue text-white hover:scale-105 hover:text-black"
              }`}
            >
              {section.title}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Main Content */}
     <div className="flex-1 ">
  {sections.map((section, index) => (
    <section
      id={section.id}
      key={section.id}
      ref={(el) => (sectionRefs.current[section.id] = el)}
      className="relative h-[100vh] flex items-center justify-center px-4 py-6 sm:px-8  overflow-hidden"
    >
      {/* Background Image */}
      <div
        ref={(el) => (parallaxRefs.current[index] = el!)}
        className="absolute inset-0 flex items-center justify-center opacity-10"
      >
        <Image
          src={section.img}
          alt={section.title}
          className="w-[500px] h-[500px] object-contain"
        />
      </div>

      {/* Content Box */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-white max-w-3xl w-full bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-center sm:text-left">
          {section.title}
        </h2>
        <p className="text-base sm:text-lg lg:text-xl mb-6 text-center sm:text-left text-gray-300">
          {section.description}
        </p>
        <div className="flex flex-wrap gap-3 mb-6 justify-center sm:justify-start">
          {section.tech.map((techItem) => (
            <span
              key={techItem}
              className="px-4 py-2 bg-darkBlue text-white border border-white/10 rounded-full text-sm font-medium transition duration-300 hover:bg-white hover:text-black"
            >
              {techItem}
            </span>
          ))}
        </div>

        <div className="text-center sm:text-left">
          <Link href={section.link}>
            <button className="inline-flex items-center px-6 py-3 bg-white text-gray-950 font-medium rounded-lg shadow-lg hover:bg-darkBlue hover:text-white transition duration-300 ease-in-out">
              Know More
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  ))}
</div>

    </div>
  );
};

export default OurServices;