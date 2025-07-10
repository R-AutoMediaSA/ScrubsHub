"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
}

export function ActiveLink({ href, children }: ActiveLinkProps) {
  const pathname = usePathname();
  
  const isActive = () => {
    // For the home page
    if (href === "/" && pathname === "/") {
      return true;
    }

    // For other top-level pages
    if (href !== "/" && pathname.startsWith(href)) {
      return true;
    }

    return false;
  };

  return (
    <Link
      href={href}
      className={`block py-1 ${
        isActive() ? "font-bold" : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {children}
    </Link>
  );
} 