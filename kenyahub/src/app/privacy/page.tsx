import type { Metadata } from "next";
import CookiePreferencesButton from "@/components/CookiePreferencesButton";

export const metadata: Metadata = {
  title: "Privacy Policy — KenyaHub",
  description:
    "KenyaHub Privacy Policy — how we handle user data, local browser calculations, Google Analytics 4 (GA4), Google AdSense policies, and Google Consent Mode v2.",
  alternates: { canonical: "https://kenyahub.me/privacy/" },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-outfit)] mb-8 tracking-tight">
        Privacy Policy
      </h1>

      <div className="space-y-8 text-sm text-text-secondary leading-relaxed">
        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            1. Overview & Commitment to Privacy
          </h2>
          <p>
            KenyaHub (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your online privacy. This Privacy Policy outlines how information is collected, used, and safeguarded when you visit our website at <strong className="text-text-primary">kenyahub.me</strong>.
          </p>
          <p className="mt-3">
            KenyaHub does <strong className="text-text-primary">not</strong> require user registration, accounts, or personal contact details to access any of our tools, calculators, guides, or public datasets. We believe in providing open, barrier-free access to digital utilities for all Kenyans while respecting personal privacy.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            2. Local Browser-Side Processing
          </h2>
          <p>
            All calculators and interactive tools on KenyaHub (including the PAYE tax calculator, M-Pesa fee comparisons, Housing Levy estimator, HELB repayment calculators, KUCCPS cluster points evaluator, and vehicle logbook tools) execute strictly within your local web browser using client-side JavaScript.
          </p>
          <p className="mt-2 text-text-muted">
            We do not transmit, log, or store your entered financial figures, income amounts, phone numbers, or personal calculation parameters on our servers or external databases. Your data stays on your device.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            3. Google Analytics (GA4)
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
              <h3 className="text-xs font-bold text-text-primary mb-1">IP Anonymization:</h3>
              <p className="text-xs text-text-muted">
                In Google Analytics 4, IP addresses are automatically masked and anonymized by default. Google does not log or store individual visitor IP addresses, ensuring that your online activity cannot be traced back to your individual internet connection.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-bg-card border border-border">
              <h3 className="text-xs font-bold text-text-primary mb-1">Google Consent Mode v2:</h3>
              <p className="text-xs text-text-muted">
                KenyaHub complies with Google Consent Mode v2. By default, analytics cookies (<code className="font-mono text-gold">analytics_storage</code>) are set to <strong className="text-text-secondary">denied</strong> when you first load the page. You can accept all cookies, decline all non-essential cookies, or use &quot;Manage&quot; to enable analytics and advertising separately. Your choice can be changed at any time from the Cookie Preferences link in the footer.
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
            4. Google AdSense & Third-Party Advertising
          </h2>
          <p>
            KenyaHub uses Google AdSense to serve advertisements when you visit our website. These ads help support our hosting, maintenance, and ongoing development of free tools.
          </p>
          <ul className="mt-3 space-y-2 ml-4 list-disc text-text-muted">
            <li>
              <strong className="text-text-secondary">Google DART & Advertising Cookies:</strong> Third-party advertising vendors, including Google, use cookies to serve ads based on your prior visits to KenyaHub or other websites.
            </li>
            <li>
              <strong className="text-text-secondary">Personalized Advertising Opt-Out:</strong> You can opt out of personalized advertising by visiting{" "}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline font-medium"
              >
                Google Ad Settings
              </a>. You may also opt out of third-party vendor cookies for personalized ads by visiting{" "}
              <a
                href="https://optout.networkadvertising.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline font-medium"
              >
                aboutads.info
              </a>.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            5. Cookies & Consent Management
          </h2>
          <p>
            Cookies are small text files stored on your device by your web browser. We categorize cookies into:
          </p>
          <ul className="mt-3 space-y-2 ml-4 list-disc text-text-muted">
            <li>
              <strong className="text-text-secondary">Essential & Functional Storage:</strong> Local storage items used exclusively to remember your preferences (such as light/dark mode in <code className="font-mono text-gold">kh-theme</code>, your pinned tools in <code className="font-mono text-gold">kh-pinned-tools</code>, and your cookie preferences in <code className="font-mono text-gold">kh-cookie-consent</code>). These do not track you across other websites.
            </li>
            <li>
              <strong className="text-text-secondary">Analytics Cookies (Optional):</strong> Cookies used by Google Analytics (e.g. <code className="font-mono text-gold">_ga</code>, <code className="font-mono text-gold">_ga_*</code>) to measure aggregated audience engagement. Activated only after explicit consent.
            </li>
            <li>
              <strong className="text-text-secondary">Advertising Cookies (Optional):</strong> Cookies used by Google AdSense to serve relevant ads and measure ad performance. Activated according to your consent settings.
            </li>
          </ul>

          <div className="mt-4">
            <CookiePreferencesButton />
          </div>

          <p className="mt-2 text-xs text-text-muted">
            You can also adjust your web browser settings to block or delete cookies at any time. Disabling cookies will not restrict or break any calculation tools on KenyaHub.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            6. Regulatory Compliance & Data Rights
          </h2>
          <p>
            KenyaHub adheres to applicable regional and international data protection laws:
          </p>
          <ul className="mt-2 space-y-2 ml-4 list-disc text-text-muted">
            <li>
              <strong className="text-text-secondary">Kenya Data Protection Act (2019):</strong> We respect all privacy principles established by the Office of the Data Protection Commissioner (ODPC) of Kenya. Because we do not maintain accounts, collect identity records, or store customer files, no personal data profiles are maintained or commercialized.
            </li>
            <li>
              <strong className="text-text-secondary">European Economic Area (GDPR & ePrivacy):</strong> Visitors from the EEA have explicit rights regarding prior cookie consent and transparent notice for advertising and analytics tracking.
            </li>
            <li>
              <strong className="text-text-secondary">California Consumer Privacy Act (CCPA):</strong> California users have the right to know what data is collected and opt out of third-party advertising cookies. KenyaHub does not sell personal information.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            7. External Links
          </h2>
          <p>
            Our site references official Kenyan government websites and state corporations (such as KRA, KNBS, CBK, NTSA, KUCCPS, and eCitizen). KenyaHub is not responsible for the privacy policies, tracking, or content on external third-party websites.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            8. Contact Us
          </h2>
          <p>
            If you have questions, feedback, or concerns regarding this Privacy Policy or our analytics practices, please contact us at:{" "}
            <a href="mailto:andysamonyango@gmail.com" className="text-gold hover:underline font-semibold">
              andysamonyango@gmail.com
            </a>.
          </p>
        </section>

        <p className="text-xs text-text-muted pt-4 border-t border-border">
          Last Revision: September 2026 · Compliant with Kenya Data Protection Act (2019), Google Analytics 4 Policies, Google AdSense Publisher Guidelines & Google Consent Mode v2
        </p>
      </div>
    </div>
  );
}
