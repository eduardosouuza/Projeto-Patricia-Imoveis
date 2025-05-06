import { useState } from 'react';
import { Send } from 'lucide-react';

interface ContactFormProps {
  propertySuggestion?: string;
}

const ContactForm = ({ propertySuggestion }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: propertySuggestion 
      ? `Tenho interesse em saber mais sobre "${propertySuggestion}".`
      : '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Formata a mensagem para o WhatsApp
    const whatsappMessage = `
*Novo Contato via Site*
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Mensagem: ${formData.message}
    `.trim();

    // Codifica a mensagem para URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Número do WhatsApp
    const whatsappNumber = '5551984598285';
    
    // Cria o link do WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Abre o WhatsApp em uma nova aba
    window.open(whatsappUrl, '_blank');
    
    // Limpa o formulário
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
          Nome Completo *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border border-neutral-300 rounded-sm focus:ring-1 focus:ring-gold focus:border-gold outline-none transition-all"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
          E-mail *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border border-neutral-300 rounded-sm focus:ring-1 focus:ring-gold focus:border-gold outline-none transition-all"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
          Telefone *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full p-3 border border-neutral-300 rounded-sm focus:ring-1 focus:ring-gold focus:border-gold outline-none transition-all"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
          Mensagem *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full p-3 border border-neutral-300 rounded-sm focus:ring-1 focus:ring-gold focus:border-gold outline-none transition-all"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full btn-primary flex items-center justify-center"
      >
        Enviar Mensagem
        <Send size={16} className="ml-2" />
      </button>
    </form>
  );
};

export default ContactForm;