import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ChevronUp,
  ExternalLink,
  Heart,
} from "lucide-react";
import ScrollToTopButton from "../scrolltoTopButton/scroll";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-500 text-white pt-16 pb-8">
      <ScrollToTopButton />

      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Section */}
          <div className="relative">
            <h3 className="text-2xl font-bold mb-6 pt-4">Saylani Jobs</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Connecting talented individuals with opportunities at Saylani
              Welfare Trust and its partner organizations. Join us in our
              mission to serve humanity.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-green-400 hover:text-white transition duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-green-400 hover:text-white transition duration-300"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-green-400 hover:text-white transition duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-green-400 hover:text-white transition duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="relative">
            <div className="absolute -top-2 left-0 w-16 h-1 bg-saylani-green rounded-full"></div>
            <h3 className="text-2xl font-bold mb-6 pt-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-saylani-green flex items-center transition-all duration-300 group"
                >
                  <div className="w-2 h-2 bg-saylani-green rounded-full mr-3 group-hover:w-3 transition-all duration-300"></div>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/jobs"
                  className="text-gray-300 hover:text-saylani-green flex items-center transition-all duration-300 group"
                >
                  <div className="w-2 h-2 bg-saylani-green rounded-full mr-3 group-hover:w-3 transition-all duration-300"></div>
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-saylani-green flex items-center transition-all duration-300 group"
                >
                  <div className="w-2 h-2 bg-saylani-green rounded-full mr-3 group-hover:w-3 transition-all duration-300"></div>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-saylani-green flex items-center transition-all duration-300 group"
                >
                  <div className="w-2 h-2 bg-saylani-green rounded-full mr-3 group-hover:w-3 transition-all duration-300"></div>
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-saylani-green flex items-center transition-all duration-300 group"
                >
                  <div className="w-2 h-2 bg-saylani-green rounded-full mr-3 group-hover:w-3 transition-all duration-300"></div>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Job Categories */}
          <div className="relative">
            <div className="absolute -top-2 left-0 w-16 h-1 bg-saylani-green rounded-full"></div>
            <h3 className="text-2xl font-bold mb-6 pt-4">Job Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/jobs/it"
                  className="text-gray-300 hover:text-saylani-green flex items-center transition-all duration-300 group"
                >
                  <div className="w-2 h-2 bg-saylani-green rounded-full mr-3 group-hover:w-3 transition-all duration-300"></div>
                  IT & Development
                </Link>
              </li>
              <li>
                <Link
                  href="/jobs/teaching"
                  className="text-gray-300 hover:text-saylani-green flex items-center transition-all duration-300 group"
                >
                  <div className="w-2 h-2 bg-saylani-green rounded-full mr-3 group-hover:w-3 transition-all duration-300"></div>
                  Teaching & Education
                </Link>
              </li>
              <li>
                <Link
                  href="/jobs/admin"
                  className="text-gray-300 hover:text-saylani-green flex items-center transition-all duration-300 group"
                >
                  <div className="w-2 h-2 bg-saylani-green rounded-full mr-3 group-hover:w-3 transition-all duration-300"></div>
                  Administration
                </Link>
              </li>
              <li>
                <Link
                  href="/jobs/medical"
                  className="text-gray-300 hover:text-saylani-green flex items-center transition-all duration-300 group"
                >
                  <div className="w-2 h-2 bg-saylani-green rounded-full mr-3 group-hover:w-3 transition-all duration-300"></div>
                  Medical Staff
                </Link>
              </li>
              <li>
                <Link
                  href="/jobs/management"
                  className="text-gray-300 hover:text-saylani-green flex items-center transition-all duration-300 group"
                >
                  <div className="w-2 h-2 bg-saylani-green rounded-full mr-3 group-hover:w-3 transition-all duration-300"></div>
                  Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="relative">
            <div className="absolute -top-2 left-0 w-16 h-1 bg-saylani-green rounded-full"></div>
            <h3 className="text-2xl font-bold mb-6 pt-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <MapPin
                  size={20}
                  className="mt-1 flex-shrink-0 text-saylani-green"
                />
                <a
                  href="https://maps.google.com/?q=Saylani+House+Bahadurabad+Karachi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 group-hover:text-saylani-green transition-colors flex items-start"
                >
                  <span>Saylani House, Bahadurabad, Karachi, Pakistan</span>
                  <ExternalLink
                    size={14}
                    className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone size={20} className="flex-shrink-0 text-saylani-green" />
                <a
                  href="tel:+921117295526"
                  className="text-gray-300 group-hover:text-saylani-green transition-colors"
                >
                  +92-111-729-526
                </a>
              </li>
              <li className="flex items-center space-x-3 group">
                <Mail size={20} className="flex-shrink-0 text-saylani-green" />
                <a
                  href="mailto:info@saylanijobs.org"
                  className="text-gray-300 group-hover:text-saylani-green transition-colors"
                >
                  info@saylanijobs.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section with Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-center md:text-left">
            &copy; {new Date().getFullYear()} Saylani Jobs Portal. All rights
            reserved.
          </p>
          <div className="mt-4 md:mt-0 text-gray-300 flex items-center">
            <span>Made with</span>
            <Heart size={16} className="mx-1 text-red-500" />
            <span>by Saylani IT Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
