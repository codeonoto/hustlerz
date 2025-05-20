"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BsFillBrushFill } from "react-icons/bs";

import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
 
const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];
 
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
 
const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};
 

const services = [
  {
    title: "Design Services",
    description: "Our design team creates stunning visuals.",
    tags: [
      "UI & UX Design",
      "Graphic Design",
      "Branding",
      "Web Design",
      "Carousel Design",
    ],
  },
  {
    title: "Engineering Services",
    description: "Innovative solutions for engineering projects.",
    tags: ["Mechanical Design", "Civil Engineering", "Electrical Systems"],
  },
  {
    title: "Cloud Services",
    description: "Scalable and secure cloud solutions.",
    tags: [
      "Cloud Hosting",
      "Data Storage",
      "Cloud Security",
      "Infrastructure Setup",
    ],
  },
];

const textVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const gridVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const Testimonial = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <div className="min-h-screen w-full p-6 flex flex-col items-center justify-center">
      <div className="max-w-7xl w-full" ref={sectionRef}>
        {/* Heading Section */}
        <motion.h2
          className="text-[36px] sm:text-[40px] md:text-[50px] font-extrabold text-darkBlue text-center md:text-left mb-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={textVariants}
        >
          What our client say about us
        </motion.h2>
        <motion.p
          className="text-[18px] sm:text-[20px] md:text-[24px] text-Blue mt-4 text-center font-semibold md:text-left leading-relaxed"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={textVariants}
        >
          At LandFree, we take pride in delivering exceptional digital products
          and services that drive success for our clients. Here's what some of
          our clients say.
        </motion.p>

        <div className=" flex h-[500px] w-full flex-col items-center justify-center md:overflow-hidden   ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
      </div>
    </div>
  );
};

export default Testimonial;
