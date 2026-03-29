import { Globe2, ShieldCheck, Users, Workflow } from "lucide-react";

const reasons = [
  {
    title: "Top Creative Talent",
    description:
      "We recruit for both skills and reliability, then train for consistent delivery.",
    Icon: Users,
  },
  {
    title: "End-to-End Support",
    description:
      "From hiring to onboarding and ongoing management, we support every stage.",
    Icon: Workflow,
  },
  {
    title: "Quality You Can Trust",
    description:
      "Clear standards, performance checks, and proactive communication keep work on track.",
    Icon: ShieldCheck,
  },
  {
    title: "Global Business Fit",
    description:
      "Our team aligns with Western business expectations, systems, and communication styles.",
    Icon: Globe2,
  },
];

export default function PortfolioWhyChooseUs() {
  return (
    <section id="why-choose-us" className="section bg-charcoal-900">
      <div className="container">
        <div className="mb-12 text-center">
          <span className="mb-3 block font-semibold uppercase tracking-wider text-taupe-400">
            Why Choose Us
          </span>
          <h2 className="mb-4 text-3xl font-light text-white md:text-5xl">
            Built for long-term growth, not short-term fixes
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-white/80">
            Talent Mucho combines the right people, clear systems, and ongoing
            support to help businesses scale with confidence.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="rounded-2xl border border-beige-200/20 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-clay-500/10 text-clay-500">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal-900">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-taupe-400">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
