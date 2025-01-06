"use client";

import React from "react";
import { BsGoogle } from "react-icons/bs";

const Collab = () => {
  const services = [
    {
      icon: <BsGoogle />,
      title: "Vortex",
      description: "Instant messaging on Landfree's Vortex.",
      link: "/vortex",
    },
    {
      icon: <BsGoogle />,
      title: "PixelWorks",
      description: "Communities thrive on Landfree's works.",
      link: "/pixelworks",
    },
    {
      icon: <BsGoogle />,
      title: "Athon",
      description: "Videos galore on Landfree's Athon channel.",
      link: "/athon",
    },
    {
      icon: <BsGoogle />,
      title: "Fronxe",
      description: "Inspiration awaits on Landfree's Fronxe.",
      link: "/fronxe",
    },
    {
      icon: <BsGoogle />,
      title: "TechNova",
      description: "Gaming & streaming hub on Landfree's TechNova.",
      link: "/technova",
    },
    {
      icon: <BsGoogle />,
      title: "MediaMinds",
      description: "Secure chats on Landfree's MediaMinds group.",
      link: "/mediaminds",
    },
    {
      icon: <BsGoogle />,
      title: "Devnurds",
      description: "Social networking on Landfree's Devnurds.",
      link: "/devnurds",
    },
    {
      icon: <BsGoogle />,
      title: "TopFun",
      description: "Stream favorites on Landfree's TopFun.",
      link: "/topfun",
    },
  ];

  return (
    <section className="min-h-screen w-full px-4 sm:px-6 lg:px-12 py-10 flex flex-col items-center justify-center ">
      <div className="max-w-[1200px] w-full">
        {/* Heading */}
        <h3 className="text-[36px] sm:text-[40px] md:text-[50px] font-extrabold text-darkBlue text-center md:text-left mb-6">
          Building Strong Collaborations
        </h3>
        <p className="text-[16px] sm:text-[18px] md:text-[20px] text-white mt-4 text-center font-medium md:text-left leading-relaxed">
          Discover the meaningful relationships we cultivate with industry
          leaders, technology providers, and service partners to deliver
          comprehensive solutions.
        </p>

        {/* Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-2 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 text-white flex flex-col hover:shadow-xl transition-shadow duration-300"
            >
              <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="bg-gray-900 p-3 rounded-lg text-blue-500">
                  {service.icon}
                </span>
                {service.title}
              </h4>
              <p className="text-sm text-gray-400 mb-4">
                {service.description}
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 rounded-lg flex items-center justify-center transition-colors duration-300">
                Visit Website
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collab;
