"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  User,
  LogIn,
  Search,
  Bell,
  ChevronDown,
  CircleGauge,
  HomeIcon,
  LogOut,
  User2Icon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { signOut, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { status, data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSignOut = async() => {
      await signOut()
      router.push('/')
  };

  return (
    <nav
      className={`${
        scrolled ? "bg-white shadow-lg py-2" : "bg-white shadow-md py-4"
      } sticky top-0 z-50 transition-all duration-300`}
    >
      <div className="container mx-auto px-4 lg:px-10">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-10 w-40 md:h-12 md:w-48 relative">
              <img
                src="/saylani_logo.png"
                alt="Saylani Welfare"
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-gray-600 hover:text-green-600 font-medium transition-colors duration-200 text-sm lg:text-base ${
                pathname === "/" && "border-b-2 border-green-500"
              }`}
            >
              Home
            </Link>
            <Link
              href="/jobs"
              className={`text-gray-600 hover:text-green-600 font-medium transition-colors duration-200 text-sm lg:text-base ${
                pathname === "/jobs" && "border-b-2 border-green-500"
              }`}
            >
              Jobs
            </Link>
            <Link
              href="/about"
              className={`text-gray-600 hover:text-green-600 font-medium transition-colors duration-200 text-sm lg:text-base ${
                pathname === "/about" && "border-b-2 border-green-500"
              }`}
            >
              About
            </Link>
            <Link
              href="/service"
              className={`text-gray-600 hover:text-green-600 font-medium transition-colors duration-200 text-sm lg:text-base ${
                pathname === "/service" && "border-b-2 border-green-500"
              }`}
            >
              Services
            </Link>
          </div>

          {/* Search Button (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            {status === "authenticated" ? (
              <div className="flex items-center space-x-4">
                {/* <Button
                  variant="ghost"
                  className="text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-full p-2"
                  aria-label="Notifications"
                >
                  <Bell/>
                </Button>
                <Button
              variant="ghost"
              className="text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-full p-2"
              aria-label="Search"
            >
              <Search size={40} />
            </Button> */}
                <Link href="/profile">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <div className="h-8 w-8 outline-none rounded-full bg-green-100 flex items-center justify-center text-green-600 font-medium border-2 border-green-500">
                      {session?.user?.name?.charAt(0) || "U"}
                    </div>
                        <ChevronDown
                          size={16}
                          className="text-gray-500 dark:text-gray-300"
                        />
                      </button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="w-56 bg-white text-gray-900">
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="cursor-pointer">
                        <Link href="/">
                          <div className="flex items-center space-x-2">
                            <HomeIcon size={16} />
                            <span>Home</span>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        <Link href="/dashboard">
                          <div className="flex items-center space-x-2">
                            <CircleGauge size={16} />
                            <span>Dashboard</span>
                          </div>
                        </Link>

                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        <Link href="/dashboard">
                          <div className="flex items-center space-x-2">
                            <User2Icon size={16} />
                            <span>Profile</span>
                          </div>
                        </Link>
                        
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={handleSignOut}
                        className="text-red-600 dark:text-red-400 cursor-pointer"
                      >
                        <div className="flex items-center space-x-2">
                          <LogOut size={16} />
                          <span>Sign out</span>
                        </div>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </Link>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link href="/login">
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white transition-colors duration-300 rounded-md px-4 py-2 text-sm font-medium"
                  >
                    <LogIn size={16} />
                    Login
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="bg-green-500 hover:bg-green-600 flex items-center gap-2 transition-colors duration-300 rounded-md px-4 py-2 text-white text-sm font-medium">
                    <User size={16} />
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fadeIn">
            <div className="flex items-center justify-between bg-gray-50 rounded-lg p-2 mb-2">
              <input
                type="text"
                placeholder="Search jobs..."
                className="bg-transparent border-none focus:outline-none w-full text-sm px-2"
              />
              <Search size={18} className="text-gray-500" />
            </div>

            <Link
              href="/"
              className="flex items-center text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md p-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/jobs"
              className="flex items-center gap-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md p-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Jobs
            </Link>
            <Link
              href="/about"
              className="flex items-center text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md p-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="flex items-center text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md p-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="flex flex-col space-y-2 pt-3 border-t border-gray-200 mt-3">
              {status === "authenticated" ? (
                <div className="flex items-center justify-between p-2">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-medium border-2 border-green-500">
                      {session?.user?.name?.charAt(0) || "U"}
                    </div>
                    <span className="font-medium text-gray-700">
                      {session?.user?.name || "User"}
                    </span>
                  </div>
                  <Link href="/profile">
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-xs border-green-500 text-green-600"
                    >
                      Profile
                    </Button>
                  </Link>
                </div>
              ) : (
                <>
                  <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                    <Button
                      variant="outline"
                      className="w-full border-green-500 text-green-600 hover:bg-green-500 hover:text-white flex items-center justify-center gap-2"
                    >
                      <LogIn size={16} />
                      Login
                    </Button>
                  </Link>
                  <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2">
                      <User size={16} />
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
