import type { Metadata } from "next";
import Link from "next/link";
import { APP_CONFIG } from "@/components/Config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Golf Club Advisor handles telemetric coordinates, yardage requests, equipment reviews, handicap markers, and device analytics.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-background min-h-screen pt-24 md:pt-28 pb-margin-lg">
      <div className="max-w-3xl mx-auto px-gutter-lg text-text-primary">
        {/* Header */}
        <div className="pb-space-md mb-space-lg border-b border-border-subtle/50">
          <span className="font-label-sm text-label-sm text-fairway-green uppercase font-bold tracking-widest block mb-1">
            Data Governance &amp; Ethics
          </span>
          <h1 className="font-display text-[34px] sm:text-headline-lg md:text-display tracking-tight text-text-primary mb-space-xs font-extrabold">
            Privacy Policy
          </h1>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Effective &amp; Last Updated: October 2024 • Version 3.4.1 (Standard Compliance)
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-space-xl font-body-md text-body-md text-on-surface-variant leading-relaxed">
          <p className="text-body-lg text-text-primary leading-relaxed">
            At Golf Club Advisor (&ldquo;GCA&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), golfer trust and absolute data transparency form our core fairway. This policy comprehensively explains how we handle your telemetric coordinates, real-time yardage requests, equipment reviews, handicap markers, and mobile device analytics across our web and mobile applications.
          </p>

          {/* Section 1 */}
          <section className="space-y-space-sm pt-2">
            <h2 className="font-headline-md text-headline-md text-text-primary font-bold">
              1. Information We Collect
            </h2>
            <p>
              Golf Club Advisor aggregates select information necessary to deliver hyper-accurate yardage vectors, curated equipment matching, tournament handicap analytics, and community architectural critiques.
            </p>
            <div className="space-y-space-sm pl-space-xs">
              <h3 className="font-headline-sm text-headline-sm text-text-primary font-bold">
                A. Personal Account Credentials
              </h3>
              <p>
                Full legal name, authenticated email address, handicap index (GHIN or custom WHS index), home club affiliation, and equipment bag inventory (driver spec, fairway lofts, shaft flex, and putter dimensions).
              </p>
              <h3 className="font-headline-sm text-headline-sm text-text-primary font-bold">
                B. Play Telemetry &amp; Scorecards
              </h3>
              <p>
                Hole-by-hole scores, putts per green in regulation (GIR), fairways hit, hazard recoveries, and yardages registered via laser or active GPS rangefinding pins.
              </p>
              <h3 className="font-headline-sm text-headline-sm text-text-primary font-bold">
                C. Technical Device &amp; Session Tokens
              </h3>
              <p>
                Mobile OS revision (iOS/Android), hardware UUID identifiers, carrier metrics, crash dump diagnostics, and screen resolution to adapt overhead course satellite imagery seamlessly.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-space-sm pt-2">
            <h2 className="font-headline-md text-headline-md text-text-primary font-bold">
              2. Location Data &amp; Mapping Services
            </h2>
            <p>
              The core utility of our real-time Course Navigator relies on precise coordinate streams. We consider location data among the most sensitive datasets we process, requiring transparent operational guardrails.
            </p>
            <p>
              When you initiate an active round, Golf Club Advisor requests precise location permissions (&ldquo;While Using the App&rdquo;) to calculate real-time distances to the front, center, and back of the green, as well as bunker run-outs.
            </p>
            <ul className="list-disc pl-5 space-y-space-xs text-on-surface-variant">
              <li>
                <strong className="text-text-primary">Zero Persistent Background Tracking:</strong> GPS polling stops immediately upon round finalization or when you force-close the mobile application.
              </li>
              <li>
                <strong className="text-text-primary">Local Calculation Caching:</strong> Relative yardage calculations are performed locally on-device whenever cached satellite vectors exist.
              </li>
              <li>
                <strong className="text-text-primary">Anonymized Course Congestion:</strong> Aggregated, de-identified pace-of-play speeds are computed without associating individual player identifiers.
              </li>
            </ul>
            <h3 className="font-headline-sm text-headline-sm text-text-primary pt-space-xs font-bold">
              Cartographic &amp; Satellite Imagery Partners
            </h3>
            <p>
              We leverage enterprise vector tiles and high-resolution aerial photography via Apple MapKit, Google Maps Platform, and bespoke drone orthomosaics. Coordinate payloads transmitted to these APIs are stripped of user names, account IDs, and handicap metadata.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-space-sm pt-2">
            <h2 className="font-headline-md text-headline-md text-text-primary font-bold">
              3. How We Use Information
            </h2>
            <p>
              We utilize collected information strictly for service delivery, performance calculation, and feature enhancement:
            </p>
            <ul className="list-disc pl-5 space-y-space-xs text-on-surface-variant">
              <li>
                <strong className="text-text-primary">Club Fitting Algorithms:</strong> Synthesizing your strike dispersion, swing velocity estimations, and launch angles to recommend optimal club shaft flexes and head weighting architectures.
              </li>
              <li>
                <strong className="text-text-primary">Handicap Trajectory:</strong> Formulating course rating adjustments, slope handicap differentials, and peer scoring benchmarks adhering strictly to USGA &amp; R&amp;A computational standards.
              </li>
              <li>
                <strong className="text-text-primary">Course Conditions &amp; Aeration:</strong> Alerting members to upcoming green punches, overseeding schedules, cart-path-only restrictions, and localized weather micro-fronts.
              </li>
              <li>
                <strong className="text-text-primary">Fraud &amp; Review Integrity:</strong> Detecting syndicated bot submissions, commercial club promoter shilling, and artificially manipulated golf resort rankings.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-space-sm pt-2">
            <h2 className="font-headline-md text-headline-md text-text-primary font-bold">
              4. Review Submissions &amp; Public Content
            </h2>
            <p>
              When you post an architectural evaluation of a layout (e.g., green complex design, bunker drainage, clubhouse facilities) or submit equipment impressions:
            </p>
            <ul className="list-disc pl-5 space-y-space-xs text-on-surface-variant">
              <li>
                <strong className="text-text-primary">Public Display:</strong> Your verified screen name, handicap tier, review text, uploaded photography, and equipment specs become publicly viewable to all platform guests and app users.
              </li>
              <li>
                <strong className="text-text-primary">Metadata Sanitization:</strong> EXIF metadata, including home GPS coordinates embedded in uploaded photos of course fairways or clubs, is automatically stripped prior to content distribution.
              </li>
              <li>
                <strong className="text-text-primary">Course Architecture Archives:</strong> Written critiques may be preserved in anonymized, historical layout records even if an individual user account is later deactivated.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-space-sm pt-2">
            <h2 className="font-headline-md text-headline-md text-text-primary font-bold">
              5. Data Storage, Security &amp; Retention
            </h2>
            <p>
              Golf Club Advisor employs enterprise-grade safeguards modeled after ISO/IEC 27001 recommendations and SOC 2 Type II architectural criteria:
            </p>
            <ul className="list-disc pl-5 space-y-space-xs text-on-surface-variant">
              <li>
                <strong className="text-text-primary">AES-256 Encryption:</strong> Data at rest encryption covering account records, scorecard logs, and private notes.
              </li>
              <li>
                <strong className="text-text-primary">TLS 1.3 Transport Security:</strong> Full cryptographic channel isolation for telemetry streamed between mobile devices and APIs.
              </li>
              <li>
                <strong className="text-text-primary">36-Month Retention Window:</strong> Automated retention pruning for raw fine-grain hole-by-hole GPS coordinates.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-space-sm pt-2">
            <h2 className="font-headline-md text-headline-md text-text-primary font-bold">
              6. Third-Party Services &amp; Sub-Processors
            </h2>
            <p>
              All in-app purchases, seasonal handicap memberships, and tournament entry fees are governed by the respective store infrastructure:
            </p>
            <ul className="list-disc pl-5 space-y-space-xs text-on-surface-variant">
              <li>
                <strong className="text-text-primary">Apple In-App Purchases (iOS):</strong> Handled strictly through StoreKit. Your raw credit card credentials never transit or store on Golf Club Advisor hardware.
              </li>
              <li>
                <strong className="text-text-primary">Google Play Billing (Android):</strong> Managed directly through Google Commerce APIs subject to Google Payments Privacy Policies.
              </li>
              <li>
                <strong className="text-text-primary">Sub-Processors:</strong> Crash analytics (Firebase/Sentry) for runtime stabilization and cloud hosting vendors (AWS/GCP) maintaining regional data residency commitments within North America and the European Economic Area.
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-space-sm pt-2">
            <h2 className="font-headline-md text-headline-md text-text-primary font-bold">
              7. User Rights &amp; Data Choices
            </h2>
            <p>
              Depending on your physical jurisdiction (including California, European Union member states, the UK, and Canada), you retain enforceable legal controls over your personal information:
            </p>
            <ul className="list-disc pl-5 space-y-space-xs text-on-surface-variant">
              <li>
                <strong className="text-text-primary">Right to Access &amp; Portability:</strong> Export an indexed machine-readable (.JSON/.CSV) ledger of all recorded scorecards, club specs, and reviews.
              </li>
              <li>
                <strong className="text-text-primary">Right to Erasure (&lsquo;Right to be Forgotten&rsquo;):</strong> Permanently purge your account profile, GPS pin vectors, and associated handicap computations within 30 days of written notice.
              </li>
              <li>
                <strong className="text-text-primary">Right to Object &amp; Restrict Processing:</strong> Opt-out of telemetry-driven equipment recommendations and statistical benchmarking while retaining standard GPS pin reads.
              </li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="space-y-space-sm pt-2 pb-space-lg">
            <h2 className="font-headline-md text-headline-md text-text-primary font-bold">
              8. Contact &amp; Data Protection Officer
            </h2>
            <p>
              For questions concerning location protocols, review attribution moderation, or to initiate a verified GDPR/CCPA request, please reach our Data Protection team directly:
            </p>
            <div className="space-y-space-xs text-on-surface-variant bg-surface-card p-space-md rounded-xl border border-border-subtle mt-2">
              <p className="text-text-primary font-bold">Golf Club Advisor Inc.</p>
              <p>
                Attn: Office of the Data Protection Officer<br />
                800 Links Parkway, Suite 400<br />
                Ponte Vedra Beach, FL 32082
              </p>
              <p className="pt-2">
                General Support:{" "}
                <a className="text-primary hover:underline font-medium" href={`mailto:${APP_CONFIG.supportEmail}`}>
                  {APP_CONFIG.supportEmail}
                </a>
              </p>
              <p>
                Privacy Inquiries:{" "}
                <a className="text-primary hover:underline font-medium" href="mailto:privacy@golfclubadvisor.com">
                  privacy@golfclubadvisor.com
                </a>
              </p>
              <p className="text-text-muted font-label-sm text-label-sm pt-1">
                Response Window: Under 48 business hours
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
