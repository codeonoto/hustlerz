"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { FaSitemap } from "react-icons/fa";

const RoadMap = () => {
  return (
    <div className="relative px-4 md:px-8 py-16 text-white overflow-hidden font-space ">
      {/* Header */}
      <div className="text-center">
        <FaSitemap className="text-4xl md:text-6xl text-darkBlue mx-auto" />
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mt-4">
          Roadmap to Success
        </h2>
      </div>

      {/* Description */}
      <p className="mt-6 font-light text-sm sm:text-lg md:text-xl w-full sm:w-4/5 lg:w-2/3 text-white text-center mx-auto">
        It provides a clear path forward, helping align efforts and stay on
        track towards achieving our vision.
      </p>

      {/* Timeline */}
      <div className="relative z-10 mt-10">
        <Timeline data={data} />
      </div>
    </div>
  );
};

// Timeline Data
const data = [
  {
    title: "Discovery & Planning",
    content: (
      <p className="text-neutral-800 dark:text-neutral-200 text-xs sm:text-sm md:text-base font-light mb-8">
        Connecting with you to understand your vision, set objectives, and
        create a tailored strategy.
      </p>
    ),
  },
  {
    title: "User-Centric Design & Development",
    content: (
      <p className="text-neutral-800 dark:text-neutral-200 text-xs sm:text-sm md:text-base font-light mb-8">
        Building intuitive, user-friendly solutions that prioritize your
        audience’s needs and experience.
      </p>
    ),
  },
  {
    title: "Testing, Optimization & User Feedback",
    content: (
      <p className="text-neutral-800 dark:text-neutral-200 text-xs sm:text-sm md:text-base font-light mb-4">
        Conducting thorough testing and gathering user feedback to fine-tune
        for peak performance.
      </p>
    ),
  },
  {
    title: "Launch, Delivery & User Connect",
    content: (
      <p className="text-neutral-800 dark:text-neutral-200 text-xs sm:text-sm md:text-base font-light mb-4">
        On-time deployment with clear communication and support to engage users
        from day one.
      </p>
    ),
  },
  {
    title: "Ongoing Support, Growth & Engagement",
    content: (
      <p className="text-neutral-800 dark:text-neutral-200 text-xs sm:text-sm md:text-base font-light mb-4">
        Providing continuous support and enhancements, helping you stay
        connected with your users for sustained growth and loyalty.
      </p>
    ),
  },
];

export default RoadMap;
