"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ClipboardList,
  User,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface SidebarProps {
  expanded: boolean;
}

const Sidebar = ({ expanded }: SidebarProps) => {
  const pathname = usePathname();
  const [checkSheetOpen, setCheckSheetOpen] = useState(false);

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
      name: "Post New Job",
      icon: <ClipboardList size={20} />,
      path: "/dashboard/postJob",
    },
    {
      name: "Applications Reviews",
      icon: <ClipboardList size={20} />,
      path: "/dashboard/applicationReviews",
    },

    {
      name: "Profile",
      icon: <User size={20} />,
      path: "/dashboard/adminProfile",
    },
  ];

  return (
    <aside
      className={`h-screen transition-all z-50 duration-300 bg-white border-r border-emerald-200 ${
        expanded ? "w-64" : "w-20"
      }`}
    >
      <nav className="h-full flex flex-col">
        <div className="p-4 pb-2 flex justify-center items-center">
          <Link href="/">
            {expanded ? (
              <Image
                src="/saylani_logo.png"
                alt="Company Logo"
                width={150}
                height={60}
                className="mb-6"
              />
            ) : (
              <Image
                src="/unnamed.png"
                alt="Company Logo"
                width={50}
                height={50}
                className="mx-auto mb-6"
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
                      ? "bg-gradient-to-br from-blue-700 to-blue-400 text-white"
                      : "hover:bg-blue-100 text-black hover:text-blue-800"
                  } border-none outline-none`}
                >
                  {isActive && (
                    <div className="absolute left-0 w-1 h-8 bg-blue-800 rounded-r-full" />
                  )}

                  <div className="flex items-center bg-transparent gap-2">
                    <div className={isActive ? "text-white" : ""}>
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
