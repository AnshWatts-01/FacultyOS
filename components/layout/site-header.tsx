"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { navItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";

import { ButtonLink } from "../ui/button";
import { LogoMark } from "../ui/logo-mark";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-6">
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/50 px-4 py-3 transition duration-300 md:px-6",
          scrolled
            ? "bg-white/78 shadow-soft backdrop-blur-2xl"
            : "bg-white/42 backdrop-blur-md"
        )}
      >
        <LogoMark />

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-black/60 transition hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/login" className="text-sm text-black/60 transition hover:text-ink">
            Login
          </Link>
          <ButtonLink href="/contact" className="px-4 py-2.5 text-sm">
            Book a Demo
          </ButtonLink>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/80 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.24 }}
            className="mx-auto mt-3 max-w-7xl rounded-[28px] border border-white/70 bg-white/90 p-4 shadow-soft backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-sm text-black/70 transition hover:bg-black/[0.03] hover:text-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/login"
                className="rounded-2xl px-4 py-3 text-sm text-black/70 transition hover:bg-black/[0.03] hover:text-ink"
                onClick={() => setOpen(false)}
              >
                Login
              </Link>
              <ButtonLink href="/contact" className="mt-2">
                Book a Demo
              </ButtonLink>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
