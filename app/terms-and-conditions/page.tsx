import type { Metadata } from "next";
import Link from "next/link";
import { APP_CONFIG } from "@/components/Config";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Governing rules, intellectual property stipulations, and community covenants for all Golf Club Advisor platforms.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="w-full bg-background min-h-screen pt-24 md:pt-28 pb-margin-lg">
      <div className="max-w-3xl mx-auto px-gutter-lg text-text-primary">
        {/* Header */}
        <header className="mb-10 pb-6 border-b border-border-subtle/50">
          <span className="font-label-sm text-label-sm text-fairway-green uppercase font-bold tracking-widest block mb-1">
            Legal Agreement &amp; Platform Guidelines
          </span>
          <h1 className="font-display text-[34px] sm:text-headline-lg md:text-display text-primary tracking-tight mb-2 font-extrabold">
            Terms and Conditions
          </h1>
          <p className="font-body-sm text-body-sm text-text-muted">
            Effective Date: October 24, 2024
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mt-4 leading-relaxed">
            Governing rules, intellectual property stipulations, and community covenants for all Golf Club Advisor platforms.
          </p>
        </header>

        {/* Content Article */}
        <article className="space-y-8 font-body-md text-body-md text-on-surface-variant leading-relaxed">
          <div>
            <p className="mb-4 text-text-primary font-medium">
              Welcome to Golf Club Advisor. Please read these Terms and Conditions thoroughly prior to downloading our mobile application, creating an account, browsing proprietary golf course reviews, or leveraging course GPS yardage calculations.
            </p>
            <p className="mb-4">
              By downloading, navigating, accessing, or contributing to Golf Club Advisor via web interfaces, mobile platforms (iOS and Android), or through associated API endpoints, you enter into a legally binding covenant with Golf Club Advisor Inc. If you disagree with any portion of these conditions, your sole remedy is to immediately cease use and delete all associated mobile data instances.
            </p>
            <p>
              For details on how we collect and manage personal data, please review our{" "}
              <Link
                className="text-primary hover:underline font-semibold"
                href="/privacy-policy"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="font-headline-sm text-headline-sm text-text-primary tracking-tight mb-3 font-bold">
              1. Acceptance of Terms
            </h2>
            <p className="mb-3">
              These Terms and Conditions constitute a contract between you (&ldquo;User,&rdquo; &ldquo;Player,&rdquo; or &ldquo;Member&rdquo;) and Golf Club Advisor Inc. (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). Access to our proprietary equipment reviews, hole flyover diagrams, elevation-adjusted yardage databases, and player rating engines is granted subject to unconditional adherence to these tenets.
            </p>
            <p>
              We reserve the exclusive right to update, revise, or supersede these terms at any time. When substantial modifications occur, we will adjust the &ldquo;Effective Date&rdquo; timestamp and deliver a direct prompt via the Golf Club Advisor mobile application. Continued interaction after such notices validates your consent to revised policies.
            </p>
          </div>

          <div>
            <h2 className="font-headline-sm text-headline-sm text-text-primary tracking-tight mb-3 font-bold">
              2. User Eligibility and Account Registration
            </h2>
            <p className="mb-3">
              Users must be at least sixteen (16) years of age or possess formal parental or guardian consent to register an account. By setting up an account, you confirm that all personal details (including official USGA/WHS handicap indexes, email addresses, and home course affiliations) are truthful, authentic, and periodically maintained.
            </p>
            <p className="mb-3">
              <strong className="text-text-primary">Credential Confidentiality:</strong> You are solely responsible for all activities occurring under your login credentials. Sharing accounts between players to circumvent tournament leaderboard rules is strictly prohibited.
            </p>
            <p>
              <strong className="text-text-primary">Authentication Integrity:</strong> We reserve the prerogative to suspend or terminate accounts that falsify handicap records, impersonate licensed PGA professionals, or forge verification badges.
            </p>
          </div>

          <div>
            <h2 className="font-headline-sm text-headline-sm text-text-primary tracking-tight mb-3 font-bold">
              3. Community Review Guidelines &amp; Content Standards
            </h2>
            <p className="mb-3">
              Golf Club Advisor prides itself on authoritative, unvarnished golfer commentary. When submitting golf course critique, pace-of-play ratings, maintenance alerts, or hardware assessments, you agree to submit solely genuine, first-person reviews devoid of conflicts of interest.
            </p>
            <p className="font-semibold text-text-primary mb-2">
              Strictly Prohibited Submissions:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                Compensated reviews arranged by course proprietors or equipment vendors without transparent promotional disclosure.
              </li>
              <li>
                Defamatory, libelous, racially abusive, or profane remarks directed at course greenskeepers, marshals, or playing companions.
              </li>
              <li>
                Fabricated green speeds (Stimpmeter estimates) or synthetic scorecard injection designed to skew handicap calculations.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-headline-sm text-headline-sm text-text-primary tracking-tight mb-3 font-bold">
              4. Intellectual Property Rights
            </h2>
            <p className="mb-3">
              All visual designs, golf course terrain geometries, satellite elevation renderings, proprietary club recommendation algorithms, and editorial write-ups on Golf Club Advisor remain the sole intellectual property of Golf Club Advisor Inc. and are defended under international copyright, trademark, and trade dress regulations.
            </p>
            <p>
              By posting images, scorecard summaries, or fairway reviews on our platform, you confer to Golf Club Advisor a non-exclusive, worldwide, royalty-free, perpetual license to republish, adapt, display, and synthesize said content across digital editorial platforms and analytical telemetry datasets.
            </p>
          </div>

          <div>
            <h2 className="font-headline-sm text-headline-sm text-text-primary tracking-tight mb-3 font-bold">
              5. Course Information, Pricing &amp; Accuracy Disclaimers
            </h2>
            <p className="mb-3">
              While our agronomy network and GPS satellite synchronization systems maintain high precision, Golf Club Advisor provides all course maps, yardage tables, greens fee estimations, dress code details, and pin locations on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis.
            </p>
            <p>
              <strong className="text-text-primary">USGA Rule 4.3 Compliance:</strong> Users must verify that using our real-time elevation, slope calculation, or wind trajectory tooling conforms with localized club tournament protocols and USGA/R&amp;A Local Rules before teeing off in competitive match play.
            </p>
          </div>

          <div>
            <h2 className="font-headline-sm text-headline-sm text-text-primary tracking-tight mb-3 font-bold">
              6. Third-Party Links &amp; Golf Club Facilities
            </h2>
            <p>
              Our applications provide outbound connections to tee-time reservation engines, municipal course booking portals, country club membership portals, and equipment retailers. Golf Club Advisor exercises zero operational control over third-party terms, refund regulations, inclement weather raincheck rules, or tee time pricing fluctuations.
            </p>
          </div>

          <div>
            <h2 className="font-headline-sm text-headline-sm text-text-primary tracking-tight mb-3 font-bold">
              7. Limitation of Liability
            </h2>
            <p className="mb-3">
              Under no circumstances shall Golf Club Advisor Inc., its officers, agronomists, editorial analysts, or technology providers be held accountable for direct, indirect, incidental, punitive, or consequential damages resulting from:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Discrepancies in GPS yardage telemetry or hazardous green contours.</li>
              <li>Personal injury, lightning exposure, or physical hazards experienced while navigating golf facilities.</li>
              <li>Loss of handicap indexes or tournament disqualification due to electronic device rule misapplication.</li>
              <li>Unauthorized access, database disruption, or network outages during live tournament rounds.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-headline-sm text-headline-sm text-text-primary tracking-tight mb-3 font-bold">
              8. Termination of Service
            </h2>
            <p>
              We retain the prerogative to terminate, disable, or suspend your account access instantly, with or without notice, in the event of any detected violation of these Terms, abusive behavior toward fellow members, or fraudulent data manipulations. Users may terminate their membership at any moment through profile preferences.
            </p>
          </div>

          <div>
            <h2 className="font-headline-sm text-headline-sm text-text-primary tracking-tight mb-3 font-bold">
              9. Governing Law
            </h2>
            <p>
              These Terms, and all subsequent agreements arising therefrom, shall be governed by, interpreted, and enforced in accordance with the laws of the State of Delaware, United States, without giving effect to any principles of conflicts of law.
            </p>
          </div>

          <div className="pb-space-lg">
            <h2 className="font-headline-sm text-headline-sm text-text-primary tracking-tight mb-3 font-bold">
              10. Contact Information and Support
            </h2>
            <p className="mb-3">
              If you have inquiries concerning these Terms and Conditions, require dispute clarity, or represent a golf course facility wishing to claim a profile listing, reach out via the following channels:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mb-4">
              <li>
                <strong className="text-text-primary">Legal Compliance:</strong> legal@golfclubadvisor.com (Direct inquiries regarding regulatory terms, IP, or DMCA requests)
              </li>
              <li>
                <strong className="text-text-primary">Player Assistance:</strong>{" "}
                <a className="text-primary hover:underline font-medium" href={`mailto:${APP_CONFIG.supportEmail}`}>
                  {APP_CONFIG.supportEmail}
                </a>{" "}
                (Account authentication, scoring bugs, and mobile synchronization issues)
              </li>
            </ul>
            <p>
              You may also contact us directly through our{" "}
              <Link
                className="text-primary hover:underline font-semibold"
                href="/contact"
              >
                Contact Us
              </Link>{" "}
              page or review our{" "}
              <Link
                className="text-primary hover:underline font-semibold"
                href="/privacy-policy"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
