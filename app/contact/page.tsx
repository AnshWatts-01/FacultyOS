import type { Metadata } from "next";
import { CalendarRange, Mail, PhoneCall } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { PageHero } from "@/components/ui/page-hero";
import { SurfaceCard } from "@/components/ui/surface-card";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a demo, request a school proposal, or inquire about AI workshops for teachers and institutions."
};

export default function ContactPage() {
  return (
    <div className="pb-10">
      <PageHero
        eyebrow="Contact / Book demo"
        title="Start the conversation with a premium school-ready demo flow."
        description="Use this page to capture institutional interest, early teacher leads, and proposal requests. The form is frontend only for now."
      />

      <section className="px-4 py-8 md:px-6 md:py-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <SurfaceCard className="rounded-[34px] p-7 md:p-8">
            <form className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-black/62">
                    School name
                  </span>
                  <input
                    type="text"
                    placeholder="Northfield International School"
                    className="w-full rounded-2xl border border-black/10 bg-white/90 px-4 py-3 text-sm outline-none transition focus:border-ink"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-black/62">
                    Contact person
                  </span>
                  <input
                    type="text"
                    placeholder="Ananya Mehta"
                    className="w-full rounded-2xl border border-black/10 bg-white/90 px-4 py-3 text-sm outline-none transition focus:border-ink"
                  />
                </label>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-black/62">
                    Email
                  </span>
                  <input
                    type="email"
                    placeholder="principal@school.edu"
                    className="w-full rounded-2xl border border-black/10 bg-white/90 px-4 py-3 text-sm outline-none transition focus:border-ink"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-black/62">
                    Number of teachers
                  </span>
                  <input
                    type="number"
                    placeholder="25"
                    className="w-full rounded-2xl border border-black/10 bg-white/90 px-4 py-3 text-sm outline-none transition focus:border-ink"
                  />
                </label>
              </div>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-black/62">
                  Message
                </span>
                <textarea
                  rows={6}
                  placeholder="Tell us about your teacher training goals, current AI readiness, and whether you want workshops, LMS access, or a pilot."
                  className="w-full rounded-[24px] border border-black/10 bg-white/90 px-4 py-4 text-sm outline-none transition focus:border-ink"
                />
              </label>
              <button
                type="submit"
                className="inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5"
              >
                Send Inquiry
              </button>
              <p className="text-sm text-black/48">
                Frontend-only form. Connect to your CRM or email workflow later.
              </p>
            </form>
          </SurfaceCard>

          <div className="space-y-6">
            <SurfaceCard className="rounded-[34px] p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/45">
                Booking visual
              </p>
              <div className="mt-6 rounded-[28px] bg-[#f7f9fb] p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-soft">
                    <CalendarRange className="h-5 w-5 text-ink" />
                  </span>
                  <div>
                    <p className="font-semibold text-ink">30-minute leadership demo</p>
                    <p className="text-sm text-black/56">
                      Product walkthrough, pricing, and pilot fit discussion
                    </p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3 text-center text-sm">
                  {["Tue", "Wed", "Fri"].map((day) => (
                    <div key={day} className="rounded-2xl bg-white px-3 py-4 shadow-soft">
                      {day}
                    </div>
                  ))}
                </div>
              </div>
            </SurfaceCard>

            <SurfaceCard className="rounded-[34px] p-7">
              <div className="space-y-5 text-sm text-black/62">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-black/45" />
                  hello@facultyos.ai
                </div>
                <div className="flex items-center gap-3">
                  <PhoneCall className="h-5 w-5 text-black/45" />
                  +91 90000 00000
                </div>
              </div>
              <ButtonLink href="/proposal" variant="secondary" className="mt-6">
                View Institutional Proposal
              </ButtonLink>
            </SurfaceCard>
          </div>
        </div>
      </section>
    </div>
  );
}
