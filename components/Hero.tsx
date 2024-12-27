"use client";
import React from "react";
import Ripple from "@/components/ui/ripple";
import RetroGrid from "@/components/ui/retro-grid";
import { CgArrowRight } from "react-icons/cg";
import logo2 from "@/app/image/logo2.png";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  const headlineVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const subheadingVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" } },
  };

  const buttonVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="relative h-[80vh] bg-black text-white">
      {/* Ripple and Retro Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        <RetroGrid />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-8 px-4 md:px-8">
        <Ripple />

        {/* Logo Section */}
        <div className="flex items-center   space-x-2">
          <Image
            src={logo2}
            alt="Logo"
            className="h-[5rem] mt-[3rem] md:mt-[4rem] w-auto md:h-[6rem]"
            priority
          />
        </div>

        {/* Headline */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={headlineVariants}
          className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight"
        >
          Empowering Your Vision <br /> With Hustlerz.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={subheadingVariants}
          className="text-gray-400 max-w-xl md:max-w-2xl text-sm md:text-base"
        >
          Empowering Your Vision, With Hustlerz conveys a commitment to helping
          ambitious individuals or teams turn their goals into reality.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
          className="flex flex-wrap justify-center space-x-4"
        >
          <Link href="/connect">
            <button className="bg-white mt-10 text-black flex items-center justify-center gap-2 rounded-full px-6 py-3 transition-transform transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
              Let's Go <CgArrowRight />
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
