import Link from "next/link";
import { Camera, Globe, Mail, Phone } from "lucide-react";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { businessInfo, navigationItems, branches, socialLinks } from "@/data/foam";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const isDemo = process.env.NEXT_PUBLIC_DEMO_MODE === "true";

  return (
    <footer className="border-t border-[#d7cec4] bg-[#171310] text-[#f6efe9]">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1.25fr]">
          <div>
            <div className="flex items-center gap-3">
              <BrandLogo inverted />
            </div>
            <p className="mt-6 max-w-sm text-base leading-7 text-[#dfd6ce]">
              {businessInfo.summary}
            </p>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.22em] text-[#d7c0a1]">Navigation</h3>
            <ul className="mt-5 space-y-3 text-sm text-[#efe6de]">
              {navigationItems
                .filter((item) => item.label !== "Home")
                .map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="transition-colors hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.22em] text-[#d7c0a1]">Baguio Locations</h3>
            <ul className="mt-5 space-y-3 text-sm text-[#efe6de]">
              {branches.map((branch) => (
                <li key={branch.id}>{branch.name.replace("Foam Coffee", "").replace("+ Roastery", "").trim()}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.22em] text-[#d7c0a1]">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-[#efe6de]">
              <li>
                <a href={`mailto:${businessInfo.email}`} className="inline-flex items-center gap-2 hover:text-white">
                  <Mail size={15} aria-hidden="true" />
                  {businessInfo.email}
                </a>
              </li>
              <li>
                <a href={`tel:${businessInfo.phone.replace(/\s+/g, "")}`} className="inline-flex items-center gap-2 hover:text-white">
                  <Phone size={15} aria-hidden="true" />
                  {businessInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <a href={socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="rounded-full border border-white/15 p-2 text-[#f5efe8] transition-colors hover:bg-white/10">
                  <Globe size={15} aria-hidden="true" />
                </a>
                <a href={socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-full border border-white/15 p-2 text-[#f5efe8] transition-colors hover:bg-white/10">
                  <Camera size={15} aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-[#d9d0c7] md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} Foam Coffee.</p>
          {isDemo ? <p>Concept website preview. Not the official Foam Coffee website.</p> : null}
        </div>
      </div>
    </footer>
  );
}
