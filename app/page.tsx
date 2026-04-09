import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  GraduationCap,
  LayoutDashboard,
  MoveRight,
  ShieldCheck,
  Sparkles,
  TrendingUp
} from "lucide-react";
import Link from "next/link";

import { CourseCatalog } from "@/components/courses/course-catalog";
import { FadeIn } from "@/components/motion/fade-in";
import { ParallaxLayer } from "@/components/motion/parallax-layer";
import { PricingGrid } from "@/components/pricing/pricing-grid";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { ButtonLink } from "@/components/ui/button";
import { FAQList } from "@/components/ui/faq-list";
import { SectionHeading } from "@/components/ui/section-heading";
import { SurfaceCard } from "@/components/ui/surface-card";
import {
  brand,
  courses,
  curriculum,
  faqs,
  featureTools,
  metrics,
  pricingPlans,
  processSteps,
  schoolBenefits,
  schoolLogos,
  testimonials
} from "@/lib/site-data";

export const metadata: Metadata = {
  description:
    "Premium AI training for teachers and schools with proposal-ready copy, LMS previews, practical courses, and responsible adoption workflows."
};

export default function HomePage() {
  return (
    <div className="pb-6">
      <section className="px-4 pb-20 pt-16 md:px-6 md:pb-28 md:pt-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_520px] lg:items-center">
          <FadeIn>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/75 px-4 py-2 text-sm text-black/58 shadow-soft backdrop-blur-xl">
                <Sparkles className="h-4 w-4 text-accent" />
                Premium AI readiness for teachers, schools, and future-facing academic teams
              </div>
              <h1 className="mt-8 max-w-4xl text-balance font-serif text-5xl tracking-[-0.06em] text-ink md:text-7xl">
                Empowering teachers with practical AI skills for the modern classroom.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-black/62 md:text-xl">
                {brand.name} helps schools train teachers to use leading AI tools
                safely, productively, and confidently across lesson planning,
                classroom content, assessments, communication, and daily workflows.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <ButtonLink href="/contact">
                  Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
                </ButtonLink>
                <ButtonLink href="/courses" variant="secondary">
                  Explore Courses
                </ButtonLink>
              </div>
              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {[
                  "Built for forward-thinking schools",
                  "School-friendly responsible AI training",
                  "Designed to grow into a SaaS + LMS platform"
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-black/8 bg-white/60 px-4 py-4 text-sm text-black/60 shadow-soft backdrop-blur-xl"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <ParallaxLayer offset={22}>
            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="absolute -left-8 top-12 hidden h-32 w-32 rounded-full bg-[#eef4fb] blur-3xl md:block" />
              <div className="absolute -right-6 top-0 hidden h-40 w-40 rounded-full bg-[#f2f4f7] blur-3xl md:block" />

              <SurfaceCard className="relative overflow-hidden rounded-[36px] p-7">
                <div className="absolute inset-x-8 top-6 h-28 rounded-full bg-[radial-gradient(circle,rgba(168,186,211,0.3),transparent_70%)] blur-3xl" />
                <div className="relative flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/45">
                      FacultyOS Dashboard
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-ink">
                      Teacher AI readiness
                    </h2>
                  </div>
                  <span className="rounded-full border border-[#dce7f7] bg-[#f7faff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-black/45">
                    Live Preview
                  </span>
                </div>

                <div className="mt-8 grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-[1.3fr_0.9fr]">
                    <div className="rounded-[28px] border border-white/70 bg-[#f8fafc] p-5">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-black/56">
                          School rollout progress
                        </p>
                        <TrendingUp className="h-4 w-4 text-accent" />
                      </div>
                      <p className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-ink">
                        84%
                      </p>
                      <div className="mt-4 h-2 rounded-full bg-black/[0.06]">
                        <div className="h-2 w-[84%] rounded-full bg-ink" />
                      </div>
                      <div className="mt-5 grid grid-cols-3 gap-3 text-sm text-black/58">
                        <div className="rounded-2xl bg-white p-3">12 teams</div>
                        <div className="rounded-2xl bg-white p-3">248 staff</div>
                        <div className="rounded-2xl bg-white p-3">6 workshops</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-[28px] border border-white/70 bg-white/90 p-5">
                        <p className="text-sm text-black/56">Upcoming session</p>
                        <p className="mt-3 text-xl font-semibold tracking-[-0.04em] text-ink">
                          AI for Lesson Planning
                        </p>
                        <p className="mt-2 text-sm text-black/54">
                          Friday, 4:00 PM
                        </p>
                      </div>
                      <div className="rounded-[28px] border border-white/70 bg-white/90 p-5">
                        <p className="text-sm text-black/56">Certificates issued</p>
                        <p className="mt-3 text-xl font-semibold tracking-[-0.04em] text-ink">
                          182 verified completions
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[28px] border border-white/70 bg-white/90 p-5">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#eef3fb]">
                          <GraduationCap className="h-5 w-5 text-ink" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-ink">Teacher Pathways</p>
                          <p className="text-sm text-black/54">
                            Starter, Pro, Assessment, Policy
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-[28px] border border-white/70 bg-white/90 p-5">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#eef3fb]">
                          <ShieldCheck className="h-5 w-5 text-ink" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-ink">Responsible AI</p>
                          <p className="text-sm text-black/54">
                            Policy-aware, human-reviewed workflows
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SurfaceCard>

              <div className="absolute -left-10 bottom-8 hidden w-52 rounded-[28px] border border-white/80 bg-white/90 p-4 shadow-soft backdrop-blur-xl lg:block">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/40">
                  Workflow Stack
                </p>
                <div className="mt-4 space-y-3">
                  {["ChatGPT", "Canva AI", "Gemini", "NotebookLM"].map((tool) => (
                    <div
                      key={tool}
                      className="rounded-2xl border border-black/8 bg-[#fafafa] px-3 py-2 text-sm text-black/62"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -right-8 top-12 hidden w-48 rounded-[28px] border border-white/80 bg-white/90 p-4 shadow-soft backdrop-blur-xl xl:block">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/40">
                  School signal
                </p>
                <p className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-ink">
                  24
                </p>
                <p className="mt-2 text-sm text-black/58">
                  classrooms already mapped for AI use cases
                </p>
              </div>
            </div>
          </ParallaxLayer>
        </div>
      </section>

      <section className="px-4 py-10 md:px-6">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="rounded-[32px] border border-white/70 bg-white/70 px-6 py-8 shadow-soft backdrop-blur-xl md:px-10">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/45">
                    Built for forward-thinking schools and educators
                  </p>
                  <p className="mt-4 text-lg leading-8 text-black/62">
                    Positioned for progressive K-12 institutions, private schools,
                    academic coordinators, and teacher training decision-makers.
                  </p>
                </div>
                <div className="grid flex-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {metrics.map((metric) => (
                    <SurfaceCard key={metric.label} className="h-full p-5">
                      <p className="text-3xl font-semibold tracking-[-0.05em] text-ink">
                        <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                      </p>
                      <p className="mt-2 text-sm font-semibold text-black/62">
                        {metric.label}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-black/50">{metric.note}</p>
                    </SurfaceCard>
                  ))}
                </div>
              </div>
              <div className="mask-line mt-8 pt-6">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
                  {schoolLogos.map((logo) => (
                    <div
                      key={logo}
                      className="rounded-2xl border border-black/8 bg-white/80 px-4 py-3 text-center text-sm font-semibold tracking-[0.02em] text-black/55"
                    >
                      {logo}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <FadeIn>
            <SectionHeading
              eyebrow="Why this matters"
              title="Teachers are being asked to adapt quickly, often without a clear AI roadmap."
              description="New tools arrive faster than school guidance. Faculty teams need training that is safe, practical, and directly relevant to planning, assessment, communication, and classroom engagement."
            />
          </FadeIn>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "The current challenge",
                body: "Teachers are overwhelmed by AI noise, inconsistent advice, and unclear school expectations."
              },
              {
                title: "The practical opportunity",
                body: "AI can reduce repetitive workload, improve lesson quality, support differentiation, and unlock better student-facing materials."
              },
              {
                title: "The institutional need",
                body: "School leaders need safer implementation standards, visibility, and a credible way to train staff at scale."
              },
              {
                title: "The outcome",
                body: "Confident teachers, more consistent workflows, and a stronger digital readiness posture across the institution."
              }
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.08}>
                <SurfaceCard className="h-full p-6">
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-black/62">{item.body}</p>
                </SurfaceCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Featured AI tools"
            title="Teachers learn to use the leading tools already shaping modern education workflows."
            description="These are example tools covered in the academy. We do not claim affiliation; we focus on practical, classroom-relevant usage."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featureTools.map((tool, index) => (
              <FadeIn key={tool.name} delay={index * 0.06}>
                <div
                  className={`grain h-full rounded-[30px] border border-white/70 bg-gradient-to-br ${tool.accent} p-6 shadow-soft`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/8 bg-white/75 text-sm font-semibold tracking-[0.02em] text-ink">
                    {tool.name.slice(0, 2)}
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-ink">
                    {tool.name}
                  </h3>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
                    Use case
                  </p>
                  <p className="mt-2 text-sm leading-6 text-black/62">{tool.useCase}</p>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
                    How teachers use it
                  </p>
                  <p className="mt-2 text-sm leading-6 text-black/62">{tool.summary}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Curriculum preview"
            title="What teachers will learn"
            description="A structured pathway from first principles to repeatable classroom workflows and school-wide policy readiness."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {curriculum.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.05}>
                <SurfaceCard className="h-full p-7">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-[-0.04em] text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-base leading-7 text-black/62">
                        {item.description}
                      </p>
                    </div>
                    <span className="rounded-full border border-black/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-black/45">
                      Module {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </SurfaceCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl rounded-[40px] border border-white/70 bg-white/70 p-8 shadow-soft backdrop-blur-xl md:p-12">
          <SectionHeading
            eyebrow="How it works"
            title="A school-ready training model designed for adoption, not just inspiration."
            description="We combine assessment, live training, guided practice, and dashboard visibility so capability building actually lands."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <FadeIn key={step.title} delay={index * 0.08}>
                <SurfaceCard className="h-full p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/45">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-black/62">
                    {step.description}
                  </p>
                </SurfaceCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <FadeIn>
            <SectionHeading
              eyebrow="SaaS + LMS preview"
              title="The training program is designed to evolve into a real institutional platform."
              description="Show schools a credible destination: cohort dashboards, certificates, progress tracking, workshop schedules, and admin analytics."
            />
            <div className="mt-8 space-y-4">
              {schoolBenefits.slice(0, 4).map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={benefit.title}
                    className="rounded-[24px] border border-white/70 bg-white/75 p-5 shadow-soft backdrop-blur-xl"
                  >
                    <div className="flex items-start gap-4">
                      <span className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef3fb]">
                        <Icon className="h-5 w-5 text-ink" />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold tracking-[-0.03em] text-ink">
                          {benefit.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-black/62">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>

          <ParallaxLayer offset={18}>
            <SurfaceCard className="overflow-hidden rounded-[36px] p-7">
              <div className="grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
                <div className="rounded-[30px] bg-[#f7f9fb] p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-black/56">Admin overview</p>
                      <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-ink">
                        School rollout dashboard
                      </p>
                    </div>
                    <LayoutDashboard className="h-5 w-5 text-black/45" />
                  </div>
                  <div className="mt-8 space-y-4">
                    {[
                      ["Teacher completion", "78%"],
                      ["Upcoming workshops", "06"],
                      ["Certificates issued", "182"]
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="flex items-center justify-between rounded-[24px] bg-white px-4 py-4 text-sm"
                      >
                        <span className="text-black/56">{label}</span>
                        <span className="font-semibold text-ink">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-[30px] border border-white/70 bg-white/90 p-5">
                    <p className="text-sm text-black/56">Live sessions</p>
                    <div className="mt-4 space-y-3">
                      {[
                        "Prompting Clinic",
                        "Assessment Workflow Lab",
                        "Responsible AI Leadership Roundtable"
                      ].map((session) => (
                        <div
                          key={session}
                          className="rounded-2xl border border-black/8 px-4 py-3 text-sm text-black/62"
                        >
                          {session}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[30px] border border-white/70 bg-white/90 p-5">
                    <p className="text-sm text-black/56">Teacher journey</p>
                    <div className="mt-4 h-2 rounded-full bg-black/[0.06]">
                      <div className="h-2 w-[72%] rounded-full bg-ink" />
                    </div>
                    <p className="mt-4 text-sm leading-6 text-black/62">
                      AI foundations completed. Assessment module in progress.
                    </p>
                    <Link
                      href="/dashboard"
                      className="mt-4 inline-flex items-center text-sm font-semibold text-ink"
                    >
                      View dashboard preview <MoveRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </SurfaceCard>
          </ParallaxLayer>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <SectionHeading
              eyebrow="Pricing"
              title="Premium pricing, accessible for modern Indian schools."
              description="Positioned to support individual teachers, advanced practitioners, and full-school rollouts."
            />
            <div className="rounded-full border border-[#dfe6f1] bg-[#f5f8fd] px-4 py-2 text-sm font-medium text-black/70 shadow-soft">
              Live AI Workshop for Schools - starting at Rs. 14,999 per session
            </div>
          </div>
          <PricingGrid plans={pricingPlans} />
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <FadeIn>
            <SectionHeading
              eyebrow="For schools"
              title="A premium proposal for institutions ready to train teachers now."
              description="This is more than a course catalog. It is an institutional capability program built to reduce prep time, improve digital readiness, and create safer standards for AI adoption."
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/proposal">
                View Institutional Proposal
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Download Proposal PDF
              </ButtonLink>
            </div>
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-2">
            {schoolBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <FadeIn key={benefit.title} delay={index * 0.05}>
                  <SurfaceCard className="h-full p-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef3fb]">
                      <Icon className="h-5 w-5 text-ink" />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-ink">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-black/62">
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
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Testimonials"
            title="Placeholder social proof with a premium institutional tone."
            description="Use these as polished stand-ins until real customer proof is available."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={testimonial.name} delay={index * 0.08}>
                <SurfaceCard className="h-full p-7">
                  <BadgeCheck className="h-6 w-6 text-accent" />
                  <p className="mt-5 text-lg leading-8 text-black/68">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="mt-8">
                    <p className="font-semibold text-ink">{testimonial.name}</p>
                    <p className="text-sm text-black/55">{testimonial.role}</p>
                  </div>
                </SurfaceCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions school leaders and teachers usually ask first."
            description="Designed to handle early trust, readiness, and implementation concerns."
            align="center"
          />
          <div className="mt-12">
            <FAQList items={faqs} />
          </div>
        </div>
      </section>

      <section className="px-4 pb-8 pt-10 md:px-6 md:pb-12">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[40px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(240,245,251,0.88))] px-8 py-12 shadow-float md:px-12 md:py-16">
            <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle,rgba(160,180,208,0.22),transparent_60%)] blur-3xl" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/45">
                  Final CTA
                </p>
                <h2 className="mt-5 text-balance font-serif text-4xl tracking-[-0.05em] text-ink md:text-6xl">
                  Bring practical AI training to your teachers.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-black/62">
                  Show decision-makers a program that feels credible today and ready
                  to evolve into a premium LMS platform tomorrow.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <ButtonLink href="/contact">
                  Book a Demo <CalendarDays className="ml-2 h-4 w-4" />
                </ButtonLink>
                <ButtonLink href="/pricing" variant="secondary">
                  View Pricing
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Course sampler"
            title="A preview of the LMS-style course catalog."
            description="This home-page sampler mirrors the dedicated course library for a more product-like feel."
          />
          <div className="mt-12">
            <CourseCatalog courses={courses.slice(0, 6)} />
          </div>
        </div>
      </section>
    </div>
  );
}
