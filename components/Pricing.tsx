"use client";

import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "620",
      description: "Starter-level package for starting businesses",
      features: [
        "Responsive Website Design",
        "Advance SEO Optimization",
        "24/7 Dedicated Support Team",
        "Weekly Analytics Reports",
        "Real-time Performance Monitoring",
        "Advanced Security Measures",
      ],
    },
    {
      name: "Basic",
      price: "2,000",
      description: "Basic Ideal package for growing businesses",
      features: [
        "Responsive Website Design",
        "Advance SEO Optimization",
        "24/7 Dedicated Support Team",
        "Weekly Analytics Reports",
        "Real-time Performance Monitoring",
        "Advanced Security Measures",
      ],
    },
    {
      name: "Pro",
      price: "5,000",
      description: "Advanced package for expanded businesses",
      features: [
        "Responsive Website Design",
        "Advance SEO Optimization",
        "24/7 Dedicated Support Team",
        "Weekly Analytics Reports",
        "Real-time Performance Monitoring",
        "Advanced Security Measures",
      ],
    },
    {
      name: "Enterprise",
      price: "10,000",
      description: "Tailored solutions for large-scale businesses",
      features: [
        "Responsive Website Design",
        "Advance SEO Optimization",
        "24/7 Dedicated Support Team",
        "Weekly Analytics Reports",
        "Real-time Performance Monitoring",
        "Advanced Security Measures",
      ],
    },
  ];

  return (
    <div className="min-h-screen w-full py-16 px-6 flex items-center justify-center ">
      <div className="max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-darkBlue ">
            Service Subscription Pricing
          </h3>
          <p className="text-lg sm:text-xl text-white mt-4">
            Choose from our flexible subscription pricing plans tailored to your needs, ensuring cost-effective access to our premium services and support.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-800 rounded-lg p-8 shadow-lg ${
                plan.name === "Pro" ? "border-4 border-darkBlue" : "border border-gray-700"
              }`}
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-lg text-gray-400 mb-4">{plan.description}</p>
              <p className="text-4xl font-bold text-white mb-6">
                ${plan.price}
                <span className="text-lg font-medium text-gray-400">/month</span>
              </p>
              <ul className="list-none space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <FaCheckCircle className="text-darkBlue mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full bg-darkBlue hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                Subscribe Now
              </button>
              {plan.name === "Pro" && (
                <div className="absolute top-4 right-4 bg-darkBlue text-white text-xs px-3 py-1 rounded-full uppercase">
                  Most Popular
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
