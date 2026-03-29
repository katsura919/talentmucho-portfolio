"use client";

import Image from "next/image";
import { portfolioItems } from "./portfolio-data";

export default function PortfolioGrid() {
  const getFeaturedImages = () => {
    const featured: string[] = [];

    portfolioItems.slice(0, 6).forEach((item) => {
      if (item.preview) {
        featured.push(item.preview);
      } else if (item.images?.[0]) {
        featured.push(item.images[0]);
      }
    });

    return featured;
  };

  const images = getFeaturedImages();

  return (
    <div className="grid grid-cols-3 gap-3 h-[400px]">
      {images.map((src, idx) => (
        <div
          key={idx}
          className="relative overflow-hidden rounded-xl border border-[var(--border-light)] hover:shadow-lg transition-shadow group cursor-pointer"
        >
          <Image
            src={src}
            alt={`Portfolio item ${idx + 1}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
        </div>
      ))}
    </div>
  );
}
