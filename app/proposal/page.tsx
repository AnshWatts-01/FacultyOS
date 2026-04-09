import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/button";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { SurfaceCard } from "@/components/ui/surface-card";
import { pricingPlans, proposalMilestones, schoolBenefits } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Institutional Proposal",
  description:
    "Institutional proposal page for schools evaluating AI teacher training, pilot rollout, pricing, and implementation outcomes."
};

export default function ProposalPage() {
  return (
    <div className="pb-10">
      <PageHero
        eyebrow="Institutional proposal"
        title="A polished proposal page for school management and decision-makers."
        description="Designed to read like an executive-ready summary of the problem, the solution, the rollout model, and the pricing pathways for a pilot or full implementation."
        actions={[
          { label: "Schedule a Pilot", href: "/contact" },
          { label: "View Pricing", href: "/pricing", variant: "secondary" }
        ]}
      />

      <section className="px-4 py-8 md:px-6 md:py-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.9fr]">
          <SurfaceCard className="rounded-[34px] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/45">
              Executive summary
            </p>
            <h2 className="mt-5 font-serif text-4xl tracking-[-0.05em] text-ink">
              FacultyOS equips teachers with practical AI capability while giving school leaders a credible implementation model.
            </h2>
            <p className="mt-6 text-lg leading-8 text-black/62">
              The goal is not experimentation for its own sake. The goal is better
              planning, faster preparation, stronger digital readiness, and safer
              AI adoption across the institution.
            </p>
          </SurfaceCard>
          <SurfaceCard className="rounded-[34px] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/45">
              School challenges
            </p>
            <div className="mt-6 space-y-4">
              {[
                "Teachers are unsure which AI tools are genuinely useful.",
                "AI experimentation is inconsistent across departments.",
                "Leadership wants safer, policy-aware adoption.",
                "Time pressure makes structured upskilling difficult."
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-black/8 bg-white/90 px-4 py-4 text-sm text-black/62"
                >
                  {item}
                </div>
              ))}
            </div>
          </SurfaceCard>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Proposed solution"
            title="A blended training and platform model for modern schools."
            description="Combine school onboarding, live workshops, self-paced modules, guided templates, and an admin dashboard that shows progress and readiness."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {schoolBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <SurfaceCard key={benefit.title} className="h-full p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef3fb]">
                    <Icon className="h-5 w-5 text-ink" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-ink">
                    {benefit.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-black/62">
                    {benefit.description}
                  </p>
                </SurfaceCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl rounded-[40px] border border-white/70 bg-white/70 p-8 shadow-soft backdrop-blur-xl md:p-12">
          <SectionHeading
            eyebrow="Implementation timeline"
            title="A realistic six-week pilot structure."
            description="Start with a focused pilot cohort, validate usage patterns, and create leadership confidence before expanding."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {proposalMilestones.map((milestone) => (
              <SurfaceCard key={milestone.week} className="h-full p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/45">
                  {milestone.week}
                </p>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-ink">
                  {milestone.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-black/62">
                  {milestone.detail}
                </p>
              </SurfaceCard>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <SurfaceCard className="rounded-[34px] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/45">
              Pricing options
            </p>
            <div className="mt-6 space-y-4">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className="rounded-[26px] border border-black/8 bg-white/90 px-5 py-5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-lg font-semibold text-ink">{plan.name}</p>
                      <p className="mt-1 text-sm text-black/56">{plan.description}</p>
                    </div>
                    <p className="text-xl font-semibold tracking-[-0.04em] text-ink">
                      {plan.monthly}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </SurfaceCard>
          <SurfaceCard className="rounded-[34px] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/45">
              Expected outcomes
            </p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-black/62">
              <p>Reduced teacher prep time and greater confidence with modern tools.</p>
              <p>Stronger school-wide consistency in AI usage standards and review practices.</p>
              <p>Higher digital readiness across staff and clearer leadership visibility into adoption.</p>
              <p>Better classroom materials and improved responsiveness in communication workflows.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/contact">Schedule Pilot Call</ButtonLink>
              <ButtonLink href="/for-schools" variant="secondary">
                Explore School Solution
              </ButtonLink>
            </div>
          </SurfaceCard>
        </div>
      </section>
    </div>
  );
}
