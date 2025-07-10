import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";

const inter = {
  className: ""
}; // Remove or replace with your font logic if needed

export const metadata: Metadata = {
  title: "ScrubsHub",
  description:
    "We believe in a future where computers are lifelike. Where they can see, hear, and collaborate with us – as we do with each other. With this vision, we're designing a new kind of computer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased min-h-screen transition-colors duration-300`}>
        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <Sidebar />
        </div>
        {/* Mobile Navigation */}
        <MobileNav />
        <main className="md:ml-64 p-6 md:p-8 lg:p-16 min-h-screen pt-16 md:pt-0">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
