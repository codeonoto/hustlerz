"use client";

import React, { useState } from "react";
import {
  FaAws,
  FaCss3,
  FaFileContract,
  FaHtml5,
  FaNode,
  FaPython,
  FaReact,
  FaSwift,
} from "react-icons/fa";
import { FaFlutter, FaR } from "react-icons/fa6";
import {
  SiGooglecloud,
  SiKeras,
  SiPytorch,
  SiScikitlearn,
  SiTensorflow,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { AiOutlineJavaScript } from "react-icons/ai";
import { DiDjango, DiMysql, DiHeroku } from "react-icons/di";
import { SiSpring, SiExpress, SiMongodb } from "react-icons/si";
import { BiLogoPostgresql, BiLogoGoogleCloud } from "react-icons/bi";
import { IoLogoFirebase, IoLogoTableau } from "react-icons/io5";
import { FaFileExcel } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

interface Technology {
  name: string;
  icon: JSX.Element;
}

const Tech: React.FC = () => {
  const techCategories: Record<string, Technology[]> = {
    "Data Analytics": [
      { name: "Python", icon: <FaPython /> },
      { name: "R", icon: <FaR /> },
      { name: "SQL", icon: <GrMysql /> },
      { name: "Excel", icon: <FaFileExcel /> },
    ],
    "Machine Learning": [
      { name: "Tensor Flow", icon: <SiTensorflow /> },
      { name: "Keras", icon: <SiKeras /> },
      { name: "Scikit-learn", icon: <SiScikitlearn /> },
      { name: "PyTorch", icon: <SiPytorch /> },
    ],
    Visualization: [
      { name: "Power BI", icon: <FaFileContract /> },
      { name: "Tableau", icon: <IoLogoTableau /> },
    ],
    "Cloud Platforms": [
      { name: "AWS", icon: <FaAws /> },
      { name: "Azure", icon: <VscAzure /> },
      { name: "Google Cloud", icon: <SiGooglecloud /> },
    ],
  };

  const [activeCategory, setActiveCategory] = useState<string>("Data Analytics");

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      {/* Category Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
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
      <div className="flex flex-wrap justify-center gap-6">
        {techCategories[activeCategory].map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md hover:shadow-lg w-[calc(50%-0.75rem)] sm:w-[calc(25%-0.75rem)]"
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
