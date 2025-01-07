"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/image/logo.png";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  HandCoins,
  HouseIcon,
  Library,
  NetworkIcon,
  Workflow,
} from "lucide-react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className=" text-white px-6 py-4 ">
        <div className="container w-11/12 mx-auto flex items-center justify-around">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src={logo} alt="Logo" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8 fixed top-0 left-1/2 transform -translate-x-1/2 z-50 px-4 py-2 rounded-lg shadow-lg mt-2">
            <NavbarDemo />
          </div>

          {/* Desktop Contact Us Button */}
          <Link href="/contact">
            <div className="hidden lg:block">
              <InteractiveHoverButton text="Contact" />
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
              className="focus:outline-none text-white"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Links */}
      <div className={`relative ${isMenuOpen ? "block" : "hidden"} lg:hidden`}>
        <div className="z-50 right-0 bg-black absolute rounded-3xl text-white p-6 transition-all duration-300">
          <ul className="space-y-6 text-md font-semibold">
            <li className="hover:text-blue-400 flex items-center space-x-2">
              <HouseIcon />
              <Link href="/" role="menuitem">
                Home
              </Link>
            </li>
            <li className="hover:text-blue-400 flex items-center space-x-2">
              <Library />
              <Link href="/about" role="menuitem">
                About
              </Link>
            </li>
            <li className="hover:text-blue-400 flex items-center space-x-2">
              <NetworkIcon />
              <Link href="/services" role="menuitem">
                Services
              </Link>
            </li>
            <li className="hover:text-blue-400 flex items-center space-x-2">
              <Workflow />
              <Link href="/works" role="menuitem">
                Works
              </Link>
            </li>
            <li className="hover:text-blue-400 flex items-center space-x-2">
              <HandCoins />
              <Link href="/pricing" role="menuitem">
                Pricing
              </Link>
            </li>
            <li className="hover:text-blue-400">
              <Link href="/contact" role="menuitem">
                <InteractiveHoverButton text="Contact" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

function NavbarDemo({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("flex space-x-6", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About"></MenuItem>
        <Link href="/services">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Services"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Work">
          <div className="flex flex-col space-y-4 text-sm">
            {/* Add Product Items here */}
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Starter</HoveredLink>
            <HoveredLink href="/">Basic</HoveredLink>
            <HoveredLink href="/">Pro</HoveredLink>
            <HoveredLink href="/">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
