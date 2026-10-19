import type { Metadata } from "next";
import Image from "next/image";
import DownloadButtons from "@/components/DownloadButtons";

export const metadata: Metadata = {
  title: "Golf Club Advisor — Discover Premier Golf Clubs Near You",
  description:
    "Explore nearby golf courses on an interactive map, inspect real-time turf & green conditions, and stay updated with live golf news before you book your next round.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-surface-container-low/60 via-background to-background py-space-xl md:py-margin-lg">
        {/* Atmospheric glow blobs */}
        <div aria-hidden="true" className="pointer-events-none absolute -top-40 right-[-10%] w-[680px] h-[680px] rounded-full bg-secondary-container/25 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute top-1/2 left-[-15%] w-[520px] h-[520px] rounded-full bg-surface-container-high/40 blur-3xl" />

        <div className="max-w-[1240px] mx-auto px-gutter-lg relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">

            {/* Left: editorial content */}
            <div className="lg:col-span-7 flex flex-col gap-space-lg">
              {/* Eyebrow pill */}
              <div className="inline-flex items-center gap-space-xs self-start px-space-md py-space-xs bg-secondary-container/30 rounded-full">
                <span className="w-2 h-2 rounded-full bg-fairway-green animate-pulse" />
                <span className="font-label-sm text-label-sm text-fairway-green uppercase tracking-widest font-bold">
                  Real Golfers. Real Reviews.
                </span>
              </div>

              {/* Main headline */}
              <h1 className="font-display text-[40px] md:text-display text-on-surface leading-[1.1] tracking-tight">
                Discover premier golf clubs near you with{" "}
                <span className="text-primary-container">authentic golfer reviews</span>.
              </h1>

              {/* Subtitle */}
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Explore nearby golf courses on an interactive map, inspect real-time turf &amp; green conditions,
                and stay updated with live golf news before you book your next round.
              </p>

              {/* Download buttons + secondary CTA */}
              <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                <DownloadButtons theme="dark" />
                <a
                  className="inline-flex items-center gap-space-xs px-space-lg py-3.5 bg-surface-card hover:bg-sand-neutral text-text-primary font-label-lg text-label-lg rounded-xl shadow-sm hover:shadow transition-all"
                  href="#interactive-map"
                >
                  <span className="material-symbols-outlined text-fairway-green text-[20px]">explore</span>
                  <span>Explore Features</span>
                </a>
              </div>

              {/* Proof metrics bar */}
              <div className="pt-space-md flex flex-wrap items-center gap-space-xl">
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-on-surface">2,850+</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Verified Courses UK &amp; Europe</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-on-surface">42,000+</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Player Green Reports</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="font-headline-sm text-headline-sm text-on-surface">4.8</span>
                    <span className="material-symbols-outlined text-[18px] text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Community Rating</span>
                </div>
              </div>
            </div>

            {/* Right: phone mockup showcase */}
            <div className="lg:col-span-5 relative flex justify-center items-center py-space-md">
              <div className="absolute w-80 h-80 rounded-full bg-secondary-fixed/30 filter blur-2xl" />
              <div className="relative w-full max-w-[480px] h-[580px] flex items-center justify-center">
                {/* Secondary device — offset left */}
                <div className="absolute -left-2 md:-left-6 top-8 w-[250px] md:w-[270px] bg-inverse-surface p-2.5 rounded-[36px] shadow-2xl transform -rotate-6 hover:-rotate-3 transition-transform duration-300 z-10">
                  <div className="w-full bg-surface-card rounded-[28px] overflow-hidden">
                    <div className="h-5 bg-surface-card flex items-center justify-center">
                      <div className="w-12 h-1 bg-outline-variant/50 rounded-full" />
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV3DonzYzttLLV0ys06Okqbax0g4lZ-ZrQqxun9FqL43EgrWBd3YRi-Z8n_pop8PwDIEoHxuktRrnM6iATiX3lsQVhctyyqbEugRAtEIpw-6rl2vlplSmFI94Qcx0uVPaWhDsQ83S6VgbsNSjfvgcreiV3S76b3_PSVxmFiOGTRWXygjUax3X25QBoM8RMVd66Fy487oD2iF6nPR6Yar1Goss57dx57zS1kzIsZleTkfpUfg07sw"
                      alt="Golf Club Advisor Top Stories News Feed on mobile"
                      className="w-full h-auto object-cover block"
                    />
                  </div>
                </div>

                {/* Primary device — front right */}
                <div className="absolute right-0 md:right-2 top-0 w-[270px] md:w-[295px] bg-inverse-surface p-2.5 rounded-[40px] shadow-2xl transform rotate-3 hover:rotate-1 transition-transform duration-300 z-20">
                  <div className="w-full bg-surface-card rounded-[32px] overflow-hidden">
                    <div className="h-6 bg-surface-card flex items-center justify-center">
                      <div className="w-16 h-1.5 bg-outline-variant/60 rounded-full" />
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLqACZDc-hCGYT6ySeruF7ccMNSBwmLSoBRY2Ww9pA7zGm7HAHozS8WFXa0pkdcYK-2DsS3fcK-DhrfVqzcHN8yOFw0TFuEt_eZEF0PQZPPKIhuIMtJXd7-x5BocJd7muaTGeYeXpf4iKzn8iIroCDN16YCDzc-WGZZ3j8EmaoXjI6oQwaIi6Wme90KONAbQS-pYedohfu1QZ8RYL-qXL0-4VHG4epAlghpQOUaTAxBZPlA962Gw"
                      alt="Golf Club Advisor Find Your Club directory on mobile"
                      className="w-full h-auto object-cover block"
                    />
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute bottom-4 left-4 z-30 bg-surface-card/95 backdrop-blur-md px-space-md py-space-sm rounded-xl shadow-lg flex items-center gap-space-sm">
                  <div className="w-8 h-8 rounded-full bg-secondary-container/50 flex items-center justify-center text-fairway-green">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-text-primary">Verified Green Condition</span>
                    <span className="font-body-sm text-[11px] text-text-muted">Updated today by 14 golfers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROBLEM / SOLUTION ───────────────────────────────────────────── */}
      <section className="w-full py-margin-lg bg-surface-container-low/40">
        <div className="max-w-[1240px] mx-auto px-gutter-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">

            {/* Left: problem statement */}
            <div className="lg:col-span-5 flex flex-col gap-space-md">
              <span className="font-label-sm text-label-sm text-fairway-green uppercase tracking-wider font-bold">The Reality Check</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface leading-tight">
                Brochures lie. Fellow golfers tell the truth.
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Every club publishes filtered sunrise photos taken on championship tournament weeks. But what are the bunkers like right now? Did they punch the greens yesterday? Is a five-hour round standard on Saturdays?
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Golf Club Advisor was created by weekend golfers tired of £120 tee times on aerated greens. We gather verified reports directly from players stepping off the 18th hole.
              </p>
              <div className="pt-space-xs flex items-center gap-space-md">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-fairway-green text-[20px]">check_circle</span>
                  <span className="font-label-md text-label-md text-on-surface">No promotional kickbacks</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-fairway-green text-[20px]">check_circle</span>
                  <span className="font-label-md text-label-md text-on-surface">Direct player timestamps</span>
                </div>
              </div>
            </div>

            {/* Right: bento condition cards */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-space-md">
              {/* Card 1: Bunker & Sand */}
              <div className="bg-surface-card p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-md">
                    <span className="material-symbols-outlined text-[24px]">landslide</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-text-primary mb-space-xs">Bunker &amp; Sand Health</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Know whether sand traps are properly maintained with fluffy Augusta-style white quartz or hard-packed clay before you step onto the fairway.
                  </p>
                </div>
                <div className="mt-space-md pt-space-md bg-surface-container-low p-space-sm rounded-lg flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-fairway-green font-bold">Royal St George&apos;s Trap Score</span>
                  <span className="font-label-sm text-label-sm text-on-surface bg-surface-card px-2 py-0.5 rounded shadow-sm">9.4 / 10 Excellent</span>
                </div>
              </div>

              {/* Card 2: Aeration Radar */}
              <div className="bg-surface-card p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-error-container/40 flex items-center justify-center text-tertiary mb-space-md">
                    <span className="material-symbols-outlined text-[24px]">radar</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-text-primary mb-space-xs">Aeration &amp; Top-Dressing</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Instant alerts when a course begins maintenance punching so your weekend match doesn&apos;t turn into bumpy plinko putting.
                  </p>
                </div>
                <div className="mt-space-md pt-space-md bg-surface-container-low p-space-sm rounded-lg flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-tertiary-container font-bold">Punching Alert Active</span>
                  <span className="font-label-sm text-label-sm text-text-primary bg-surface-card px-2 py-0.5 rounded shadow-sm">0 Nearby Courses</span>
                </div>
              </div>

              {/* Card 3: Fee Transparency — full width */}
              <div className="bg-surface-card p-space-lg rounded-xl shadow-sm flex flex-col justify-between md:col-span-2">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                  <div>
                    <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">Fee Transparency</span>
                    <h3 className="font-headline-sm text-headline-sm text-text-primary">What You Actually Pay at the Clubhouse</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant max-w-lg mt-1">
                      We show weekday versus weekend green fee distributions, twilight rates, buggy hires, and guest member policies straight from actual receipt reports.
                    </p>
                  </div>
                  <div className="bg-surface-container-low p-space-md rounded-xl flex items-center gap-space-md min-w-[200px]">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-[11px] text-text-muted uppercase">Avg Round Fee</span>
                      <span className="font-headline-sm text-headline-sm text-text-primary">£85 – £250</span>
                    </div>
                    <svg className="w-20 h-8 text-primary" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" viewBox="0 0 100 40">
                      <path d="M0 35 Q 25 15, 45 25 T 90 8 L 100 12" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── KEY FEATURES ─────────────────────────────────────────────────── */}
      <section className="w-full py-margin-lg bg-background" id="interactive-map">
        <div className="max-w-[1240px] mx-auto px-gutter-lg flex flex-col gap-space-xl">
          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="flex flex-col gap-space-xs max-w-xl">
              <span className="font-label-sm text-label-sm text-fairway-green uppercase font-bold tracking-wider">Tactical Platform</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Engineered for the Modern Golfer</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                From discovering hidden links across Kent and Surrey to tracking live course news, every tool is calibrated for high performance.
              </p>
            </div>
          </div>

          {/* Feature grid — 4 pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {[
              {
                icon: "near_me",
                color: "bg-surface-container text-primary group-hover:bg-primary group-hover:text-on-primary",
                title: "Interactive Course Navigator & GPS",
                desc: "Find golf clubs near your current location with live distance, map integration, and green fees in British Pounds & Euros.",
                foot: "Radius & County Filtering",
                footIcon: "travel_explore",
              },
              {
                icon: "rate_review",
                color: "bg-secondary-container/40 text-fairway-green group-hover:bg-fairway-green group-hover:text-on-secondary",
                title: "Community-Driven Course Ratings",
                desc: "Unvarnished reviews from amateur and weekend golfers who actually teed off, scored by fairway density, green speed, and clubhouse welcome.",
                foot: "Verified handicap logs",
                footIcon: "military_tech",
              },
              {
                icon: "feed",
                color: "bg-surface-container text-primary group-hover:bg-primary group-hover:text-on-primary",
                title: "Real-time News & Field Conditions",
                desc: "Daily updates, green aeration alerts, weather impacts, and tournament stories pulled directly from major sources including BBC Sport.",
                foot: "Live golf pulse feed",
                footIcon: "rss_feed",
              },
              {
                icon: "payments",
                color: "bg-surface-container-high text-primary group-hover:bg-primary group-hover:text-on-primary",
                title: "Honest Green Fee Transparency",
                desc: "Compare weekday, weekend, and winter rates with no hidden third-party aggregator markups or surprise twilight restrictions.",
                foot: "Official club rack rates",
                footIcon: "savings",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-surface-card p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="flex flex-col gap-space-md">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${f.color}`}>
                    <span className="material-symbols-outlined text-[26px]">{f.icon}</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-text-primary">{f.title}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{f.desc}</p>
                </div>
                <div className="mt-space-lg pt-space-md flex items-center justify-between text-text-muted">
                  <span className="font-label-sm text-label-sm">{f.foot}</span>
                  <span className="material-symbols-outlined text-[18px]">{f.footIcon}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Map spotlight card */}
          <div className="w-full bg-surface-card rounded-2xl p-space-lg shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md mb-space-lg">
              <div>
                <div className="inline-flex items-center gap-1.5 text-fairway-green font-label-sm text-label-sm uppercase font-bold">
                  <span className="material-symbols-outlined text-[16px]">pin_drop</span>
                  <span>Featured Spotlight Destination</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-text-primary">Royal St George&apos;s &amp; Sandwich Links Coastline</h3>
              </div>
              <div className="flex items-center gap-space-sm">
                <span className="px-space-md py-1 bg-surface-container text-primary font-label-md text-label-md rounded-full">Open Championship Host</span>
                <span className="px-space-md py-1 bg-secondary-container/40 text-fairway-green font-label-md text-label-md rounded-full font-bold">£250 Weekday</span>
              </div>
            </div>
            <div
              className="w-full h-80 rounded-xl bg-cover bg-center shadow-inner relative overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAdY9CNL8AC8CvcB5m1mMqiWwLlfdPZu4hlDtuq2aO5RnP964gV-HimPzprW6aStj82HnuFYR5QUQjZFpqAwD5OQHk09-yjH_8CoVlZtgn8OXfbJDXiuOdiKVQr3sUrL4j0di0HajmJCzTaEpUu00kRuOVxCmM4yEwaTZkHefbNaWfI68pSTzuyLAiHHke7pS9HSIT-MVX8ofhY_XwrlfUvuJiPu2atHDWPjwsy')",
              }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-inverse-surface text-inverse-on-surface px-space-md py-space-xs rounded-xl shadow-2xl flex items-center gap-space-sm backdrop-blur-sm">
                <div className="w-7 h-7 rounded-full bg-fairway-green text-on-primary flex items-center justify-center font-bold text-xs">RSG</div>
                <div className="flex flex-col text-left">
                  <span className="font-label-md text-label-md leading-tight">Royal St George&apos;s GC</span>
                  <span className="font-label-sm text-[10px] text-outline-variant">Par 70 • 7,204 Yards • Kent, UK</span>
                </div>
                <span className="material-symbols-outlined text-flag-accent text-[20px]">sports_score</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="w-full py-margin-lg bg-surface-container-low/30">
        <div className="max-w-[1240px] mx-auto px-gutter-lg flex flex-col gap-space-xl">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-space-xs">
            <span className="font-label-sm text-label-sm text-fairway-green uppercase font-bold tracking-widest">Simple &amp; Rigorous</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">How Golf Club Advisor Works</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Plan, evaluate, and share your golf journey in three straightforward steps built for serious course baggers and casual players alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            {[
              {
                num: "01",
                icon: "search",
                color: "bg-surface-container text-primary",
                iconColor: "text-primary",
                title: "Search & Locate",
                desc: "Enter any town, postcode, or tap the GPS button to view every 9-hole executive and 18-hole championship course within your desired driving radius.",
                bullets: ["Distance-sorted results", "Instant green fee ranges"],
              },
              {
                num: "02",
                icon: "fact_check",
                color: "bg-secondary-container/50 text-fairway-green",
                iconColor: "text-fairway-green",
                title: "Inspect Live Reports",
                desc: "Check recent reviews addressing green rolling speed, rough thickness, bunker sand quality, and average pace of play on peak weekend mornings.",
                bullets: ["Pace-of-play indicators", "Drainage alerts after rain"],
              },
              {
                num: "03",
                icon: "sports_golf",
                color: "bg-surface-container text-primary",
                iconColor: "text-primary",
                title: "Play & Review",
                desc: "Tee off with confidence. When your round concludes, snap a photo of the scorecard, rate the fairways, and help the next group make an informed choice.",
                bullets: ["Verified player badge", "Build your course passport"],
              },
            ].map((step) => (
              <div key={step.num} className="bg-surface-card p-space-xl rounded-2xl shadow-sm flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <span className={`w-12 h-12 rounded-xl flex items-center justify-center font-display text-headline-md font-extrabold ${step.color}`}>
                    {step.num}
                  </span>
                  <span className={`material-symbols-outlined text-[28px] ${step.iconColor}`}>{step.icon}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-text-primary">{step.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{step.desc}</p>
                <ul className="flex flex-col gap-1.5 pt-space-xs font-body-sm text-[12px] text-on-surface-variant">
                  {step.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-fairway-green" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUCT GALLERY ──────────────────────────────────────────────── */}
      <section className="w-full py-margin-lg bg-background">
        <div className="max-w-[1240px] mx-auto px-gutter-lg flex flex-col gap-space-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div>
              <span className="font-label-sm text-label-sm text-fairway-green uppercase font-bold tracking-widest">Interface Design</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Designed for Quick Utility on the Range</h2>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
              High-contrast cards, legible typography under direct sunlight, and immediate tactile touch points designed for 1-handed phone use between shots.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-xl items-center">
            {/* Showcase 1: Club Directory */}
            <div className="bg-surface-card p-space-xl rounded-2xl shadow-sm flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <span className="w-3 h-3 rounded-full bg-fairway-green" />
                  <span className="font-label-md text-label-md text-text-primary uppercase tracking-wider">Club Directory</span>
                </div>
                <span className="font-label-sm text-label-sm text-text-muted">Screen: Find your club</span>
              </div>
              <div className="w-full bg-surface-container-low rounded-xl p-space-md flex flex-col items-center justify-center">
                <div className="max-w-[280px] w-full rounded-2xl overflow-hidden shadow-xl bg-surface-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLqACZDc-hCGYT6ySeruF7ccMNSBwmLSoBRY2Ww9pA7zGm7HAHozS8WFXa0pkdcYK-2DsS3fcK-DhrfVqzcHN8yOFw0TFuEt_eZEF0PQZPPKIhuIMtJXd7-x5BocJd7muaTGeYeXpf4iKzn8iIroCDN16YCDzc-WGZZ3j8EmaoXjI6oQwaIi6Wme90KONAbQS-pYedohfu1QZ8RYL-qXL0-4VHG4epAlghpQOUaTAxBZPlA962Gw"
                    alt="Find your club mobile view preview"
                    className="w-full h-auto block"
                  />
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Instant search with automatic geolocation. View standard green fees (£250), county tagging (Sandwich, Kent), and aggregate 5-star golfer endorsements.
              </p>
            </div>

            {/* Showcase 2: Live News */}
            <div className="bg-surface-card p-space-xl rounded-2xl shadow-sm flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <span className="w-3 h-3 rounded-full bg-primary" />
                  <span className="font-label-md text-label-md text-text-primary uppercase tracking-wider">Live News Wire</span>
                </div>
                <span className="font-label-sm text-label-sm text-text-muted">Screen: Top Stories</span>
              </div>
              <div className="w-full bg-surface-container-low rounded-xl p-space-md flex flex-col items-center justify-center">
                <div className="max-w-[280px] w-full rounded-2xl overflow-hidden shadow-xl bg-surface-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV3DonzYzttLLV0ys06Okqbax0g4lZ-ZrQqxun9FqL43EgrWBd3YRi-Z8n_pop8PwDIEoHxuktRrnM6iATiX3lsQVhctyyqbEugRAtEIpw-6rl2vlplSmFI94Qcx0uVPaWhDsQ83S6VgbsNSjfvgcreiV3S76b3_PSVxmFiOGTRWXygjUax3X25QBoM8RMVd66Fy487oD2iF6nPR6Yar1Goss57dx57zS1kzIsZleTkfpUfg07sw"
                    alt="Top Stories golf news feed mobile screen preview"
                    className="w-full h-auto block"
                  />
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Stay plugged into European Tour, PGA, and local club tournament dispatches from BBC Sport and top regional correspondents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="w-full py-space-xl bg-surface-container-low/40">
        <div className="max-w-[1240px] mx-auto px-gutter-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            {[
              {
                quote: "Saved us from paying £180 each at a course that had just hollow-tined their greens 48 hours prior. Golf Club Advisor is indispensable.",
                initials: "DR",
                name: "David Reynolds",
                meta: "Handicap: 6.4 • Kent",
                bg: "bg-surface-container",
                text: "text-primary",
              },
              {
                quote: "The transparent green fee feature alone is worth having the app installed. No hidden weekend charges or booking agency surcharges.",
                initials: "CM",
                name: "Claire MacIntyre",
                meta: "Handicap: 12.1 • Surrey",
                bg: "bg-secondary-container/40",
                text: "text-fairway-green",
              },
              {
                quote: "Finally an app made by people who actually walk 18 holes in British weather. Crisp, simple, and the news tab keeps me informed on the train.",
                initials: "TH",
                name: "Tom Harrington",
                meta: "Handicap: 18.0 • London",
                bg: "bg-surface-container-high",
                text: "text-primary",
              },
            ].map((t) => (
              <div key={t.name} className="bg-surface-card p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
                <p className="font-body-md text-body-md text-on-surface italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="pt-space-md flex items-center gap-space-sm">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${t.bg} ${t.text}`}>
                    {t.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-text-primary">{t.name}</span>
                    <span className="font-body-sm text-[12px] text-text-muted">{t.meta}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DOWNLOAD CTA ─────────────────────────────────────────────────── */}
      <section className="w-full py-margin-lg bg-background">
        <div className="max-w-[1240px] mx-auto px-gutter-lg">
          <div className="w-full bg-inverse-surface text-inverse-on-surface rounded-3xl p-space-xl md:p-margin-lg relative overflow-hidden shadow-2xl">
            {/* Decorative blobs */}
            <div className="pointer-events-none absolute -right-20 -bottom-20 w-[480px] h-[480px] rounded-full bg-primary/20 blur-3xl" />
            <div className="pointer-events-none absolute left-10 -top-20 w-[300px] h-[300px] rounded-full bg-fairway-green/20 blur-3xl" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
              {/* Left: text + buttons */}
              <div className="lg:col-span-8 flex flex-col gap-space-md">
                <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-widest font-bold">Never Tee Off Blind Again</span>
                <h2 className="font-display text-[32px] md:text-headline-lg text-inverse-on-surface leading-tight font-extrabold">
                  Get Golf Club Advisor on your smartphone today.
                </h2>
                <p className="font-body-lg text-body-lg text-outline-variant max-w-xl">
                  Free to download on iOS and Android. Join thousands of golfers who check real course conditions before hitting the first tee.
                </p>
                <DownloadButtons theme="light" className="pt-space-sm" />
              </div>

              {/* Right: QR code */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center">
                <div className="bg-surface-card p-space-md rounded-2xl shadow-xl flex flex-col items-center gap-space-sm text-text-primary text-center">
                  <div className="w-36 h-36 bg-surface-container-low rounded-xl p-2 flex items-center justify-center">
                    <svg className="w-full h-full text-text-primary" fill="currentColor" viewBox="0 0 100 100">
                      {/* QR corner markers */}
                      <rect x="0" y="0" width="30" height="30" rx="3" fill="currentColor" />
                      <rect x="6" y="6" width="18" height="18" fill="white" />
                      <rect x="10" y="10" width="10" height="10" fill="currentColor" />
                      <rect x="70" y="0" width="30" height="30" rx="3" fill="currentColor" />
                      <rect x="76" y="6" width="18" height="18" fill="white" />
                      <rect x="80" y="10" width="10" height="10" fill="currentColor" />
                      <rect x="0" y="70" width="30" height="30" rx="3" fill="currentColor" />
                      <rect x="6" y="76" width="18" height="18" fill="white" />
                      <rect x="10" y="80" width="10" height="10" fill="currentColor" />
                      {/* Pattern dots */}
                      <rect x="36" y="8" width="6" height="6" /><rect x="48" y="8" width="6" height="6" />
                      <rect x="58" y="14" width="6" height="6" /><rect x="36" y="22" width="6" height="6" />
                      <rect x="48" y="24" width="6" height="6" /><rect x="8" y="38" width="6" height="6" />
                      <rect x="20" y="44" width="6" height="6" /><rect x="36" y="38" width="10" height="10" />
                      <rect x="52" y="38" width="8" height="8" /><rect x="66" y="42" width="6" height="6" />
                      <rect x="80" y="38" width="12" height="6" /><rect x="36" y="56" width="8" height="8" />
                      <rect x="50" y="54" width="12" height="10" /><rect x="72" y="56" width="8" height="8" />
                      <rect x="86" y="54" width="6" height="6" /><rect x="36" y="74" width="6" height="6" />
                      <rect x="48" y="82" width="14" height="6" /><rect x="68" y="76" width="10" height="10" />
                      <rect x="84" y="82" width="8" height="8" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-label-md text-label-md font-bold">Scan to Download</span>
                    <span className="font-body-sm text-[11px] text-text-muted">Point your iPhone or Android camera</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
