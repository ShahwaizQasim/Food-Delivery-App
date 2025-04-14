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
    <footer className="relative bg-gradient-to-b from-gray-900 to-saylani-dark-gray text-white pt-16 pb-8">
      {/* Wave SVG for top decoration */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform -translate-y-full">
        <svg
          className="relative block w-full h-10 text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="rgba(17, 24, 39, 1)"
          ></path>
        </svg>
      </div>

      <ScrollToTopButton />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Section */}
          <div className="relative">
            <div className="absolute -top-2 left-0 w-16 h-1 bg-saylani-green rounded-full"></div>
            <h3 className="text-2xl font-bold mb-6 pt-4">Saylani Jobs</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Connecting talented individuals with opportunities at Saylani
              Welfare Trust and its partner organizations. Join us in our
              mission to serve humanity.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-saylani-green hover:text-white transition duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-saylani-green hover:text-white transition duration-300"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-saylani-green hover:text-white transition duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-saylani-green hover:text-white transition duration-300"
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

        {/* Newsletter Section */}
        <div className="mt-16 mb-12 bg-white bg-opacity-5 rounded-xl p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Subscribe to Job Alerts</h3>
            <p className="text-gray-300 mb-6">
              Stay updated with the latest job opportunities at Saylani Welfare
              Trust
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-4 py-3 rounded-md bg-transparent border border-gray-700 focus:border-saylani-green focus:outline-none text-white"
              />
              <button className="bg-saylani-green hover:bg-green-600 text-white px-6 py-3 rounded-md font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section with Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} Saylani Jobs Portal. All rights
            reserved.
          </p>
          <div className="mt-4 md:mt-0 text-gray-400 flex items-center">
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
