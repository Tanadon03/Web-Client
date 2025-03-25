"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

return (
    <nav className="fixed top-0 left-0 w-full bg-gray-100/80 dark:bg-black/40 backdrop-blur-sm z-50 border-b border-rose-600 shadow-[0_4px_8px_rgba(244,63,94,0.4)]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
              <span className="text-2xl">🥀</span>
              <span className="text-xl font-bold text-rose-600" style={{ textShadow: "0 0 8px hsl(347, 77%, 50%)" }}>
                Apocalypse
              </span>
            </Link>
            <div className="hidden md:flex space-x-8 ml-7">
              <Link
                href="/assignment/view-config"
                className={`nav text-gray-700 dark:text-gray-300 transition ${
                  pathname === "/assignment/view-config" ? "active" : ""
                }`}
              >
                Configuration
              </Link>
              <Link
                href="/assignment/temperature-log"
                className={`nav text-gray-700 dark:text-gray-300 transition ${
                  pathname === "/assignment/temperature-log" ? "active" : ""
                }`}
              >
                Temperature
              </Link>
              <Link
                href="/assignment/view-log"
                className={`nav text-gray-700 dark:text-gray-300 transition ${
                  pathname === "/assignment/view-log" ? "active" : ""
                }`}
              >
                logs
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="nav text-gray-700 dark:text-gray-300 transition"
            >
              {theme === "light" ? <Moon className="h-7 w-7" /> : <Sun className="h-7 w-7" />}
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300"
            >
              {isOpen ? <X className="h-9 w-9" /> : <Menu className="h-9 w-9" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className={`mobile-menu flex flex-col space-y-4 py-4 items-center ${
              isOpen ? "mobile-menu-enter mobile-menu-enter-active" : "mobile-menu-exit mobile-menu-exit-active"
            }`}>
              <div className="flex flex-col space-y-4 py-4 items-center">
              <Link
                  href="/assignment/view-config"
                  className={`nav text-gray-700 dark:text-gray-300 transition ${
                    pathname === "/assignment/view-config" ? "active" : ""
                  }`}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Configuration
                </Link>
                <Link
                  href="/assignment/temperature-log"
                  className={`nav text-gray-700 dark:text-gray-300 transition ${
                    pathname === "/assignment/temperature-log" ? "active" : ""
                  }`}
                  onClick={() => setIsOpen(!isOpen)}

                >
                  Temperature
                </Link>
                <Link
                  href="/assignment/view-log"
                  className={`nav text-gray-700 dark:text-gray-300 transition ${
                    pathname === "/assignment/view-log" ? "active" : ""
                  }`}
                  onClick={() => setIsOpen(!isOpen)}

                >
                  logs
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  className="nav text-gray-700 dark:text-gray-300 transition"
                  onClick={() => {
                    toggleTheme(); // เรียกฟังก์ชันสลับธีม
                    setIsOpen(!isOpen); // เรียกฟังก์ชันสลับสถานะเปิด/ปิด
                  }}
                >
                  {theme === "light" ? <Moon className="h-7 w-7" /> : <Sun className="h-7 w-7" />}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}