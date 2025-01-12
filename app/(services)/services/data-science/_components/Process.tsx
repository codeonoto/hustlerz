"use client";
import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const Process = () => {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
};

export default Process;

export const projects = [
  {
    id: 1,
    title: "Discovery & Requirement Analysis",
    description:
      "We begin by understanding your business challenges, objectives, and data environment. This allows us to define the best approach for your unique needs.",
    link: "",
  },
  {
    id: 2,
    title: "Data Preparation & Cleansing",
    description:
      "We clean, transform, and prepare your data, ensuring its quality and integrity. This step ensures that the data is usable for analytics and modeling.",
    link: "",
  },
  {
    id: 3,
    title: "Model Development",
    description:
      "We use statistical models, machine learning algorithms, and data mining techniques to develop models that predict outcomes and offer actionable insights.",
    link: "",
  },
  {
    id: 4,
    title: "Validation & Testing",
    description:
      "Before deployment, our models undergo rigorous testing and validation to ensure accuracy and reliability. We make adjustments based on real-world data and feedback.",
    link: "",
  },
  {
    id: 5,
    title: "Deployment & Monitoring",
    description:
      "Once validated, we deploy the models and implement dashboards or reporting tools. We also continuously monitor model performance to ensure that it meets business objectives.",
    link: "",
  },
  {
    id: 6,
    title: "Optimization & Continuous Improvement",
    description:
      "Data science is an ongoing process. We provide continuous updates and model refinements to ensure that your business stays ahead of the competition.",
    link: "",
  },
];
