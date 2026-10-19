"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import DownloadModal from "./DownloadModal";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(15,23,42,0.05)] border-b border-border-subtle/40">
        <div className="h-20 max-w-[1240px] mx-auto px-gutter-lg flex items-center justify-between gap-space-lg">
          {/* Logo & Brand Name */}
          <Link
            href="/"
            className="flex items-center gap-space-md group"
            aria-label="Golf Club Advisor Home"
          >
            <div className="relative h-9 w-9 flex items-center justify-center rounded overflow-hidden shadow-xs">
              <Image
                src="/images/logo_gca.jpg"
                alt="Golf Club Advisor Crest"
                width={36}
                height={36}
                className="h-9 w-auto object-contain"
                priority
              />
            </div>
            <span className="font-headline-sm text-headline-sm tracking-tight text-primary group-hover:text-primary-container transition-colors font-bold">
              Golf Club Advisor
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-space-xl"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors font-label-lg text-label-lg ${
                  isActive(link.href)
                    ? "text-primary font-bold"
                    : "text-on-surface-variant hover:text-on-surface font-medium"
                }`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action: Get the App & User Icon */}
          <div className="flex items-center gap-space-md">
            <button
              onClick={() => setDownloadModalOpen(true)}
              className="hidden sm:inline-flex items-center justify-center px-space-lg py-space-sm bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg rounded-lg transition-colors shadow-[0_2px_4px_rgba(0,80,157,0.15)] cursor-pointer"
            >
              Get the App
            </button>

            <button
              onClick={() => setDownloadModalOpen(true)}
              aria-label="User Account"
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary hover:bg-primary-container transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">
                person
              </span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center text-on-surface hover:text-primary hover:bg-surface-container transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <span className="material-symbols-outlined text-[26px]">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-surface-card border-b border-border-subtle px-gutter-lg py-space-lg shadow-xl animate-fade-in">
            <div className="flex flex-col gap-space-md">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg py-2 transition-colors ${
                    isActive(link.href)
                      ? "text-primary font-bold"
                      : "text-on-surface-variant font-medium"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-border-subtle flex flex-col gap-3">
                <Link
                  href="/privacy-policy"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-body-sm text-text-muted hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-and-conditions"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-body-sm text-text-muted hover:text-primary transition-colors"
                >
                  Terms & Conditions
                </Link>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setDownloadModalOpen(true);
                  }}
                  className="w-full mt-2 py-3 bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md rounded-lg text-center font-bold transition-colors shadow-sm"
                >
                  Get the App
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />
    </>
  );
}
