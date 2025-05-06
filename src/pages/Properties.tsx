import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Property, PropertyFilter } from '../types/property';
import PropertyFilters from '../components/properties/PropertyFilters';
import PropertyCard from '../components/properties/PropertyCard';
import PropertyDetail from '../components/properties/PropertyDetail';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

const Properties = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  
  const propertyId = searchParams.get('id');

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .eq('status', 'available')
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      const validProperties = data?.filter(property => 
        property && 
        property.id && 
        property.title && 
        property.price && 
        property.location
      ) || [];
      
      setProperties(validProperties);
      setFilteredProperties(validProperties);
    } catch (error) {
      console.error('Erro ao carregar imóveis:', error);
      toast.error('Falha ao carregar imóveis');
    } finally {
      setLoading(false);
    }
  };

  // If a specific property is selected, show the property detail view
  if (propertyId) {
    return <PropertyDetail />;
  }

  const handleFilterChange = async (filters: PropertyFilter) => {
    try {
      console.log('Filtros recebidos:', filters);
      
      let query = supabase
        .from('properties')
        .select('*')
        .eq('status', 'available');

      // Apply search filter - busca mais precisa
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase().trim();
        console.log('Buscando por termo:', searchTerm);
        // Busca exata no título e localização, e parcial na descrição
        query = query.or(`
          title.eq.${searchTerm},
          location.eq.${searchTerm},
          description.ilike.%${searchTerm}%
        `);
      }

      // Apply price range filter - valores exatos
      if (filters.priceMin) {
        const minPrice = parseFloat(filters.priceMin);
        console.log('Preço mínimo:', minPrice);
        query = query.gte('price', minPrice);
      }
      if (filters.priceMax) {
        const maxPrice = parseFloat(filters.priceMax);
        console.log('Preço máximo:', maxPrice);
        query = query.lte('price', maxPrice);
      }

      // Apply bedrooms filter - valor exato
      if (filters.bedrooms) {
        const minBedrooms = parseInt(filters.bedrooms);
        console.log('Quartos mínimos:', minBedrooms);
        query = query.gte('bedrooms', minBedrooms);
      }

      // Apply bathrooms filter - valor exato
      if (filters.bathrooms) {
        const minBathrooms = parseInt(filters.bathrooms);
        console.log('Banheiros mínimos:', minBathrooms);
        query = query.gte('bathrooms', minBathrooms);
      }

      // Apply property type filter - valor exato
      if (filters.propertyType) {
        console.log('Tipo de imóvel:', filters.propertyType);
        query = query.eq('property_type', filters.propertyType);
      }

      console.log('Query final:', query);
      const { data, error } = await query.order('created_at', { ascending: false });

      if (error) {
        console.error('Erro na query:', error);
        throw error;
      }

      // Filtragem adicional no frontend para garantir precisão
      let filteredData = data || [];
      
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase().trim();
        filteredData = filteredData.filter(property => 
          property.title.toLowerCase().includes(searchTerm) ||
          property.location.toLowerCase().includes(searchTerm) ||
          property.description.toLowerCase().includes(searchTerm)
        );
      }

      console.log('Dados filtrados:', filteredData);
      setFilteredProperties(filteredData);
    } catch (error) {
      console.error('Erro detalhado ao filtrar imóveis:', error);
      toast.error('Falha ao filtrar imóveis. Por favor, tente novamente.');
    }
  };

  return (
    <div>
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-medium mb-6">
              Encontre seu <span className="text-gold">Imóvel Perfeito</span>
            </h1>
            <p className="text-neutral-600 text-lg">
              Navegue por nossa seleção exclusiva de imóveis. Use os filtros para refinar sua busca de acordo com suas necessidades.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Properties Listing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <PropertyFilters onFilterChange={handleFilterChange} />

          {loading ? (
            <div className="text-center py-12">
              <div className="text-neutral-600">Carregando imóveis...</div>
            </div>
          ) : filteredProperties.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-4">Nenhum imóvel encontrado</h3>
              <p className="text-neutral-600">Tente ajustar os filtros para ver mais resultados</p>
            </div>
          ) : (
            <>
              <div className="mb-6 text-neutral-600">
                Mostrando {filteredProperties.length} {filteredProperties.length === 1 ? 'imóvel' : 'imóveis'}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProperties.map((property, index) => (
                  <motion.div
                    key={property.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <PropertyCard property={property} />
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Properties;
