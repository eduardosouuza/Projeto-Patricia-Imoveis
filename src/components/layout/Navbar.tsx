import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    scrolled
      ? 'bg-white shadow-md py-3'
      : 'bg-transparent py-5 md:py-6'
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl md:text-3xl font-serif text-gold font-semibold">Patricia</span>
          <span className="text-xl font-light text-neutral-800">.Imóveis</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <a 
            href="https://wa.me/5551984598285" 
            className="flex items-center text-gold hover:text-gold-dark transition-colors"
          >
            <Phone size={16} className="mr-2" />
            <span>(51) 98459-8285</span>
          </a>
        </div>

        <button
          className="md:hidden text-neutral-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white w-full shadow-lg"
        >
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <NavLinks mobile />
            <a 
              href="https://wa.me/5551984598285" 
              className="flex items-center text-gold py-2"
            >
              <Phone size={16} className="mr-2" />
              <span>(51) 98459-8285</span>
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
  const location = useLocation();
  
  const links = [
    { path: '/', label: 'Início' },
    { path: '/about', label: 'Sobre' },
    { path: '/properties', label: 'Imóveis' },
    { path: '/contact', label: 'Contato' },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`${
            mobile
              ? 'block py-2 text-neutral-800 hover:text-gold transition-colors'
              : 'navbar-link'
          } ${location.pathname === link.path ? 'text-gold' : ''}`}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};

export default Navbar;