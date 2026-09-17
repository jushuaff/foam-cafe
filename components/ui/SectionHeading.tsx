type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="mb-3 text-[0.7rem] font-medium uppercase tracking-[0.26em] text-[#72655c]">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl leading-none text-[#1e1a17] md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-[#564d47] md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
