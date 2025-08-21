const DestinationCard = ({ destination, description, price, image }) => (
  <div className="bg-gray-bg rounded-2xl overflow-hidden border border-gray-border hover:shadow-md transition-shadow cursor-pointer">
    <div className="h-40 bg-gradient-to-br from-blue to-blue-hover flex items-center justify-center text-5xl">
      {image}
    </div>
    <div className="p-6">
      <h3 className="text-lg font-medium mb-2 text-text-primary">
        {destination}
      </h3>
      <p className="text-text-secondary mb-3">{description}</p>
      <p className="text-blue font-medium">{price}</p>
    </div>
  </div>
);

export default DestinationCard;
