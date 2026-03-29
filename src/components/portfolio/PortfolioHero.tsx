import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PortfolioGrid from "./PortfolioGrid";

export default function PortfolioHero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-beige-50 pt-32 pb-20"
    >
      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <span className="mb-4 block text-sm font-semibold uppercase tracking-wider text-clay-500">
              Build Scale With The Right Team
            </span>
            <h1 className="mb-6 text-4xl font-light leading-tight text-charcoal-900 md:text-5xl lg:text-6xl">
              Trusted creative talent, proven by real campaign results
            </h1>
            <p className="mb-6 max-w-2xl text-lg leading-relaxed text-taupe-400 md:text-xl">
              Talent Mucho connects growth-focused businesses with skilled
              creative professionals. This page is a visual proof library of
              what our team delivers.
            </p>

            <div className="mb-8 grid gap-3 sm:grid-cols-2">
              {[
                "Branding, design, and social media content",
                "Aligned with Western business standards",
                "Designed for long-term, scalable operations",
                "Transparent proof across SEO, ads, and brand assets",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 rounded-xl border border-beige-200 bg-beige-100 px-3 py-2 text-sm text-charcoal-900"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-clay-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="#booking" className="btn-primary">
                Book a Free Call
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="#work"
                className="inline-flex items-center justify-center rounded-full border-2 border-clay-500 px-6 py-3 font-semibold text-clay-500 transition hover:bg-clay-500 hover:text-white"
              >
                View the Library
              </Link>
            </div>
          </div>

          <div className="relative">
            <PortfolioGrid />
          </div>
        </div>
      </div>
    </section>
  );
}
