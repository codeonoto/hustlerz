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
    title: "Discovery & Research",
    description:
      "We start by understanding your business, users, and the challenges you want to solve. This phase includes in-depth research and competitor analysis.",
    link: "",
  },
  {
    id: 2,
    title: "Ideation & Conceptualization",
    description:
      "Once the research is complete, we move on to brainstorming creative solutions and developing initial design concepts. Wireframes and sketches are produced at this stage.",
    link: "",
  },
  {
    id: 3,
    title: "Design & Development",
    description:
      "Our designers create interactive prototypes and high-fidelity designs to give you a tangible view of the end product. Developers collaborate closely with designers to ensure technical feasibility.",
    link: "",
  },
  {
    id: 4,
    title: "Testing & Validation",
    description:
      "We believe in a data-driven design approach. Every design decision is validated through usability testing to ensure it meets user needs.",
    link: "",
  },
  {
    id: 5,
    title: "Launch & Optimization",
    description:
      "Once everything is finalized, we launch the product and continue to optimize based on real-world user feedback and performance data.",
    link: "",
  },
];
