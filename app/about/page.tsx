import type { Metadata } from "next";
import Image from "next/image";
import DownloadButtons from "@/components/DownloadButtons";

export const metadata: Metadata = {
  title: "About Us — Our Story & Purpose",
  description:
    "Built by golfers, for golfers who value the truth about the turf. Discover our story, guiding principles, and community impact.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HEADER & INTRO */}
      <section className="relative w-full overflow-hidden pb-space-xl pt-24 md:pt-28">
        {/* Subtle Ambient Backdrop Accent */}
        <div
          aria-hidden="true"
          className="absolute -top-32 right-1/4 w-96 h-96 bg-primary-fixed/20 rounded-full blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute top-1/2 -left-20 w-80 h-80 bg-secondary-fixed/25 rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-gutter-lg pt-space-lg">
          {/* Badge & Category Marker */}
          <div className="flex flex-wrap items-center gap-space-sm mb-space-md">
            <span className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-secondary-container/50 text-fairway-green font-label-sm text-label-sm uppercase tracking-wider font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-fairway-green animate-pulse" />
              OUR STORY &amp; PURPOSE
            </span>
            <span className="text-text-muted font-label-sm text-label-sm tracking-widest uppercase">
              EST. 2023 • VOL. IV
            </span>
          </div>

          {/* Main Headline */}
          <div className="max-w-4xl">
            <h1 className="font-display text-[34px] sm:text-[42px] md:text-display text-text-primary tracking-tight mb-space-lg leading-[1.08]">
              Built by golfers, for golfers who value the{" "}
              <span className="text-primary italic font-serif">truth</span> about the turf.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
              We have all tasted the heartbreak: booking an eagerly anticipated Saturday morning tee time, paying a premium three-figure green fee, and arriving on the first tee only to discover punched, freshly top-dressed greens, unraked crater bunkers, and a brutal 5.5-hour crawl. Golf is too sacred of a pastime to be gambled on polished brochure illusions.
            </p>
          </div>

          {/* Live Condition Micro-Ticker Banner */}
          <div className="mt-space-xl bg-surface-card rounded-xl p-space-md shadow-xs border border-border-subtle flex flex-col md:flex-row items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-md">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[22px]">
                  verified
                </span>
              </div>
              <div>
                <div className="font-label-md text-label-md text-text-primary font-bold">
                  100% Uncompromised Turf Intelligence
                </div>
                <div className="font-body-sm text-body-sm text-text-muted">
                  Real golfer submissions synced with pin-high GPS telemetry
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-space-lg self-start md:self-auto text-on-surface-variant font-label-sm text-label-sm font-semibold">
              <span className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-fairway-green text-[16px]">
                  check_circle
                </span>{" "}
                No Sponsored Ratings
              </span>
              <span className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-fairway-green text-[16px]">
                  check_circle
                </span>{" "}
                Timestamped Conditions
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: EDITORIAL ORIGIN STORY */}
      <section className="w-full py-space-xl bg-surface-container-low/30 border-y border-border-subtle/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-gutter-lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-space-xl items-center">
            {/* Left: Brand Crest & Quote */}
            <div className="md:col-span-5 flex flex-col gap-space-md">
              <div className="bg-surface-card rounded-2xl p-space-lg border border-border-subtle shadow-xs flex items-center gap-space-md">
                <div className="w-16 h-16 rounded-xl bg-surface-container-low flex items-center justify-center p-2 shrink-0">
                  <Image
                    src="/images/logo_gca.jpg"
                    alt="Golf Club Advisor Emblem"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain rounded"
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-headline-sm text-headline-sm text-text-primary font-bold">
                    Golf Club Advisor
                  </span>
                  <span className="font-label-sm text-label-sm text-fairway-green font-semibold uppercase tracking-wide">
                    Real Golfers. Real Reviews.
                  </span>
                  <span className="font-body-sm text-body-sm text-text-muted mt-0.5">
                    Empowering everyday rounds worldwide
                  </span>
                </div>
              </div>

              <div className="bg-sand-neutral rounded-xl p-space-md border border-border-subtle">
                <p className="font-body-md text-body-md text-text-primary italic leading-relaxed">
                  &ldquo;We believed amateur and weekend players deserved an unvarnished yardage book of real conditions before booking their next tee time.&rdquo;
                </p>
              </div>
            </div>

            {/* Right: Narrative */}
            <div className="md:col-span-7 flex flex-col gap-space-md">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[22px]">
                  history_edu
                </span>
                <h2 className="font-headline-md text-headline-md text-text-primary font-bold">
                  The Origin Story
                </h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Glossy country club brochures and sponsored Instagram posts always showcase pristine fairways kissed by morning golden hour. But what is hole 7 actually like on a damp Tuesday morning in November? Are the tee boxes scarred, or are the fairways like velvet?
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Crowd-sourced field intelligence cuts through the brochure noise. When golfers write candid reviews, we protect each other’s leisure time and reward clubs that truly care for their greens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FOUR GUIDING PRINCIPLES */}
      <section className="w-full py-margin-md bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-gutter-lg flex flex-col gap-space-lg">
          <div className="flex flex-col gap-1">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-fairway-green font-bold">
              Our Standard
            </span>
            <h2 className="font-headline-lg text-headline-lg text-text-primary font-bold">
              Four Guiding Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            {/* Principle 1 */}
            <div className="bg-surface-card rounded-xl p-space-lg border border-border-subtle shadow-xs flex flex-col gap-space-xs">
              <div className="flex items-center gap-space-sm mb-1">
                <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary-container shrink-0">
                  <span
                    className="material-symbols-outlined text-[20px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-text-primary font-bold">
                  1. Authenticity First
                </h3>
              </div>
              <p className="font-body-sm text-body-sm text-text-muted leading-relaxed pl-12">
                Real reviews strictly from golfers who actually teed off. Verified rounds, timestamped bunker reports, and unfiltered clubhouse feedback.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="bg-surface-card rounded-xl p-space-lg border border-border-subtle shadow-xs flex flex-col gap-space-xs">
              <div className="flex items-center gap-space-sm mb-1">
                <div className="w-9 h-9 rounded-lg bg-secondary-container flex items-center justify-center text-on-secondary-container shrink-0">
                  <span
                    className="material-symbols-outlined text-[20px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    groups
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-text-primary font-bold">
                  2. Community Transparency
                </h3>
              </div>
              <p className="font-body-sm text-body-sm text-text-muted leading-relaxed pl-12">
                Celebrating dedicated greenkeepers who work miracles at dawn, while holding neglectful golf clubs accountable for neglected facilities.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="bg-surface-card rounded-xl p-space-lg border border-border-subtle shadow-xs flex flex-col gap-space-xs">
              <div className="flex items-center gap-space-sm mb-1">
                <div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0">
                  <span
                    className="material-symbols-outlined text-[20px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    explore
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-text-primary font-bold">
                  3. Frictionless Discovery
                </h3>
              </div>
              <p className="font-body-sm text-body-sm text-text-muted leading-relaxed pl-12">
                Clear green fee breakdowns, real-time tee times, GPS turn-by-turn routing, and transparent practice facility guides right at your fingertips.
              </p>
            </div>

            {/* Principle 4 */}
            <div className="bg-surface-card rounded-xl p-space-lg border border-border-subtle shadow-xs flex flex-col gap-space-xs">
              <div className="flex items-center gap-space-sm mb-1">
                <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-tertiary-container shrink-0">
                  <span
                    className="material-symbols-outlined text-[20px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    shield
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-text-primary font-bold">
                  4. Independent &amp; Objective
                </h3>
              </div>
              <p className="font-body-sm text-body-sm text-text-muted leading-relaxed pl-12">
                Never compromised by commercial golf resort kickbacks or equipment advertising bias. Our loyalty stays firmly with the golfer holding the club.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: COMMUNITY IMPACT & TELEMETRY STATS */}
      <section className="w-full py-space-xl bg-surface-container-high/40 border-y border-border-subtle/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-gutter-lg">
          <div className="bg-surface-card rounded-2xl p-space-xl shadow-xs border border-border-subtle">
            <div className="text-center max-w-xl mx-auto mb-space-xl">
              <span className="text-primary font-label-sm text-label-sm uppercase tracking-widest block mb-space-xs font-bold">
                The Ledger of Truth
              </span>
              <h2 className="font-headline-lg text-headline-lg text-text-primary tracking-tight font-bold">
                Real Numbers Across Both Sides of the Atlantic
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg divide-y md:divide-y-0 md:divide-x divide-border-subtle/50">
              {/* Stat 1 */}
              <div className="flex flex-col items-center text-center p-space-md">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary mb-space-sm">
                  <span className="material-symbols-outlined text-[20px]">
                    map
                  </span>
                </div>
                <div className="font-display text-display text-primary tracking-tight font-extrabold mb-space-xs">
                  3.2k<span className="text-fairway-green">+</span>
                </div>
                <div className="font-headline-sm text-headline-sm text-text-primary mb-space-xs font-bold">
                  Courses Mapped
                </div>
                <p className="font-body-sm text-body-sm text-text-muted max-w-xs leading-relaxed">
                  Every yard of turf continuously cataloged across the United Kingdom, Ireland, and North America.
                </p>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center text-center p-space-md">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-fairway-green mb-space-sm">
                  <span className="material-symbols-outlined text-[20px]">
                    edit_note
                  </span>
                </div>
                <div className="font-display text-display text-text-primary tracking-tight font-extrabold mb-space-xs">
                  48k<span className="text-primary">+</span>
                </div>
                <div className="font-headline-sm text-headline-sm text-text-primary mb-space-xs font-bold">
                  Honest Rounds Logged
                </div>
                <p className="font-body-sm text-body-sm text-text-muted max-w-xs leading-relaxed">
                  Unvarnished post-round condition updates submitted within two hours of walking off the 18th green.
                </p>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center text-center p-space-md">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-amber-500 mb-space-sm">
                  <span
                    className="material-symbols-outlined text-[20px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                </div>
                <div className="font-display text-display text-primary tracking-tight font-extrabold mb-space-xs">
                  4.9
                  <span className="text-[28px] text-text-muted font-normal">
                    /5.0
                  </span>
                </div>
                <div className="font-headline-sm text-headline-sm text-text-primary mb-space-xs font-bold">
                  App Store Rating
                </div>
                <p className="font-body-sm text-body-sm text-text-muted max-w-xs leading-relaxed">
                  Endorsed by club champions, scratch amateurs, and weekend warriors tired of golf course blind spots.
                </p>
              </div>
            </div>

            {/* Visual Sparkline Sub-Bar */}
            <div className="mt-space-lg pt-space-lg bg-surface-container-low/70 rounded-xl p-space-md flex flex-col md:flex-row items-center justify-between gap-space-md border border-border-subtle/50">
              <div className="flex items-center gap-space-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-fairway-green" />
                <span className="font-label-md text-label-md text-text-primary font-bold">
                  Live Course Telemetry Pipeline Active
                </span>
              </div>
              <div className="flex items-center gap-space-md">
                <span className="font-body-sm text-body-sm text-text-muted">
                  7-Day Verification Velocity
                </span>
                <svg
                  className="w-32 h-6 text-fairway-green"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 100 24"
                >
                  <path
                    d="M0 18 L15 14 L30 19 L45 8 L60 12 L75 4 L90 7 L100 2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: DOWNLOAD CALLOUT BANNER */}
      <section className="w-full py-space-xl mb-space-xl">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-gutter-lg">
          <div className="relative overflow-hidden rounded-2xl bg-inverse-surface text-inverse-on-surface shadow-xl p-space-xl border border-white/10">
            {/* Topographic Decorative Vector */}
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 pointer-events-none flex items-center justify-center"
            >
              <svg
                className="w-full h-full"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 400 400"
              >
                <circle cx="200" cy="200" r="60" />
                <circle cx="200" cy="200" r="100" />
                <circle cx="200" cy="200" r="140" />
                <circle cx="200" cy="200" r="180" />
                <circle cx="200" cy="200" r="220" />
              </svg>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-space-xl items-center">
              <div className="md:col-span-8 flex flex-col gap-space-sm">
                <div className="inline-flex items-center gap-space-xs text-secondary-fixed font-label-sm text-label-sm uppercase tracking-widest font-bold">
                  <span className="material-symbols-outlined text-[16px]">
                    phone_iphone
                  </span>
                  Available Worldwide on iOS &amp; Android
                </div>
                <h2 className="font-headline-lg text-headline-lg text-white tracking-tight font-extrabold">
                  Never tee off uninformed again.
                </h2>
                <p className="font-body-md text-body-md text-inverse-on-surface/80 max-w-lg leading-relaxed">
                  Download Golf Club Advisor to unlock live fairway condition warnings, true rolling green speeds, and honest player reports before reserving your next round.
                </p>
                {/* Feature Tags */}
                <div className="flex flex-wrap gap-space-sm pt-space-xs">
                  <span className="px-space-sm py-space-xs rounded bg-white/10 text-white font-label-sm text-label-sm flex items-center gap-1 font-semibold">
                    <span className="material-symbols-outlined text-[14px] text-fairway-green">
                      check
                    </span>{" "}
                    Aeration Alerts
                  </span>
                  <span className="px-space-sm py-space-xs rounded bg-white/10 text-white font-label-sm text-label-sm flex items-center gap-1 font-semibold">
                    <span className="material-symbols-outlined text-[14px] text-fairway-green">
                      check
                    </span>{" "}
                    Real Stimpmeter Reports
                  </span>
                  <span className="px-space-sm py-space-xs rounded bg-white/10 text-white font-label-sm text-label-sm flex items-center gap-1 font-semibold">
                    <span className="material-symbols-outlined text-[14px] text-fairway-green">
                      check
                    </span>{" "}
                    Pace of Play Radar
                  </span>
                </div>
              </div>

              <div className="md:col-span-4 flex flex-col gap-space-sm items-start md:items-end">
                <DownloadButtons theme="light" />
                <div className="flex items-center gap-space-xs text-white/60 font-body-sm text-body-sm mt-1">
                  <span className="material-symbols-outlined text-fairway-green text-[18px]">
                    verified_user
                  </span>
                  <span>No subscription required to read audits</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
