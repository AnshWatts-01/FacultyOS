import type { Metadata } from "next";

import { CourseCatalog } from "@/components/courses/course-catalog";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { SurfaceCard } from "@/components/ui/surface-card";
import { courses } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Explore premium AI courses for teachers, including prompting, lesson planning, assessment, presentations, and responsible AI for schools."
};

export default function CoursesPage() {
  return (
    <div className="pb-10">
      <PageHero
        eyebrow="Courses and LMS"
        title="A premium course library for practical teacher AI workflows."
        description="Browse structured learning tracks built around real classroom use cases, school-friendly guardrails, and implementation depth."
        actions={[
          { label: "Book a Demo", href: "/contact" },
          { label: "View Pricing", href: "/pricing", variant: "secondary" }
        ]}
        aside={
          <SurfaceCard className="rounded-[34px] p-7">
            <p className="text-sm text-black/56">Preview categories</p>
            <div className="mt-5 grid gap-3">
              {[
                "Getting Started with AI",
                "Prompting for Educators",
                "AI for Lesson Planning",
                "AI for Assessment",
                "AI for Presentations",
                "Responsible AI for Schools"
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-black/8 bg-white/85 px-4 py-3 text-sm text-black/62"
                >
                  {item}
                </div>
              ))}
            </div>
          </SurfaceCard>
        }
      />

      <section className="px-4 py-8 md:px-6 md:py-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Browse"
            title="Course cards designed to feel like a premium LMS catalog."
            description="Use the filters to explore the learning library by category. Each course links to a dedicated detail page."
          />
          <div className="mt-12">
            <CourseCatalog courses={courses} />
          </div>
        </div>
      </section>
    </div>
  );
}
