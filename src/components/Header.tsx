"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui/resizable-navbar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { link: "/#home", name: "Home" },
    { link: "/#work", name: "Portfolio" },
    { link: "/#seo-results", name: "SEO" },
    { link: "/#web-landing-works", name: "Websites" },
  ];

  return (
    <div className="fixed left-0 right-0 top-0 z-50 w-full">
      <Navbar className="top-4">
        <NavBody>
          <Link
            href="/#home"
            className="relative z-50 mr-8 flex items-center gap-2"
          >
            <Image
              src="/assets/tm-logo.png"
              alt="Talent Mucho Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <div className="flex flex-col">
              <span
                className="text-lg font-bold leading-tight"
                style={{ color: "var(--primary)" }}
              >
                TALENT
              </span>
              <span
                className="text-sm font-medium leading-tight"
                style={{ color: "var(--foreground-light)" }}
              >
                MUCHO
              </span>
            </div>
          </Link>

          <NavItems items={navLinks} className="text-[var(--foreground)]" />

          <div className="hidden lg:flex items-center gap-4 relative z-50 ml-auto">
            <Link
              href="#booking"
              className="px-6 py-2 rounded-full font-semibold text-white transition-all duration-300 shadow-md hover:translate-y-[-2px] hover:shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, var(--primary) 0%, var(--accent-dark) 100%)",
              }}
            >
              Book a Call
            </Link>
          </div>
        </NavBody>

        <MobileNav visible={true} className="lg:hidden">
          <MobileNavHeader>
            <Link href="/#home" className="flex items-center gap-2">
              <Image
                src="/assets/tm-logo.png"
                alt="Talent Mucho Logo"
                width={32}
                height={32}
                className="rounded-md"
              />
              <div className="flex flex-col">
                <span
                  className="text-base font-bold leading-tight"
                  style={{ color: "var(--primary)" }}
                >
                  TALENT
                </span>
                <span
                  className="text-xs font-medium leading-tight"
                  style={{ color: "var(--foreground-light)" }}
                >
                  MUCHO
                </span>
              </div>
            </Link>
            <MobileNavToggle
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <div className="flex flex-col gap-4 w-full">
              {navLinks.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  className="text-lg font-medium py-2 border-b border-beige-200"
                  style={{ color: "var(--foreground)" }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#booking"
                className="w-full text-center px-6 py-3 rounded-xl font-bold text-white mt-2"
                style={{
                  background:
                    "linear-gradient(135deg, var(--primary) 0%, var(--accent-dark) 100%)",
                }}
                onClick={() => setIsOpen(false)}
              >
                Book a Call
              </Link>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
