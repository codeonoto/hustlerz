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
    <section className="min-h-screen w-full p-6 flex flex-col items-center justify-center">
      <div className="max-w-7xl w-full">
        {/* Heading */}
        <h3 className="text-[28px] sm:text-[36px] md:text-[44px] font-extrabold text-darkBlue text-center md:text-left  mb-6">
          Building Strong Collaborations
        </h3>
        <p className="text-[16px] sm:text-[18px] md:text-[20px] text-white mt-4 text-center font-medium md:text-left leading-relaxed">
          Discover the meaningful relationships we cultivate with industry
          leaders, technology providers, and service partners to deliver
          comprehensive solutions.
        </p>

        {/* Services */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 text-white flex flex-col "
            >
              <h4 className="text-lg font-semibold mb-2 flex items-center gap-2"><span className="bg-gray-900 p-3 rounded-lg text-darkBlue">{service.icon}</span>{service.title}</h4>
              <p className="text-sm mb-4">{service.description}</p>
              <button className="text-Blue text-sm w-full text-[16px] bg-gray-900 p-3 rounded-xl  hover:text-white flex items-center justify-center gap-2 font-medium">
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
