// components/Navbar.tsx
"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-md px-4 py-10 px-10 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link href="/">YourLogo</Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
        <Link
          href="#"
          className="relative hover: after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
        >
          About
        </Link>

        <Link
          href="#"
          className="relative hover: after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
        >
          Services
        </Link>

        <Link
          href="#"
          className="relative hover: after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
        >
          Contact
        </Link>
      </div>

      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-2xl focus:outline-none"
      >
        ☰
      </button>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute items-center top-16 py-5 left-0 w-full shadow-md flex flex-col gap-4 p-4 md:hidden">
          <Link href="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/services" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
