"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/image/logo.png";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import { FaBars, FaTimes } from 'react-icons/fa';
import { HandCoins, HouseIcon, Library, NetworkIcon, Workflow } from "lucide-react";
import { CiMoneyBill } from "react-icons/ci";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-black text-white px-8 py-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src={logo} alt="Logo" className="h-16 w-auto" />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center bg-black text-white rounded-full p-6 shadow-lg border border-gray-800">
            <ul className="flex space-x-8 text-md font-semibold">
              <li className="hover:text-blue-400">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-blue-400">
                <Link href="/about">About</Link>
              </li>
              <li className="hover:text-blue-400">
                <Link href="/services">Services</Link>
              </li>
              <li className="hover:text-blue-400">
                <Link href="/works">Works</Link>
              </li>
              <li className="hover:text-blue-400">
                <Link href="/pricing">Pricing</Link>
              </li>
            </ul>
          </div>

          {/* Desktop Contact Us Button */}
          <Link href="/contact">
            <div className="relative justify-center hidden md:block">
              <InteractiveHoverButton />
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden  rounded-xl shadow-lg">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
              className="focus:outline-none"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Links */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}  bg-gray-900 rounded-3xl  text-white p-6 `}>
        <ul className="space-y-6 text-md font-semibold">
          <li className="hover:text-blue-400 flex items-center  space-x-2">
            <HouseIcon/>
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-blue-400 flex items-center space-x-2">
            <Library/>
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-blue-400 flex items-center space-x-2 ">
            <NetworkIcon/>
            <Link href="/services">Services</Link>
          </li>
          <li className="hover:text-blue-400 flex items-center space-x-2">
            <Workflow/>
            <Link href="/works">Works</Link>
          </li>
          <li className="hover:text-blue-400 flex items-center  space-x-2">
            <HandCoins/>
            <Link href="/pricing">Pricing</Link>
          </li>
          {/* Mobile Contact Us Button */}
          <li className="hover:text-blue-400">
            <Link href="/contact">
              <div className="relative justify-center">
                <InteractiveHoverButton />
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
