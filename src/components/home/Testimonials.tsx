import { motion } from 'framer-motion';
import { Award, Target, Users, Sparkles } from 'lucide-react';

const Testimonials = () => {
  const features = [
    {
      icon: <Target className="h-8 w-8 text-gold" />,
      title: 'Atendimento Personalizado',
      description: 'Cada cliente recebe um atendimento exclusivo, adaptado às suas necessidades específicas e objetivos imobiliários.'
    },
    {
      icon: <Award className="h-8 w-8 text-gold" />,
      title: 'Expertise no Mercado Imobiliario',
      description: 'Especialização em propriedades de alto padrão e profundo conhecimento do mercado imobiliário.'
    },
    {
      icon: <Users className="h-8 w-8 text-gold" />,
      title: 'Networking Estratégico',
      description: 'Ampla rede de contatos no mercado imobiliário, proporcionando acesso exclusivo às melhores oportunidades.'
    },
    {
      icon: <Sparkles className="h-8 w-8 text-gold" />,
      title: 'Negociações Bem-sucedidas',
      description: 'Histórico comprovado de negociações bem-sucedidas, sempre buscando as melhores condições para nossos clientes.'
    }
  ];

  return (
    <section className="py-20 bg-neutral-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-white mb-6">
            Por que Escolher a Patricia
          </h2>
          <p className="text-neutral-300 max-w-3xl mx-auto">
            Com mais de anos de experiência no mercado imobiliário, 
            ofereço um serviço exclusivo e personalizado para cada cliente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-800 p-8 rounded-sm"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-serif mb-4">{feature.title}</h3>
              <p className="text-neutral-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="max-w-2xl mx-auto">
            <p className="text-xl font-serif italic text-neutral-300 mb-6">
              "Meu compromisso é transformar sonhos em realidade, oferecendo não apenas 
              imóveis excepcionais, mas uma experiência completa de consultoria imobiliária."
            </p>
            <div className="flex items-center justify-center">
              <div className="ml-4 text-left">
                <p className="font-medium">Patricia</p>
                <p className="text-neutral-400">Consultora Imobiliária</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;