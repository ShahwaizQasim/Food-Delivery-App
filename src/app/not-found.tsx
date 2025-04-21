"use client";
import Link from "next/link";
import { FC } from "react";
import Head from "next/head";

const NotFound: FC = () => {
  return (
    <>
      <Head>
        <title>Page Not Found | SMIT - Autograde </title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist"
        />
      </Head>
      <div className="min-h-screen flex flex-col justify-center items-center px-4 py-8">
        <div className="max-w-md w-full rounded-lg overflow-hidden">
          <div className="p-8">
            {/* SVG Illustration */}
            <div className="w-48 h-48 mx-auto">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <circle cx="100" cy="100" r="60" fill="#34D399" />
                <circle cx="75" cy="80" r="10" fill="white" />
                <circle cx="125" cy="80" r="10" fill="white" />
                <path
                  d="M70,130 C70,130 100,150 130,130"
                  stroke="white"
                  strokeWidth="5"
                  fill="none"
                />
                <path d="M60,40 L80,20 L75,55 Z" fill="#34D399" />
                <path d="M140,40 L120,20 L125,55 Z" fill="#34D399" />
              </svg>
            </div>

            <h1 className="text-8xl font-bold text-center text-[#34D399]">
              {" "}
              404{" "}
            </h1>
            <h2 className="text-4xl font-semibold text-center text-gray-800 mb-2">
              {" "}
              Page Not Found{" "}
            </h2>
            <p className="text-gray-600 text-center mb-8 text-sm">
              Oops! The page you're looking for doesn't exist or has been moved.
              Please check the URL or navigate back to the dashboard.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
