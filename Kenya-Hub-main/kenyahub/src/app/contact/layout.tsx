import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Feedback, Data Corrections & Inquiries",
  description:
    "Contact the KenyaHub editorial and engineering team in Nairobi, Kenya. Report a data update, suggest a new Kenyan public utility tool, or inquire about partnerships.",
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
    },
  },
  openGraph: {
    title: "Contact Us — Feedback, Data Corrections & Inquiries | KenyaHub",
    description:
      "Contact the KenyaHub editorial and engineering team in Nairobi, Kenya for data updates, feedback, or inquiries.",
    type: "website",
    locale: "en_KE",
    siteName: "KenyaHub",
    url: "https://kenyahub.me/contact/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Contact KenyaHub" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us — Feedback, Data Corrections & Inquiries | KenyaHub",
    description:
      "Contact the KenyaHub editorial and engineering team in Nairobi, Kenya for data updates, feedback, or inquiries.",
    images: ["/og-image.png"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
