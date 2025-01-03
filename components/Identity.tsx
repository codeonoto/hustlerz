"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import { BsGoogle, BsAmazon, BsMicrosoft, BsApple, BsMeta } from "react-icons/bs";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import identity from "@/app/image/identity.svg";
import Image from "next/image";

const reviews = [
  { name: "Google", img: <BsGoogle className="text-4xl" /> },
  { name: "Amazon", img: <BsAmazon className="text-4xl" /> },
  { name: "Microsoft", img: <BsMicrosoft className="text-4xl" /> },
  { name: "Apple", img: <BsApple className="text-4xl" /> },
  { name: "Meta", img: <BsMeta className="text-4xl" /> },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = memo(({ img, name }: { img: React.ReactNode; name: string }) => (
  <figure
    className={cn(
      "relative w-32 sm:w-40 cursor-pointer rounded-xl border p-2 flex items-center justify-center",
      "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
      "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
    )}
    aria-label={`Client ${name}`}
  >
    <div className="flex items-center gap-2">
      <div className="rounded-full p-2">{img}</div>
      <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
    </div>
  </figure>
));

const Identity = () => {
  return (
    <div className="min-h-screen w-full p-4 md:p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="hidden sm:flex justify-center"
        >
          <Image
            src={identity}
            alt="Discover Our Identity"
            width={500}
            height={500}
            className="max-w-full h-auto"
            priority
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-darkBlue mb-6 text-center sm:text-left">
            Discover Our Identity
          </h3>
          <p className="text-lg sm:text-xl text-white font-semibold leading-relaxed mb-6 text-center sm:text-left">
            At Hustlerz, we are more than just a web development agency. We are a passionate team of creative minds, tech enthusiasts, and strategic thinkers dedicated to helping businesses thrive in the digital realm.
          </p>
          <div className="flex justify-center sm:justify-start gap-4">
            <button className="bg-darkBlue text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-all">
              Contact Us
            </button>
            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-all">
              View Project
            </button>
          </div>

           {/* Clients Section */}
      <div className="mt-12">
        <p className="text-center text-sm font-medium bg-slate-900 text-white px-4 py-1 rounded-full w-fit mx-auto uppercase">
          Our Clients
        </p>
        <div className="mt-6 rounded-lg">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
        </div>
      </div>
        </motion.div>
      </div>


      {/* Achievements Section */}
      <div className="mt-16 flex flex-wrap justify-center gap-8">
        {[
          { value: "2024", label: "Year Founded" },
          { value: "10+", label: "Projects" },
          { value: "50+", label: "Clients Served" },
          { value: "200+", label: "Team Members" },
        ].map((achievement, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-white w-40"
          >
            <p className="text-3xl font-semibold">{achievement.value}</p>
            <p className="text-sm text-gray-400">{achievement.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Identity;
