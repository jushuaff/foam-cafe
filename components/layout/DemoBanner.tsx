import { Sparkles } from "lucide-react";

export function DemoBanner() {
  return (
    <div className="border-b border-white/15 bg-[#2d2c2a]/95 text-[0.7rem] font-medium tracking-[0.22em] text-[#f7f0ea] uppercase backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center">
        <Sparkles size={12} className="text-[#d9b487]" aria-hidden="true" />
        <span>Sample Coffee — Fictional café · Design concept</span>
      </div>
    </div>
  );
}
