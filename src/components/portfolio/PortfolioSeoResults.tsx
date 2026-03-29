import PortfolioLightbox from "./PortfolioLightbox";
import PortfolioMediaFrame from "./PortfolioMediaFrame";

type SeoImageResult = {
  id: string;
  title: string;
  image: string;
};

const seoAnalyticsVideo =
  "https://res.cloudinary.com/dg1i3ew9w/video/upload/v1774519268/Thewudhusocks_analytics_wkf2ag.mp4";

const seoImageResults: SeoImageResult[] = [
  {
    id: "seo-shot-01",
    title: "SEO Result Snapshot 01",
    image:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774519264/1734065734742_z9rq5k.jpg",
  },
  {
    id: "seo-shot-02",
    title: "SEO Result Snapshot 02",
    image:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774519262/1734065731059_tyxhnp.jpg",
  },
  {
    id: "seo-shot-03",
    title: "SEO Result Snapshot 03",
    image:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774519261/1734065727166_hrowkt.jpg",
  },
  {
    id: "seo-shot-04",
    title: "SEO Result Snapshot 04",
    image:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774519168/1000025456_wttw3z.jpg",
  },
  {
    id: "seo-shot-05",
    title: "SEO Result Snapshot 05",
    image:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774519020/project_2_pvyglk.jpg",
  },
  {
    id: "seo-shot-06",
    title: "SEO Result Snapshot 06",
    image:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774519013/project_1_pqes3w.jpg",
  },
  {
    id: "seo-shot-07",
    title: "SEO Result Snapshot 07",
    image:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774519011/1737210126940_gr2e1g.jpg",
  },
  {
    id: "seo-shot-08",
    title: "SEO Result Snapshot 08",
    image:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774519009/1736335354821_yyrma1.jpg",
  },
  {
    id: "seo-shot-09",
    title: "SEO Result Snapshot 09",
    image:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774519007/1734953968906_auaxvh.jpg",
  },
  {
    id: "seo-shot-10",
    title: "SEO Result Snapshot 10",
    image:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774519005/1734952739734_rlirha.jpg",
  },
  {
    id: "seo-shot-11",
    title: "SEO Result Snapshot 11",
    image:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774519001/1734952284662_tas8jn.jpg",
  },
  {
    id: "seo-shot-12",
    title: "SEO Result Snapshot 12",
    image:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518999/1734952278937_dvkse0.jpg",
  },
  {
    id: "seo-shot-13",
    title: "SEO Result Snapshot 13",
    image:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518997/1734760541172_aio09y.jpg",
  },
  {
    id: "seo-shot-14",
    title: "SEO Result Snapshot 14",
    image:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518996/1734760521526_zahziz.jpg",
  },
  {
    id: "seo-shot-15",
    title: "SEO Result Snapshot 15",
    image:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518992/1734244827775_nr70gz.jpg",
  },
  {
    id: "seo-shot-16",
    title: "SEO Result Snapshot 16",
    image:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518990/1734244825286_xnsbhm.jpg",
  },
  {
    id: "seo-shot-17",
    title: "SEO Result Snapshot 17",
    image:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774518988/1734244822819_v7ycdt.jpg",
  },
];

export default function PortfolioSeoResults() {
  return (
    <section id="seo-results" className="section bg-[var(--background-alt)]">
      <div className="container">
        <div className="mb-12 text-center">
          <span className="mb-3 block font-semibold uppercase tracking-wider text-[var(--primary)]">
            SEO Results
          </span>
          <h2 className="mb-4 text-3xl font-light text-[var(--primary)] md:text-5xl">
            Real SEO evidence library
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-[var(--foreground-light)]">
            No forced buckets. Just direct campaign evidence you can scan and
            open in full view.
          </p>
        </div>

        <article className="mb-6 overflow-hidden rounded-3xl border border-[var(--border-light)] bg-white p-4 shadow-sm">
          <div className="grid gap-4 md:grid-cols-[1.4fr_1fr] md:items-center">
            <video
              controls
              preload="metadata"
              className="h-80 w-full rounded-2xl border border-[var(--border-light)] bg-black object-cover md:h-[26rem]"
            >
              <source src={seoAnalyticsVideo} type="video/mp4" />
            </video>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)]">
                SEO Analytics
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-[var(--primary)]">
                Full Analytics Walkthrough
              </h3>
              <p className="mt-3 text-sm text-[var(--foreground-light)]">
                A video capture of search performance and trend movement.
              </p>
              <a
                href={seoAnalyticsVideo}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex w-fit items-center rounded-full border border-[var(--border-light)] bg-[var(--background-alt)] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--primary)] transition hover:-translate-y-0.5 hover:bg-white"
              >
                Open Video in New Tab
              </a>
            </div>
          </div>
        </article>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {seoImageResults.map((item) => (
            <article
              key={item.id}
              className="flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--border-light)] bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <PortfolioLightbox
                src={item.image}
                images={[item.image]}
                alt={item.title}
                className="relative"
              >
                <PortfolioMediaFrame
                  title={item.title}
                  type="image"
                  preview={item.image}
                  className="h-48"
                />
              </PortfolioLightbox>

              <div className="mt-5 flex flex-1 flex-col">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)]">
                  SEO Proof
                </p>
                <h3 className="mt-2 text-xl font-semibold text-[var(--primary)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-[var(--foreground-light)]">
                  Click the card to inspect this screenshot in full-screen view.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
