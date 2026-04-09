import type { Metadata } from "next";
import { ArrowRight, BarChart3, BriefcaseBusiness, ShieldCheck } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { ButtonLink } from "@/components/ui/button";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { SurfaceCard } from "@/components/ui/surface-card";
import { schoolBenefits, solutionPillars } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "For Schools",
  description:
    "Institutional AI training for schools with onboarding workflows, admin dashboards, progress visibility, and premium capability building."
};

export default function ForSchoolsPage() {
  return (
    <div className="pb-10">
      <PageHero
        eyebrow="Solutions for schools"
        title="A school-ready AI training program built for leaders, not just individual learners."
        description="FacultyOS helps school principals, management teams, and academic coordinators introduce AI in a way that feels trustworthy, structured, and measurable."
        actions={[
          { label: "Book an Enterprise Demo", href: "/contact" },
          { label: "View Proposal", href: "/proposal", variant: "secondary" }
        ]}
        aside={
          <SurfaceCard className="overflow-hidden rounded-[34px] p-7">
            <div className="grid gap-4">
              <div className="rounded-[26px] bg-[#f7f9fb] p-5">
                <p className="text-sm text-black/56">Admin dashboard preview</p>
                <p className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-ink">
                  School AI adoption
                </p>
                <div className="mt-6 space-y-4">
                  {[
                    ["Teacher onboarding", "92%"],
                    ["Workshop attendance", "81%"],
                    ["Responsible AI completion", "68%"]
                  ].map(([label, progress]) => (
                    <div key={label}>
                      <div className="mb-2 flex items-center justify-between text-sm text-black/58">
                        <span>{label}</span>
                        <span>{progress}</span>
                      </div>
                      <div className="h-2 rounded-full bg-black/[0.06]">
                        <div
                          className="h-2 rounded-full bg-ink"
                          style={{ width: progress }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[26px] border border-white/70 bg-white/90 p-5">
                  <p className="text-sm text-black/56">Leadership review</p>
                  <p className="mt-3 text-lg font-semibold text-ink">Monthly reports</p>
                </div>
                <div className="rounded-[26px] border border-white/70 bg-white/90 p-5">
                  <p className="text-sm text-black/56">Rollout model</p>
                  <p className="mt-3 text-lg font-semibold text-ink">Live + self-paced</p>
                </div>
              </div>
            </div>
          </SurfaceCard>
        }
      />

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Institutional benefits"
            title="Why school leaders should train teachers now"
            description="AI is already influencing planning, content creation, assessment support, and communication. The question is no longer whether staff will use these tools, but how schools can guide usage responsibly."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {schoolBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <FadeIn key={benefit.title} delay={index * 0.06}>
                  <SurfaceCard className="h-full p-7">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef3fb]">
                      <Icon className="h-5 w-5 text-ink" />
                    </span>
                    <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-ink">
                      {benefit.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-black/62">
                      {benefit.description}
                    </p>
                  </SurfaceCard>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <FadeIn>
            <SectionHeading
              eyebrow="Training model"
              title="A premium rollout built for team onboarding and measurable outcomes."
              description="Schools can start with a pilot cohort, prove value quickly, then scale to broader teacher groups with a clear adoption framework."
            />
            <div className="mt-8 space-y-4">
              {[
                "Reduced teacher prep time across planning and routine content creation",
                "More innovative classroom materials without adding operational chaos",
                "Standardized AI usage practices across departments",
                "Safer, policy-aware adoption and stronger digital readiness"
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-white/70 bg-white/75 px-5 py-4 text-base text-black/64 shadow-soft backdrop-blur-xl"
                >
                  {item}
                </div>
              ))}
            </div>
          </FadeIn>

          <div className="grid gap-5 md:grid-cols-2">
            {solutionPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <FadeIn key={pillar.title} delay={index * 0.05}>
                  <SurfaceCard className="h-full p-6">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef3fb]">
                        <Icon className="h-5 w-5 text-ink" />
                      </span>
                      <h3 className="text-lg font-semibold tracking-[-0.03em] text-ink">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-black/62">
                      {pillar.description}
                    </p>
                  </SurfaceCard>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl rounded-[40px] border border-white/70 bg-white/70 p-8 shadow-soft backdrop-blur-xl md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/45">
                Outcomes
              </p>
              <h2 className="mt-5 font-serif text-4xl tracking-[-0.05em] text-ink md:text-5xl">
                A stronger institutional AI posture without the noise.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-black/62">
                Leadership gets clarity. Teachers get confidence. Students benefit
                from faster preparation and better-crafted learning materials.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                {
                  title: "School onboarding",
                  body: "Kickoff for leadership teams and mapped cohorts by subject or role.",
                  icon: BriefcaseBusiness
                },
                {
                  title: "Progress reporting",
                  body: "Completion analytics, certificate reporting, and readiness reviews.",
                  icon: BarChart3
                },
                {
                  title: "Safer implementation",
                  body: "Support for policies, review standards, and school-approved workflows.",
                  icon: ShieldCheck
                }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-[28px] border border-white/70 bg-white/90 p-5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef3fb]">
                        <Icon className="h-5 w-5 text-ink" />
                      </span>
                      <div>
                        <p className="font-semibold text-ink">{item.title}</p>
                        <p className="mt-1 text-sm text-black/58">{item.body}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="/contact">
              Enterprise Inquiry <ArrowRight className="ml-2 h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/pricing" variant="secondary">
              Review School Pricing
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
