"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-dark/95 backdrop-blur-md border-b border-border-dark"
          : "bg-bg-dark/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex items-center justify-between h-[4.25rem]">
        {/* Logo */}
        <Link href="/" className="flex items-center no-underline">
          <Image src="/logo-tight.png" alt="Moloco" width={904} height={155} className="h-[15px] w-auto" priority />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7 text-[0.875rem] font-medium text-text-on-dark-secondary">
          <Link
            href="/products"
            className="hover:text-text-on-dark transition-colors no-underline"
          >
            Product
          </Link>
          <Link
            href="/about"
            className="hover:text-text-on-dark transition-colors no-underline"
          >
            Enterprise
          </Link>
          <Link
            href="/insights"
            className="hover:text-text-on-dark transition-colors no-underline"
          >
            Resources
          </Link>
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#"
            className="text-[0.875rem] font-medium text-text-on-dark-secondary hover:text-text-on-dark transition-colors no-underline"
          >
            Sign in
          </Link>
          <Link
            href="#"
            className="px-3 py-1 border border-accent text-accent rounded text-[0.75rem] font-medium hover:bg-accent hover:text-bg-dark transition-colors no-underline"
          >
            Get started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] w-6 cursor-pointer bg-transparent border-none"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[1.5px] w-full bg-text-on-dark transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-[6.5px]" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-full bg-text-on-dark transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-full bg-text-on-dark transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg-dark border-t border-border-dark px-6 py-6 flex flex-col gap-4">
          <Link
            href="/products"
            className="text-[1rem] text-text-on-dark no-underline"
            onClick={() => setMenuOpen(false)}
          >
            Product
          </Link>
          <Link
            href="/about"
            className="text-[1rem] text-text-on-dark no-underline"
            onClick={() => setMenuOpen(false)}
          >
            Enterprise
          </Link>
          <Link
            href="/insights"
            className="text-[1rem] text-text-on-dark no-underline"
            onClick={() => setMenuOpen(false)}
          >
            Resources
          </Link>
          <Link
            href="#"
            className="mt-2 px-4 py-2 bg-accent text-bg-dark rounded-md text-[0.8125rem] font-semibold text-center no-underline"
          >
            Get started
          </Link>
        </div>
      )}
    </nav>
  );
}
