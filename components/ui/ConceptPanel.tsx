type ConceptPanelProps = {
  title: string;
  caption: string;
  className?: string;
};

export function ConceptPanel({ title, caption, className = "" }: ConceptPanelProps) {
  return (
    <div className={`relative flex min-h-72 flex-col justify-between overflow-hidden bg-[#e9ddce] p-8 text-[#332a23] ${className}`}>
      <span className="text-[0.65rem] uppercase tracking-[0.25em]">Sample Coffee / Design study</span>
      <div className="relative my-10">
        <div className="mb-8 h-px w-16 bg-[#9b7855]" aria-hidden="true" />
        <p className="max-w-md font-display text-[clamp(2.5rem,5vw,5rem)] leading-[0.95] tracking-[-0.05em]">{title}</p>
      </div>
      <p className="max-w-xs text-sm leading-6 text-[#655548]">{caption}</p>
    </div>
  );
}
