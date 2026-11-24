import type { Metadata } from "next";
import Link from "next/link";
import ContactClient from "./ContactClient";

const CONTACT_EMAIL = "contact@kenyahub.me";

export const metadata: Metadata = {
  title: "Contact Us — Feedback, Data Corrections & Inquiries",
  description:
    "Contact the KenyaHub editorial and engineering team in Nairobi, Kenya. Report a data update, submit a privacy request, or inquire about partnerships.",
  keywords: [
    "contact KenyaHub",
    "KenyaHub editorial desk",
    "report Kenyan statutory data update",
    "KenyaHub Nairobi contact",
  ],
  alternates: {
    canonical: "https://kenyahub.me/contact/",
    languages: {
      "en-KE": "https://kenyahub.me/contact/",
      en: "https://kenyahub.me/contact/",
      "x-default": "https://kenyahub.me/contact/",
    },
  },
  openGraph: {
    title: "Contact Us — Feedback, Data Corrections & Inquiries | KenyaHub",
    description:
      "Contact the KenyaHub editorial and engineering team in Nairobi, Kenya for data updates, privacy requests, or inquiries.",
    type: "website",
    locale: "en_KE",
    siteName: "KenyaHub",
    url: "https://kenyahub.me/contact/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "KenyaHub" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us — Feedback, Data Corrections & Inquiries | KenyaHub",
    description:
      "Contact the KenyaHub editorial and engineering team in Nairobi, Kenya for data updates, privacy requests, or inquiries.",
    images: ["/og-image.png"],
  },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact KenyaHub — Editorial & Engineering Desk",
    url: "https://kenyahub.me/contact/",
    inLanguage: "en-KE",
    mainEntity: {
      "@type": "Organization",
      name: "KenyaHub",
      url: "https://kenyahub.me",
      email: CONTACT_EMAIL,
      contactPoint: {
        "@type": "ContactPoint",
        email: CONTACT_EMAIL,
        contactType: "customer support",
        areaServed: "KE",
        availableLanguage: ["English", "Swahili"],
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://kenyahub.me/" },
      { "@type": "ListItem", position: 2, name: "Contact Us", item: "https://kenyahub.me/contact/" },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8 py-10 space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-text-muted">
        <Link href="/" prefetch={false} className="hover:text-gold transition-colors">
          Home
        </Link>
        <svg className="w-3 h-3 text-border-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-text-secondary">Contact Us</span>
      </nav>

      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold font-[family-name:var(--font-outfit)] text-text-primary tracking-tight">
          Contact <span className="gradient-text-kenya">KenyaHub</span>
        </h1>
        <p className="text-sm text-text-secondary max-w-xl mx-auto leading-relaxed">
          Have feedback, spotted a statutory rate update, or have a data protection &amp; privacy inquiry? Reach the KenyaHub editorial and engineering desk directly.
        </p>
      </div>

      <ContactClient />
    </div>
  );
}
