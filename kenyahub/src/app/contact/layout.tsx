import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Feedback, Data Corrections & Inquiries",
  description:
    "Contact the KenyaHub editorial and engineering team in Nairobi, Kenya. Report a data update, suggest a new Kenyan public utility tool, or inquire about partnerships.",
  alternates: {
    canonical: "https://kenyahub.me/contact/",
  },
  openGraph: {
    title: "Contact Us | KenyaHub",
    description:
      "Contact the KenyaHub editorial and engineering team in Nairobi, Kenya for data updates, feedback, or inquiries.",
    type: "website",
    locale: "en_KE",
    siteName: "KenyaHub",
    url: "https://kenyahub.me/contact/",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
