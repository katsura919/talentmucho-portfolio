import { FileText, Image as ImageIcon } from "lucide-react";

import { PortfolioMediaType } from "./portfolio-data";

type PortfolioMediaBadgeProps = {
  type: PortfolioMediaType;
};

export default function PortfolioMediaBadge({
  type,
}: PortfolioMediaBadgeProps) {
  const Icon = type === "pdf" ? FileText : ImageIcon;
  const label = type === "pdf" ? "PDF" : "Image";

  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-[var(--border-light)] bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--primary)] shadow-sm">
      <Icon className="h-3 w-3" />
      {label}
    </span>
  );
}
