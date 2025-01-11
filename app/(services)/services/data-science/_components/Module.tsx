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
    title: "Data Strategy & Consulting",
    description:
      "Our team helps you define a data-driven strategy to align with your business objectives.",
    logo: <CodeXml />,
    points: [
      "Data Audit & Assessment: Evaluate your existing data landscape to identify gaps and opportunities.",
      "Data Strategy Development: Design a comprehensive roadmap for data initiatives that fuel your growth.",
      "Technology & Tools Selection: Guide you in choosing the right tools, platforms, and technologies to fit your specific data needs.",
    ],
  },
  {
    id: 2,
    title: "Data Collection & Integration",
    description:
      "Our web app development services focus on creating fast, responsive, and secure web applications that offer a seamless user experience on all devices.",
    logo: <PanelsTopLeft />,
    points: [
      "Data Acquisition: Leverage APIs, web scraping, and database connections to gather structured and unstructured data.",

      "ETL Processes: Extract, Transform, and Load (ETL) data for better accessibility and usability.",

      "Data Warehousing: Build centralized repositories to store and manage your data securely.",
    ],
  },
  {
    id: 3,
    title: "Data Analytics & Business Intelligence",
    description:
      "We specialize in developing enterprise-grade applications that streamline operations, enhance productivity, and drive business growth.",
    logo: <Building2 />,
    points: [
      "   Descriptive Analytics: Understand past data trends and patterns to guide future decisions.",

      "Diagnostic Analytics: Discover the causes of specific trends and behaviors in your data.",

      "Predictive Analytics: Use machine learning and statistical models to predict future outcomes and trends.",

      "Business Intelligence (BI): Implement BI tools like Power BI and Tableau to visualize data and extract meaningful insights.",
    ],
  },
  {
    id: 4,
    title: "Machine Learning & Artificial Intelligence (AI)",
    description:
      "We provide end-to-end e-commerce app development services, enabling you to deliver a seamless shopping experience to your customers.",
    logo: <ShoppingBag />,
    points: [
      " Supervised Learning: Build models to predict specific outcomes based on labeled data.",

      "Unsupervised Learning: Detect hidden patterns and clusters in unlabeled data.",

      "Natural Language Processing (NLP): Extract insights from unstructured text data for applications such as sentiment analysis.",
    ],
  },
  {
    id: 5,
    title: "Data Visualization & Reporting",
    description:
      "Our app maintenance services are designed to keep your app consistently updated, secure, and performing at its best, ensuring a seamless experience for your users over time.",
    logo: <Wrench />,
    points: [
      "  Custom Dashboards: Design intuitive dashboards that display real-time data and key performance indicators (KPIs).",

      "Interactive Reports: Build interactive reports with dynamic elements for deep data exploration.",

      "Data Storytelling: Transform raw data into compelling narratives using visualizations that communicate insights clearly.",
    ],
  },
  {
    id: 6,
    title: "Advanced Analytics & Data Modeling",
    description:
      "Our app maintenance services are designed to keep your app consistently updated, secure, and performing at its best, ensuring a seamless experience for your users over time.",
    logo: <Wrench />,
    points: [
      "Regression & Classification Models: Build models to predict trends, customer behavior, and market shifts.",

      "Time Series Analysis: Analyze time-dependent data to forecast future events.",

      "Clustering & Segmentation: Group customers, products, or behaviors for targeted insights and strategies.",
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
    }, 3000);

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
                className={`cursor-pointer py-2 text-start transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white ${
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
