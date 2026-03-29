import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioGallery from "@/components/portfolio/PortfolioGallery";
import PortfolioWebLandingWorks from "@/components/portfolio/PortfolioWebLandingWorks";
import PortfolioSeoResults from "@/components/portfolio/PortfolioSeoResults";
import PortfolioWhyChooseUs from "@/components/portfolio/PortfolioWhyChooseUs";
import BookingEmbed from "@/components/BookingEmbed";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <PortfolioHero />
      <PortfolioGallery />
      <PortfolioWebLandingWorks />
      <PortfolioSeoResults />
      <PortfolioWhyChooseUs />
      <BookingEmbed />
      <Footer />
    </main>
  );
}
