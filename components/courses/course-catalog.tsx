"use client";

import { BookOpenCheck, Clock3 } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

import type { CourseItem } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const allCategory = "All courses";

export function CourseCatalog({ courses }: { courses: CourseItem[] }) {
  const categories = useMemo(
    () => [allCategory, ...new Set(courses.map((course) => course.category))],
    [courses]
  );
  const [active, setActive] = useState(allCategory);

  const visibleCourses = useMemo(
    () =>
      active === allCategory
        ? courses
        : courses.filter((course) => course.category === active),
    [active, courses]
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-semibold transition",
              active === category
                ? "border-ink bg-ink text-white"
                : "border-white/70 bg-white/70 text-black/60 shadow-soft backdrop-blur-xl"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {visibleCourses.map((course) => (
          <article
            key={course.slug}
            className="grain rounded-[28px] border border-white/70 bg-white/75 p-6 shadow-soft backdrop-blur-xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/45">
              {course.category}
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-ink">
              {course.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-black/62">{course.excerpt}</p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm text-black/55">
              <span className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1.5">
                <BookOpenCheck className="h-4 w-4" />
                {course.level}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1.5">
                <Clock3 className="h-4 w-4" />
                {course.duration}
              </span>
            </div>
            <div className="mt-6 space-y-3">
              {course.outcomes.map((outcome) => (
                <div key={outcome} className="text-sm leading-6 text-black/62">
                  {outcome}
                </div>
              ))}
            </div>
            <Link
              href={`/courses/${course.slug}`}
              className="mt-7 inline-flex items-center rounded-full border border-black/10 px-4 py-2 text-sm font-semibold text-ink transition hover:border-black/20 hover:bg-black/[0.03]"
            >
              View Course
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
