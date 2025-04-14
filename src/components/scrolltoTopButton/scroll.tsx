"use client";

import { ChevronUp } from "lucide-react";

export default function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-saylani-green text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-10"
      aria-label="Scroll to top"
    >
      <ChevronUp size={20} />
    </button>
  );
}