import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Property } from '../../types/property';
import { Plus, Pencil, Trash2, Building } from 'lucide-react';
import toast from 'react-hot-toast';

export default function AdminProperties() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProperties(data || []);
    } catch (error) {
      toast.error('Erro ao carregar imóveis');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Tem certeza que deseja excluir este imóvel?')) return;

    try {
      const { error } = await supabase
        .from('properties')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      setProperties(properties.filter(property => property.id !== id));
      toast.success('Imóvel excluído com sucesso');
    } catch (error) {
      toast.error('Erro ao excluir imóvel');
    }
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  if (loading) {
    return (
      <div className="bg-white shadow-sm rounded-sm p-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-neutral-600">Carregando...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-sm rounded-sm">
      <div className="p-6 border-b border-neutral-200">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-serif font-medium text-neutral-800">Imóveis</h2>
          <Link
            to="/admin/properties/new"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-sm shadow-sm text-sm font-medium text-white bg-gold hover:bg-gold-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold"
          >
            <Plus size={18} className="mr-2" />
            Adicionar Imóvel
          </Link>
        </div>
      </div>

      {properties.length === 0 ? (
        <div className="p-6 text-center">
          <Building size={48} className="mx-auto text-neutral-300 mb-4" />
          <p className="text-neutral-600">Nenhum imóvel encontrado</p>
          <Link
            to="/admin/properties/new"
            className="mt-4 inline-flex items-center text-gold hover:text-gold-dark"
          >
            <Plus size={18} className="mr-1" />
            Adicione seu primeiro imóvel
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-neutral-200">
            <thead className="bg-neutral-50">
              <tr>
                <th scope="col" className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Imóvel
                </th>
                <th scope="col" className="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Localização
                </th>
                <th scope="col" className="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Preço
                </th>
                <th scope="col" className="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Tipo
                </th>
                <th scope="col" className="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-4 sm:px-6 py-3 text-right text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200">
              {properties.map((property) => (
                <tr key={property.id} className="hover:bg-neutral-50">
                  <td className="px-4 sm:px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-12 w-12 sm:h-16 sm:w-16 flex-shrink-0">
                        <img
                          className="h-12 w-12 sm:h-16 sm:w-16 object-cover rounded-sm"
                          src={property.image}
                          alt={property.title}
                        />
                      </div>
                      <div className="ml-3 sm:ml-4">
                        <div className="text-sm font-medium text-neutral-900">{property.title}</div>
                        <div className="text-xs sm:text-sm text-neutral-500">
                          {property.bedrooms} quartos • {property.bathrooms} banheiros • {property.size}m²
                        </div>
                        <div className="md:hidden mt-1">
                          <div className="text-xs text-neutral-900">{formatPrice(property.price)}</div>
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium capitalize mt-1
                            ${property.status === 'available' ? 'bg-green-100 text-green-800' : ''}
                            ${property.status === 'sold' ? 'bg-red-100 text-red-800' : ''}
                            ${property.status === 'rented' ? 'bg-blue-100 text-blue-800' : ''}
                          `}>
                            {property.status === 'available' ? 'Disponível' : ''}
                            {property.status === 'sold' ? 'Vendido' : ''}
                            {property.status === 'rented' ? 'Alugado' : ''}
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-neutral-900">{property.location}</div>
                  </td>
                  <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-neutral-900">{formatPrice(property.price)}</div>
                  </td>
                  <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-neutral-900">{property.property_type}</div>
                  </td>
                  <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
                      ${property.status === 'available' ? 'bg-green-100 text-green-800' : ''}
                      ${property.status === 'sold' ? 'bg-red-100 text-red-800' : ''}
                      ${property.status === 'rented' ? 'bg-blue-100 text-blue-800' : ''}
                    `}>
                      {property.status === 'available' ? 'Disponível' : ''}
                      {property.status === 'sold' ? 'Vendido' : ''}
                      {property.status === 'rented' ? 'Alugado' : ''}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <Link
                        to={`/admin/properties/${property.id}`}
                        className="p-2 text-neutral-600 hover:text-gold bg-neutral-100 hover:bg-neutral-200 rounded-sm transition-colors"
                        title="Editar"
                      >
                        <Pencil size={18} />
                      </Link>
                      <button
                        onClick={() => handleDelete(property.id)}
                        className="p-2 text-neutral-600 hover:text-red-600 bg-neutral-100 hover:bg-neutral-200 rounded-sm transition-colors"
                        title="Excluir"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}