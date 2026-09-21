import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { businessInfo, navigationItems, branches } from "@/data/concept";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

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
            <h3 className="text-sm uppercase tracking-[0.22em] text-[#d7c0a1]">Sample Locations</h3>
            <ul className="mt-5 space-y-3 text-sm text-[#efe6de]">
              {branches.map((branch) => (
                <li key={branch.id}>{branch.label}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.22em] text-[#d7c0a1]">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-[#efe6de]">
              <li>
                <span className="inline-flex items-center gap-2 hover:text-white">
                  <Mail size={15} aria-hidden="true" />
                  {businessInfo.email}
                </span>
              </li>
              <li>
                <span className="inline-flex items-center gap-2 hover:text-white">
                  <Phone size={15} aria-hidden="true" />
                  {businessInfo.phone} (sample)
                </span>
              </li>
<li className="pt-2 text-[#d7c0a1]">Social profile placeholder</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-[#d9d0c7] md:flex-row md:items-center md:justify-between">
          <p>Sample Coffee / Design study {currentYear}</p>
          <p>Fictional café concept. All business and contact details are samples.</p>
        </div>
      </div>
    </footer>
  );
}
