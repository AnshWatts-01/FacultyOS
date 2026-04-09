import Link from "next/link";
import type { LinkProps } from "next/link";

import { cn } from "@/lib/utils";

type SharedProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
};

type ButtonLinkProps = SharedProps &
  LinkProps & {
    href: string;
  };

const variants = {
  primary:
    "bg-ink text-white shadow-soft hover:-translate-y-0.5 hover:bg-[#1a1d24]",
  secondary:
    "border border-white/70 bg-white/70 text-ink shadow-soft backdrop-blur-xl hover:-translate-y-0.5 hover:bg-white",
  ghost:
    "border border-black/10 bg-transparent text-ink hover:border-black/20 hover:bg-black/[0.03]"
};

export function ButtonLink({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[-0.02em] transition duration-300",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
