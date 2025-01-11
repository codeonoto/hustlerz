'use client'
import Image from 'next/image'
import React from 'react'
import img from "../../images/bannerImg.svg"

const Banner = () => {
  return (
    <section className="w-full  py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 py-8 bg-gray-950 rounded-lg">
        {/* Image Section */}
        <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
          <Image 
            src={img} 
            alt="Banner Image" 
             className="w-3/4 h-auto object-contain"
            priority
          />
        </div>

        {/* Text Content Section */}
        <div className="w-full md:w-2/3 text-white text-center md:text-left md:pl-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Ready to Drive Innovation? Launch Your Project with Us Today!
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Connect with Our Tech Specialists and Get Started Today!
          </p>
          <a
          href="tel:8643062464"
          className="inline-block px-6 py-3 bg-blue-600 rounded-lg text-white font-bold hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 transition"
        >
          Connect Now
        </a>
        </div>
      </div>
    </section>
  )
}

export default Banner
