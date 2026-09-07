import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "King Capital Services — FedEx Ground ISP Platform",
  description:
    "Driver recruiting, onboarding, safety compliance, and operations management — built by a FedEx Ground contractor who runs 300 drivers across 6 terminals.",
  openGraph: {
    title: "King Capital Services",
    description: "FedEx Ground contractors run better on King Capital Services.",
    siteName: "King Capital Services",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
