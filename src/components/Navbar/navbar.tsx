"use client";

import { useState } from "react";
import { Menu, X, User, LogIn } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-10 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="font-bold text-2xl text-saylani-green">Saylani</div>
            <div className="font-semibold text-xl text-saylani-dark-gray">
              Jobs
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-saylani-green font-medium"
            >
              Home
            </Link>
            <Link
              href="/jobs"
              className="text-gray-700 hover:text-saylani-green font-medium"
            >
              Jobs
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-saylani-green font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-saylani-green font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Auth Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/login">
              <Button variant="outline" className="flex items-center gap-2 cursor-pointer hover:bg-saylani-green">
                <LogIn size={18} />
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button variant={"outline"} className="bg-saylani-green hover:bg-saylani-dark-green flex items-center gap-2 cursor-pointer">
                <User size={18} />
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link
              href="/"
              className="block text-gray-700 hover:text-saylani-green font-medium py-2"
            >
              Home
            </Link>
            <Link
              href="/jobs"
              className="block text-gray-700 hover:text-saylani-green font-medium py-2"
            >
              Jobs
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-saylani-green font-medium py-2"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-saylani-green font-medium py-2"
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200">
              <Link href="/login" className="btn-secondary text-center">
                Login
              </Link>
              <Link href="/signup" className="btn-primary text-center">
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
