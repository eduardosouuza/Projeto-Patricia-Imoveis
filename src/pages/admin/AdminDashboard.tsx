import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Home, LogOut } from 'lucide-react';
import toast from 'react-hot-toast';

export default function AdminDashboard() {
  const { user, signOut } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/admin/login');
      toast.success('Logout realizado com sucesso');
    } catch (error) {
      toast.error('Erro ao fazer logout');
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-serif text-gold font-semibold">Patricia</span>
                <span className="text-xl font-light text-neutral-800">.Imóveis</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-neutral-600">{user?.email}</span>
              <button
                onClick={handleSignOut}
                className="flex items-center text-neutral-600 hover:text-gold transition-colors"
              >
                <LogOut size={18} className="mr-1" />
                Sair
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white shadow-sm rounded-sm p-4">
              <nav className="space-y-2">
                <Link
                  to="/admin"
                  className={`flex items-center px-4 py-2 rounded-sm transition-colors ${
                    location.pathname === '/admin'
                      ? 'bg-gold text-white hover:bg-gold'
                      : 'text-neutral-600 hover:bg-neutral-100'
                  }`}
                >
                  <Home size={18} className="mr-2" />
                  Painel
                </Link>
              </nav>
            </div>
          </div>

          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}