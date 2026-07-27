import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — KenyaHub",
  description: "KenyaHub Privacy Policy — how we handle user data, cookie disclosures, Google AdSense policies, and your privacy rights.",
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
            KenyaHub does <strong className="text-text-primary">not</strong> require user registration, accounts, or personal contact details to access any of our tools, calculators, guides, or public datasets.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            2. Local Browser-Side Processing
          </h2>
          <p>
            All calculations performed on KenyaHub (including PAYE tax amounts, M-Pesa transaction fee comparisons, HELB repayment figures, and KUCCPS cluster points) execute strictly within your local web browser. We do not transmit or store your entered financial figures, income data, or personal numbers on external servers.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            3. Google AdSense & Third-Party Advertising
          </h2>
          <p>
            KenyaHub uses Google AdSense to serve ads when you visit our website. Google and its third-party advertising partners may use cookies, web beacons, and similar technologies to collect non-personally identifiable information about your visits to this and other websites in order to provide targeted advertisements about goods and services of interest to you.
          </p>
          <ul className="mt-3 space-y-2 ml-4 list-disc text-text-muted">
            <li>
              <strong className="text-text-secondary">Google DART Cookie:</strong> Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to KenyaHub or other websites on the Internet.
            </li>
            <li>
              <strong className="text-text-secondary">Personalized Advertising Opt-Out:</strong> Users may opt out of personalized advertising by visiting{" "}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                Google Ad Settings
              </a>. Alternatively, users can opt out of third-party vendor cookies for personalized advertising by visiting{" "}
              <a
                href="https://optout.networkadvertising.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                www.aboutads.info
              </a>.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            4. Web Analytics (Google Analytics)
          </h2>
          <p>
            We use Google Analytics to gather anonymous, aggregated traffic statistics to understand how users interact with KenyaHub and improve site performance. Google Analytics records data such as:
          </p>
          <ul className="mt-2 space-y-1 ml-4 list-disc text-text-muted">
            <li>Device type, browser version, and operating system</li>
            <li>Approximate location (country and city level)</li>
            <li>Referral sources and pages viewed</li>
            <li>Session duration and engagement rates</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            5. Cookies and Control
          </h2>
          <p>
            A cookie is a small text file placed on your device by a web page server. You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. Disabling cookies will not affect your ability to use the tools on KenyaHub.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            6. Regulatory Compliance & Data Rights
          </h2>
          <p>
            KenyaHub adheres to applicable data protection regulations:
          </p>
          <ul className="mt-2 space-y-2 ml-4 list-disc text-text-muted">
            <li>
              <strong className="text-text-secondary">Kenya Data Protection Act (2019):</strong> We respect all rights granted under the Data Protection Act of Kenya. Since we do not collect personal data files or user profiles, no personal identifying data is held or processed.
            </li>
            <li>
              <strong className="text-text-secondary">European Economic Area (GDPR):</strong> Visitors from the EEA have specific rights regarding cookie consent for personalized advertising.
            </li>
            <li>
              <strong className="text-text-secondary">California Consumer Privacy Act (CCPA):</strong> California residents have the right to request information regarding third-party ad data collection.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            7. External Links
          </h2>
          <p>
            Our site may contain links to official Kenyan government websites (such as KRA, KNBS, CBK, eCitizen). KenyaHub is not responsible for the privacy practices or content of external third-party websites.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            8. Contact Us
          </h2>
          <p>
            If you have questions regarding this Privacy Policy or data practices, please email us at{" "}
            <a href="mailto:andysamonyango@gmail.com" className="text-gold hover:underline font-semibold">
              andysamonyango@gmail.com
            </a>.
          </p>
        </section>

        <p className="text-xs text-text-muted pt-4 border-t border-border">
          Last Revision: July 2026 · Compliant with Google AdSense Publisher Guidelines
        </p>
      </div>
    </div>
  );
}
