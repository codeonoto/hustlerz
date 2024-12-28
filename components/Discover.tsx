"use client";
import React from "react";
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

const Discover = () => {
  return (
    <div className="min-h-screen w-full p-6 flex flex-col items-center justify-center ">
      <div className="max-w-7xl w-full">
        {/* Heading Section */}
        <h2 className="text-[36px] sm:text-[40px] md:text-[50px] font-extrabold text-blue-500 text-center md:text-left mb-6">
          Discover Our Full Range of Services
        </h2>
        <p className="text-[18px] sm:text-[20px] md:text-[24px] text-gray-700 mt-4 text-center font-semibold md:text-left leading-relaxed">
          LandFree offers a diverse array of expertly crafted services,
          seamlessly merging creativity and technology to deliver solutions that
          exceed expectations.
        </p>

        {/* Service Cards */}
        <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className=" bg-slate-950 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
            >
              <div className="flex items-center space-x-4 mb-4">
                <BsFillBrushFill className="text-blue-500 text-3xl" />
                <h3 className="text-[26px] font-bold text-blue-500">{service.title}</h3>
              </div>
              <p className="text-gray-400 mb-6 text-[27px] leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {service.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-gray-300 text-[18px] px-3 py-1 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button className="text-blue-500 text-sm w-full text-[24px] bg-gray-900 p-3 rounded-xl  hover:text-white flex items-center justify-center gap-2 font-medium">
                Book a Call <span>↗</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;
