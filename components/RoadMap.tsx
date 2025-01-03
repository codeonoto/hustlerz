'use client';
import React from 'react';
import { Timeline } from "@/components/ui/timeline";
import Image from 'next/image';
import { FaSitemap } from "react-icons/fa";

const RoadMap = () => {
  return (
    <div className="relative px-4 md:px-8 py-16 text-white overflow-hidden font-space">
      {/* Description */}
      <p className="mt-3 font-light text-base sm:text-lg w-11/12 sm:w-2/3 md:w-1/2 text-white text-center mx-auto">
        It provides a clear path forward, helping align efforts and stay on track towards achieving our vision.
      </p>

      {/* Timeline */}
      <div className="relative z-10 mt-6">
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
      <div>
        <p className="text-neutral-800 leading-6 dark:text-neutral-200 text-xs md:text-2xl font-light mb-8">
          Connecting with you to understand your vision, set objectives, and create a tailored strategy.
        </p>
      </div>
    ),
  },
  {
    title: "User-Centric Design & Development",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-2xl font-light mb-8">
          Building intuitive, user-friendly solutions that prioritize your audience’s needs and experience.
        </p>
      </div>
    ),
  },
  {
    title: "Testing, Optimization & User Feedback",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-2xl font-light mb-4">
          Conducting thorough testing and gathering user feedback to fine-tune for peak performance.
        </p>
      </div>
    ),
  },
  {
    title: "Launch, Delivery & User Connect",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-2xl font-light mb-4">
          On-time deployment with clear communication and support to engage users from day one.
        </p>
      </div>
    ),
  },
  {
    title: "Ongoing Support, Growth & Engagement",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-2xl font-light mb-4">
          Providing continuous support and enhancements, helping you stay connected with your users for sustained growth and loyalty.
        </p>
      </div>
    ),
  },
];

export default RoadMap;
