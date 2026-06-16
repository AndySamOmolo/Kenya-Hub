import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "KenyaHub terms of service — conditions for using our free tools and data.",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-outfit)] mb-8 tracking-tight">
        Terms of Service
      </h1>

      <div className="space-y-8 text-sm text-text-secondary leading-relaxed">
        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing and using KenyaHub, you agree to be bound by these
            Terms of Service. If you do not agree to these terms, please do not
            use the site.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            2. Nature of the Service
          </h2>
          <p>
            KenyaHub provides free online calculators, reference tools, and
            informational content related to Kenya. All tools are provided{" "}
            <strong className="text-text-primary">&quot;as is&quot;</strong> for
            informational purposes only.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            3. Accuracy Disclaimer
          </h2>
          <p>
            While we strive to ensure all data is accurate and up-to-date based
            on official Kenyan government sources, KenyaHub:
          </p>
          <ul className="mt-2 space-y-1 ml-4 list-disc text-text-muted">
            <li>
              Does <strong className="text-text-secondary">not</strong> guarantee
              the accuracy, completeness, or timeliness of any information
            </li>
            <li>
              Does <strong className="text-text-secondary">not</strong> provide
              legal, financial, medical, or professional advice
            </li>
            <li>
              Recommends users verify critical information with the relevant
              Kenyan government body (KRA, KUCCPS, NHIF, KICD, etc.)
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            4. Limitation of Liability
          </h2>
          <p>
            KenyaHub and its creators shall not be liable for any damages
            arising from the use of or inability to use our tools and content.
            This includes but is not limited to: incorrect tax calculations,
            inaccurate school information, or outdated regulatory data.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            5. Intellectual Property
          </h2>
          <p>
            The KenyaHub name, logo, design, and original content are protected
            by intellectual property laws. The underlying data used by our tools
            (tax bands, school curricula, public holidays, etc.) is public
            information published by the Government of Kenya.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            6. Advertising
          </h2>
          <p>
            KenyaHub displays advertisements through Google AdSense. These ads
            are served by Google and are subject to Google&apos;s own terms and
            privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            7. Modifications
          </h2>
          <p>
            We reserve the right to modify, suspend, or discontinue any tool or
            feature at any time without notice. We may also update these Terms
            of Service periodically.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            8. Governing Law
          </h2>
          <p>
            These terms are governed by the laws of the Republic of Kenya. Any
            disputes shall be subject to the jurisdiction of Kenyan courts.
          </p>
        </section>

        <p className="text-xs text-text-muted pt-4 border-t border-border">
          Last updated: January 2025
        </p>
      </div>
    </div>
  );
}
