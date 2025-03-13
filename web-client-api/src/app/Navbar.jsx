"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

return (
    <nav className="fixed top-0 left-0 w-full bg-gray-100/80 dark:bg-black/40 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl">🥀</span>
              <span className="text-xl font-bold text-rose-600" style={{ textShadow: "0 0 8px hsl(347, 77%, 50%)" }}>
                Apocalypse
              </span>
            </Link>
            <div className="hidden md:flex space-x-8 ml-7">
                <Link href="/assignment/view-config" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
                Page1
                </Link>
                <Link href="/assignment/temperature-log" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
                Page2
                </Link>
                <Link href="/assignment/view-log" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
                Page3
                </Link>
            </div>
          </div>

        

          <div className="hidden md:flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-900"
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 py-4">
              <Link href="/page1" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition" onClick={() => setIsOpen(false)}>
                Page1
              </Link>
              <Link href="/page2" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition" onClick={() => setIsOpen(false)}>
                Page2
              </Link>
              <Link href="/page3" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition" onClick={() => setIsOpen(false)}>
                Page3
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 self-start"
              >
                {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}