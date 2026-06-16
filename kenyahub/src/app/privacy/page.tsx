import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "KenyaHub privacy policy — how we handle your data and protect your privacy.",
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
            1. Information We Collect
          </h2>
          <p>
            KenyaHub is designed with privacy in mind. We do <strong className="text-text-primary">not</strong> require
            you to create an account, log in, or provide any personal
            information to use our tools.
          </p>
          <p className="mt-3">
            We may collect anonymous usage data through Google Analytics to
            understand how our tools are used and to improve the site. This
            includes:
          </p>
          <ul className="mt-2 space-y-1 ml-4 list-disc text-text-muted">
            <li>Pages visited and time spent</li>
            <li>Device type and browser</li>
            <li>Approximate geographic location (country/city level)</li>
            <li>Referral source</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            2. How We Use Information
          </h2>
          <p>
            Any data collected is used solely to improve KenyaHub — understanding
            which tools are most useful, identifying technical issues, and
            optimizing page performance.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            3. Cookies
          </h2>
          <p>
            KenyaHub may use cookies for Google Analytics and Google AdSense.
            These are standard cookies used by millions of websites. You can
            disable cookies in your browser settings at any time.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            4. Third-Party Services
          </h2>
          <p>We use the following third-party services:</p>
          <ul className="mt-2 space-y-1 ml-4 list-disc text-text-muted">
            <li>
              <strong className="text-text-secondary">Google Analytics</strong> — for
              anonymous usage analytics
            </li>
            <li>
              <strong className="text-text-secondary">Google AdSense</strong> — for
              displaying relevant advertisements
            </li>
          </ul>
          <p className="mt-3">
            These services have their own privacy policies. We encourage you to
            review them.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            5. Data Security
          </h2>
          <p>
            All calculations on KenyaHub happen in your browser. We do not
            transmit your salary figures, grades, phone numbers, or any other
            input data to our servers. Your data stays on your device.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            6. Children&apos;s Privacy
          </h2>
          <p>
            KenyaHub does not knowingly collect personal information from
            children under 13. Our tools are designed for general public use
            and do not target children.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            7. Changes to This Policy
          </h2>
          <p>
            We may update this privacy policy from time to time. Changes will
            be posted on this page with an updated revision date.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            8. Contact
          </h2>
          <p>
            If you have questions about this privacy policy, please reach out
            through our website.
          </p>
        </section>

        <p className="text-xs text-text-muted pt-4 border-t border-border">
          Last updated: January 2025
        </p>
      </div>
    </div>
  );
}
