"use client";

import React, { useState } from "react";
import {
  FaAws,
  FaCss3,
  FaHtml5,
  FaNode,
  FaReact,
  FaSwift,
} from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { TbBrandKotlin } from "react-icons/tb";
import { AiOutlineJavaScript } from "react-icons/ai";
import { DiDjango, DiMysql, DiHeroku } from "react-icons/di";
import { SiSpring, SiExpress, SiMongodb } from "react-icons/si";
import { BiLogoPostgresql, BiLogoGoogleCloud } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { VscAzure } from "react-icons/vsc";

interface Technology {
  name: string;
  icon: JSX.Element;
}

const Tech: React.FC = () => {
  const techCategories: Record<string, Technology[]> = {
    "Data Analytics": [
      { name: "Swift", icon: <FaSwift /> },
      { name: "React Native", icon: <FaReact /> },
      { name: "Kotlin", icon: <TbBrandKotlin /> },
      { name: "Flutter", icon: <FaFlutter /> },
    ],
    "Machine Learning": [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3 /> },
      { name: "JavaScript", icon: <AiOutlineJavaScript /> },
      { name: "React", icon: <FaReact /> },
    ],
    Visualization: [
      { name: "Node.js", icon: <FaNode /> },
      { name: "Django", icon: <DiDjango /> },
      { name: "Spring", icon: <SiSpring /> },
      { name: "Express", icon: <SiExpress /> },
    ],
    "Cloud Platforms": [
      { name: "MySQL", icon: <DiMysql /> },
      { name: "PostgreSQL", icon: <BiLogoPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Firebase", icon: <IoLogoFirebase /> },
    ],
  };

  const [activeCategory, setActiveCategory] = useState<string>("Data Analytics");

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-8">
      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {Object.keys(techCategories).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition duration-200 shadow-md hover:shadow-lg ${
              activeCategory === category
                ? "bg-darkBlue text-black"
                : "text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Technology Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {techCategories[activeCategory].map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md hover:shadow-lg "
          >
            <div className="text-4xl mb-2">{tech.icon}</div>
            <div className="text-sm font-medium text-gray-700">{tech.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
