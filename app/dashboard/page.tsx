import type { Metadata } from "next";
import {
  Award,
  BookOpenCheck,
  CalendarClock,
  Home,
  LayoutDashboard,
  Settings2,
  Sparkles,
  Users2
} from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { PageHero } from "@/components/ui/page-hero";
import { SurfaceCard } from "@/components/ui/surface-card";
import { adminInsights, dashboardHighlights } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Dashboard Preview",
  description:
    "Frontend-only LMS and SaaS dashboard preview for teachers, school admins, certificates, analytics, and workshop tracking."
};

export default function DashboardPage() {
  return (
    <div className="pb-10">
      <PageHero
        eyebrow="Dashboard preview"
        title="A frontend-only LMS dashboard that feels ready for a real product."
        description="This page demonstrates how the platform can evolve into a serious school-facing SaaS product with teacher progress, certificates, upcoming workshops, and admin analytics."
      />

      <section className="px-4 py-8 md:px-6 md:py-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[270px_minmax(0,1fr)]">
          <FadeIn>
            <SurfaceCard className="rounded-[32px] p-5">
              <div className="space-y-2">
                {[
                  ["Overview", Home],
                  ["My Courses", BookOpenCheck],
                  ["Workshops", CalendarClock],
                  ["Certificates", Award],
                  ["Admin Analytics", LayoutDashboard],
                  ["Team", Users2],
                  ["Settings", Settings2]
                ].map(([label, Icon], index) => {
                  const ItemIcon = Icon as typeof Home;
                  return (
                    <div
                      key={String(label)}
                      className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm ${
                        index === 0
                          ? "bg-ink text-white"
                          : "text-black/62 hover:bg-black/[0.03]"
                      }`}
                    >
                      <ItemIcon className="h-4 w-4" />
                      {String(label)}
                    </div>
                  );
                })}
              </div>
            </SurfaceCard>
          </FadeIn>

          <div className="space-y-8">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {dashboardHighlights.map((item, index) => (
                <FadeIn key={item.title} delay={index * 0.06}>
                  <SurfaceCard className="p-6">
                    <p className="text-sm text-black/56">{item.title}</p>
                    <p className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-ink">
                      {item.value}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-black/55">{item.detail}</p>
                  </SurfaceCard>
                </FadeIn>
              ))}
            </div>

            <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
              <FadeIn delay={0.08}>
                <SurfaceCard className="rounded-[34px] p-7">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-black/56">Enrolled courses</p>
                      <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-ink">
                        Current learning stack
                      </p>
                    </div>
                    <Sparkles className="h-5 w-5 text-accent" />
                  </div>
                  <div className="mt-7 space-y-4">
                    {adminInsights.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-[26px] border border-white/70 bg-white/90 p-5"
                      >
                        <div className="flex items-center justify-between text-sm text-black/58">
                          <span>{item.label}</span>
                          <span>{item.progress}%</span>
                        </div>
                        <div className="mt-3 h-2 rounded-full bg-black/[0.06]">
                          <div
                            className="h-2 rounded-full bg-ink"
                            style={{ width: `${item.progress}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </SurfaceCard>
              </FadeIn>

              <div className="space-y-6">
                <FadeIn delay={0.14}>
                  <SurfaceCard className="rounded-[34px] p-7">
                    <p className="text-sm text-black/56">Upcoming workshops</p>
                    <div className="mt-5 space-y-3">
                      {[
                        "Prompting Clinic for English Teachers",
                        "Assessment Workflow Lab",
                        "Responsible AI Leadership Review"
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-black/8 bg-white px-4 py-4 text-sm text-black/62"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </SurfaceCard>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <SurfaceCard className="rounded-[34px] p-7">
                    <p className="text-sm text-black/56">Certificates</p>
                    <div className="mt-5 grid gap-3">
                      {[
                        "AI Foundations for Educators",
                        "Prompting for Educators",
                        "Lesson Planning with AI"
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center justify-between rounded-2xl border border-black/8 bg-white px-4 py-4 text-sm text-black/62"
                        >
                          <span>{item}</span>
                          <Award className="h-4 w-4 text-black/42" />
                        </div>
                      ))}
                    </div>
                  </SurfaceCard>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
