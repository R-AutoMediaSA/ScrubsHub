"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Helper to check if a link is active
  const isActive = (path: string) => {
    // For the home page
    if (path === '/' && pathname === '/') {
      return true;
    }

    // For other top-level pages
    if (path !== '/' && pathname.startsWith(path)) {
      return true;
    }

    return false;
  };

  return (
    <div className="md:hidden">
      <div className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <div className="flex items-center justify-between p-4">
          <Link href="/" className="block">
            <div className="w-6 h-6 bg-black relative">
              <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-white" />
            </div>
          </Link>
          <span className="text-lg font-medium">ScrubsHub</span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-6 h-6 flex flex-col justify-center items-center gap-1"
            aria-label="Toggle navigation menu"
          >
            <span className={`w-5 h-0.5 bg-foreground transition-transform ${isOpen ? 'rotate-45 translate-y-1' : ''}`} />
            <span className={`w-5 h-0.5 bg-foreground transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`w-5 h-0.5 bg-foreground transition-transform ${isOpen ? '-rotate-45 -translate-y-1' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile navigation menu */}
      <div
        className={`fixed inset-0 z-40 pt-16 bg-background transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="p-6 space-y-8">
          <div className="space-y-4">
            <Link
              href="/"
              className={`block py-2 text-lg ${
                isActive('/') ? "font-bold" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              ScrubsHub
            </Link>
            <Link
              href="/research"
              className={`block py-2 text-lg ${
                isActive('/research') ? "font-bold" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Research
            </Link>
            <Link
              href="/team"
              className={`block py-2 text-lg ${
                isActive('/team') ? "font-bold" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Team
            </Link>
          </div>

          <div className="space-y-4 pt-4 border-t border-border">
            <Link
              href="/research#demo"
              className="block py-2 text-lg"
              onClick={() => setIsOpen(false)}
            >
              App Development
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
