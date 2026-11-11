import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Usage Terms, Disclaimers & Governing Law",
  description:
    "KenyaHub Terms of Service — terms of use, statutory and financial disclaimers, non-affiliation notice, intellectual property, and governing law.",
  alternates: {
    canonical: "https://kenyahub.me/terms/",
    languages: {
      "en-KE": "https://kenyahub.me/terms/",
      en: "https://kenyahub.me/terms/",
    },
  },
  openGraph: {
    title: "Terms of Service | KenyaHub",
    description:
      "KenyaHub Terms of Service — terms of use, statutory and financial disclaimers, non-affiliation notice, and governing law.",
    type: "website",
    locale: "en_KE",
    siteName: "KenyaHub",
    url: "https://kenyahub.me/terms/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "KenyaHub Terms of Service" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | KenyaHub",
    description:
      "KenyaHub Terms of Service — terms of use, statutory and financial disclaimers, and governing law.",
    images: ["/og-image.png"],
  },
};

export default function TermsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://kenyahub.me/" },
      { "@type": "ListItem", position: 2, name: "Terms of Service", item: "https://kenyahub.me/terms/" },
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
        <span className="text-text-secondary">Terms of Service</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-outfit)] mb-8 tracking-tight">
        Terms of Service
      </h1>

      <div className="space-y-8 text-sm text-text-secondary leading-relaxed">
        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using <strong className="text-text-primary">KenyaHub</strong> (kenyahub.me), you agree to be bound by these Terms of Service and our <Link href="/privacy/" className="text-gold hover:underline">Privacy Policy</Link>. If you do not agree to these terms, please discontinue use of our website and services.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            2. Independent Public Utility &amp; Non-Affiliation Notice
          </h2>
          <p>
            KenyaHub is an independent digital publication and utility platform operated from Nairobi, Kenya. KenyaHub is <strong className="text-text-primary">not</strong> an official government portal and is not affiliated with the Kenya Revenue Authority (KRA), National Transport and Safety Authority (NTSA), Ministry of Education, KUCCPS, KNEC, Social Health Authority (SHA), Safaricom PLC, or any state corporation. Official government filings and payments must always be conducted on designated state portals such as <strong className="text-text-primary">ecitizen.go.ke</strong> or <strong className="text-text-primary">itax.kra.go.ke</strong>.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            3. Educational &amp; Informational Purpose Disclaimer
          </h2>
          <p>
            All tools, calculators, guides, language courses, datasets, and articles provided on KenyaHub are for general educational, planning, and informational purposes only.
          </p>
          <ul className="mt-2 space-y-2 ml-4 list-disc text-text-muted">
            <li>
              <strong className="text-text-secondary">No Professional Tax, Financial, or Legal Advice:</strong> Outputs from our calculators (including PAYE, NSSF, SHA/SHIF, Housing Levy, KRA CRSP Car Import Duty, HELB repayments, SACCO loans, Stamp Duty, and Mjengo construction estimates) are mathematical estimates based on published schedules and do not constitute formal tax, legal, accounting, or quantity surveying advice.
            </li>
            <li>
              <strong className="text-text-secondary">No Medical Advice:</strong> Health directories, KEPI vaccination trackers, and Kenyan food nutrition tables are provided strictly for general health literacy and do not replace consultation with a licensed medical practitioner or clinical nutritionist.
            </li>
            <li>
              <strong className="text-text-secondary">Consult Certified Professionals:</strong> Users should verify tax returns, property conveyancing, and construction budgets with Certified Public Accountants (CPA-K), Advocates of the High Court of Kenya, or BORAQS-registered Quantity Surveyors.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            4. Accuracy of Data &amp; Disclaimer of Warranties
          </h2>
          <p>
            KenyaHub provides all services on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind, express or implied. While our editorial team audits Kenyan Gazette Notices, Finance Acts, and regulatory schedules regularly, statutory tariffs and administrative rules may change without prior notice. We do not warrant that any calculator or dataset will be error-free, complete, or uninterrupted.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            5. Intellectual Property &amp; Acceptable Use
          </h2>
          <p>
            The custom source code, calculator interfaces, visual design, original editorial guides, and structured compilations created for KenyaHub are protected by copyright and intellectual property laws. Underlying statutory schedules, Acts of Parliament, and pre-1929 historical linguistic monographs remain in the public domain or the property of their respective institutions. Automated scraping, bulk mirroring, or framing of KenyaHub tools without written permission is prohibited.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            6. Limitation of Liability
          </h2>
          <p>
            In no event shall KenyaHub, its operators, editors, or contributors be liable for any direct, indirect, incidental, consequential, or pecuniary damages arising out of your use of, or reliance on, any calculator, guide, or dataset provided on this platform.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            7. Governing Law &amp; Jurisdiction
          </h2>
          <p>
            These Terms of Service shall be governed by and construed in accordance with the laws of the Republic of Kenya. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Kenya sitting in Nairobi.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            8. Contact Information
          </h2>
          <p>
            For questions regarding these Terms of Service or to report a statutory data update, please contact us at{" "}
            <a href="mailto:contact@kenyahub.me" className="text-gold hover:underline font-semibold">
              contact@kenyahub.me
            </a>{" "}
            or visit our <Link href="/contact/" className="text-gold hover:underline">Contact Page</Link>.
          </p>
        </section>

        <p className="text-xs text-text-muted pt-4 border-t border-border">
          Last Revision: November 2026 · Nairobi, Republic of Kenya
        </p>
      </div>
    </div>
  );
}
