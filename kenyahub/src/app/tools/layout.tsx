import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Tools",
  description: "Browse all free online tools built for Kenya. Search by category including Finance, Education, Government, and more.",
  alternates: {
    canonical: "https://kenyahub.me/tools/",
  },
  openGraph: {
    title: "All Tools | KenyaHub",
    description: "Browse all free online tools built for Kenya.",
    url: "https://kenyahub.me/tools/",
  },
};

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
