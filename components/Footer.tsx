"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { APP_CONFIG } from "./Config";
import DownloadModal from "./DownloadModal";

export default function Footer() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  const handleStoreClick = (e: React.MouseEvent, url?: string) => {
    if (!url) {
      e.preventDefault();
      setDownloadModalOpen(true);
    }
  };

  return (
    <>
      <footer className="w-full bg-surface-container-low text-on-surface py-margin-lg shadow-[0_-1px_8px_rgba(15,23,42,0.02)] border-t border-border-subtle/50">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-gutter-lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-space-xl pb-space-xl">
            {/* Col 1: Brand Info */}
            <div className="md:col-span-5 flex flex-col gap-space-md">
              <div className="flex items-center gap-space-sm">
                <Image
                  src="/images/logo_gca.jpg"
                  alt="Golf Club Advisor Logo"
                  width={28}
                  height={28}
                  className="h-7 w-auto object-contain rounded"
                />
                <span className="font-headline-sm text-headline-sm tracking-tight text-primary font-bold">
                  Golf Club Advisor
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md leading-relaxed">
                Precision golf course navigation, authoritative equipment architecture reviews, and bespoke course matching built for dedicated golfers worldwide.
              </p>
              <div className="pt-space-xs">
                <span className="font-label-md text-label-md text-on-surface-variant">
                  Support:{" "}
                </span>
                <a
                  className="font-body-sm text-body-sm text-primary hover:text-primary-container font-medium transition-colors"
                  href={`mailto:${APP_CONFIG.supportEmail}`}
                >
                  {APP_CONFIG.supportEmail}
                </a>
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div className="md:col-span-3 flex flex-col gap-space-sm">
              <h3 className="font-label-lg text-label-lg text-text-primary tracking-wide uppercase font-bold">
                Navigation
              </h3>
              <ul className="flex flex-col gap-space-xs font-body-md text-body-md">
                <li className="leading-none">
                  <Link
                    href="/"
                    className="text-on-surface-variant hover:text-primary transition-colors py-1 inline-block"
                  >
                    Home
                  </Link>
                </li>
                <li className="leading-none">
                  <Link
                    href="/about"
                    className="text-on-surface-variant hover:text-primary transition-colors py-1 inline-block"
                  >
                    About Us
                  </Link>
                </li>
                <li className="leading-none">
                  <Link
                    href="/contact"
                    className="text-on-surface-variant hover:text-primary transition-colors py-1 inline-block"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="leading-none">
                  <Link
                    href="/privacy-policy"
                    className="text-on-surface-variant hover:text-primary transition-colors py-1 inline-block"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="leading-none">
                  <Link
                    href="/terms-and-conditions"
                    className="text-on-surface-variant hover:text-primary transition-colors py-1 inline-block"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Experience on Mobile */}
            <div className="md:col-span-4 flex flex-col gap-space-md">
              <h3 className="font-label-lg text-label-lg text-text-primary tracking-wide uppercase font-bold">
                Experience on Mobile
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Unlock live tournament yardages, tactile swing tracking, and premium handicap analytics on iOS and Android.
              </p>
              <div className="flex flex-wrap gap-space-sm">
                <a
                  href={APP_CONFIG.appStoreUrl || "#"}
                  onClick={(e) => handleStoreClick(e, APP_CONFIG.appStoreUrl)}
                  className="flex items-center gap-space-xs px-space-md py-space-xs bg-inverse-surface hover:bg-on-background text-inverse-on-surface rounded-lg transition-colors cursor-pointer"
                  aria-label="Download on App Store"
                >
                  <span className="material-symbols-outlined text-[24px]">
                    phone_iphone
                  </span>
                  <div className="flex flex-col text-left">
                    <span className="font-label-sm text-[10px] leading-3 uppercase text-outline-variant">
                      Download on
                    </span>
                    <span className="font-label-md text-label-md leading-4 font-bold">
                      App Store
                    </span>
                  </div>
                </a>

                <a
                  href={APP_CONFIG.googlePlayUrl || "#"}
                  onClick={(e) => handleStoreClick(e, APP_CONFIG.googlePlayUrl)}
                  className="flex items-center gap-space-xs px-space-md py-space-xs bg-inverse-surface hover:bg-on-background text-inverse-on-surface rounded-lg transition-colors cursor-pointer"
                  aria-label="Get it on Google Play"
                >
                  <span className="material-symbols-outlined text-[24px]">
                    android
                  </span>
                  <div className="flex flex-col text-left">
                    <span className="font-label-sm text-[10px] leading-3 uppercase text-outline-variant">
                      Get it on
                    </span>
                    <span className="font-label-md text-label-md leading-4 font-bold">
                      Google Play
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Copyright and Legal Bar */}
          <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md bg-surface-container/40 px-space-md py-space-sm rounded-lg border border-border-subtle/30">
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              © 2025 Golf Club Advisor Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-space-lg font-body-sm text-body-sm">
              <Link
                href="/privacy-policy"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-outline-variant text-[12px]">•</span>
              <Link
                href="/terms-and-conditions"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />
    </>
  );
}
