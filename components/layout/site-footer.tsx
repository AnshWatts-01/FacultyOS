import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { brand, navItems } from "@/lib/site-data";

import { ButtonLink } from "../ui/button";
import { LogoMark } from "../ui/logo-mark";

export function SiteFooter() {
  return (
    <footer className="px-4 pb-8 pt-16 md:px-6 md:pb-10 md:pt-24">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[36px] border border-white/70 bg-white/75 p-8 shadow-soft backdrop-blur-xl md:p-12">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-md">
              <LogoMark />
              <p className="mt-6 text-sm leading-7 text-black/62">
                {brand.tagline} Premium capability building for teachers, school
                leaders, and institutions preparing for practical AI adoption.
              </p>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/45">
                  Navigate
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-sm text-black/65 transition hover:text-ink"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/45">
                  Platform
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  <Link href="/dashboard" className="text-sm text-black/65 transition hover:text-ink">
                    Dashboard Preview
                  </Link>
                  <Link href="/proposal" className="text-sm text-black/65 transition hover:text-ink">
                    Proposal Page
                  </Link>
                  <Link
                    href="/courses/ai-foundations-for-educators"
                    className="text-sm text-black/65 transition hover:text-ink"
                  >
                    Featured Course
                  </Link>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/45">
                  Next step
                </p>
                <p className="mt-4 text-sm leading-7 text-black/62">
                  Bring a premium AI capability program to your teachers with a
                  live demo and implementation walkthrough.
                </p>
                <ButtonLink href="/contact" className="mt-5">
                  Book a Demo <ArrowUpRight className="ml-2 h-4 w-4" />
                </ButtonLink>
              </div>
            </div>
          </div>

          <div className="mask-line mt-10 pt-6 text-sm text-black/45">
            (c) 2026 {brand.name}. Frontend concept site for premium teacher AI training.
          </div>
        </div>
      </div>
    </footer>
  );
}
