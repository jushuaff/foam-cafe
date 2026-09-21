import Link from "next/link";
import { businessInfo } from "@/data/foam";

type BrandLogoProps = {
  inverted?: boolean;
};

export function BrandLogo({ inverted = false }: BrandLogoProps) {
  return (
    <Link href="#top" className="inline-flex min-h-11 items-center" aria-label={`${businessInfo.name} home`}>
      <span className={`font-display text-2xl leading-none tracking-[-0.05em] ${inverted ? "text-white" : "text-[#1e1a17]"}`}>
        {businessInfo.name.toLowerCase()}
      </span>
    </Link>
  );
}
