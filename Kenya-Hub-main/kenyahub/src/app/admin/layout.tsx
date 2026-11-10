import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  description: "Content management for KenyaHub.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div data-error-page="true" data-nosnippet="true">{children}</div>;
}