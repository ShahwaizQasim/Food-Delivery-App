import Link from "next/link";
import { Button } from "../ui/button";
import { Search, Users, ArrowRight } from "lucide-react";

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white text-gray-800 py-28">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/4 right-10 w-20 h-20 bg-blue-100 rounded-full opacity-40"></div>
      <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-blue-50 rounded-full opacity-60"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center bg-blue-50 rounded-full px-4 py-2">
            <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full mr-2">
              NEW
            </span>
            <span className="text-blue-700">
              Saylani is hiring for multiple positions across Pakistan
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Build Your Career with <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">
              Saylani Welfare
            </span>
          </h1>

          <p className="text-lg md:text-xl mb-10 text-gray-600 max-w-2xl mx-auto">
            Join Pakistan's largest welfare organization and make a meaningful
            impact while advancing your professional journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link href="/jobs">
              <Button
                size="lg"
                className="bg-blue-500 text-white hover:bg-blue-600 font-medium px-8 py-6 flex items-center gap-2 shadow-md"
              >
                Browse All Positions
                <ArrowRight size={18} />
              </Button>
            </Link>
            <Link href="/signup">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 font-medium px-8 py-6 flex items-center gap-2"
              >
                <Users size={18} />
                Create Account
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto relative top-12">
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 font-bold text-sm">100+</span>
              </div>
              <h3 className="font-bold text-lg text-gray-800">
                Open Positions
              </h3>
              <p className="text-gray-500 text-sm">
                Across multiple departments
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 font-bold text-sm">15+</span>
              </div>
              <h3 className="font-bold text-lg text-gray-800">Locations</h3>
              <p className="text-gray-500 text-sm">Throughout Pakistan</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 font-bold text-sm">50k+</span>
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
