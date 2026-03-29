"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#work", label: "Portfolio" },
  { href: "/#seo-results", label: "SEO" },
  { href: "/#web-landing-works", label: "Websites" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 px-4 py-3 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
        {/* Logo */}
        <Link href="/#home" className="flex items-center">
          <Image
            src="/assets/tm-logo.png"
            alt="Talent Mucho"
            width={140}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-full h-8 px-4 inline-flex items-center font-medium text-sm text-espresso-800 hover:bg-beige-100 transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="#booking"
            className="hidden lg:inline-flex btn-primary text-sm py-2 px-6 rounded-full"
          >
            Book a Call
          </Link>
          <button
            className="lg:hidden p-2 text-charcoal-900 hover:bg-beige-100 rounded-full transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-charcoal-900/40 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-4/5 max-w-sm bg-beige-50 z-50 shadow-2xl flex flex-col lg:hidden border-r border-beige-200"
            >
              <div className="p-6 flex items-center justify-between border-b border-beige-200/50 flex-shrink-0">
                <Image
                  src="/assets/tm-logo.png"
                  alt="Talent Mucho"
                  width={110}
                  height={32}
                  className="h-8 w-auto object-contain"
                />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-charcoal-900 hover:bg-beige-200/50 rounded-full transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 flex-1 flex flex-col gap-2">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center p-3 rounded-xl text-charcoal-900 font-medium hover:bg-beige-100 transition-colors border border-transparent hover:border-beige-200/50"
                  >
                    {label}
                  </Link>
                ))}
              </div>

              <div className="p-6 border-t border-beige-200/50 bg-white flex-shrink-0">
                <Link
                  href="#booking"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full py-4 bg-charcoal-900 text-beige-50 font-medium rounded-xl shadow-lg hover:bg-clay-600 transition-colors"
                >
                  Book a Strategy Call
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
