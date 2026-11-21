import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts",
  description: "Manage blog posts.",
  robots: { index: false, follow: false },
};

export default function AdminPostsLayout({ children }: { children: React.ReactNode }) {
  return children;
}