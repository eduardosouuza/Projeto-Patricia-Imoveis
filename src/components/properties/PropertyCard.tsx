import { MapPin, Bed, Bath, Square } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Property } from '../../types/property';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <div className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300 group">
      <div className="relative overflow-hidden">
        <Link to={`/properties?id=${property.id}`}>
          <img 
            src={property.image} 
            alt={property.title} 
            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </Link>
        {property.featured && (
          <div className="absolute top-4 right-4 bg-gold px-3 py-1 text-white text-sm font-medium">
            Destaque
          </div>
        )}
        <div className="absolute bottom-4 left-4 bg-white px-3 py-1 text-gold text-sm font-medium">
          {formatPrice(property.price)}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-neutral-500 text-sm mb-2">
          <MapPin size={14} className="mr-1" />
          <span>{property.location}</span>
        </div>
        <h3 className="text-xl font-medium mb-2">
          <Link to={`/properties?id=${property.id}`} className="hover:text-gold transition-colors">
            {property.title}
          </Link>
        </h3>
        <p className="text-neutral-600 mb-4 line-clamp-2">{property.description}</p>
        <div className="flex justify-between text-neutral-500">
          <div className="flex items-center">
            <Bed size={16} className="mr-1" />
            <span>{property.bedrooms} Quartos</span>
          </div>
          <div className="flex items-center">
            <Bath size={16} className="mr-1" />
            <span>{property.bathrooms} Banheiros</span>
          </div>
          <div className="flex items-center">
            <Square size={16} className="mr-1" />
            <span>{property.size}m²</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;