export interface Property {
  id: number;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  images?: string[];
  price: number;
  location: string;
  address: string;
  latitude?: number;
  longitude?: number;
  bedrooms: number;
  bathrooms: number;
  size: number;
  featured?: boolean;
  property_type: string;
  features?: string[];
  status: 'available' | 'sold' | 'rented';
  parkingSpaces: number;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
}

export interface PropertyFilter {
  search: string;
  priceMin: string;
  priceMax: string;
  bedrooms: string;
  bathrooms: string;
  propertyType: string;
  status?: string;
}

export interface PropertyFormData extends Omit<Property, 'id' | 'createdAt' | 'updatedAt' | 'createdBy' | 'updatedBy'> {
  id?: number;
}