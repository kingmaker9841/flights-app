import { POPULAR_ROUTES } from "../../../assets/data";

const PopularRoutesSection = () => (
  <section className="px-6 py-12 bg-gray-bg">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-normal text-text-primary mb-6">
        Find cheap flights on popular routes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 text-sm">
        {POPULAR_ROUTES.map((route) => (
          <div key={route} className="py-2">
            <button
              type="button"
              className="text-left text-text-secondary hover:text-blue hover:underline transition-colors"
            >
              {route}
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PopularRoutesSection;
