"use client";

import React from "react";
import { FiEdit, FiCode, FiSettings } from "react-icons/fi";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Design Services",
    description: "At LandFree, our design team is passionate about creating stunning",
    icon: <FiEdit className="text-blue-500 text-2xl" />,
    tags: ["UI & UX Design", "Graphic Design", "Branding", "Web Design", "Carousel Design"],
  },
  {
    id: 2,
    title: "Engineering Services",
    description: "Empowering progress through meticulous engineering services",
    icon: <FiCode className="text-blue-500 text-2xl" />,
    tags: ["Web Development", "App Development", "Node.js", "React.js", "MySQL", "Firebase"],
  },
  {
    id: 3,
    title: "Management Services",
    description: "Efficiently navigate success with our project management services",
    icon: <FiSettings className="text-blue-500 text-2xl" />,
    tags: ["Risks management", "Resource management", "Quality Control", "Project Planning"],
  },
];

const Discover = () => {
  return (
    <section className="py-12 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-start text-blue-500">
          Discover our full range of services
        </h2>
        <p className="mt-4 text-gray-400  text-start w-[60%]">
          LandFree offers a diverse array of expertly crafted services, seamlessly merging creativity and technology to deliver solutions that exceed expectations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-6 md:px-0 max-w-6xl mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-gray-600 rounded-lg p-6 shadow-lg hover:shadow-yellow-400/50 transition-shadow duration-300"
          >
            <div className="flex items-center space-x-3">
              {service.icon}
              <h3 className="text-xl font-semibold text-blue-500">{service.title}</h3>
            </div>
            <p className="mt-4 text-gray-400">{service.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {service.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-sm bg-gray-700 px-3 py-1 rounded-full text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href="/book-call"
              className="mt-6 inline-block bg-yellow-400 text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-yellow-500 transition-colors"
            >
              Book a Call &rarr;
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Discover;
