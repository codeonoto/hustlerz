"use client";

import Image from "next/image";
import React from "react";
import image from "@/app/image/appdevelopement.svg";
import Module from "./_components/Module";
import Tech from "./_components/Tech";
import Process from "./_components/Process";
import Banner from "../app-developement/_components/Banner";

const UIUX = () => {
  return (
    <div className=" flex items-center justify-center flex-col">
      <div className=" flex items-center justify-center bg-gray-950 w-full">
        <div className="container flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 space-y-8 md:space-y-0">
          {/* Text Section */}
          <div className="text-center md:text-left w-full md:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-snug">
              Transforming Ideas into Intuitive Designs
            </h1>
            <p className="text-base lg:text-lg text-gray-400 leading-relaxed mb-6">
              We bridge the gap between creativity and usability, transforming
              your vision into intuitive, user-centered designs that drive
              engagement and deliver seamless experiences.
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-white text-gray-950 font-medium rounded-lg shadow-lg hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out">
              Get Started
            </button>
          </div>

          {/* Image Section */}
          <div className="relative w-full md:w-1/2 flex justify-center">
            <Image
              src={image}
              alt="App Development Illustration"
              className="w-full max-w-sm md:max-w-md lg:max-w-lg"
              priority
            />
          </div>
        </div>
      </div>
      {/* UI-UX service */}
      <div className="text-center w-11/12 flex mt-12 flex-col items-center justify-center">
        <h1 className="text-[3rem] font-bold">Our UI/UX Services</h1>
        <p>
          Take your business to the next level by leveraging our expert UI/UX
          design services. We focus on creating immersive and engaging designs
          that drive user satisfaction and business success.
        </p>
        <Module />
      </div>

      <div className="w-11/12 flex mt-12 flex-col items-start justify-center">
        <h1 className="text-[3rem] font-bold text-start">
          Technologies We Use
        </h1>
        <p className="text-start">
          Discover the cutting-edge tools and technologies that power our
          innovative solutions.
        </p>
        <Tech />
      </div>

      <div className="w-11/12 flex mt-12 flex-col items-start justify-center">
        <h1 className="text-[3rem] font-bold text-start">
          Our UI/UX Design Process
        </h1>
        <p className="text-start">
          We believe in a user-centered design philosophy. Our process involves
          research, strategy, and iterative development to create designs that
          are not only visually appealing but also aligned with your business
          goals.
        </p>
        <Process />
      </div>

      <Banner />
    </div>
  );
};

export default UIUX;
