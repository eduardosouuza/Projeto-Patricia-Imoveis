import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-screen-90 flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Casa de Luxo" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-white"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium leading-tight mb-6">
            Encontre sua <span className="text-gold">Casa dos Sonhos</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl">
            Imóveis exclusivos com atendimento personalizado. Sua casa dos sonhos está a apenas uma conversa de distância.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/properties" 
              className="btn-primary flex items-center justify-center sm:justify-start"
            >
              Ver Imóveis
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link 
              to="/contact" 
              className="btn-outline flex items-center justify-center sm:justify-start"
            >
              Falar com Corretor
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;