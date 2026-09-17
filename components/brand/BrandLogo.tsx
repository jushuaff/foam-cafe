import Link from "next/link";
import Image from "next/image";

type BrandLogoProps = {
  inverted?: boolean;
};

export function BrandLogo({ inverted = false }: BrandLogoProps) {
  return (
    <Link href="#top" className="inline-flex items-center gap-3" aria-label="Foam Coffee home">
      <span className={`flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border p-1 ${inverted ? "border-white/20 bg-white" : "border-[#1e1a17]/10 bg-white"}`}>
        <Image src="/images/foam-mark.svg" alt="Foam Coffee" width={40} height={40} className="h-full w-full object-contain" priority />
      </span>
      <span className={`font-display text-2xl leading-none tracking-[-0.05em] ${inverted ? "text-white" : "text-[#1e1a17]"}`}>
        foam coffee
      </span>
    </Link>
  );
}
