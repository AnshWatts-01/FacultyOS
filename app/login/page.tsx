import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/ui/page-hero";
import { SurfaceCard } from "@/components/ui/surface-card";

export const metadata: Metadata = {
  title: "Login",
  description:
    "Elegant frontend-only auth screen for the FacultyOS AI Academy LMS preview."
};

export default function LoginPage() {
  return (
    <div className="pb-10">
      <PageHero
        eyebrow="Login"
        title="A refined sign-in experience for the LMS preview."
        description="This frontend-only screen is designed to feel calm, trustworthy, and ready for a real auth flow later."
      />

      <section className="px-4 py-8 md:px-6 md:py-12">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <SurfaceCard className="rounded-[34px] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/45">
              Sign in
            </p>
            <form className="mt-6 space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-black/62">
                  Email
                </span>
                <input
                  type="email"
                  placeholder="teacher@school.edu"
                  className="w-full rounded-2xl border border-black/10 bg-white/90 px-4 py-3 text-sm outline-none transition focus:border-ink"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-black/62">
                  Password
                </span>
                <input
                  type="password"
                  placeholder="********"
                  className="w-full rounded-2xl border border-black/10 bg-white/90 px-4 py-3 text-sm outline-none transition focus:border-ink"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5"
              >
                Continue
              </button>
              <button
                type="button"
                className="w-full rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-black/[0.02]"
              >
                Continue with Google
              </button>
            </form>
            <p className="mt-5 text-sm text-black/48">
              Frontend-only placeholder. Route this into auth later.
            </p>
          </SurfaceCard>

          <SurfaceCard className="rounded-[34px] overflow-hidden p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/45">
              Preview
            </p>
            <h2 className="mt-5 font-serif text-4xl tracking-[-0.05em] text-ink">
              Continue into the dashboard preview.
            </h2>
            <p className="mt-5 text-lg leading-8 text-black/62">
              Use this page as the polished entry point for teachers and school
              admins before wiring in real access control.
            </p>
            <div className="mt-8 rounded-[28px] bg-[#f7f9fb] p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] bg-white p-5 shadow-soft">
                  <p className="text-sm text-black/56">Teacher view</p>
                  <p className="mt-3 text-lg font-semibold text-ink">Courses, progress, certificates</p>
                </div>
                <div className="rounded-[24px] bg-white p-5 shadow-soft">
                  <p className="text-sm text-black/56">Admin view</p>
                  <p className="mt-3 text-lg font-semibold text-ink">Analytics, cohort visibility</p>
                </div>
              </div>
            </div>
            <Link
              href="/dashboard"
              className="mt-7 inline-flex rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-ink transition hover:bg-black/[0.03]"
            >
              Open Dashboard Preview
            </Link>
          </SurfaceCard>
        </div>
      </section>
    </div>
  );
}
