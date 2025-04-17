"use client";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import {
  ChevronRight,
  Users,
  Building,
  Award,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const AboutPage: React.FC = () => {
  return (
    <>
      <main className="bg-gray-50 mb-24">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-600 to-green-400 text-white">
          <div className="container mx-auto px-8 md:py-12">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-4xl font-bold mb-2 mt-2">
                About Saylani Job Portal
              </h1>
              <p className="text-xl md:text-1xl mb-8">
                Connecting talented individuals with meaningful career
                opportunities
              </p>
              <div className="flex items-center">
                <button className="bg-white text-green-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors">
                  Explore Jobs
                </button>
                <button className="ml-4 flex items-center text-white font-medium hover:underline">
                  Learn more <ChevronRight className="w-5 h-5 ml-1" />
                </button>
              </div>
            </div>
          </div>
          {/* <div className="absolute bottom-0 left-0 right-0 h-16 bg-wave-pattern bg-repeat-x bg-contain"></div> */}
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/saylaniteam.jpg"
                    alt="Saylani Job Portal Mission"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Saylani Job Portal was founded with a simple yet powerful
                  mission: to bridge the gap between talented individuals and
                  organizations seeking skilled professionals. We strive to
                  empower job seekers by providing them with opportunities that
                  align with their skills and career aspirations.
                </p>
                <p className="text-lg text-gray-600">
                  Through our innovative platform, we aim to streamline the
                  recruitment process, making it easier for employers to find
                  the right candidates and for job seekers to discover
                  meaningful career opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>
      <div className="container mx-auto px-14 bg-gray-50 transition-colors duration-300">
        <h1 className="text-4xl font-semibold mt-10 text-[#16A34A]">
          Empowering Futures with Opportunities
        </h1>
        <p className="mt-5">
          Welcome to the official Job Portal of Saylani Welfare International
          Trust, where we bridge the gap between skilled individuals and
          organizations in need of talent. Saylani is a name known for serving
          humanity with dedication and excellence. With the launch of our Job
          Portal, our mission is to support the unemployed youth, professionals,
          and skilled workers in finding meaningful employment and career
          growth.
        </p>

        <h1 className="text-4xl font-semibold mt-10 text-[#16A34A]">
          Our Mission
        </h1>
        <p className="mt-5">
          To eliminate unemployment by providing job opportunities, skill-based
          training, and career guidance to individuals across Pakistan —
          especially those who are underprivileged or in need.
        </p>

        <h1 className="text-4xl font-semibold mt-10 text-[#16A34A]">
          What We Offer
        </h1>
        <ol className="list-decimal pl-8 mt-5">
          <li>Verified Job Listings from trusted companies</li>
          <li>A user-friendly platform to search and apply for jobs</li>
          <li>
            Opportunities for fresh graduates, professionals, and freelancers
          </li>
          <li>Special preference for Saylani-trained candidates</li>
          <li>Career development workshops and counseling</li>
        </ol>
      </div>
      </main>
    </>
  );
};

export default AboutPage;
