import HeroIllustration from "./HeroIllustration";
import SearchForm from "../search-form/SearchForm";

// import SearchForm from "../../SearchForm";


const HeroSection = () => (
  <section className="relative bg-gray-bg px-6">
    <div className="max-w-6xl mx-auto">
      <div className="relative h-[280px] md:h-[340px] overflow-hidden rounded-b-3xl">
        {/* Simple illustrative background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-bg via-blue-focus-bg to-gray-bg"></div>
        <HeroIllustration />

        {/* Centered heading */}
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-[46px] md:text-[64px] leading-none font-normal text-text-primary">
            Flights
          </h1>
        </div>
      </div>
    </div>

    {/* Overlapping search card */}
    <div className="px-0 md:px-6 -mt-10 md:-mt-14">
      <div className="max-w-6xl md:mx-auto">
        <SearchForm />
      </div>
    </div>
  </section>
);

export default HeroSection;
