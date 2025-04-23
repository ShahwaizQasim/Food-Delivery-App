import Link from "next/link";
import { Button } from "../ui/button";
import { Search, Users, ArrowRight } from "lucide-react";

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white text-gray-800 py-28">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-50 rounded-full translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/4 right-10 w-20 h-20 bg-green-100 rounded-full opacity-40"></div>
      <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-green-50 rounded-full opacity-60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center bg-green-50 rounded-full px-4 py-2">
            <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full mr-2">NEW</span>
            <span className="text-green-700">Saylani is hiring for multiple positions across Pakistan</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Build Your Career with <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-700">Saylani Welfare</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-10 text-gray-600 max-w-2xl mx-auto">
            Join Pakistan's largest welfare organization and make a meaningful impact while advancing your professional journey.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-xl shadow-md max-w-3xl mx-auto mb-10 border border-gray-100">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex-1 w-full">
                <div className="bg-white rounded-lg p-4 flex items-center border border-gray-200">
                  <Search size={20} className="text-green-500 mr-3" />
                  <span className="text-gray-400">Search for job opportunities...</span>
                </div>
              </div>
              <Link href="/jobs" className="w-full md:w-auto">
                <Button
                  size="lg"
                  className="bg-green-500 text-white hover:bg-green-600 font-medium px-8 py-6 w-full md:w-auto"
                >
                  Find Jobs
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link href="/jobs">
              <Button
                size="lg"
                className="bg-green-500 text-white hover:bg-green-600 font-medium px-8 py-6 flex items-center gap-2 shadow-md"
              >
                Browse All Positions
                <ArrowRight size={18} />
              </Button>
            </Link>
            <Link href="/signup">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-green-500 text-green-500 hover:bg-green-50 font-medium px-8 py-6 flex items-center gap-2"
              >
                <Users size={18} />
                Create Account
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-700 font-bold text-sm">100+</span>
              </div>
              <h3 className="font-bold text-lg text-gray-800">Open Positions</h3>
              <p className="text-gray-500 text-sm">Across multiple departments</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-700 font-bold text-sm">15+</span>
              </div>
              <h3 className="font-bold text-lg text-gray-800">Locations</h3>
              <p className="text-gray-500 text-sm">Throughout Pakistan</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-700 font-bold text-sm">50k+</span>
              </div>
              <h3 className="font-bold text-lg text-gray-800">People Helped</h3>
              <p className="text-gray-500 text-sm">Through our initiatives</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;