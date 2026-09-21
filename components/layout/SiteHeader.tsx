"use client";

import Link from "next/link";
import { Menu, X, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { navigationItems } from "@/data/concept";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-black/5 bg-[#f5efe8]/80 shadow-sm backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <BrandLogo />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#312d2b] transition-colors hover:text-[#0f0d0c]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="#locations"
            className="inline-flex items-center gap-2 rounded-full border border-[#1e1a17]/10 bg-white/60 px-4 py-2 text-sm font-medium text-[#1e1a17] transition-transform hover:-translate-y-0.5 hover:bg-white"
          >
            <MapPin size={16} aria-hidden="true" />
            Find a Branch
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#1e1a17]/10 bg-white/60 md:hidden"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-black/5 bg-[#f7f0ea]/95 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4" aria-label="Mobile navigation">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-3 py-2 text-sm font-medium text-[#2f2a27] transition-colors hover:bg-white"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#locations"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[#1e1a17] px-4 py-3 text-sm font-medium text-[#f5efe8]"
              onClick={() => setMobileOpen(false)}
            >
              Find a Branch
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
