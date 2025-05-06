import { MapPin, Mail, Phone, Clock, Linkedin, Facebook, Instagram } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';
import { motion } from 'framer-motion';

const Contact = () => {
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
              Entre em <span className="text-gold">Contato</span>
            </h1>
            <p className="text-neutral-600 text-lg">
            Se você está pensando em comprar, vender ou simplesmente tem dúvidas sobre o mercado imobiliário, 
            estou aqui para ajudar. Entre em contato e vamos começar uma conversa.

            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/3"
            >
              <div className="mb-10">
                <h2 className="text-2xl font-serif font-medium mb-6">Informções para Contato</h2>
                <ul className="space-y-6">
                  <li className="flex">
                    <MapPin size={24} className="text-gold mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Em Breve</h3>
                      <p className="text-neutral-600">
                        
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <Phone size={24} className="text-gold mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Número</h3>
                      <a href="https://wa.me/5551984598285" className="text-neutral-600 hover:text-gold transition-colors">
                        (51) 98459-8285
                      </a>
                    </div>
                  </li>
                  <li className="flex">
                    <Mail size={24} className="text-gold mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <a href="mailto:contato@patricia-imoveis.com" className="text-neutral-600 hover:text-gold transition-colors">
                        contato@patricia-imoveis.com
                      </a>
                    </div>
                  </li>
                  <li className="flex">
                    <Clock size={24} className="text-gold mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Em Breve</h3>
                      <p className="text-neutral-600">
                        
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-medium mb-6">Me siga nas Redes Sociais</h2>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="h-12 w-12 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-gold hover:text-white transition-colors"
                  >
                    <Facebook size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="h-12 w-12 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-gold hover:text-white transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="h-12 w-12 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-gold hover:text-white transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:w-2/3"
            >
              <div className="bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-serif font-medium mb-6">Envie-me uma mensagem</h2>
                <p className="text-neutral-600 mb-8">
                Preencha o formulário abaixo e entrarei em contato o mais breve possível. 
                Estou ansioso para saber mais sobre suas necessidades imobiliárias.
                </p>
                
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-medium mb-4">Em Breve</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
            
            </p>
          </div>
          
          <div className="h-96 bg-white shadow-sm flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-neutral-300 mx-auto mb-4" />
              <p className="text-neutral-500">Em Breve</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;