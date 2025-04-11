"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ClipboardList,
  CloudUpload,
  FileText,
  User,
  GitCompareArrows,
  Edit,
} from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

interface SidebarProps {
  expanded: boolean;
}

const Sidebar = ({ expanded }: SidebarProps) => {
  const pathname = usePathname();

  // Log expanded state for debugging
  useEffect(() => {
    console.log("Sidebar expanded state:", expanded);
  }, [expanded]);

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/dashboard",
    },
    {
      name: "Results",
      icon: <ClipboardList size={20} />,
      path: "/dashboard/results",
    },
    {
      name: "Upload Answer Sheet",
      icon: <CloudUpload size={20} />,
      path: "/dashboard/upload-sheet",
    },
    {
      name: "Check Answer Sheet",
      icon: <FileText size={20} />,
      path: "/dashboard/check-sheets",
    },
    {
      name: "Compare",
      icon: <GitCompareArrows size={20} />,
      path: "/dashboard/compare",
    },
    {
      name: "Generate Paper",
      icon: <Edit size={20} />,
      path: "/dashboard/editPaper",
    },
    { name: "Profile", icon: <User size={20} />, path: "/dashboard/profile" },
  ];

  return (
    <aside
      className={`h-screen transition-all z-50 duration-300 bg-white dark:bg-gray-800 border-r border-emerald-200 dark:border-emerald-700 ${
        expanded ? "w-64" : "w-20"
      }`}
    >
      <nav className="h-full flex flex-col">
        <div className="p-4 pb-2 flex justify-center items-center">
          <Link href="/">
            {expanded ? (
              <Image
                src="/smi-1.png"
                alt="Company Logo"
                width={150}
                height={60}
              />
            ) : (
              <Image
                src="/smit-4.png"
                alt="Company Logo"
                width={50}
                height={50}
                className="mx-auto"
              />
            )}
          </Link>
        </div>

        <ul className="flex-1 px-3">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link href={item.path} key={item.path}>
                <li
                  className={`relative flex items-center overflow-hidden py-3 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
                    isActive
                      ? "bg-gradient-to-tr from-emerald-200 to-emerald-400 dark:from-emerald-600 dark:to-emerald-800 text-emerald-800 dark:text-gray-100"
                      : "hover:bg-emerald-100 dark:hover:bg-emerald-700 text-emerald-800 dark:text-gray-200 hover:text-emerald-800 dark:hover:text-gray-100"
                  } border-none outline-none`}
                >
                  {isActive && (
                    <div className="absolute left-0 w-1 h-8 bg-emerald-800 dark:bg-emerald-400 rounded-r-full" />
                  )}

                  <div className="flex items-center bg-transparent gap-2">
                    <div
                      className={
                        isActive
                          ? "text-emerald-800 dark:text-gray-100"
                          : "dark:text-gray-200"
                      }
                    >
                      {item.icon}
                    </div>

                    {expanded && (
                      <span className="text-[14px] bg-transparent ml-1">
                        {item.name}
                      </span>
                    )}
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
