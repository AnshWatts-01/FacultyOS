import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-3xl rounded-[36px] border border-white/70 bg-white/75 p-10 text-center shadow-soft backdrop-blur-xl md:p-14">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/45">
          Page not found
        </p>
        <h1 className="mt-5 font-serif text-5xl tracking-[-0.05em] text-ink">
          The page you&apos;re looking for is not available.
        </h1>
        <p className="mt-5 text-lg leading-8 text-black/62">
          Return to the main site experience and continue exploring the academy,
          proposal, and LMS preview.
        </p>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/">Back to Home</ButtonLink>
        </div>
      </div>
    </section>
  );
}
