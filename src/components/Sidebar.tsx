import Link from "next/link";
import { ThemeToggleWrapper } from "@/components/ui/theme-toggle";
import { ActiveLink } from "@/components/ActiveLink";

export default function Sidebar() {
  return (
    <div className="sidebar text-center flex flex-col h-full relative">
      {/* Main centered content */}
      <div className="flex flex-col justify-center items-center h-full">
        <div className="mb-8">
          <Link href="/" className="block group">
            {/* ScrubsHub Medical Logo */}
            <div className="flex items-center justify-center mb-3">
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 32 32" 
                className="group-hover:scale-110 transition-transform duration-200"
              >
                {/* Medical cross in modern style */}
                <rect x="12" y="6" width="8" height="20" rx="2" className="fill-primary" />
                <rect x="6" y="12" width="20" height="8" rx="2" className="fill-primary" />
                {/* Subtle inner details */}
                <rect x="14" y="8" width="4" height="16" rx="1" className="fill-primary-foreground opacity-20" />
                <rect x="8" y="14" width="16" height="4" rx="1" className="fill-primary-foreground opacity-20" />
              </svg>
            </div>
            <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
              ScrubsHub
            </div>
          </Link>
        </div>

        <nav className="space-y-4">
          <div className="space-y-3">
            <ActiveLink href="/research">Research</ActiveLink>
            <ActiveLink href="/team">Team</ActiveLink>
          </div>

          <div className="pt-4">
            <ActiveLink href="/app-development">App Development</ActiveLink>
          </div>
        </nav>
      </div>

      {/* Theme Toggle - centered at bottom */}
      <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center space-y-2">
        <ThemeToggleWrapper />
        <span className="text-xs text-muted-foreground">Theme</span>
      </div>
    </div>
  );
}
