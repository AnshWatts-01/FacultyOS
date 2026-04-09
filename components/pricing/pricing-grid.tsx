"use client";

import { Check, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";

import type { PricingPlan } from "@/lib/site-data";
import { cn } from "@/lib/utils";

import { ButtonLink } from "../ui/button";

export function PricingGrid({ plans }: { plans: PricingPlan[] }) {
  const [annual, setAnnual] = useState(false);

  const cadenceLabel = useMemo(() => (annual ? "annual" : "monthly"), [annual]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div
          className="inline-flex rounded-full border border-white/70 bg-white/70 p-1 shadow-soft backdrop-blur-xl"
          role="tablist"
          aria-label="Billing period selector"
        >
          <button
            type="button"
            role="tab"
            aria-selected={!annual}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-semibold transition",
              !annual ? "bg-ink text-white" : "text-black/55"
            )}
            onClick={() => setAnnual(false)}
          >
            Monthly
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={annual}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-semibold transition",
              annual ? "bg-ink text-white" : "text-black/55"
            )}
            onClick={() => setAnnual(true)}
          >
            Annual
          </button>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-[#dfe6f1] bg-[#f5f8fd] px-4 py-2 text-sm font-medium text-black/70">
          <Sparkles className="h-4 w-4 text-accent" />
          Save 20% on annual plans
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-4">
        {plans.map((plan) => {
          const price = annual ? plan.yearly : plan.monthly;

          return (
            <div
              key={plan.name}
              className={cn(
                "grain rounded-[30px] border p-7 shadow-soft backdrop-blur-xl transition duration-300 hover:-translate-y-1",
                plan.featured
                  ? "border-[#dce7f7] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(240,246,255,0.94))] shadow-float"
                  : "border-white/70 bg-white/75"
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-lg font-semibold tracking-[-0.03em] text-ink">
                    {plan.name}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-black/56">{plan.audience}</p>
                </div>
                {plan.featured ? (
                  <span className="rounded-full border border-[#dce7f7] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-black/50">
                    Most Popular
                  </span>
                ) : null}
              </div>

              <div className="mt-8">
                <p className="text-4xl font-semibold tracking-[-0.05em] text-ink">{price}</p>
                <p className="mt-2 text-sm text-black/52">
                  Billed {cadenceLabel}
                </p>
              </div>

              <p className="mt-5 text-sm leading-7 text-black/62">{plan.description}</p>

              <div className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-sm text-black/68">
                    <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-black/[0.05]">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <ButtonLink
                href={plan.name === "Institution / Enterprise" ? "/proposal" : "/contact"}
                variant={plan.featured ? "primary" : "secondary"}
                className="mt-8 w-full"
              >
                {plan.cta}
              </ButtonLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}
