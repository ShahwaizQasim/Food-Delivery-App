"use client";
import Sidebar from "@/app/components/sidebar/sidebar";
import Topbar from "@/app/components/topbar/topbar";
import { useEffect, useState } from "react";

const Layout = ({ children }: any) => {
  const [expanded, setExpanded] = useState(false);

  const toggleSidebar = () => {
    setExpanded((prev) => !prev);
  };

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setExpanded(false);
    } else {
      setExpanded(true);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="max-h-screen flex bg-white">
      <div
        className={`flex-none transition-all z-50 duration-300 ${
          expanded ? "w-64" : "w-16"
        }`}
      >
        <Sidebar expanded={expanded} />
      </div>
      <div className="w-[100%] flex flex-col">
        <Topbar expanded={expanded} toggleSidebar={toggleSidebar} />
        <main className="flex-1 relative  overflow-x-hidden overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
