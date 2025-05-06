import { useState } from 'react';
import { Search } from 'lucide-react';
import { PropertyFilter } from '../../types/property';

interface PropertyFiltersProps {
  onFilterChange: (filters: PropertyFilter) => void;
}

const PropertyFilters = ({ onFilterChange }: PropertyFiltersProps) => {
  const [filters, setFilters] = useState<PropertyFilter>({
    search: '',
    priceMin: '',
    priceMax: '',
    bedrooms: '',
    bathrooms: '',
    propertyType: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    console.log(`Campo alterado: ${name}, Valor: ${value}`);
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulário enviado com filtros:', filters);
    onFilterChange(filters);
  };

  return (
    <div className="bg-white p-6 shadow-md mb-8">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-neutral-700 mb-1">
              Buscar
            </label>
            <div className="relative">
              <input
                type="text"
                id="search"
                name="search"
                value={filters.search}
                onChange={handleChange}
                placeholder="Título, localização ou descrição..."
                className="w-full p-3 border border-neutral-300 rounded-sm focus:ring-1 focus:ring-gold focus:border-gold outline-none transition-all"
              />
              <Search size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
            </div>
          </div>

          <div>
            <label htmlFor="priceMin" className="block text-sm font-medium text-neutral-700 mb-1">
              Preço Mínimo (R$)
            </label>
            <input
              type="number"
              id="priceMin"
              name="priceMin"
              value={filters.priceMin}
              onChange={handleChange}
              placeholder="Ex: 500000"
              min="0"
              step="1000"
              className="w-full p-3 border border-neutral-300 rounded-sm focus:ring-1 focus:ring-gold focus:border-gold outline-none transition-all"
            />
          </div>

          <div>
            <label htmlFor="priceMax" className="block text-sm font-medium text-neutral-700 mb-1">
              Preço Máximo (R$)
            </label>
            <input
              type="number"
              id="priceMax"
              name="priceMax"
              value={filters.priceMax}
              onChange={handleChange}
              placeholder="Ex: 1000000"
              min="0"
              step="1000"
              className="w-full p-3 border border-neutral-300 rounded-sm focus:ring-1 focus:ring-gold focus:border-gold outline-none transition-all"
            />
          </div>

          <div>
            <label htmlFor="bedrooms" className="block text-sm font-medium text-neutral-700 mb-1">
              Quartos
            </label>
            <select
              id="bedrooms"
              name="bedrooms"
              value={filters.bedrooms}
              onChange={handleChange}
              className="w-full p-3 border border-neutral-300 rounded-sm focus:ring-1 focus:ring-gold focus:border-gold outline-none transition-all"
            >
              <option value="">Qualquer quantidade</option>
              <option value="1">1 +</option>
              <option value="2">2 +</option>
              <option value="3">3 +</option>
              <option value="4">4 +</option>
              <option value="5">5 ou mais quartos</option>
            </select>
          </div>

          <div>
            <label htmlFor="bathrooms" className="block text-sm font-medium text-neutral-700 mb-1">
              Banheiros
            </label>
            <select
              id="bathrooms"
              name="bathrooms"
              value={filters.bathrooms}
              onChange={handleChange}
              className="w-full p-3 border border-neutral-300 rounded-sm focus:ring-1 focus:ring-gold focus:border-gold outline-none transition-all"
            >
              <option value="">Qualquer quantidade</option>
              <option value="1">1 +</option>
              <option value="2">2 +</option>
              <option value="3">3 +</option>
              <option value="4">4 +</option>
              <option value="5">5 ou mais banheiros</option>
            </select>
          </div>

          <div>
            <label htmlFor="propertyType" className="block text-sm font-medium text-neutral-700 mb-1">
              Tipo de Imóvel
            </label>
            <select
              id="propertyType"
              name="propertyType"
              value={filters.propertyType}
              onChange={handleChange}
              className="w-full p-3 border border-neutral-300 rounded-sm focus:ring-1 focus:ring-gold focus:border-gold outline-none transition-all"
            >
              <option value="">Todos os tipos</option>
              <option value="Casa">Casa</option>
              <option value="Apartamento">Apartamento</option>
              <option value="Terreno">Terreno</option>
            </select>
          </div>
        </div>

        <button 
          type="submit"
          className="w-full btn-primary"
        >
          Buscar Imóveis
        </button>
      </form>
    </div>
  );
};

export default PropertyFilters;