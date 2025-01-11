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
    title: "Discovery & Requirement Gathering",
    description:
      "Our process begins with understanding your business goals, target audience, and project requirements. In this phase, we conduct in-depth research into the market, user needs, and competitor landscape to establish a solid foundation for a successful project.",
    link: "",
  },
  {
    id: 2,
    title: "App Strategy & Planning",
    description:
      "Once the requirements are clear, we create a detailed app development strategy. This includes selecting the right technology stack, defining user flows, and mapping out the key features of the app.",
    link: "",
  },
  {
    id: 3,
    title: "Development & Integration",
    description:
      "Our developers turn designs into fully functional apps, integrating all necessary third-party services and APIs. We use agile development practices to ensure flexibility and quick iteration.",
    link: "",
  },
  {
    id: 4,
    title: "Testing & Quality Assurance",
    description:
      "Before launch, we perform rigorous testing to guarantee seamless performance. Our quality assurance team meticulously evaluates functionality, usability, security, and cross-device compatibility, ensuring your app meets the highest standards.",
    link: "",
  },
  {
    id: 5,
    title: "Deployment & Launch",
    description:
      "Once the app passes all testing phases, we deploy it to the relevant platforms (App Store, Google Play, or web). We also offer post-launch support to ensure a smooth transition.",
    link: "",
  },
  {
    id: 6,
    title: "Post-Launch Support & Maintenance",
    description:
      "Once your app is live, our commitment continues with proactive monitoring and ongoing maintenance. We address bug fixes, implement updates, optimize performance, and introduce feature enhancements, all informed by user feedback to ensure your app evolves smoothly.",
    link: "",
  },
];
