"use client";
import { signOut, useSession } from "next-auth/react";
import {
  ChevronDown,
  Settings,
  LogOut,
  HelpCircle,
  Home,
  ChevronFirst,
  ChevronLast,
  Phone,
  CircleGauge,
  Sun,
  Moon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface TopbarProps {
  toggleSidebar: () => void;
  expanded: boolean;
}

const Topbar = ({ toggleSidebar, expanded }: TopbarProps) => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.replace("/login");
  };

  return (
    <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors text-gray-700 dark:text-gray-200"
            aria-label="Toggle sidebar"
            type="button"
          >
            {expanded ? <ChevronFirst size={20} /> : <ChevronLast size={20} />}
          </button>
        </div>

        <div className="flex items-center space-x-4 relative">
          {/* DropdownMenu for user profile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center space-x-3 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <div className="h-8 w-8 bg-emerald-400 dark:bg-emerald-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {"U"}
                </div>
                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    {"User Name"}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {"user@example.com"}
                  </p>
                </div>
                <ChevronDown
                  size={16}
                  className="text-gray-500 dark:text-gray-400"
                />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-200">
              <DropdownMenuLabel className="text-gray-900 dark:text-gray-100">
                Account
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-700" />

              <DropdownMenuItem className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
                <Link href={"/"}>
                  <div className="flex items-center space-x-2">
                    <Home size={16} />
                    <span>Home</span>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Link href="/contact-us">
                  <div className="flex items-center space-x-2">
                    <Phone size={16} />
                    <span>Contact Us</span>
                  </div>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-700" />

              <DropdownMenuItem
                onClick={handleSignOut}
                className="text-red-600 dark:text-red-400 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="flex items-center space-x-2">
                  <LogOut size={16} />
                  <span>Sign out</span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
