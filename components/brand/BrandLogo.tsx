import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  inverted?: boolean;
};

export function BrandLogo({ inverted = false }: BrandLogoProps) {
  return (
    <Link href="#top" className="inline-flex items-center gap-3" aria-label="Foam Coffee home">
      <span className={`flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border p-1 ${inverted ? "border-white/20 bg-white" : "border-[#1e1a17]/10 bg-white"}`}>
        <Image src="/images/foam-mark.svg" alt="" width={40} height={40} className="h-full w-full object-contain" priority />
      </span>
      <Image
        src="/images/foam-logo.svg"
        alt="Foam Coffee"
        width={156}
        height={45}
        priority
        className={`h-auto w-[156px] rounded-md ${inverted ? "bg-white p-1" : "bg-white/80"}`}
      />
    </Link>
  );
}
