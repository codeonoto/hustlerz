"use client";
import React from "react";
import { motion } from "framer-motion";
import feature from "@/app/image/feature.svg";
import process from "@/app/image/process.svg";
import Image from "next/image";
import Advantage from "./Advantage";

const sharedContainerStyles = "min-h-screen p-4 sm:p-6 md:p-10 mx-auto flex items-center justify-center";
const sharedGridStyles = "grid grid-cols-1 md:grid-cols-2 gap-8 items-center";

const Feature = () => {
  return (
    <>
      <div className={sharedContainerStyles}>
        <div className={sharedGridStyles}>
          {/* Text Content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium text-white bg-slate-900 inline-block px-2 py-1 rounded-3xl uppercase">
              Our Features
            </p>
            <h3 className="text-[28px] sm:text-[36px] md:text-[50px] font-extrabold text-darkBlue text-center md:text-left mb-6">
              What Sets Husterz Apart
            </h3>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] text-white mt-4 text-center md:text-left font-semibold leading-relaxed">
              Explore the exceptional features that make Husterz your ultimate
              web development choice.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {["Responsive and Mobile-First Design", "Seamless Content Management Systems", "Interactive Web Applications Solutions", "Ongoing Maintenance and Support"].map((item, index) => (
                <div key={index} className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg">
                  <div className="bg-darkBlue text-black p-2 rounded-full">
                    <span className="text-lg font-bold">{index + 1}</span>
                  </div>
                  <p className="text-white">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-400 border-t-2 pt-2 mt-6">
              We promise you, every single penny will be worth it.
            </p>
            <button className="mt-6 bg-darkBlue text-black px-6 py-3 rounded-lg font-medium hover:bg-white transition duration-300">
              Contact Us
            </button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            <Image
              src={feature}
              alt="Feature"
              width={600}
              height={600}
              className="max-w-full h-auto"
            />
          </motion.div>
        </div>
      </div>

      <div className={sharedContainerStyles}>
        <div className={sharedGridStyles}>
          {/* Image */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="md:flex hidden justify-center md:justify-end"
          >
            <Image
              src={process}
              alt="Process"
              width={600}
              height={600}
              className="max-w-full h-auto"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-[28px] sm:text-[36px] md:text-[50px] font-extrabold text-darkBlue text-center md:text-left mb-6">
              What’s Different in Our Process
            </h3>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] text-white mt-4 text-center md:text-left font-semibold leading-relaxed">
              Explore the exceptional features that make LandFree your ultimate
              web development choice
            </p>

            <div className="flex gap-3">
              <button className="mt-6 bg-darkBlue text-black px-6 py-3 rounded-lg font-medium hover:bg-white transition duration-300">
                Contact Us
              </button>
              <button className="mt-6 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition duration-300">
                View Project
              </button>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {[
                { title: "Discovery Phase", description: "Understand client goals and project requirements" },
                { title: "Planning & Strategy", description: "Develop a comprehensive roadmap and project plan" },
                { title: "Design Prototyping", description: "Create visual mockups for the client approval" },
                { title: "Client Collaboration", description: "Regular communication and feedback loops" },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg">
                  <div className="bg-darkBlue text-black p-2 rounded-full">
                    <span className="text-lg font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <p className="text-white font-bold">{item.title}</p>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <Advantage />
    </>
  );
};

export default Feature;
