"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiMonitor, FiTrendingUp, FiSmile, FiBarChart2, FiUsers, FiGrid } from "react-icons/fi";

const advantages = [
  {
    title: "Enhanced Online Presence",
    description:
      "Stand out in the digital landscape with a professionally crafted website that captivates and engages your audience effectively.",
    icon: <FiMonitor />,
  },
  {
    title: "Increased Brand Visibility",
    description:
      "Boost brand recognition and visibility across various online platforms, attracting more potential customers to your business.",
    icon: <FiTrendingUp />,
  },
  {
    title: "Improved User Experience",
    description:
      "Provide visitors with seamless navigation and intuitive interfaces, ensuring a positive experience every time.",
    icon: <FiSmile />,
  },
  {
    title: "Higher Conversion Rates",
    description:
      "Convert more visitors into customers with strategically designed elements and compelling calls-to-action tailored to drive desired actions.",
    icon: <FiBarChart2 />,
  },
  {
    title: "Greater Accessibility",
    description:
      "Reach a wider audience and cater to diverse user needs with responsive design and accessibility features, enhancing inclusivity and user satisfaction.",
    icon: <FiUsers />,
  },
  {
    title: "Scalability and Flexibility",
    description:
      "Adapt to evolving business needs and growth opportunities effortlessly with scalable solutions and flexible architecture tailored to your requirements.",
    icon: <FiGrid />,
  },
];

const Advantage = () => {
  return (
    <div className="min-h-screen w-11/12 p-4 sm:p-6 md:p-10 mx-auto">
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h3 className="text-[28px] sm:text-[36px] md:text-[50px] font-extrabold text-darkBlue text-center md:text-left mb-6">
          Unlock the Advantages of Choosing Hustlerz
        </h3>
        <p className="text-[16px] sm:text-[18px] md:text-[20px] text-white mt-4 text-center md:text-left font-semibold leading-relaxed">
          Discover the array of benefits that come with selecting LandFree,
          empowering your business with unparalleled web solutions.
        </p>
      </motion.div>

      {/* Grid Section */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        {advantages.map((advantage, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-dark border-darkBlue border-l-2 shadow-md text-white"
          >
            <div className="text-Blue text-3xl mb-4">{advantage.icon}</div>
            <h4 className="text-xl text-darkBlue font-bold mb-2">{advantage.title}</h4>
            <p className="text-sm">{advantage.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Advantage;
