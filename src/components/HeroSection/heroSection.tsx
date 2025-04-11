// import Link from "next/link";
// import { Button } from "../ui/button";
// import { Search, Briefcase, Users } from "lucide-react";

// function HeroSection() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-r from-green-500 to-green-600 text-white py-24 px-6">
//       {/* Decorative circles */}
//       <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid md:grid-cols-2 gap-10 items-center">
//           <div className="text-left">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
//               Find Your <span className="text-green-200">Dream Job</span> at Saylani
//             </h1>
//             <p className="text-lg md:text-xl mb-8 text-green-50">
//               Join Pakistan's largest welfare organization and build a meaningful career while making a difference in society.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <Link href="/jobs">
//                 <Button
//                   size="lg"
//                   className="bg-white text-green-600 hover:bg-green-50 font-medium px-8 py-6 flex items-center gap-2 shadow-lg"
//                 >
//                   <Search size={20} />
//                   Browse Jobs
//                 </Button>
//               </Link>
//               <Link href="/signup">
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="border-2 border-white text-white hover:bg-white/10 font-medium px-8 py-6 flex items-center gap-2"
//                 >
//                   <Users size={20} />
//                   Create Account
//                 </Button>
//               </Link>
//             </div>
            
//             <div className="mt-12 flex items-center gap-4">
//               <div className="flex -space-x-4">
//                 <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center text-green-600 font-bold">S</div>
//                 <div className="w-10 h-10 rounded-full bg-green-300 flex items-center justify-center text-green-700 font-bold">W</div>
//                 <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center text-green-800 font-bold">T</div>
//               </div>
//               <p className="text-sm text-green-100">Join <strong>1000+</strong> professionals already working at Saylani</p>
//             </div>
//           </div>
          
//           <div className="hidden md:block">
//             <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-xl">
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="bg-green-200 p-3 rounded-full">
//                   <Briefcase className="text-green-700" size={24} />
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-xl">Latest Opportunities</h3>
//                   <p className="text-green-100">Updated daily</p>
//                 </div>
//               </div>
              
//               {[1, 2, 3].map((item) => (
//                 <div key={item} className="bg-white/10 rounded p-4 mb-4 hover:bg-white/20 transition cursor-pointer">
//                   <div className="flex justify-between items-center">
//                     <h4 className="font-semibold">Senior Web Developer</h4>
//                     <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full">Full-time</span>
//                   </div>
//                   <p className="text-sm text-green-100 mt-1">Karachi, Pakistan</p>
//                 </div>
//               ))}
              
//               <Link href="/jobs">
//                 <Button
//                   variant="link"
//                   className="text-white hover:text-green-200 w-full mt-2"
//                 >
//                   View all open positions →
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default HeroSection;



// import Link from "next/link";
// import { Button } from "../ui/button";
// import { Search, Users, ArrowRight } from "lucide-react";

// function HeroSection() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-r from-green-500 to-green-600 text-white py-28">
//       {/* Decorative elements */}
//       <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
//       <div className="absolute top-1/4 right-10 w-20 h-20 bg-green-300/20 rounded-full"></div>
//       <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-green-400/10 rounded-full"></div>
      
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="max-w-5xl mx-auto text-center">
//           <div className="mb-6 inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
//             <span className="bg-green-200 text-green-800 text-xs font-bold px-3 py-1 rounded-full mr-2">NEW</span>
//             <span className="text-green-50">Saylani is hiring for multiple positions across Pakistan</span>
//           </div>
          
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
//             Build Your Career with <br />
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-green-200">Saylani Welfare</span>
//           </h1>
          
//           <p className="text-lg md:text-xl mb-10 text-green-50 max-w-2xl mx-auto">
//             Join Pakistan's largest welfare organization and make a meaningful impact while advancing your professional journey.
//           </p>
          
//           <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-xl max-w-3xl mx-auto mb-10">
//             <div className="flex flex-col md:flex-row items-center gap-4">
//               <div className="flex-1 w-full">
//                 <div className="bg-white/10 rounded-lg p-4 flex items-center">
//                   <Search size={20} className="text-green-200 mr-3" />
//                   <span className="text-green-50">Search for job opportunities...</span>
//                 </div>
//               </div>
//               <Link href="/jobs" className="w-full md:w-auto">
//                 <Button
//                   size="lg"
//                   className="bg-white text-green-600 hover:bg-green-50 font-medium px-8 py-6 w-full md:w-auto"
//                 >
//                   Find Jobs
//                 </Button>
//               </Link>
//             </div>
//           </div>
          
//           <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
//             <Link href="/jobs">
//               <Button
//                 size="lg"
//                 className="bg-green-600 text-white border border-green-400 hover:bg-green-700 font-medium px-8 py-6 flex items-center gap-2 shadow-lg"
//               >
//                 Browse All Positions
//                 <ArrowRight size={18} />
//               </Button>
//             </Link>
//             <Link href="/signup">
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="border-2 border-white text-white hover:bg-white/10 font-medium px-8 py-6 flex items-center gap-2"
//               >
//                 <Users size={18} />
//                 Create Account
//               </Button>
//             </Link>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
//             <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition">
//               <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-green-700 font-bold text-xl">100+</span>
//               </div>
//               <h3 className="font-bold text-lg">Open Positions</h3>
//               <p className="text-green-100 text-sm">Across multiple departments</p>
//             </div>
            
//             <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition">
//               <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-green-700 font-bold text-xl">15+</span>
//               </div>
//               <h3 className="font-bold text-lg">Locations</h3>
//               <p className="text-green-100 text-sm">Throughout Pakistan</p>
//             </div>
            
//             <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition">
//               <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-green-700 font-bold text-xl">50k+</span>
//               </div>
//               <h3 className="font-bold text-lg">People Helped</h3>
//               <p className="text-green-100 text-sm">Through our initiatives</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default HeroSection;



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
                <span className="text-green-700 font-bold text-xl">100+</span>
              </div>
              <h3 className="font-bold text-lg text-gray-800">Open Positions</h3>
              <p className="text-gray-500 text-sm">Across multiple departments</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-700 font-bold text-xl">15+</span>
              </div>
              <h3 className="font-bold text-lg text-gray-800">Locations</h3>
              <p className="text-gray-500 text-sm">Throughout Pakistan</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-700 font-bold text-xl">50k+</span>
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