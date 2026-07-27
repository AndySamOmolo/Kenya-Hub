import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — KenyaHub",
  description: "KenyaHub Terms of Service — terms of use, financial disclaimers, intellectual property, and governing law.",
  alternates: { canonical: "https://kenyahub.me/terms/" },
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
            By accessing or using <strong className="text-text-primary">KenyaHub</strong> (kenyahub.me), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            2. Educational & Informational Purpose Disclaimer
          </h2>
          <p>
            All tools, calculators, guides, datasets, and information provided on KenyaHub are for general educational and informational purposes only.
          </p>
          <ul className="mt-2 space-y-2 ml-4 list-disc text-text-muted">
            <li>
              <strong className="text-text-secondary">No Professional Advice:</strong> Calculations (e.g. PAYE, Housing Levy, HELB repayments, Stamp Duty) do not constitute formal tax, legal, financial, or accounting advice.
            </li>
            <li>
              <strong className="text-text-secondary">Consult Certified Professionals:</strong> Users should verify tax returns and legal transactions with certified public accountants (CPA-K) or qualified advocates.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            3. Disclaimer of Warranties
          </h2>
          <p>
            KenyaHub provides all services on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind, express or implied. While we strive to maintain complete accuracy by synthesizing published gazettes and official reports, we do not warrant that tools will be error-free or uninterrupted.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            4. Intellectual Property
          </h2>
          <p>
            The custom design, code, tool layouts, branding, and text content created for KenyaHub are protected by intellectual property laws. Public domain datasets sourced from official government publications remain the property of their respective state agencies.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            5. Limitation of Liability
          </h2>
          <p>
            In no event shall KenyaHub, its operators, or contributors be liable for any direct, indirect, incidental, or consequential damages arising from your reliance on tools or information provided on this platform.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            6. Governing Law
          </h2>
          <p>
            These Terms of Service shall be governed by and construed in accordance with the laws of the Republic of Kenya.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            7. Contact
          </h2>
          <p>
            For questions regarding these terms, please contact us at{" "}
            <a href="mailto:andysamonyango@gmail.com" className="text-gold hover:underline font-semibold">
              andysamonyango@gmail.com
            </a>.
          </p>
        </section>

        <p className="text-xs text-text-muted pt-4 border-t border-border">
          Last Revision: July 2026
        </p>
      </div>
    </div>
  );
}
