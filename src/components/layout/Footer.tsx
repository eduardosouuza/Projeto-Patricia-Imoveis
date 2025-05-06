import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center mb-6">
              <span className="text-2xl font-serif text-gold font-semibold">Patricia</span>
              <span className="text-xl font-light text-white">.Imóveis</span>
            </Link>
            <p className="text-neutral-400 mb-6">
              Elevando experiências imobiliárias com serviço personalizado e resultados excepcionais.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-neutral-400 hover:text-gold transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-400 hover:text-gold transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-neutral-400 hover:text-gold transition-colors">
                  Imóveis
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-400 hover:text-gold transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6">Serviços</h3>
            <ul className="space-y-3">
              <li className="text-neutral-400">Venda de Imóveis</li>
              <li className="text-neutral-400">Imóveis para Investimento</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-gold mt-1 mr-3 flex-shrink-0" />
                <span className="text-neutral-400">
                  Em 
                  Breve
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-gold mr-3 flex-shrink-0" />
                <a href="https://wa.me/5551984598285" className="text-neutral-400 hover:text-gold transition-colors">
                  (51) 98459-8285
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-gold mr-3 flex-shrink-0" />
                <a href="mailto:contato@patricia-imoveis.com" className="text-neutral-400 hover:text-gold transition-colors">
                  contato@patricia-imoveis.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Patricia Imóveis. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <Link to="/admin/login" className="text-neutral-500 text-sm hover:text-gold transition-colors">
                Área Administrativa
              </Link>
              <a href="#" className="text-neutral-500 text-sm hover:text-gold transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-neutral-500 text-sm hover:text-gold transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;