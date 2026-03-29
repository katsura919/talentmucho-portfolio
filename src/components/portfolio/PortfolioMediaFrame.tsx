import Image from "next/image";
import { FileText, Image as ImageIcon } from "lucide-react";

import { PortfolioMediaType } from "./portfolio-data";

type PortfolioMediaFrameProps = {
  title: string;
  type: PortfolioMediaType;
  preview?: string;
  className?: string;
};

const placeholderStyles: Record<PortfolioMediaType, string> = {
  pdf: "bg-gradient-to-br from-clay-500 to-taupe-400",
  image: "bg-gradient-to-br from-clay-500 to-taupe-400",
};

export default function PortfolioMediaFrame({
  title,
  type,
  preview,
  className,
}: PortfolioMediaFrameProps) {
  const Icon = type === "pdf" ? FileText : ImageIcon;

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl ${className ?? ""}`}
    >
      {preview ? (
        <Image
          src={preview}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      ) : (
        <div
          className={`flex h-full w-full flex-col items-center justify-center gap-3 ${placeholderStyles[type]}`}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-widest text-white/80">
            {title}
          </span>
        </div>
      )}
    </div>
  );
}
