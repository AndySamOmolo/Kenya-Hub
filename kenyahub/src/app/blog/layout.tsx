import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles and guides on Kenyan topics — tools, government services, education, and more.",
  alternates: {
    canonical: "https://kenyahub.me/blog/",
  },
  openGraph: {
    title: "Blog | KenyaHub",
    description: "Articles and guides on Kenyan topics.",
    url: "https://kenyahub.me/blog/",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}