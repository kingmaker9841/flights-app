import { KATHMANDU_DESTINATIONS } from "../../../assets/data";
import KathmanduDestinationCard from "./KathmanduDestinationCard";

const KathmanduDestinationsSection = () => (
  <section className="px-6 py-12 bg-gray-bg">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-normal text-text-primary mb-6">
        Popular flight destinations from Kathmandu
      </h2>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {KATHMANDU_DESTINATIONS.map((dest) => (
          <KathmanduDestinationCard
            key={dest.city}
            city={dest.city}
            image={dest.image}
          />
        ))}
      </div>
    </div>
  </section>
);

export default KathmanduDestinationsSection;
