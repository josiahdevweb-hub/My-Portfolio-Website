"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-navy-950/95 backdrop-blur-md shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gold-500 flex items-center justify-center text-navy-950 font-bold text-lg font-[family-name:var(--font-geist-sans)] transition-transform group-hover:scale-105">
            JM
          </div>
          <div className="hidden sm:block">
            <span className="text-cream-100 font-bold text-lg tracking-tight font-[family-name:var(--font-geist-sans)]">
              JOSIAH MWANGI
            </span>
            <span className="hidden md:inline text-gold-400/60 text-sm ml-3 border-l border-navy-600 pl-3">
              Consultant & Digital Professional
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors rounded-md",
                pathname === link.href
                  ? "text-gold-400"
                  : "text-cream-100/70 hover:text-cream-100"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            className="ml-4 bg-transparent border border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-navy-950 transition-all duration-300 rounded-md"
          >
            <Link href="/contact">GET IN TOUCH</Link>
          </Button>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-cream-100 p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-navy-900/98 backdrop-blur-lg border-t border-navy-700 animate-fade-in">
          <nav className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-3 rounded-lg text-base font-medium transition-colors",
                  pathname === link.href
                    ? "text-gold-400 bg-navy-800"
                    : "text-cream-100/70 hover:text-cream-100 hover:bg-navy-800/50"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="mt-4 bg-gold-500 text-navy-950 hover:bg-gold-400 font-semibold"
            >
              <Link href="/contact">GET IN TOUCH</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
