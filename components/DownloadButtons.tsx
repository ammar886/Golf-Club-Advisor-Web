"use client";

import React, { useState } from "react";
import DownloadModal from "./DownloadModal";
import { APP_CONFIG } from "./Config";

export default function DownloadButtons({
  theme = "dark",
  className = "",
}: {
  theme?: "dark" | "light";
  className?: string;
}) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = (e: React.MouseEvent, url?: string) => {
    if (!url) {
      e.preventDefault();
      setModalOpen(true);
    }
  };

  const isDark = theme === "dark";

  const btnClasses = isDark
    ? "flex items-center gap-space-sm px-space-lg py-space-sm bg-inverse-surface hover:bg-on-background text-inverse-on-surface rounded-xl transition-all shadow-md hover:shadow-lg"
    : "flex items-center gap-space-sm px-space-lg py-space-sm bg-surface-card hover:bg-sand-neutral text-text-primary rounded-xl transition-all shadow-md hover:shadow-lg border border-border-subtle";

  const subtextClass = isDark
    ? "font-label-sm text-[10px] uppercase text-outline-variant leading-none"
    : "font-label-sm text-[10px] uppercase text-text-muted leading-none";

  const maintextClass = "font-headline-sm text-label-lg font-bold leading-tight";

  const iconClass = isDark ? "text-inverse-on-surface" : "text-primary";

  return (
    <>
      <div className={`flex flex-wrap items-center gap-space-md ${className}`}>
        {/* App Store Button */}
        <a
          href={APP_CONFIG.appStoreUrl || "#"}
          onClick={(e) => handleClick(e, APP_CONFIG.appStoreUrl)}
          className={btnClasses}
          aria-label="Download on the Apple App Store"
        >
          <span className={`material-symbols-outlined text-[28px] ${iconClass}`}>
            phone_iphone
          </span>
          <div className="flex flex-col text-left">
            <span className={subtextClass}>Download on</span>
            <span className={maintextClass}>App Store</span>
          </div>
        </a>

        {/* Google Play Button */}
        <a
          href={APP_CONFIG.googlePlayUrl || "#"}
          onClick={(e) => handleClick(e, APP_CONFIG.googlePlayUrl)}
          className={btnClasses}
          aria-label="Get it on Google Play"
        >
          <span className={`material-symbols-outlined text-[28px] ${iconClass}`}>
            android
          </span>
          <div className="flex flex-col text-left">
            <span className={subtextClass}>Get it on</span>
            <span className={maintextClass}>Google Play</span>
          </div>
        </a>
      </div>

      <DownloadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
