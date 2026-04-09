import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { brand } from "@/lib/site-data";
import { cn } from "@/lib/utils";

import "./globals.css";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans"
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://facultyos.ai"),
  title: {
    default: `${brand.name} | AI Training for Teachers and Schools`,
    template: `%s | ${brand.name}`
  },
  description:
    "Premium AI training for teachers and schools. Practical workflows, responsible adoption, school-ready workshops, and an LMS-style learning experience.",
  keywords: [
    "AI training for teachers",
    "AI tools for schools",
    "teacher AI workshop",
    "AI professional development for educators",
    "school LMS for AI readiness"
  ],
  openGraph: {
    title: `${brand.name} | AI Training for Teachers and Schools`,
    description:
      "Train teachers to use modern AI tools responsibly, confidently, and productively in everyday education.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} | AI Training for Teachers and Schools`,
    description:
      "Premium AI capability building for modern schools, educators, and institutional leaders."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(sans.variable, serif.variable)}
      suppressHydrationWarning
    >
      <body className="font-sans text-ink antialiased">
        <div className="relative isolate overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[540px] bg-hero-halo" />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
