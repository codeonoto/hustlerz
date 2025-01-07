"use client"

import Image from "next/image";
import React from "react";
import image from "@/app/image/appdevelopement.svg";

const DataScience = () => {
  return (
    <div className=" flex items-center justify-center flex-col">
      <div className=" flex items-center justify-center bg-gray-950 w-full">
        <div className="container flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 space-y-8 md:space-y-0">
          {/* Text Section */}
          <div className="text-center md:text-left w-full md:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-snug">
            Data Science
            </h1>
            <p className="text-base lg:text-lg text-gray-400 leading-relaxed mb-6">
              Take your business to new heights by leveraging our cutting-edge
              app development services. Our expert developers deliver
              world-class mobile and web app solutions that drive engagement,
              growth, and profitability.
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
      {/* Data Science service */}
    <div>
        <h1>Our Data Science Services</h1>
    </div>
    </div>
  );
};

export default DataScience;
