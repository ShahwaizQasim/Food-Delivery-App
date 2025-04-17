'use client'
import React, { useState } from "react";
import {
  ChevronRight,
  Search,
  Briefcase,
  GraduationCap,
  Users,
  Building,
  CheckCircle,
  ArrowRight,
  Calendar,
  UserPlus,
  MessageCircle,
  HelpCircle,
  Info
} from "lucide-react";
import ServiceCard from "@/components/serviceCard/serviceCard";
import Link from "next/link";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("jobseekers");

  const serviceCategories = [
    {
      id: "jobseekers",
      title: "For Job Seekkers",
      description: "Find your dream career with our comprehensive job seeker services",
      icon: <Briefcase className="w-8 h-8" />,
    },
    {
      id: "employers",
      title: "For Employers",
      description: "Access top talent and simplify your recruitment process",
      icon: <Building className="w-8 h-8" />,
    },
    {
      id: "training",
      title: "Training Programs",
      description: "Enhance your skills with specialized training courses",
      icon: <GraduationCap className="w-8 h-8" />,
    },
    {
      id: "events",
      title: "Career Events",
      description: "Network and grow with our professional events",
      icon: <Calendar className="w-8 h-8" />,
    }
  ];

  const jobSeekerServices = [
    {
      title: "Job Matching",
      description: "Our AI algorithm matches your skills and experience with the perfect job opportunities.",
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      features: ["Personalized job recommendations", "Skill-based matching", "Industry-specific opportunities"]
    },
    {
      title: "Resume Building",
      description: "Create professional resumes with our guided tools and templates.",
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      features: ["ATS-optimized templates", "Professional guidance", "Industry-specific formats"]
    },
    {
      title: "Career Counseling",
      description: "Get expert advice on career paths, skill development, and job market trends.",
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      features: ["One-on-one sessions", "Career path planning", "Industry insights"]
    },
    {
      title: "Interview Preparation",
      description: "Prepare for interviews with mock sessions and expert feedback.",
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      features: ["Mock interviews", "Feedback sessions", "Industry-specific questions"]
    },
    {
      title: "Job Alerts",
      description: "Receive timely notifications about relevant job openings.",
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      features: ["Customized alerts", "Real-time notifications", "Application tracking"]
    }
  ];

  const employerServices = [
    {
      title: "Talent Sourcing",
      description: "Access our database of qualified candidates across various industries.",
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      features: ["Skilled candidate pool", "Industry-specific filters", "Qualification verification"]
    },
    {
      title: "Recruitment Process Outsourcing",
      description: "Let our experts handle your entire recruitment process.",
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      features: ["End-to-end recruitment", "Candidate screening", "Interview coordination"]
    },
    {
      title: "Employer Branding",
      description: "Showcase your company culture and attract top talent.",
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      features: ["Company profile enhancement", "Branding consultancy", "Recruitment marketing"]
    },
    {
      title: "Applicant Tracking",
      description: "Efficiently manage and track applications with our ATS.",
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      features: ["Centralized application management", "Status tracking", "Collaborative hiring"]
    },
    {
      title: "Assessment Tools",
      description: "Evaluate candidates with our comprehensive assessment solutions.",
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      features: ["Skill assessments", "Personality tests", "Technical evaluations"]
    }
  ];

  const trainingPrograms = [
    {
      title: "Technical Skills",
      description: "Develop in-demand technical skills with our specialized courses.",
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      features: ["Programming languages", "Data analysis", "Digital marketing", "UI/UX design"]
    },
    {
      title: "Soft Skills",
      description: "Enhance essential workplace soft skills to boost your employability.",
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      features: ["Communication", "Leadership", "Time management", "Problem-solving"]
    },
    {
      title: "Industry Certifications",
      description: "Get certified in recognized industry standards and technologies.",
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      features: ["IT certifications", "Project management", "HR certifications", "Finance qualifications"]
    },
    {
      title: "Career Transition Programs",
      description: "Programs designed to help you switch careers or industries.",
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      features: ["Industry overview", "Skill gap training", "Networking opportunities", "Placement assistance"]
    }
  ];

  const careerEvents = [
    {
      title: "Job Fairs",
      description: "Meet multiple employers and apply for jobs on the spot.",
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      features: ["Direct employer interaction", "On-the-spot interviews", "Industry-specific events"]
    },
    {
      title: "Networking Sessions",
      description: "Build your professional network with industry experts and peers.",
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      features: ["Industry meetups", "Professional networking", "Expert panel discussions"]
    },
    {
      title: "Workshops",
      description: "Participate in skill-building workshops led by industry professionals.",
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      features: ["Hands-on training", "Expert-led sessions", "Interactive learning"]
    },
    {
      title: "Webinars",
      description: "Access online knowledge-sharing sessions on various career topics.",
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      features: ["Industry trends", "Career guidance", "Skill development", "Q&A sessions"]
    }
  ];

  const renderActiveTabContent = () => {
    switch(activeTab) {
      case "jobseekers":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobSeekerServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        );
      case "employers":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {employerServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        );
      case "training":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {trainingPrograms.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        );
      case "events":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {careerEvents.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-700 to-green-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-10 py-16 md:py-22 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-green-400 bg-opacity-30 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Comprehensive Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-base md:text-xl mb-8 opacity-90">
              Connecting talent with opportunity through our comprehensive job portal services
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Process
            </span>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined process makes it easy to connect talent with opportunities
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center mb-8 md:mb-0">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                <UserPlus className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Register</h3>
              <p className="text-gray-600 max-w-xs">
                Create your account to access all services
              </p>
            </div>
            
            <div className="hidden md:block">
              <ArrowRight className="w-8 h-8 text-green-300" />
            </div>
            
            <div className="flex flex-col items-center text-center mb-8 md:mb-0">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Explore</h3>
              <p className="text-gray-600 max-w-xs">
                Browse jobs or candidates based on your needs
              </p>
            </div>
            
            <div className="hidden md:block">
              <ArrowRight className="w-8 h-8 text-green-300" />
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Connect</h3>
              <p className="text-gray-600 max-w-xs">
                Apply for jobs or contact candidates directly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Offerings
            </span>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Comprehensive Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide tailored solutions for job seekers, employers and professionals at every career stage
            </p>
          </div>
          
          {/* Service Category Selection */}
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {serviceCategories.map((category) => (
              <>
              <button
                key={category.id}
                className={`flex flex-col items-center p-4 md:p-6 rounded-lg transition-all ${
                  activeTab === category.id 
                    ? "bg-green-600 text-white shadow-md" 
                    : "bg-white text-gray-800 hover:bg-green-50"
                }`}
                onClick={() => setActiveTab(category.id)}
              >
                <div className={`${activeTab === category.id ? "text-white" : "text-green-600"}`}>
                  {category.icon}
                </div>
                <h3 className="font-bold mt-3 mb-1">{category.title}</h3>
                <p className={`text-sm ${activeTab === category.id ? "text-green-100" : "text-gray-500"} text-center max-w-xs`}>
                  {category.description}
                </p>
              </button>
              
              </>
              
            ))}
          </div>
          
          {/* Service Details */}
          <div className="mt-8 px-10">
            {renderActiveTabContent()}
          </div>
        </div>
      </section>
      
      {/* Premium Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-green-700 to-green-600 rounded-2xl overflow-hidden shadow-xl">
            <div className="md:w-1/2 p-8 md:p-12">
              <span className="inline-block bg-white bg-opacity-20 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                Premium Offering
              </span>
              <h2 className="text-3xl font-bold text-white mb-4">Saylani Career Pro</h2>
              <p className="text-green-100 mb-6">
                Take your career or recruitment efforts to the next level with our premium services package. Get priority access to top opportunities and candidates.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Priority job applications",
                  "Featured candidate profile",
                  "Direct access to recruiters",
                  "Premium job alerts",
                  "Advanced analytics"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center text-white">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-200" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors">
                Learn More
              </button>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <div className="h-full w-full bg-green-800">
                <img
                  src="/api/placeholder/600/500"
                  alt="Premium Services"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "Are all services available for free?",
                answer: "Basic services such as job searching and profile creation are free for all users. Premium features like priority applications and featured profiles are available with our Career Pro package."
              },
              {
                question: "How do I sign up for training programs?",
                answer: "You can browse available training programs in the Training section of our website. Each program has enrollment information and schedules. Simply click on the program you're interested in and follow the registration process."
              },
              {
                question: "Can employers post jobs for free?",
                answer: "Yes, employers can post a limited number of job listings for free. For additional postings and premium features like candidate searching and applicant tracking, we offer affordable subscription plans."
              },
              {
                question: "How often are career events organized?",
                answer: "We host various career events throughout the year, including monthly webinars, quarterly job fairs, and weekly networking sessions. Check our Events calendar for upcoming opportunities."
              }
            ].map((faq, index) => (
              <div key={index} className="mb-6 bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-start">
                  <HelpCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-gray-600 ml-7">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're looking for your next career move or seeking top talent, our services are designed to help you succeed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href='/signup' className="bg-white text-green-600 px-8 py-3 rounded-md font-medium hover:bg-green-50 transition-colors cursor-pointer">
              Sign Up Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
