import DestinationCard from "./DestinationCard";
import { POPULAR_DESTINATIONS } from "../../../assets/data";

const PopularDestinationsSection = () => (
  <section className="px-6 py-12">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-normal mb-8 text-text-primary">
        Popular flight destinations
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {POPULAR_DESTINATIONS.map((dest) => (
          <DestinationCard
            key={dest.destination}
            destination={dest.destination}
            description={dest.description}
            price={dest.price}
            image={dest.image}
          />
        ))}
      </div>
    </div>
  </section>
);

export default PopularDestinationsSection;
