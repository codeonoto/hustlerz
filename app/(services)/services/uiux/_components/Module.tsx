"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CodeXml } from "lucide-react";
import { PanelsTopLeft } from "lucide-react";
import { Building2 } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { Wrench } from "lucide-react";

interface Section {
  id: number;
  title: string;
  description: string;
  logo: any;
  points: string[];
}

const sections: Section[] = [
  {
    id: 1,
    title: "UI/UX Research Strategy",
    description:
      "Understanding your users and business needs is the foundation of our process. We dive deep into user behavior and market trends to create designs that resonate with your target audience.",
    logo: <CodeXml />,
    points: [
      "      User Research: We conduct surveys, interviews, and usability testing to understand user needs and pain points.",

      "Competitor Analysis: Gain insights into the competition to identify opportunities for differentiation.",

      "Personas & Scenarios: Develop user personas and scenarios to guide the design process.",
    ],
  },
  {
    id: 2,
    title: "User Interface (UI) Design",
    description:
      "Our UI design services focus on creating visually appealing, intuitive interfaces that provide seamless interaction with your product.",
    logo: <PanelsTopLeft />,
    points: [
      "      Wireframing: Develop wireframes that map out the structure of each screen.",

      "      Prototyping: Create interactive prototypes to test and refine user flows.",

      "      Visual Design: Implement clean, modern design aesthetics to enhance usability and engagement.",
    ],
  },
  {
    id: 3,
    title: "User Experience (UX) Design",
    description:
      "Delivering an exceptional experience is key to user retention. We design solutions that keep the user's journey smooth, simple, and delightful.",
    logo: <Building2 />,
    points: [
      "      Information Architecture: Structuring content effectively for easy navigation.",

      "User Flows & Journey Mapping: Define and optimize the journey users take from start to finish.",

      "Usability Testing: Continuous testing and feedback integration to refine designs.",
    ],
  },
  {
    id: 4,
    title: "Interactive Design",
    description:
      "Create engaging and interactive elements that respond intuitively to user actions, delivering an interactive experience that enhances the overall user journey.",
    logo: <ShoppingBag />,
    points: [
      "      Micro-interactions: Small, responsive animations that guide users and enhance usability.",

      "Motion Design: Use animations and transitions to enrich the experience without overwhelming the user.",

      "Responsive Design: Ensure designs are adaptable and functional across all devices and screen sizes.",
    ],
  },
  {
    id: 5,
    title: "Mobile App Design",
    description:
      "Our team specializes in designing intuitive and high-performance mobile app experiences.",
    logo: <Wrench />,
    points: [
      "Platform-Specific Design: Tailored designs for iOS and Android to match platform guidelines.",

      "App Navigation Design: Simple and intuitive app navigation flows for a frictionless experience.",

      "Touch Gestures: Optimize designs for mobile interactions like swiping, tapping, and pinching.",
    ],
  },
  {
    id: 6,
    title: "Website Design",
    description:
      "From concept to launch, we deliver fully responsive, user-friendly websites that attract and retain users.",
    logo: <Wrench />,
    points: [
      "Responsive Web Design: Create designs that perform flawlessly on any device or browser.",

      "Conversion Optimization: Focus on designs that convert visitors into customers.",

      "Performance Optimization: Enhance site loading speed and overall user experience.",
    ],
  },
];

const Module = () => {
  const [selectedSectionId, setSelectedSectionId] = useState<number>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedSectionId((prevId) => {
        return prevId === sections.length ? 1 : prevId + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="flex flex-col lg:flex-row mt-2">
        {/* Left side */}
        <div className="w-full lg:w-1/3 p-4">
          <ul>
            {sections.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer py-2 text-start transition duration-300 ease-in-out hover:bg-blue-500 p-3 rounded-md hover:text-white ${
                  selectedSectionId === item.id
                    ? " text-black bg-white p-3 rounded-md font-semibold"
                    : ""
                }`}
                onClick={() => setSelectedSectionId(item.id)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Right side */}
        <div className="w-full lg:w-2/3 p-4">
          {selectedSectionId && (
            <motion.div
              key={selectedSectionId}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0, x: -50 }}
              className="mb-6"
            >
              {sections
                .filter((item) => item.id === selectedSectionId)
                .map((item) => (
                  <div
                    key={item.id}
                    className="bg-gray-950 p-6 rounded-xl space-y-3 shadow-xl"
                  >
                    <div className="mr-4 text-white">{item.logo}</div>
                    <div className="flex items-center mb-6">
                      <div className="flex flex-col items-start">
                        <h2 className="text-3xl sm:text-4xl font-semibold text-darkBlue">
                          {item.title}
                        </h2>
                        <p className="text-base sm:text-lg text-start text-gray-200 mt-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div>
                      <ul className="list-disc pl-6 text-gray-100">
                        {item.points.map((point, index) => (
                          <li key={index} className="text-gray-200 text-start">
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Module;
