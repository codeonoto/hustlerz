"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CodeXml, PanelsTopLeft, Building2, ShoppingBag, Wrench } from "lucide-react";

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
    title: "Custom Mobile App Development",
    description:
      "Our web app development services focus on creating fast, responsive, and secure web applications that offer a seamless user experience on all devices.",
    logo: <CodeXml />,
    points: [
      "iOS App Development: Develop native apps for the iOS platform that adhere to Apple’s guidelines.",
      "Android App Development: Create Android apps that deliver smooth experiences on all devices and screen sizes.",
      "Cross-Platform Development: Use frameworks like React Native and Flutter to build apps for both iOS and Android from a single codebase.",
    ],
  },
  {
    id: 2,
    title: "Web App Development",
    description:
      "Our web app development services focus on creating fast, responsive, and secure web applications that offer a seamless user experience on all devices.",
    logo: <PanelsTopLeft />,
    points: [
      "Progressive Web Apps (PWAs): Build apps that combine the best of both web and mobile experiences.",
      "Single-Page Applications (SPAs): Create fast and responsive SPAs using frameworks like Angular, React, and Vue.js.",
      "Custom Web Applications: Tailor web applications to meet specific business requirements, with scalability and performance in mind.",
    ],
  },
  {
    id: 3,
    title: "Enterprise App Development",
    description:
      "We specialize in developing enterprise-grade applications that streamline operations, enhance productivity, and drive business growth.",
    logo: <Building2 />,
    points: [
      "Enterprise Resource Planning (ERP) Apps: Integrate all your business processes into a single, centralized platform.",
      "Customer Relationship Management (CRM) Apps: Develop custom CRM systems that enhance customer interactions and improve sales outcomes.",
      "Workflow Automation: Create apps that automate repetitive tasks and improve operational efficiency.",
    ],
  },
  {
    id: 4,
    title: "E-commerce App Development",
    description:
      "We provide end-to-end e-commerce app development services, enabling you to deliver a seamless shopping experience to your customers.",
    logo: <ShoppingBag />,
    points: [
      "Custom E-commerce Solutions: Build tailor-made e-commerce platforms with personalized user experiences.",
      "Mobile Commerce: Enable seamless shopping on mobile with high-performance mobile commerce apps.",
      "Integration with Payment Gateways: Securely integrate various payment methods, ensuring smooth transactions for your customers.",
    ],
  },
  {
    id: 5,
    title: "App Maintenance & Support",
    description:
      "Our app maintenance services are designed to keep your app consistently updated, secure, and performing at its best, ensuring a seamless experience for your users over time.",
    logo: <Wrench />,
    points: [
      "Bug Fixing & Updates: Regular maintenance to fix bugs and update features.",
      "Performance Monitoring: Continuously monitor app performance to optimize user experience.",
      "Security Management: Regular security audits and updates to protect your app from potential threats.",
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
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row mt-2">
        {/* Left side: Section list */}
        <div className="w-full lg:w-1/3 p-4">
          <ul>
            {sections.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer py-2 text-start transition duration-300 ease-in-out hover:bg-blue-500 p-3 rounded-md hover:text-white ${
                  selectedSectionId === item.id
                    ? "text-black bg-white p-3 rounded-md font-semibold"
                    : ""
                }`}
                onClick={() => setSelectedSectionId(item.id)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Right side: Section details */}
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
                  <div key={item.id} className="bg-gray-950 p-6 rounded-xl space-y-3 shadow-xl">
                    <div className="mr-4 text-white">{item.logo}</div>
                    <div className="flex items-center mb-6">
                      <div className="flex flex-col items-start">
                        <h2 className="text-3xl sm:text-4xl font-semibold text-darkBlue">{item.title}</h2>
                        <p className="text-base sm:text-lg text-start text-gray-200 mt-2">{item.description}</p>
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
