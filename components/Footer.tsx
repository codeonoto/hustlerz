"use client";
import React from 'react';
import {
  FaLinkedin,
  FaBehance,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from 'react-icons/hi';

const Footer: React.FC = () => {
  return (
    <div className="w-full p-6 flex flex-col border-t-2 items-center justify-center">
      <div className="container mx-auto px-4 flex w-11/12 items-center flex-wrap justify-between border-b-2 p-6 gap-y-8">
        {/* Social Links */}
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <h3 className="text-darkBlue text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex flex-wrap gap-4">
            {[
              { icon: FaLinkedin, label: 'LinkedIn', handle: '@Hustlerz' },
              { icon: FaBehance, label: 'Behance', handle: '@Hustlerz' },
              { icon: FaInstagram, label: 'Instagram', handle: '@Hustlerz' },
              { icon: FaFacebook, label: 'Facebook', handle: '@Hustlerz' },
            ].map(({ icon: Icon, label, handle }, index) => (
              <div
                key={index}
                className="group flex items-center bg-gray-800 p-4 rounded-lg w-full sm:w-48 hover:bg-Blue transition duration-300"
              >
                <Icon className="text-darkblue group-hover:text-black text-2xl" />
                <div className="ml-4">
                  <p className="font-semibold group-hover:text-black">{label}</p>
                  <p className="text-gray-400 text-sm group-hover:text-black">{handle}</p>
                </div>
                <span className="ml-auto text-darkBlue group-hover:text-black text-xl">
                  &rarr;
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <h3 className="text-darkBlue text-lg font-semibold mb-4">Contact Us</h3>
          <div className="space-y-4">
            {[
              { icon: HiOutlineMail, label: 'Email', value: 'hustlerzatwork09@gmail.com' },
              { icon: HiOutlinePhone, label: 'Phone', value: '+91 8643062464' },
              {
                icon: HiOutlineLocationMarker,
                label: 'Location',
                value: 'Bhopal, Madhya Pradesh, India',
              },
            ].map(({ icon: Icon, label, value }, index) => (
              <div key={index} className="flex items-center">
                <Icon className="text-darkBlue text-2xl" />
                <div className="ml-4">
                  <p className="font-semibold">{label}</p>
                  <p className="text-gray-400 text-sm">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-1/3 p-6 rounded-lg bg-gray-900">
          <h3 className="text-darkBlue text-lg font-semibold mb-4">
            Have an Idea? Let Us Know
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring"
            />
            <textarea
              placeholder="Project Details"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring"
            ></textarea>
            <button
              type="submit"
              className="w-full py-2 bg-darkBlue text-black font-semibold rounded-md hover:bg-lime-500 transition duration-300"
            >
              Send Your Message
            </button>
          </form>
        </div>
      </div>
      <div className="mt-5 text-center text-gray-500 text-sm">
        © 2024 Hustlerz. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
