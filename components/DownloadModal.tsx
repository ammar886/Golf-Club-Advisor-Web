"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { APP_CONFIG } from "./Config";

export default function DownloadModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="download-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-surface-card rounded-2xl p-6 sm:p-8 shadow-2xl border border-border-subtle"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Close modal"
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-sand-neutral hover:bg-surface-container flex items-center justify-center text-text-muted hover:text-text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div className="flex items-center gap-3 mb-4">
          <Image
            src="/images/logo_gca.jpg"
            alt="Golf Club Advisor Logo"
            width={36}
            height={36}
            className="h-9 w-auto object-contain rounded"
          />
          <div>
            <h3
              id="download-modal-title"
              className="font-headline-sm text-headline-sm text-text-primary tracking-tight"
            >
              Get Golf Club Advisor
            </h3>
            <p className="font-label-sm text-label-sm text-fairway-green uppercase font-semibold">
              iOS & Android Mobile App
            </p>
          </div>
        </div>

        <p className="font-body-md text-body-md text-on-surface-variant mb-6">
          Experience live course elevation meshes, green aeration radar, real-time pace-of-play updates, and verified golfer reviews right on your phone.
        </p>

        {/* Store Links / Status */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {APP_CONFIG.appStoreUrl ? (
            <a
              href={APP_CONFIG.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 bg-inverse-surface hover:bg-on-background text-inverse-on-surface rounded-xl transition-all shadow-sm"
            >
              <span className="material-symbols-outlined text-[26px]">
                phone_iphone
              </span>
              <div className="flex flex-col text-left">
                <span className="font-label-sm text-[10px] uppercase text-outline-variant leading-none">
                  Download on
                </span>
                <span className="font-headline-sm text-label-lg font-bold">
                  App Store
                </span>
              </div>
            </a>
          ) : (
            <div className="flex items-center gap-3 p-3 bg-sand-neutral border border-border-subtle rounded-xl">
              <span className="material-symbols-outlined text-primary text-[26px]">
                phone_iphone
              </span>
              <div className="flex flex-col text-left">
                <span className="font-label-sm text-[10px] uppercase text-text-muted leading-none">
                  Apple iOS
                </span>
                <span className="font-label-md text-label-md text-text-primary font-bold">
                  Release In Review
                </span>
              </div>
            </div>
          )}

          {APP_CONFIG.googlePlayUrl ? (
            <a
              href={APP_CONFIG.googlePlayUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 bg-inverse-surface hover:bg-on-background text-inverse-on-surface rounded-xl transition-all shadow-sm"
            >
              <span className="material-symbols-outlined text-[26px]">
                android
              </span>
              <div className="flex flex-col text-left">
                <span className="font-label-sm text-[10px] uppercase text-outline-variant leading-none">
                  Get it on
                </span>
                <span className="font-headline-sm text-label-lg font-bold">
                  Google Play
                </span>
              </div>
            </a>
          ) : (
            <div className="flex items-center gap-3 p-3 bg-sand-neutral border border-border-subtle rounded-xl">
              <span className="material-symbols-outlined text-fairway-green text-[26px]">
                android
              </span>
              <div className="flex flex-col text-left">
                <span className="font-label-sm text-[10px] uppercase text-text-muted leading-none">
                  Google Android
                </span>
                <span className="font-label-md text-label-md text-text-primary font-bold">
                  Release In Review
                </span>
              </div>
            </div>
          )}
        </div>

        {/* QR Code / Early Access Notification */}
        <div className="p-4 rounded-xl bg-surface-container-low border border-border-subtle">
          {submitted ? (
            <div className="flex items-center gap-3 text-fairway-green">
              <span className="material-symbols-outlined text-[24px]">
                check_circle
              </span>
              <div>
                <p className="font-label-md text-label-md font-bold text-text-primary">
                  You are on the VIP First-Tee List!
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  We will notify you the moment the app goes live in your region.
                </p>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-[18px] text-primary">
                  notifications_active
                </span>
                <span className="font-label-md text-label-md font-bold text-text-primary">
                  Get Instant Launch Alert
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-text-muted mb-3">
                Store verification is currently processing. Enter your email to receive direct invitation access.
              </p>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@club.com"
                  className="flex-1 px-3 py-2 bg-surface-card border border-border-strong rounded-lg font-body-sm text-body-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary-container"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md rounded-lg transition-colors font-semibold"
                >
                  Notify Me
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
