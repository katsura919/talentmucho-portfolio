import MockupGallery from "./MockupGallery";

export default function PortfolioWebLandingWorks() {
  return (
    <section id="web-landing-works" className="section bg-beige-50">
      <div className="container">
        <div className="mb-12 text-center">
          <span className="mb-3 block font-semibold uppercase tracking-wider text-[var(--primary)]">
            Web Landing Pages
          </span>
          <h2 className="mb-4 text-3xl font-light text-[var(--primary)] md:text-5xl">
            High-converting landing page mockups
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-[var(--foreground-light)]">
            Browse full-page mockups and open live previews to see structure,
            messaging, and conversion flow in action.
          </p>
        </div>

        <MockupGallery />
      </div>
    </section>
  );
}
