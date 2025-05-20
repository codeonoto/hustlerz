"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BsFillBrushFill } from "react-icons/bs";

const services = [
  {
    title: "Design Services",
    description: "Our design team creates stunning visuals.",
    tags: ["UI & UX Design", "Graphic Design", "Branding", "Web Design", "Carousel Design"],
  },
  {
    title: "Engineering Services",
    description: "Innovative solutions for engineering projects.",
    tags: ["Mechanical Design", "Civil Engineering", "Electrical Systems"],
  },
  {
    title: "Cloud Services",
    description: "Scalable and secure cloud solutions.",
    tags: ["Cloud Hosting", "Data Storage", "Cloud Security", "Infrastructure Setup"],
  },
];

const textVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const gridVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut", staggerChildren: 0.2 } },
};

const Discover = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <div className="min-h-screen w-full p-6 flex flex-col items-center justify-center">
      <div className="max-w-7xl w-full" ref={sectionRef}>
        {/* Heading Section */}
        <motion.h2
          className="text-[36px] sm:text-[40px] md:text-[50px] font-extrabold text-darkBlue text-center md:text-left mb-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={textVariants}
        >
          Discover Our Full Range of Services
        </motion.h2>
        <motion.p
          className="text-[18px] sm:text-[20px] md:text-[24px] text-white mt-4 text-center font-semibold md:text-left leading-relaxed"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={textVariants}
        >
          Hustlerz offers a diverse array of expertly crafted services, seamlessly merging creativity
          and technology to deliver solutions that exceed expectations.
        </motion.p>

        {/* Service Cards */}
        <motion.div
          className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={gridVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-slate-950 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
              variants={gridVariants}
            >
              <div className="flex items-center space-x-4 mb-4">
                <BsFillBrushFill className="text-darkBlue text-3xl" />
                <h3 className="text-[26px] font-bold text-darkBlue">{service.title}</h3>
              </div>
              <p className="text-gray-400 mb-6 text-[27px] leading-relaxed">{service.description}</p>
              <div className="flex flex-wrap border-t-2 border-b-2 p-3 gap-2 mb-6">
                {service.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-gray-300 text-[18px] px-3 py-1 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button className="text-Blue text-sm w-full text-[24px] bg-gray-900 p-3 rounded-xl  hover:text-white flex items-center justify-center gap-2 font-medium">
                Book a Call <span>↗</span>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Discover;
