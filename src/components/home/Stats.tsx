import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { value: '100%', label: 'Compremetida' },
    { value: '90+', label: 'Clientes Satisfeitos' },
    { value: 'Anos', label: 'de Experiência' },
    { value: '98%', label: 'Satisfação dos Clientes' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-gold text-4xl md:text-5xl font-serif font-medium mb-2">{stat.value}</p>
              <p className="text-neutral-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;