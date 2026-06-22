interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="section-divider" />
        <span className="text-gold-400 text-sm font-semibold uppercase tracking-[0.2em]">
          {label}
        </span>
        <div className="section-divider" />
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-100 font-[family-name:var(--font-geist-sans)]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-cream-100/60 text-lg max-w-2xl mx-auto italic font-[family-name:var(--font-geist-sans)]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
