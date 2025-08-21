const KathmanduDestinationCard = ({ city, image }) => (
  <div className="relative flex-shrink-0 w-[140px] h-[100px] rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
    <img src={image} alt={city} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-blue bg-opacity-40 flex items-end">
      <div className="p-3">
        <h3 className="text-white font-medium text-sm">{city}</h3>
      </div>
    </div>
  </div>
);

export default KathmanduDestinationCard;
