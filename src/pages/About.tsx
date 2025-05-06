import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/7641842/pexels-photo-7641842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Consultora Imobiliária" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-serif text-white mb-6"
          >
            Experiência e Excelência <br />no <span className="text-gold">Mercado Imobiliario</span>
          </motion.h1>
        </div>
      </section>

      {/* Sobre a Consultora */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src="https://img.freepik.com/fotos-gratis/mulher-de-tiro-medio-trabalhando-no-laptop_23-2149300643.jpg?t=st=1746496519~exp=1746500119~hmac=16e85181381a4d91341a3f8d93a1d5f961af6aeee9dbc6ae614c325593c3caba&w=996"
                  alt="Carolina Santos"
                  className="w-full rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-lg rounded-lg">
                  <p className="text-gold font-serif text-3xl font-medium">2+</p>
                  <p className="text-neutral-600">Anos de Experiência</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:pl-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                Conheça <span className="text-gold">Patricia</span>
              </h2>
              <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime accusantium adipisci,
                est ipsam, ut tempora repellat temporibus vero animi ab quibusdam laborum tempore rem et odit sed nobis obcaecati sapiente.
              </p>
              <p className="text-neutral-600 mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo similique sint non repudiandae cum, neque harum ad aspernatur iste obcaecati autem at pariatur 
                consequuntur, voluptates, maxime voluptate tempore? Dolore, facere.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="h-2 w-2 bg-gold rounded-full mr-3"></div>
                  <p className="text-neutral-700">Especialista em Imóveis</p>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 bg-gold rounded-full mr-3"></div>
                  <p className="text-neutral-700">Consultoria Personalizada</p>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 bg-gold rounded-full mr-3"></div>
                  <p className="text-neutral-700">Negociação Estratégica</p>
                </div>
              </div>
              <Link 
                to="/contact" 
                className="inline-flex items-center btn-primary"
              >
                Agende uma Consulta
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Números e Conquistas */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-gold text-4xl md:text-5xl font-serif font-medium mb-2">100%</p>
              <p className="text-neutral-600">Compremetida</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-gold text-4xl md:text-5xl font-serif font-medium mb-2">90+</p>
              <p className="text-neutral-600">Clientes Satisfeitos</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-gold text-4xl md:text-5xl font-serif font-medium mb-2">Anos</p>
              <p className="text-neutral-600">de Experiência</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-gold text-4xl md:text-5xl font-serif font-medium mb-2">98%</p>
              <p className="text-neutral-600">Índice de Satisfação</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif text-white mb-6"
            >
              Pronto para Encontrar seu Imóvel Ideal?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-neutral-300 mb-8"
            >
              Vamos conversar sobre seus objetivos imobiliários e como posso ajudá-lo 
              a encontrar a propriedade perfeita para você.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link 
                to="/contact" 
                className="btn-primary inline-flex items-center"
              >
                Agende uma Consulta
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;