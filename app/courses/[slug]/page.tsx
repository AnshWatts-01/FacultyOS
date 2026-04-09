import type { Metadata } from "next";
import { Award, BookOpenCheck, Clock3, GraduationCap } from "lucide-react";
import { notFound } from "next/navigation";

import { ButtonLink } from "@/components/ui/button";
import { PageHero } from "@/components/ui/page-hero";
import { SurfaceCard } from "@/components/ui/surface-card";
import { courses } from "@/lib/site-data";

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const course = courses.find((item) => item.slug === params.slug);

  if (!course) {
    return {};
  }

  return {
    title: course.title,
    description: course.excerpt
  };
}

export default function CourseDetailPage({ params }: Props) {
  const course = courses.find((item) => item.slug === params.slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="pb-10">
      <PageHero
        eyebrow={course.category}
        title={course.title}
        description={course.excerpt}
        actions={[
          { label: "Enroll Now", href: "/contact" },
          { label: "View Courses", href: "/courses", variant: "secondary" }
        ]}
        aside={
          <SurfaceCard className="rounded-[34px] p-7">
            <div className="grid gap-4">
              <div className="rounded-[26px] bg-[#f7f9fb] p-5">
                <p className="text-sm text-black/56">Course facts</p>
                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-black/62">
                    <BookOpenCheck className="h-4 w-4 text-black/42" />
                    {course.level}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-black/62">
                    <Clock3 className="h-4 w-4 text-black/42" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-black/62">
                    <Award className="h-4 w-4 text-black/42" />
                    Certificate included
                  </div>
                </div>
              </div>
              <div className="rounded-[26px] border border-white/70 bg-white/90 p-5">
                <p className="text-sm text-black/56">Instructor</p>
                <p className="mt-3 text-lg font-semibold text-ink">Dr. Meera Shah</p>
                <p className="mt-2 text-sm text-black/58">
                  Academic Programs Lead
                </p>
              </div>
            </div>
          </SurfaceCard>
        }
      />

      <section className="px-4 py-8 md:px-6 md:py-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <SurfaceCard className="rounded-[34px] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/45">
              Learning outcomes
            </p>
            <div className="mt-6 space-y-4">
              {course.outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="rounded-2xl border border-black/8 bg-white/90 px-4 py-4 text-sm text-black/62"
                >
                  {outcome}
                </div>
              ))}
            </div>
          </SurfaceCard>

          <SurfaceCard className="rounded-[34px] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/45">
              Modules
            </p>
            <div className="mt-6 space-y-4">
              {course.modules.map((module, index) => (
                <div
                  key={module}
                  className="rounded-[24px] border border-black/8 bg-white/90 px-4 py-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/42">
                    Module {index + 1}
                  </p>
                  <p className="mt-2 text-sm font-medium text-black/66">{module}</p>
                </div>
              ))}
            </div>
          </SurfaceCard>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl rounded-[40px] border border-white/70 bg-white/70 p-8 shadow-soft backdrop-blur-xl md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/45">
                Certificate and format
              </p>
              <h2 className="mt-5 font-serif text-4xl tracking-[-0.05em] text-ink">
                Designed for busy teachers who need clarity, not complexity.
              </h2>
              <p className="mt-5 text-lg leading-8 text-black/62">
                Each course blends short lessons, guided templates, and practical
                assignments. On completion, learners receive a certificate suitable
                for internal PD records or school reporting.
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-[28px] border border-white/70 bg-white/90 p-5">
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-black/42" />
                  <p className="font-semibold text-ink">Self-paced modules</p>
                </div>
              </div>
              <div className="rounded-[28px] border border-white/70 bg-white/90 p-5">
                <div className="flex items-center gap-3">
                  <BookOpenCheck className="h-5 w-5 text-black/42" />
                  <p className="font-semibold text-ink">Guided templates and prompts</p>
                </div>
              </div>
              <div className="rounded-[28px] border border-white/70 bg-white/90 p-5">
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-black/42" />
                  <p className="font-semibold text-ink">Completion certificate</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <ButtonLink href="/contact">Enroll in this course</ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
