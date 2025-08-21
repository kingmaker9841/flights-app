import FAQSection from "../components/home/faq-section/FAQSection";
import HeroSection from "../components/home/hero-section/HeroSection";
import KathmanduDestinationsSection from "../components/home/popular-destination-section/KathmanduDestinationSection";
import PopularDestinationsSection from "../components/home/popular-destination-section/PopularDestinationSection";
import PopularRoutesSection from "../components/home/popular-routes-section/PopularRoutesSection";

function Home() {
  return (
    <div className="bg-gray-bg">
      <HeroSection />
      <PopularDestinationsSection />
      <KathmanduDestinationsSection />
      <FAQSection />
      <PopularRoutesSection />
    </div>
  );
}

export default Home;
