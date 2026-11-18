import type { Metadata } from "next";
import Link from "next/link";
import CookiePreferencesButton from "@/components/CookiePreferencesButton";

export const metadata: Metadata = {
  title: "Privacy Policy — Data Protection & Cookies",
  description:
    "KenyaHub Privacy Policy — local browser calculations, client storage keys, Google Analytics 4 (GA4), Google AdSense cookies, and Consent Mode v2.",
  alternates: {
    canonical: "https://kenyahub.me/privacy/",
    languages: {
      "en-KE": "https://kenyahub.me/privacy/",
      en: "https://kenyahub.me/privacy/",
      "x-default": "https://kenyahub.me/privacy/",
    },
  },
  openGraph: {
    title: "Privacy Policy | KenyaHub",
    description:
      "KenyaHub Privacy Policy — local browser calculations, client storage disclosures, Google Analytics 4 (GA4), Google AdSense cookies, and Consent Mode v2.",
    type: "website",
    locale: "en_KE",
    siteName: "KenyaHub",
    url: "https://kenyahub.me/privacy/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "KenyaHub" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | KenyaHub",
    description:
      "KenyaHub Privacy Policy — local browser calculations, client storage disclosures, Google Analytics 4 (GA4), Google AdSense cookies, and Consent Mode v2.",
    images: ["/og-image.png"],
  },
};

export default function PrivacyPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://kenyahub.me/" },
      { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://kenyahub.me/privacy/" },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto px-3.5 sm:px-6 lg:px-8 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-text-muted mb-6">
        <Link href="/" className="hover:text-gold transition-colors">
          Home
        </Link>
        <svg className="w-3 h-3 text-border-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-text-secondary">Privacy Policy</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-outfit)] mb-8 tracking-tight">
        Privacy Policy
      </h1>

      <div className="space-y-8 text-sm text-text-secondary leading-relaxed">
        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            1. Overview &amp; Commitment to Privacy
          </h2>
          <p>
            KenyaHub (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your online privacy. This Privacy Policy outlines how information is collected, used, and safeguarded when you visit our website at <strong className="text-text-primary">kenyahub.me</strong>.
          </p>
          <p className="mt-3">
            KenyaHub does <strong className="text-text-primary">not</strong> require user registration, accounts, or personal contact details to access any of our tools, calculators, guides, or public datasets. We provide open, barrier-free access to digital utilities for all Kenyans while respecting personal privacy.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            2. Local Browser-Side Processing
          </h2>
          <p>
            All calculators and interactive tools on KenyaHub (including the PAYE tax calculator, M-Pesa fee comparisons, KRA CRSP car import duty calculator, HELB repayment calculator, KUCCPS cluster points evaluator, and Mjengo construction BoQ estimator) execute strictly within your local web browser using client-side JavaScript.
          </p>
          <p className="mt-2 text-text-muted">
            We do not transmit, log, or store your entered financial figures, income amounts, phone numbers, or personal calculation parameters on our servers or external databases. When you generate a shareable PAYE calculation link, salary parameters are encoded in the URL hash fragment (<code className="font-mono text-gold">#gross=...</code>) so they never leave your browser in HTTP Referer headers or server logs.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            3. Google Analytics 4 (GA4)
          </h2>
          <p>
            We use <strong className="text-text-primary">Google Analytics 4</strong> (Measurement ID: <code className="px-1.5 py-0.5 rounded bg-bg-elevated text-gold text-xs font-mono">G-Y069879V7Y</code>), a web analytics service provided by Google LLC (&quot;Google&quot;), to understand how visitors interact with our website and discover which tools are most useful.
          </p>

          <div className="mt-4 space-y-3">
            <div className="p-3.5 rounded-xl bg-bg-card border border-border">
              <h3 className="text-xs font-bold text-text-primary mb-1">What Information Is Collected:</h3>
              <p className="text-xs text-text-muted">
                Google Analytics gathers aggregated, non-personally identifiable usage data, including pages viewed, session duration, device type, operating system, browser version, general geographic region (country and city level), and referral sources. No personally identifiable information (PII) such as your name, email, or telephone number is ever collected.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-bg-card border border-border">
              <h3 className="text-xs font-bold text-text-primary mb-1">IP Anonymization &amp; URL Passthrough Disabled:</h3>
              <p className="text-xs text-text-muted">
                In Google Analytics 4, IP addresses are automatically masked and anonymized by default, and <code className="font-mono text-gold">url_passthrough</code> is set to <code className="font-mono text-gold">false</code> so ad-click identifiers are never appended to internal URLs when consent is denied.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-bg-card border border-border">
              <h3 className="text-xs font-bold text-text-primary mb-1">Google Consent Mode v2 &amp; Cookie Expiration:</h3>
              <p className="text-xs text-text-muted">
                KenyaHub implements Google Consent Mode v2. By default, analytics storage (<code className="font-mono text-gold">analytics_storage</code>) and advertising storage (<code className="font-mono text-gold">ad_storage</code>, <code className="font-mono text-gold">ad_user_data</code>, <code className="font-mono text-gold">ad_personalization</code>) are set to <strong className="text-text-secondary">denied</strong> until you make a consent choice. If you revoke analytics or advertising consent at any time, KenyaHub immediately expires existing Google cookies (<code className="font-mono text-gold">_ga</code>, <code className="font-mono text-gold">_gid</code>, <code className="font-mono text-gold">_gat</code>, <code className="font-mono text-gold">__gads</code>, <code className="font-mono text-gold">__gpi</code>).
              </p>
            </div>
          </div>

          <p className="mt-3">
            To opt out of being tracked by Google Analytics across all websites, you can install the official{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline font-medium"
            >
              Google Analytics Opt-out Browser Add-on
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            4. Google AdSense, DoubleClick DART Cookies &amp; Third-Party Advertising
          </h2>
          <p>
            KenyaHub uses <strong className="text-text-primary">Google AdSense</strong> (Publisher ID: <code className="px-1.5 py-0.5 rounded bg-bg-elevated text-gold text-xs font-mono">ca-pub-5895990873842803</code>) to display advertisements on content pages when you visit our website. Revenue from these advertisements supports our hosting, statutory research, and ongoing maintenance of free public tools.
          </p>
          <ul className="mt-3 space-y-2.5 ml-4 list-disc text-text-muted">
            <li>
              <strong className="text-text-secondary">Third-Party Vendor Cookies:</strong> Third-party vendors, including Google, use cookies (such as the Google advertising and DoubleClick DART cookies) to serve ads based on a user&apos;s prior visits to KenyaHub or other websites on the internet.
            </li>
            <li>
              <strong className="text-text-secondary">Use of Advertising Cookies:</strong> Google&apos;s use of advertising cookies enables it and its partners to serve advertisements to our users based on their visit to KenyaHub and/or other sites on the Internet.
            </li>
            <li>
              <strong className="text-text-secondary">How Google Uses Partner Data:</strong> To learn more about how Google collects and processes data when you visit websites or apps that use Google services, please review Google&apos;s official disclosure:{" "}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline font-medium"
              >
                How Google uses information from sites or apps that use our services
              </a>.
            </li>
            <li>
              <strong className="text-text-secondary">Opting Out of Personalized Advertising:</strong> Users may opt out of personalized advertising at any time by visiting{" "}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline font-medium"
              >
                Google Ads Settings
              </a>. Alternatively, you can opt out of a third-party vendor&apos;s use of cookies for personalized advertising by visiting{" "}
              <a
                href="https://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline font-medium"
              >
                www.aboutads.info/choices
              </a>{" "}
              or{" "}
              <a
                href="https://www.youronlinechoices.eu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline font-medium"
              >
                Your Online Choices (EU)
              </a>.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            5. Cookies, LocalStorage Keys &amp; Third-Party Infrastructure Providers
          </h2>
          <p>
            Cookies and browser local storage are small entries stored on your device by your web browser. We categorize them into:
          </p>
          <ul className="mt-3 space-y-2.5 ml-4 list-disc text-text-muted">
            <li>
              <strong className="text-text-secondary">Essential &amp; Functional LocalStorage Keys:</strong> Stored strictly on your device to preserve your UI preferences and learning progress without requiring an account:
              <ul className="mt-1.5 ml-4 list-disc space-y-1 text-xs">
                <li><code className="font-mono text-gold">kh-theme</code> — Remembers your chosen Dark or Light display theme.</li>
                <li><code className="font-mono text-gold">kh-cookie-consent</code> &amp; <code className="font-mono text-gold">kh-cookie-preferences</code> — Stores your Google Consent Mode v2 cookie choices.</li>
                <li><code className="font-mono text-gold">kh-learn-progress</code> (<code className="font-mono text-gold">kh-learn-progress-*</code>) — Saves your lesson completion, XP, streaks, and vocabulary review state across our 23 Kenyan language courses.</li>
                <li><code className="font-mono text-gold">kh-sfx-muted</code> — Remembers whether lesson sound effects are muted.</li>
                <li><code className="font-mono text-gold">kh-translator-recent</code> &amp; <code className="font-mono text-gold">kh-translator-favs</code> — Saves your recent lookups and bookmarked words in the 23-Language Translator &amp; Dictionary.</li>
                <li><code className="font-mono text-gold">kh-user-contributions</code> — Stores your locally drafted community word or proverb suggestions prior to submission.</li>
                <li><code className="font-mono text-gold">kh-pinned-tools</code> &amp; <code className="font-mono text-gold">kh-tool-usage</code> — Remembers your pinned calculators and recently used tools on the Tools Hub.</li>
              </ul>
            </li>
            <li>
              <strong className="text-text-secondary">Third-Party Map &amp; Audio Content Providers:</strong>
              <ul className="mt-1.5 ml-4 list-disc space-y-1 text-xs">
                <li><strong className="text-text-primary">CartoDB &amp; OpenStreetMap:</strong> When viewing interactive Matatu route maps, your browser fetches map tiles directly from <strong className="text-text-primary">CartoDB</strong> (<code className="font-mono text-gold">basemaps.cartocdn.com</code>) and <strong className="text-text-primary">OpenStreetMap</strong> contributors.</li>
                <li><strong className="text-text-primary">Cloudflare R2 &amp; Zenodo:</strong> When playing native speaker audio pronunciations in our language courses and translator, your browser streams audio files from our <strong className="text-text-primary">Cloudflare R2</strong> edge bucket (<code className="font-mono text-gold">audio.kenyahub.me</code>) and open academic archives hosted on <strong className="text-text-primary">Zenodo</strong> (<code className="font-mono text-gold">zenodo.org</code>).</li>
              </ul>
            </li>
            <li>
              <strong className="text-text-secondary">Analytics Cookies (Optional):</strong> Cookies used by Google Analytics (e.g., <code className="font-mono text-gold">_ga</code>, <code className="font-mono text-gold">_gid</code>, <code className="font-mono text-gold">_gat</code>) to measure aggregated audience engagement. Activated only after explicit user consent.
            </li>
            <li>
              <strong className="text-text-secondary">Advertising Cookies (Optional):</strong> Cookies used by Google AdSense (e.g., <code className="font-mono text-gold">__gads</code>, <code className="font-mono text-gold">__gpi</code>) to serve relevant ads, cap frequency, and measure ad performance. Activated according to your consent settings.
            </li>
          </ul>

          <div className="mt-4">
            <CookiePreferencesButton />
          </div>

          <p className="mt-2 text-xs text-text-muted">
            You can also clear local storage or adjust your web browser settings to block or delete cookies at any time. Disabling cookies will not restrict or break any calculation tools on KenyaHub.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            6. Regulatory Compliance &amp; Data Protection Rights
          </h2>
          <p>
            KenyaHub adheres to applicable national and international data protection frameworks:
          </p>
          <ul className="mt-2 space-y-2 ml-4 list-disc text-text-muted">
            <li>
              <strong className="text-text-secondary">Kenya Data Protection Act (No. 24 of 2019):</strong> We uphold all data protection principles established by the Office of the Data Protection Commissioner (ODPC) of Kenya, including data minimization, purpose limitation, and privacy by design.
            </li>
            <li>
              <strong className="text-text-secondary">European Economic Area &amp; UK (GDPR &amp; Google EU User Consent Policy):</strong> Visitors have explicit rights regarding prior informed consent for cookies and transparent control over analytics and ad personalization.
            </li>
            <li>
              <strong className="text-text-secondary">California Consumer Privacy Act (CCPA / CPRA):</strong> Users have the right to know what categories of data are collected and to opt out of personalized advertising cookies. KenyaHub does not sell personal information.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            7. External Government &amp; Institutional Links
          </h2>
          <p>
            Our platform cites and links to official Kenyan government portals and state agencies (such as KRA, KNBS, CBK, NTSA, KUCCPS, SHA, EPRA, and eCitizen). KenyaHub is an independent public utility and is not responsible for the privacy practices or content of external websites.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            8. Contact Our Privacy &amp; Editorial Desk
          </h2>
          <p>
            If you have questions, data requests, or concerns regarding this Privacy Policy, please contact us at:{" "}
            <a href="mailto:contact@kenyahub.me" className="text-gold hover:underline font-semibold">
              contact@kenyahub.me
            </a>{" "}
            or submit a request via our <Link href="/contact/" className="text-gold hover:underline font-semibold">Contact Page</Link>.
          </p>
        </section>

        <p className="text-xs text-text-muted pt-4 border-t border-border">
          Last Revision: November 2026 · Compliant with the Kenya Data Protection Act (2019), Google AdSense Programme Policies, Google EU User Consent Policy &amp; Google Consent Mode v2
        </p>
      </div>
    </div>
  );
}
