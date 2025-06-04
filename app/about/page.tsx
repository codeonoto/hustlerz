"use client"
import Advantage from '@/components/Advantage'
import Feature from '@/components/Feature'
import Testimonial from '@/components/Testimonial'
import { FaBullseye, FaEye, FaHandsHelping } from 'react-icons/fa'
import {motion} from "framer-motion"
import React from 'react'

const About = () => {
  return (
    <div className="">
      <section className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          About Us
        </h2>
        <p className="mb-12 font-light text-center text-gray-500 sm:text-xl dark:text-gray-400">
          We are a team of dedicated professionals committed to delivering exceptional services and solutions.
        </p>

        <div className="grid gap-8 lg:grid-cols-3">
          {[
            {
              icon: <FaBullseye size={32} className="text-indigo-600 dark:text-indigo-400" />,
              title: 'Our Mission',
              text: 'To provide innovative solutions that empower businesses and enhance user experiences.',
            },
            {
              icon: <FaEye size={32} className="text-indigo-600 dark:text-indigo-400" />,
              title: 'Our Vision',
              text: 'To be a leader in our industry, recognized for our commitment to quality and customer satisfaction.',
            },
            {
              icon: <FaHandsHelping size={32} className="text-indigo-600 dark:text-indigo-400" />,
              title: 'Our Values',
              text: 'Integrity, innovation, and excellence are at the core of everything we do.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-2xl shadow-md dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Add extended sections */}
      <Advantage />
      <Feature />
      <Testimonial />
    </div>
  )
}

export default About
