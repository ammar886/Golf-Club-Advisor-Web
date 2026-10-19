"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { APP_CONFIG } from "@/components/Config";

export default function ContactPage() {
  const [hqTime, setHqTime] = useState("");
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [inquiryTopic, setInquiryTopic] = useState("");
  const [handicapIndex, setHandicapIndex] = useState("");
  const [homeFacility, setHomeFacility] = useState("");
  const [message, setMessage] = useState("");

  const [charCount, setCharCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "unconfigured" | "error"
  >("idle");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format in EST (Jupiter, FL)
      const formatted = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }).format(now);
      setHqTime(`${formatted} EST`);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    setCharCount(e.target.value.length);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate fields
    if (!fullName || !emailAddress || !inquiryTopic || !message) {
      setIsSubmitting(false);
      return;
    }

    // According to Phase 5: "Do not simulate successful contact-form submission if no real backend is connected."
    // "A clear placeholder for the contact form's backend integration if no email service is configured."
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionStatus("unconfigured");
    }, 600);
  };

  const openMailtoFallback = () => {
    const subject = encodeURIComponent(`[GCA Inquiries: ${inquiryTopic || "General"}] from ${fullName}`);
    const body = encodeURIComponent(
      `Name: ${fullName}\nEmail: ${emailAddress}\nHandicap: ${handicapIndex || "N/A"}\nHome Club: ${homeFacility || "N/A"}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${APP_CONFIG.supportEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. System Telemetry Status Banner */}
      <section className="w-full bg-surface-container-low py-space-sm px-gutter-lg border-b border-border-subtle/40 pt-24 md:pt-28">
        <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-sm text-on-surface-variant font-label-md text-label-md">
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-fairway-green animate-pulse" />
            <span className="font-semibold text-text-primary">
              System Telemetry Operational:
            </span>
            <span>Course Elevation Mesh v4.8 &amp; Real-time Vector Grid active worldwide.</span>
          </div>
          <div className="flex items-center gap-space-lg text-on-surface-variant font-label-md text-label-md">
            <span className="flex items-center gap-1">
              <span
                className="material-symbols-outlined text-[16px] text-fairway-green"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              Live Dispatch Queue: Normal
            </span>
            <span className="text-outline-variant">•</span>
            <span className="font-medium text-text-primary">
              HQ Time: <span className="tabular-nums">{hqTime || "11:42 AM EST"}</span>
            </span>
          </div>
        </div>
      </section>

      {/* 2. Main Editorial Header Area */}
      <section className="relative w-full py-margin-md md:py-margin-lg px-gutter-lg overflow-hidden bg-background">
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-surface-container-high/60 blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute left-1/3 bottom-0 w-80 h-80 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"
        />

        <div className="max-w-[1240px] mx-auto relative z-10 flex flex-col gap-space-md">
          <div className="flex flex-wrap items-center gap-space-sm">
            <span className="px-space-sm py-space-xs rounded-lg bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-wider font-bold">
              Clubhouse Concierge • Global Inquiries
            </span>
            <span className="text-outline-variant text-[12px]">•</span>
            <span className="font-label-md text-label-md text-text-muted flex items-center gap-1 font-semibold">
              <span className="material-symbols-outlined text-[15px] text-secondary">
                location_on
              </span>{" "}
              {APP_CONFIG.hqLocation}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end">
            <div className="lg:col-span-8">
              <h1 className="font-display text-[34px] sm:text-[44px] md:text-display text-text-primary tracking-tight font-extrabold">
                We&apos;re here to help your game.
              </h1>
              <p className="font-body-lg text-body-lg text-text-muted mt-space-sm max-w-2xl leading-relaxed">
                Have questions, club suggestions, feedback, or need app support? Get in touch with our team of golf specialists and telemetry engineers.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="bg-surface-card p-space-md rounded-xl shadow-xs border border-border-subtle flex items-center gap-space-md w-full sm:w-auto">
                <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[26px]">
                    headset_mic
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-text-muted font-bold">
                    Direct Hotline Desk
                  </span>
                  <span className="font-headline-sm text-headline-sm text-text-primary tabular-nums font-bold">
                    {APP_CONFIG.phone}
                  </span>
                  <span className="font-body-sm text-body-sm text-fairway-green font-medium">
                    Toll-free • {APP_CONFIG.hours}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Split Contact Columns */}
      <section className="w-full pb-margin-lg px-gutter-lg bg-background">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg">
          {/* Left Column: Commitment, Desks, Frequent Queries & Visual Banner */}
          <div className="lg:col-span-5 flex flex-col gap-space-lg">
            {/* 24-Hour Commitment Card */}
            <div className="bg-primary text-on-primary p-space-lg rounded-xl shadow-md relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none text-on-primary">
                <span className="material-symbols-outlined text-[140px]">
                  timer
                </span>
              </div>
              <div className="flex items-center gap-space-xs font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed mb-space-sm font-bold">
                <span className="material-symbols-outlined text-[16px] text-primary-fixed">
                  schedule
                </span>
                Reliable Cadence — 24–Hour Commitment
              </div>
              <h2 className="font-headline-md text-headline-md text-on-primary font-bold mb-space-xs">
                Every inquiry analyzed by certified specialists.
              </h2>
              <p className="font-body-md text-body-md text-primary-fixed/90 leading-relaxed">
                Whether analyzing course GPS mapping tickets or evaluating equipment telemetry, our specialists respond within one business day.
              </p>
              <div className="mt-space-md pt-space-sm flex items-center justify-between text-on-primary font-label-md text-label-md border-t border-white/10">
                <span className="flex items-center gap-1 font-semibold">
                  <span className="material-symbols-outlined text-[16px] text-secondary-fixed">
                    check_circle
                  </span>{" "}
                  Average reply: 2.4 hrs
                </span>
                <span className="text-primary-fixed/70">Ticket Resolution: 99.4%</span>
              </div>
            </div>

            {/* Direct Desks Section */}
            <div className="bg-surface-card p-space-lg rounded-xl shadow-xs border border-border-subtle flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-text-muted font-bold">
                    Dedicated Contacts
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-text-primary font-bold">
                    Direct Desks
                  </h3>
                </div>
                <span className="px-space-sm py-space-xs rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant font-medium">
                  Mon–Sat 08:00–18:00 EST
                </span>
              </div>

              <div className="flex flex-col gap-space-sm">
                {/* Desk 1 */}
                <a
                  className="group p-space-md rounded-lg bg-sand-neutral hover:bg-surface-container transition-all flex items-start gap-space-md border border-transparent hover:border-border-subtle"
                  href={`mailto:${APP_CONFIG.supportEmail}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-surface-card flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors shrink-0">
                    <span className="material-symbols-outlined text-[20px]">
                      sports_golf
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-label-lg text-label-lg text-text-primary group-hover:text-primary transition-colors font-bold">
                        App &amp; Course Support
                      </h4>
                      <span className="material-symbols-outlined text-[16px] text-text-muted group-hover:translate-x-0.5 transition-transform">
                        arrow_outward
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-text-muted truncate">
                      {APP_CONFIG.supportEmail}
                    </p>
                    <span className="font-label-sm text-label-sm text-fairway-green mt-1 inline-block font-semibold">
                      Scorecards, pin accuracy, hole flyovers
                    </span>
                  </div>
                </a>

                {/* Desk 2 */}
                <a
                  className="group p-space-md rounded-lg bg-sand-neutral hover:bg-surface-container transition-all flex items-start gap-space-md border border-transparent hover:border-border-subtle"
                  href={`mailto:${APP_CONFIG.partnersEmail}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-surface-card flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors shrink-0">
                    <span className="material-symbols-outlined text-[20px]">
                      handshake
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-label-lg text-label-lg text-text-primary group-hover:text-primary transition-colors font-bold">
                        Business &amp; Partnerships
                      </h4>
                      <span className="material-symbols-outlined text-[16px] text-text-muted group-hover:translate-x-0.5 transition-transform">
                        arrow_outward
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-text-muted truncate">
                      {APP_CONFIG.partnersEmail}
                    </p>
                    <span className="font-label-sm text-label-sm text-primary mt-1 inline-block font-semibold">
                      Course managers, PGA coaches, resort integrations
                    </span>
                  </div>
                </a>

                {/* Desk 3 */}
                <a
                  className="group p-space-md rounded-lg bg-sand-neutral hover:bg-surface-container transition-all flex items-start gap-space-md border border-transparent hover:border-border-subtle"
                  href={`mailto:${APP_CONFIG.pressEmail}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-surface-card flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors shrink-0">
                    <span className="material-symbols-outlined text-[20px]">
                      newspaper
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-label-lg text-label-lg text-text-primary group-hover:text-primary transition-colors font-bold">
                        Press &amp; Media Enquiries
                      </h4>
                      <span className="material-symbols-outlined text-[16px] text-text-muted group-hover:translate-x-0.5 transition-transform">
                        arrow_outward
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-text-muted truncate">
                      {APP_CONFIG.pressEmail}
                    </p>
                    <span className="font-label-sm text-label-sm text-tertiary-container mt-1 inline-block font-semibold">
                      Editorial interviews, press kits, analytics briefings
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Frequent Queries */}
            <div className="bg-surface-card p-space-lg rounded-xl shadow-xs border border-border-subtle">
              <div className="flex items-center justify-between mb-space-sm">
                <h3 className="font-headline-sm text-headline-sm text-text-primary flex items-center gap-2 font-bold">
                  <span className="material-symbols-outlined text-primary text-[22px]">
                    help_outline
                  </span>
                  Frequent Queries
                </h3>
                <span className="font-label-sm text-label-sm text-text-muted">
                  Instant Solutions
                </span>
              </div>
              <div className="flex flex-col gap-space-xs">
                <button
                  type="button"
                  onClick={() => {
                    setInquiryTopic("gps");
                    setMessage("I would like to submit updated course slope and rating information for...");
                  }}
                  className="group p-space-sm rounded-lg hover:bg-sand-neutral transition-colors flex items-center justify-between text-left cursor-pointer w-full"
                >
                  <div className="flex items-center gap-space-sm">
                    <span className="w-6 h-6 rounded-full bg-surface-container flex items-center justify-center text-primary font-label-sm text-[11px] font-bold">
                      01
                    </span>
                    <span className="font-body-md text-body-md text-text-primary group-hover:text-primary transition-colors font-medium">
                      Submitting updated course slope &amp; ratings
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-[18px] text-text-muted group-hover:text-primary group-hover:translate-x-1 transition-all">
                    chevron_right
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setInquiryTopic("handicap");
                    setMessage("I have a question about calibrating wind vector telemetry with Apple Watch...");
                  }}
                  className="group p-space-sm rounded-lg hover:bg-sand-neutral transition-colors flex items-center justify-between text-left cursor-pointer w-full"
                >
                  <div className="flex items-center gap-space-sm">
                    <span className="w-6 h-6 rounded-full bg-surface-container flex items-center justify-center text-primary font-label-sm text-[11px] font-bold">
                      02
                    </span>
                    <span className="font-body-md text-body-md text-text-primary group-hover:text-primary transition-colors font-medium">
                      Calibrating wind vector elevation on Apple Watch
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-[18px] text-text-muted group-hover:text-primary group-hover:translate-x-1 transition-all">
                    chevron_right
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setInquiryTopic("course-pro");
                    setMessage("Our course pro shop would like to explore integration options...");
                  }}
                  className="group p-space-sm rounded-lg hover:bg-sand-neutral transition-colors flex items-center justify-between text-left cursor-pointer w-full"
                >
                  <div className="flex items-center gap-space-sm">
                    <span className="w-6 h-6 rounded-full bg-surface-container flex items-center justify-center text-primary font-label-sm text-[11px] font-bold">
                      03
                    </span>
                    <span className="font-body-md text-body-md text-text-primary group-hover:text-primary transition-colors font-medium">
                      Course pro-shop membership integration protocol
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-[18px] text-text-muted group-hover:text-primary group-hover:translate-x-1 transition-all">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>

            {/* Visual Photo Banner */}
            <div className="relative rounded-xl overflow-hidden shadow-xs h-64 group bg-slate-900 border border-border-subtle">
              <div
                className="bg-cover bg-center w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA5rbi2KIJzuW8v3755gIbXDyKbeXQ740tzfnkks5zvqU2sWxl1zmJlw_6fkMpY4QzL-LTj7l4iuKV3hlNgF1dMFb6ZlZAbDqOMhtzDEr9a4d0By9GvDi3JJrISAKbV4enAZZJN59wGKpMoi8PBwuIgR1ruGhUDYLcT_XIOSuSVnqr85m7cjPCFeaVZYCuG5QdZCBlXDH5Oqz1TXmb2FgWhysoMHyHkA8iy4cuy')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/30 to-transparent flex flex-col justify-end p-space-lg text-inverse-on-surface">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed font-bold">
                  Field Tested Reliability
                </span>
                <p className="font-headline-sm text-headline-sm font-bold text-white mt-0.5">
                  Built on the links. Verified by tour professionals.
                </p>
                <p className="font-body-sm text-body-sm text-inverse-on-surface/80 mt-1">
                  Our advisory board reviews fairway topography and tee alignments across 6 continents.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Dispatch Interactive Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-surface-card p-space-lg md:p-space-xl rounded-xl shadow-xs border border-border-subtle flex flex-col gap-space-lg sticky top-24">
              {/* Form Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-sm border-b border-border-subtle/50">
                <div>
                  <div className="flex items-center gap-space-xs font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                    <span className="material-symbols-outlined text-[16px]">
                      send
                    </span>{" "}
                    Direct Dispatch
                  </div>
                  <h2 className="font-headline-md text-headline-md text-text-primary font-bold">
                    Submit Your Query
                  </h2>
                </div>
                <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-secondary-container/30 text-fairway-green font-label-md text-label-md font-semibold self-start sm:self-auto border border-secondary-container/40">
                  <span className="w-2 h-2 rounded-full bg-fairway-green animate-pulse" />
                  <span>Staff Online</span>
                </div>
              </div>

              {/* Contact Form */}
              <form
                className="flex flex-col gap-space-md"
                id="dispatch-form"
                onSubmit={handleFormSubmit}
              >
                {/* Row: Full Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="font-label-md text-label-md text-text-primary font-bold"
                      htmlFor="fullName"
                    >
                      Full Name <span className="text-flag-accent">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <span className="material-symbols-outlined absolute left-3 text-text-muted text-[18px]">
                        person
                      </span>
                      <input
                        className="w-full pl-10 pr-3 py-2.5 bg-surface border border-border-strong rounded-lg font-body-md text-body-md text-text-primary placeholder:text-text-muted focus:bg-surface-card focus:outline-none focus:ring-2 focus:ring-primary-container transition-all"
                        id="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Cameron Smith"
                        required
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      className="font-label-md text-label-md text-text-primary font-bold"
                      htmlFor="emailAddress"
                    >
                      Email Address <span className="text-flag-accent">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <span className="material-symbols-outlined absolute left-3 text-text-muted text-[18px]">
                        alternate_email
                      </span>
                      <input
                        className="w-full pl-10 pr-3 py-2.5 bg-surface border border-border-strong rounded-lg font-body-md text-body-md text-text-primary placeholder:text-text-muted focus:bg-surface-card focus:outline-none focus:ring-2 focus:ring-primary-container transition-all"
                        id="emailAddress"
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
                        placeholder="cameron@linksclub.org"
                        required
                        type="email"
                      />
                    </div>
                  </div>
                </div>

                {/* Inquiry Topic Dropdown */}
                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-label-md text-label-md text-text-primary font-bold"
                    htmlFor="inquiryTopic"
                  >
                    Inquiry Topic <span className="text-flag-accent">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3 text-text-muted text-[18px]">
                      category
                    </span>
                    <select
                      className="w-full pl-10 pr-10 py-2.5 bg-surface border border-border-strong rounded-lg font-body-md text-body-md text-text-primary appearance-none focus:bg-surface-card focus:outline-none focus:ring-2 focus:ring-primary-container transition-all cursor-pointer"
                      id="inquiryTopic"
                      value={inquiryTopic}
                      onChange={(e) => setInquiryTopic(e.target.value)}
                      required
                    >
                      <option value="" disabled>
                        Select a subject topic...
                      </option>
                      <option value="gps">
                        Course GPS Mapping &amp; Tee Correction
                      </option>
                      <option value="handicap">
                        WHS Handicap Telemetry Sync
                      </option>
                      <option value="equipment">
                        Club Fitting &amp; Ball Flight Model Feedback
                      </option>
                      <option value="course-pro">
                        Course Pro-Shop Partnership
                      </option>
                      <option value="app-bug">
                        Bug Report / Performance Diagnostics
                      </option>
                      <option value="media">
                        Media, Press &amp; Editorial Syndication
                      </option>
                      <option value="other">General Inquiries</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 pointer-events-none text-text-muted text-[20px]">
                      expand_more
                    </span>
                  </div>
                </div>

                {/* Two-Column Row: Handicap Index & Home Facility */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <label
                        className="font-label-md text-label-md text-text-primary font-bold"
                        htmlFor="handicapIndex"
                      >
                        Handicap Index
                      </label>
                      <span className="font-label-sm text-[11px] text-text-muted">
                        Optional
                      </span>
                    </div>
                    <div className="relative flex items-center">
                      <span className="material-symbols-outlined absolute left-3 text-text-muted text-[18px]">
                        analytics
                      </span>
                      <input
                        className="w-full pl-10 pr-3 py-2.5 bg-surface border border-border-strong rounded-lg font-body-md text-body-md text-text-primary placeholder:text-text-muted focus:bg-surface-card focus:outline-none focus:ring-2 focus:ring-primary-container transition-all"
                        id="handicapIndex"
                        value={handicapIndex}
                        onChange={(e) => setHandicapIndex(e.target.value)}
                        placeholder="e.g. 4.2"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <label
                        className="font-label-md text-label-md text-text-primary font-bold"
                        htmlFor="homeFacility"
                      >
                        Home Facility
                      </label>
                      <span className="font-label-sm text-[11px] text-text-muted">
                        Optional
                      </span>
                    </div>
                    <div className="relative flex items-center">
                      <span className="material-symbols-outlined absolute left-3 text-text-muted text-[18px]">
                        golf_course
                      </span>
                      <input
                        className="w-full pl-10 pr-3 py-2.5 bg-surface border border-border-strong rounded-lg font-body-md text-body-md text-text-primary placeholder:text-text-muted focus:bg-surface-card focus:outline-none focus:ring-2 focus:ring-primary-container transition-all"
                        id="homeFacility"
                        value={homeFacility}
                        onChange={(e) => setHomeFacility(e.target.value)}
                        placeholder="e.g. Pinehurst No. 2"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                {/* Detailed Transmission Textarea */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <label
                      className="font-label-md text-label-md text-text-primary font-bold"
                      htmlFor="messageTransmission"
                    >
                      Detailed Transmission <span className="text-flag-accent">*</span>
                    </label>
                    <span
                      className="font-label-sm text-[11px] text-text-muted"
                      id="char-count"
                    >
                      {charCount} / 2,000
                    </span>
                  </div>
                  <textarea
                    className="w-full p-3 bg-surface border border-border-strong rounded-lg font-body-md text-body-md text-text-primary placeholder:text-text-muted focus:bg-surface-card focus:outline-none focus:ring-2 focus:ring-primary-container transition-all resize-y min-h-[120px]"
                    id="messageTransmission"
                    maxLength={2000}
                    value={message}
                    onChange={handleMessageChange}
                    placeholder="Provide details about your query, course yardage updates, mobile OS version, or gear specifications..."
                    required
                    rows={5}
                  />
                </div>

                {/* Privacy Protection Notice */}
                <div className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-low text-on-surface-variant border border-border-subtle/50">
                  <span className="material-symbols-outlined text-[18px] text-fairway-green mt-0.5 shrink-0">
                    shield
                  </span>
                  <p className="font-body-sm text-body-sm leading-relaxed">
                    Your coordinates, telemetry profiles, and account credentials are guarded under golf-standard zero-sharing encryption. We will never sell your personal metrics.
                  </p>
                </div>

                {/* Action Footer: SSL Encrypted Badge & Submit Button */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-xs">
                  <div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
                    <span className="material-symbols-outlined text-fairway-green text-[18px]">
                      lock
                    </span>
                    <span className="font-semibold text-text-primary">
                      SSL Encrypted Transmission
                    </span>
                    <span className="text-text-muted text-[11px]">
                      (256-Bit TLS 1.3)
                    </span>
                  </div>

                  <button
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-xl py-space-md bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg rounded-lg transition-all shadow-[0_4px_12px_rgba(0,80,157,0.2)] active:scale-95 disabled:opacity-70 cursor-pointer font-bold"
                    id="submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    <span>{isSubmitting ? "Dispatching..." : "Dispatch Message"}</span>
                    <span className="material-symbols-outlined text-[18px]">
                      send
                    </span>
                  </button>
                </div>

                {/* Backend Integration State Placeholder Notice */}
                {submissionStatus === "unconfigured" && (
                  <div className="p-space-md rounded-xl bg-surface-container-low border border-primary/30 text-on-surface flex flex-col gap-space-sm animate-fade-in mt-2">
                    <div className="flex items-center gap-2 text-primary font-bold">
                      <span className="material-symbols-outlined text-[22px] text-fairway-green">
                        verified_user
                      </span>
                      <span>Client Validation Passed (Backend Service Standby)</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Your form inputs are validated. To deliver directly to the inbox without a live email microservice (SendGrid/Resend) attached to this deployment, click below to open your native mail client:
                    </p>
                    <div className="flex flex-wrap items-center gap-space-sm pt-1">
                      <button
                        type="button"
                        onClick={openMailtoFallback}
                        className="inline-flex items-center gap-1.5 px-space-md py-1.5 bg-primary text-on-primary rounded-lg font-label-md text-label-md font-semibold hover:bg-primary-container transition-colors"
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          mail
                        </span>
                        Send via Email App
                      </button>
                      <button
                        type="button"
                        onClick={() => setSubmissionStatus("idle")}
                        className="px-space-md py-1.5 bg-surface-card border border-border-strong text-text-primary rounded-lg font-label-md text-label-md hover:bg-sand-neutral transition-colors"
                      >
                        Reset Form
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Operational Benchmarks */}
      <section className="w-full py-margin-md bg-surface-container-low px-gutter-lg border-t border-border-subtle/40">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex items-center justify-between mb-space-md">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-text-muted font-bold">
                Operational Benchmarks
              </span>
              <h3 className="font-headline-sm text-headline-sm text-text-primary font-bold">
                Trusted Across the Global Fairways
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            <div className="bg-surface-card p-space-md rounded-xl border border-border-subtle">
              <span className="font-headline-md text-headline-md text-primary font-bold">
                99.8%
              </span>
              <p className="font-label-sm text-label-sm uppercase text-text-muted mt-1 font-semibold">
                Elevation Mesh Uptime
              </p>
            </div>
            <div className="bg-surface-card p-space-md rounded-xl border border-border-subtle">
              <span className="font-headline-md text-headline-md text-fairway-green font-bold">
                1.8M+
              </span>
              <p className="font-label-sm text-label-sm uppercase text-text-muted mt-1 font-semibold">
                Yards Measured Daily
              </p>
            </div>
            <div className="bg-surface-card p-space-md rounded-xl border border-border-subtle">
              <span className="font-headline-md text-headline-md text-text-primary font-bold">
                24/7
              </span>
              <p className="font-label-sm text-label-sm uppercase text-text-muted mt-1 font-semibold">
                Active Telemetry Monitoring
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
