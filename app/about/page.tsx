import type { Metadata } from "next";

import { FadeIn } from "@/components/motion/fade-in";
import { ButtonLink } from "@/components/ui/button";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { SurfaceCard } from "@/components/ui/surface-card";
import { aboutValues, teamMembers } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn the mission, vision, and values behind FacultyOS AI Academy and why it exists for modern schools."
};

export default function AboutPage() {
  return (
    <div className="pb-10">
      <PageHero
        eyebrow="About"
        title="Built to make school AI adoption practical, credible, and teacher-first."
        description="FacultyOS exists because schools need more than AI excitement. They need training that respects real classrooms, real leadership constraints, and real implementation risks."
        actions={[
          { label: "Book a Demo", href: "/contact" },
          { label: "View Courses", href: "/courses", variant: "secondary" }
        ]}
        aside={
          <SurfaceCard className="rounded-[34px] p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/45">
              Mission
            </p>
            <p className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-ink">
              Help teachers use modern AI tools responsibly, confidently, and productively.
            </p>
            <p className="mt-4 text-base leading-7 text-black/62">
              The long-term vision is a premium capability platform where schools can
              train teams, track adoption, and scale best practice.
            </p>
          </SurfaceCard>
        }
      />

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why we exist"
            title="AI adoption in schools needs more clarity and less noise."
            description="Teachers deserve workflows they can trust. Leaders deserve implementation models that feel safe, measurable, and worth funding."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <SurfaceCard className="p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/45">
                Vision
              </p>
              <p className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-ink">
                Become the premium AI enablement layer for teacher development and institutional readiness.
              </p>
            </SurfaceCard>
            <SurfaceCard className="p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/45">
                Positioning
              </p>
              <p className="mt-5 text-lg leading-8 text-black/62">
                A school-friendly hybrid of professional development, productized
                learning, and LMS infrastructure for the next generation of teacher capability building.
              </p>
            </SurfaceCard>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Values"
            title="The principles shaping the product and the training experience."
            description="Every decision aims to keep the offering practical, premium, and grounded in institutional trust."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {aboutValues.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.06}>
                <SurfaceCard className="h-full p-6">
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-black/62">
                    {value.description}
                  </p>
                </SurfaceCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Team"
            title="A premium placeholder team section with strong early-stage startup positioning."
            description="Use this until the real founding team, advisors, and leadership bios are finalized."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <FadeIn key={member.name} delay={index * 0.08}>
                <SurfaceCard className="h-full p-7">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef3fb] text-lg font-semibold text-ink">
                    {member.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-ink">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
                    {member.role}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-black/62">{member.bio}</p>
                </SurfaceCard>
              </FadeIn>
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink href="/proposal">View Institutional Proposal</ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
