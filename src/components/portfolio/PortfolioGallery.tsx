"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import PortfolioMediaBadge from "./PortfolioMediaBadge";
import PortfolioMediaFrame from "./PortfolioMediaFrame";
import PortfolioLightbox from "./PortfolioLightbox";
import { portfolioItems } from "./portfolio-data";

export default function PortfolioGallery() {
  const categories = useMemo(() => {
    const unique = Array.from(
      new Set(portfolioItems.map((item) => item.category)),
    );
    return ["All", ...unique];
  }, []);

  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const visibleItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return portfolioItems.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;

      if (!matchesCategory) return false;

      if (!query) return true;

      const searchable = [
        item.title,
        item.summary,
        item.category,
        item.format,
        ...item.tags,
      ]
        .join(" ")
        .toLowerCase();

      return searchable.includes(query);
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="work" className="section bg-beige-50">
      <div className="container">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-3 block font-semibold uppercase tracking-wider text-clay-500">
              Full Library
            </span>
            <h2 className="mb-3 text-3xl font-light text-charcoal-900 md:text-5xl">
              Browse by category, format, or campaign goal
            </h2>
            <p className="max-w-2xl text-lg text-taupe-400">
              The grid below is built for fast scanning. Drop in new images or
              PDFs as they are ready.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:min-w-[20rem]">
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search by title, tag, summary..."
              className="w-full rounded-xl border border-beige-200 bg-white px-4 py-2.5 text-sm text-charcoal-900 outline-none transition focus:border-clay-500 focus:ring-2 focus:ring-clay-500/20"
              aria-label="Search portfolio items"
            />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-xl border border-beige-200 bg-white px-4 py-2.5 text-sm font-semibold text-charcoal-900 outline-none transition hover:border-clay-500 focus:border-clay-500 focus:ring-2 focus:ring-clay-500/20"
                  aria-label="Filter portfolio by category"
                >
                  <span>{activeCategory}</span>
                  <ChevronDown className="h-4 w-4 text-taupe-400" />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-[20rem] bg-white">
                <DropdownMenuRadioGroup
                  value={activeCategory}
                  onValueChange={setActiveCategory}
                >
                  {categories.map((category) => (
                    <DropdownMenuRadioItem key={category} value={category}>
                      {category}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {visibleItems.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleItems.map((item) => (
              <div
                key={item.id}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-beige-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <PortfolioLightbox
                  src={item.preview}
                  images={item.images}
                  alt={item.title}
                  enabled={item.type === "image"}
                  className="relative p-4"
                >
                  <PortfolioMediaFrame
                    title={item.title}
                    type={item.type}
                    preview={item.preview}
                    className="h-44"
                  />
                  <div className="absolute left-6 top-6">
                    <PortfolioMediaBadge type={item.type} />
                  </div>
                </PortfolioLightbox>

                <div className="flex flex-1 flex-col px-6 pb-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-taupe-400">
                    {item.category}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-charcoal-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-taupe-400">
                    {item.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-beige-200 bg-beige-100 px-3 py-1 text-[11px] font-semibold text-clay-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-taupe-400">
                    {item.format}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-beige-200 bg-white p-10 text-center shadow-sm">
            <h3 className="text-xl font-semibold text-charcoal-900">
              No matches found
            </h3>
            <p className="mt-2 text-sm text-taupe-400">
              Try a different search term or choose another category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
