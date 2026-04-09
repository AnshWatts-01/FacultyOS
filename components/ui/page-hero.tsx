import { ArrowRight } from "lucide-react";

import { ButtonLink } from "./button";

type Action = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
};

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: Action[];
  aside?: React.ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  aside
}: PageHeroProps) {
  return (
    <section className="px-4 pb-14 pt-16 md:px-6 md:pb-20 md:pt-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center">
        <div>
          {eyebrow ? (
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-black/45">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="max-w-4xl text-balance font-serif text-5xl tracking-[-0.05em] text-ink md:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-black/62 md:text-xl">
            {description}
          </p>
          {actions?.length ? (
            <div className="mt-8 flex flex-wrap gap-4">
              {actions.map((action) => (
                <ButtonLink key={action.href} href={action.href} variant={action.variant}>
                  {action.label}
                  {action.variant !== "ghost" ? <ArrowRight className="ml-2 h-4 w-4" /> : null}
                </ButtonLink>
              ))}
            </div>
          ) : null}
        </div>
        {aside}
      </div>
    </section>
  );
}
