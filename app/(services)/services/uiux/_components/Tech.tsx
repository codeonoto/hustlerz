"use client";

import React, { useState } from "react";
import {
  FaAws,
  FaCss3,
  FaFigma,
  FaHtml5,
  FaInvision,
  FaNode,
  FaReact,
  FaSketch,
  FaSlack,
  FaSwift,
  FaTrello,
  FaVuejs,
} from "react-icons/fa";
import { FaA, FaFlutter } from "react-icons/fa6";
import { TbBrandKotlin } from "react-icons/tb";
import { AiOutlineJavaScript } from "react-icons/ai";
import { DiDjango, DiMysql, DiHeroku } from "react-icons/di";
import {
  SiSpring,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiMiro,
  SiFramer,
  SiMarvelapp,
  SiAdobexd,
} from "react-icons/si";
import { BiLogoPostgresql, BiLogoGoogleCloud } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { VscAzure } from "react-icons/vsc";

interface Technology {
  name: string;
  icon: JSX.Element;
}

const Tech: React.FC = () => {
  const techCategories: Record<string, Technology[]> = {
    "Design Tools": [
      { name: "Figma", icon: <FaFigma /> },
      { name: "Adobe XD", icon: <SiAdobexd /> },
      { name: "Sketch", icon: <FaSketch /> },
      { name: "InVision", icon: <FaInvision /> },
    ],
    "Prototyping Tools": [
      { name: "Axure RP", icon: <FaA/>  },
      { name: "Marvel App", icon: <SiMarvelapp /> },
      { name: "Framer", icon: <SiFramer /> },
    ],
    "Collaboration Tools": [
      { name: "Miro", icon: <SiMiro /> },
      { name: "Trello", icon: <FaTrello /> },
      { name: "Slack", icon: <FaSlack /> },
    ],
    "Development Tools": [
      { name: "React", icon: <FaReact />  },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Vue.js", icon: <FaVuejs /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3 /> },
    ],
  };

  const [activeCategory, setActiveCategory] = useState<string>("Design Tools");

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
