"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import DownloadModal from "./DownloadModal";

export default function Navbar() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  // Close drawer on route change or Escape key
  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [drawerOpen]);

  const navLinks = [
    { label: "Home", href: "/", icon: "home" },
    { label: "Explore Courses", href: "/#interactive-map", icon: "golf_course" },
    { label: "About Us", href: "/about", icon: "info" },
    { label: "Contact Us", href: "/contact", icon: "mail" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy", icon: "shield" },
    { label: "Terms & Conditions", href: "/terms-and-conditions", icon: "gavel" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(15,23,42,0.05)] border-b border-border-subtle/40">
        <div className="h-16 sm:h-20 max-w-[1240px] mx-auto px-4 sm:px-gutter-lg flex items-center justify-between gap-space-sm sm:gap-space-lg">
          
          {/* Left: Mobile Menu Button + Brand Logo & Name */}
          <div className="flex items-center gap-2 sm:gap-space-md">
            {/* Hamburger Button for Mobile */}
            <button
              onClick={() => setDrawerOpen(true)}
              className="md:hidden w-10 h-10 -ml-1 rounded-lg flex items-center justify-center text-on-surface hover:text-primary hover:bg-surface-container transition-colors cursor-pointer"
              aria-label="Open navigation menu"
            >
              <span className="material-symbols-outlined text-[24px]">menu</span>
            </button>

            {/* Logo Link */}
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-space-sm group"
              aria-label="Golf Club Advisor Home"
            >
              <div className="relative h-8 w-8 sm:h-9 sm:w-9 flex items-center justify-center rounded overflow-hidden shadow-xs shrink-0 bg-surface-card">
                <Image
                  src="/images/logo_gca.jpg"
                  alt="Golf Club Advisor Crest"
                  width={36}
                  height={36}
                  className="h-8 sm:h-9 w-auto object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-[16px] sm:text-headline-sm tracking-tight text-primary group-hover:text-primary-container transition-colors font-bold leading-tight">
                  Golf Club Advisor
                </span>
                <span className="hidden sm:inline-block font-label-sm text-[9px] uppercase tracking-wider text-fairway-green font-bold leading-none">
                  Real Golfers. Real Reviews.
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-space-lg lg:gap-space-xl"
            aria-label="Main Navigation"
          >
            <Link
              href="/"
              className={`transition-colors font-label-lg text-label-lg ${
                isActive("/")
                  ? "text-primary font-bold border-b-2 border-primary pb-0.5"
                  : "text-on-surface-variant hover:text-on-surface font-medium"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`transition-colors font-label-lg text-label-lg ${
                isActive("/about")
                  ? "text-primary font-bold border-b-2 border-primary pb-0.5"
                  : "text-on-surface-variant hover:text-on-surface font-medium"
              }`}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className={`transition-colors font-label-lg text-label-lg ${
                isActive("/contact")
                  ? "text-primary font-bold border-b-2 border-primary pb-0.5"
                  : "text-on-surface-variant hover:text-on-surface font-medium"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Action: Get the App & User Icon */}
          <div className="flex items-center gap-2 sm:gap-space-md">
            <button
              onClick={() => setDownloadModalOpen(true)}
              className="inline-flex items-center justify-center h-9 sm:h-auto px-3 sm:px-space-lg py-1.5 sm:py-space-sm bg-primary-container hover:bg-primary text-on-primary font-label-md sm:font-label-lg text-label-md sm:text-label-lg rounded-lg transition-colors shadow-[0_2px_4px_rgba(0,80,157,0.15)] cursor-pointer font-bold"
            >
              Get the App
            </button>

            <button
              onClick={() => setDownloadModalOpen(true)}
              aria-label="User Account"
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary hover:bg-primary-container transition-colors cursor-pointer shrink-0 shadow-xs"
            >
              <span className="material-symbols-outlined text-[18px]">person</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Out Drawer Backdrop */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-inverse-surface/50 backdrop-blur-xs z-50 transition-opacity"
          onClick={() => setDrawerOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Slide-Out Drawer Panel */}
      <aside
        className={`fixed top-0 left-0 bottom-0 w-[84%] max-w-[320px] bg-surface-card z-50 shadow-[0_12px_32px_-4px_rgba(15,23,42,0.18)] flex flex-col transition-transform duration-300 ease-out ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Mobile Navigation Menu"
      >
        {/* Drawer Header */}
        <div className="h-16 px-4 flex items-center justify-between border-b border-border-subtle/50">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo_gca.jpg"
              alt="Logo"
              width={28}
              height={28}
              className="h-7 w-auto object-contain rounded"
            />
            <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Menu
            </span>
          </div>
          <button
            onClick={() => setDrawerOpen(false)}
            className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:text-on-surface rounded-lg hover:bg-surface-container transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>

        {/* Drawer Brand Callout Banner */}
        <div className="p-4">
          <div className="bg-sand-neutral rounded-xl p-3 flex flex-col border border-border-subtle/60">
            <span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">
              REAL GOLFERS. REAL REVIEWS.
            </span>
            <span className="font-body-sm text-[12px] text-text-muted mt-1 leading-snug">
              Unbiased course perspectives and equipment intelligence before you book.
            </span>
          </div>
        </div>

        {/* Main Drawer Links */}
        <nav className="flex-1 px-3 py-1 flex flex-col gap-1 overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setDrawerOpen(false)}
              className={`h-11 px-3 rounded-lg flex items-center gap-3 font-label-lg text-label-lg transition-colors ${
                isActive(link.href)
                  ? "bg-surface-container text-primary font-bold"
                  : "text-on-surface hover:bg-sand-neutral"
              }`}
            >
              <span className={`material-symbols-outlined text-[20px] ${
                isActive(link.href) ? "text-primary" : "text-on-surface-variant"
              }`}>
                {link.icon}
              </span>
              <span>{link.label}</span>
            </Link>
          ))}

          <div className="my-2 border-t border-border-subtle/60 pt-2">
            <span className="px-3 font-label-sm text-[10px] text-text-muted uppercase tracking-widest font-bold block mb-1">
              Legal & Information
            </span>
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setDrawerOpen(false)}
                className={`h-10 px-3 rounded-lg flex items-center gap-3 font-body-sm text-body-sm transition-colors ${
                  isActive(link.href)
                    ? "bg-surface-container text-primary font-bold"
                    : "text-on-surface-variant hover:bg-sand-neutral"
                }`}
              >
                <span className="material-symbols-outlined text-[18px] text-text-muted">
                  {link.icon}
                </span>
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </nav>

        {/* Drawer Bottom Action */}
        <div className="p-4 border-t border-border-subtle/50">
          <button
            onClick={() => {
              setDrawerOpen(false);
              setDownloadModalOpen(true);
            }}
            className="w-full h-12 bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm font-bold cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">download</span>
            <span>Get the App</span>
          </button>
        </div>
      </aside>

      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />
    </>
  );
}
