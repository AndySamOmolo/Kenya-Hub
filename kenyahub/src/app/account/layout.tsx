import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account & Sign In — KenyaHub",
  description: "Sign in to your KenyaHub account with email and password to manage your profile and tools.",
  robots: { index: false, follow: false },
};

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return children;
}
