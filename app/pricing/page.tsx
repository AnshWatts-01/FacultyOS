import type { Metadata } from "next";

import { PricingGrid } from "@/components/pricing/pricing-grid";
import { FAQList } from "@/components/ui/faq-list";
import { PageHero } from "@/components/ui/page-hero";
import { SurfaceCard } from "@/components/ui/surface-card";
import { faqs, pricingPlans } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Premium AI academy pricing for individual teachers, school teams, and enterprise institutions."
};

export default function PricingPage() {
  return (
    <div className="pb-10">
      <PageHero
        eyebrow="Pricing"
        title="Flexible pricing for teachers, schools, and institutional rollouts."
        description="A clean pricing model designed for the Indian school market while still feeling premium, proposal-ready, and scalable."
        actions={[
          { label: "Book a Demo", href: "/contact" },
          { label: "View Proposal", href: "/proposal", variant: "secondary" }
        ]}
        aside={
          <SurfaceCard className="rounded-[34px] p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/45">
              Optional add-on
            </p>
            <p className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-ink">
              Live AI Workshop
            </p>
            <p className="mt-3 text-base leading-7 text-black/62">
              Starting at Rs. 14,999 per session for school teams that want a focused
              implementation sprint.
            </p>
          </SurfaceCard>
        }
      />

      <section className="px-4 py-8 md:px-6 md:py-12">
        <div className="mx-auto max-w-7xl">
          <PricingGrid plans={pricingPlans} />
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-white/70 bg-white/70 shadow-soft backdrop-blur-xl">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 md:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/45">
                Feature comparison
              </p>
              <div className="mt-8 overflow-x-auto">
                <table className="w-full min-w-[620px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-black/8 text-black/46">
                      <th className="pb-4 font-medium">Capability</th>
                      <th className="pb-4 font-medium">Individual</th>
                      <th className="pb-4 font-medium">Pro</th>
                      <th className="pb-4 font-medium">School</th>
                      <th className="pb-4 font-medium">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody className="text-black/66">
                    {[
                      ["Core AI courses", "Yes", "Yes", "Yes", "Yes"],
                      ["Prompt library", "Yes", "Yes", "Yes", "Custom"],
                      ["Advanced workflows", "-", "Yes", "Yes", "Custom"],
                      ["Admin dashboard", "-", "-", "Yes", "Yes"],
                      ["Custom workshops", "-", "-", "Optional", "Yes"],
                      ["Policy support", "-", "-", "-", "Yes"]
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-black/6">
                        {row.map((cell, cellIndex) => (
                          <td key={`${row[0]}-${cellIndex}`} className="py-4 pr-4">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="border-t border-black/6 bg-[linear-gradient(180deg,rgba(247,249,252,0.75),rgba(255,255,255,0.92))] p-8 md:border-l md:border-t-0 md:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/45">
                Enterprise contact
              </p>
              <h2 className="mt-5 font-serif text-4xl tracking-[-0.05em] text-ink">
                Need multi-campus onboarding or policy support?
              </h2>
              <p className="mt-5 text-lg leading-8 text-black/62">
                The institutional plan is designed for larger rollouts, leadership
                workshops, implementation consulting, and LMS customization.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-4xl">
          <FAQList items={faqs} />
        </div>
      </section>
    </div>
  );
}
