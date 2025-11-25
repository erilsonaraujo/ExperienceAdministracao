import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    condominio: '',
    telefone: '',
    email: '',
    mensagem: '',
    lgpd: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.lgpd) {
      alert('Por favor, aceite os termos de privacidade para continuar.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Format message for WhatsApp
      const whatsappMessage = encodeURIComponent(`
*Novo Contato - Site Experience Administração*

*Nome:* ${formData.nome}
*Condomínio:* ${formData.condominio}
*Telefone:* ${formData.telefone}
*E-mail:* ${formData.email}

*Mensagem:*
${formData.mensagem}

_Mensagem enviada através do site_
      `);

      // Open WhatsApp
      window.open(`https://wa.me/${CONTACT_INFO.WHATSAPP_NUMBER}?text=${whatsappMessage}`, '_blank');

      // Show success message
      setShowSuccess(true);
      setFormData({
        nome: '',
        condominio: '',
        telefone: '',
        email: '',
        mensagem: '',
        lgpd: false
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      alert('Erro ao enviar mensagem. Tente novamente ou entre em contato pelo telefone.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contato"
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#133A4C] dark:text-white mb-6">
              Entre em{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0C6E8E] to-[#1F5168]">
                Contato
              </span>
            </h2>
            <p className="text-xl text-[#7C8A96] dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Estamos prontos para atender seu condomínio. Fale conosco e solicite uma proposta personalizada
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0C6E8E] to-[#1F5168] mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-[#E5EBEE] to-white dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 backdrop-blur-sm border border-white/20">
                <h3 className="text-2xl font-bold text-[#133A4C] dark:text-white mb-6">
                  Informações de Contato
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0C6E8E] to-[#1F5168] rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#133A4C] dark:text-white mb-1">Endereço</h4>
                      <p className="text-[#7C8A96] dark:text-gray-300">
                        Natal/RN - Atendemos toda a região metropolitana
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0C6E8E] to-[#1F5168] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#133A4C] dark:text-white mb-1">WhatsApp</h4>
                      <a
                        href={`https://wa.me/${CONTACT_INFO.WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0C6E8E] hover:text-[#0A5A73] transition-colors duration-200"
                      >
                        (84) 99177-6106
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0C6E8E] to-[#1F5168] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#133A4C] dark:text-white mb-1">E-mail</h4>
                      <a
                        href="mailto:contato@eadministracao.com.br"
                        className="text-[#0C6E8E] hover:text-[#0A5A73] transition-colors duration-200"
                      >
                        contato@eadministracao.com.br
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0C6E8E] to-[#1F5168] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#133A4C] dark:text-white mb-1">Horário de Atendimento</h4>
                      <div className="text-[#7C8A96] dark:text-gray-300 space-y-1">
                        <p>Segunda a Sexta: 8h às 18h</p>
                        <p>Emergências: 24h todos os dias</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center bg-gradient-to-br from-[#0C6E8E] to-[#1F5168] rounded-2xl p-6 text-white">
                  <div className="text-3xl font-bold mb-2">24h</div>
                  <p className="text-sm">Resposta garantida</p>
                </div>
                <div className="text-center bg-gradient-to-br from-[#1F5168] to-[#133A4C] rounded-2xl p-6 text-white">
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <p className="text-sm">Gratuito</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gradient-to-br from-[#E5EBEE] to-white dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 backdrop-blur-sm border border-white/20">
              <h3 className="text-2xl font-bold text-[#133A4C] dark:text-white mb-6">
                Nossa Localização
              </h3>
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.2345678901234!2d-35.2089!3d-5.8345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2ff8f71f6b123%3A0x123456789abcdef!2sAv.%20Eng.%20Roberto%20Freire%2C%20481%20-%20Capim%20Macio%2C%20Natal%20-%20RN!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Experience Administração"
                  className="rounded-xl"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form - Centralized */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-[#E5EBEE] to-white dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 backdrop-blur-sm border border-white/20 shadow-xl">
              <h3 className="text-2xl font-bold text-[#133A4C] dark:text-white mb-6">
                Solicitar Proposta
              </h3>

              {showSuccess && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-xl flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <p className="text-green-800 dark:text-green-300 font-medium">
                    Mensagem enviada com sucesso! Entraremos em contato em breve.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-[#133A4C] dark:text-white mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white dark:bg-slate-600 border border-[#E5EBEE] dark:border-slate-500 rounded-xl focus:ring-2 focus:ring-[#0C6E8E] focus:border-transparent transition-colors duration-200 text-[#133A4C] dark:text-white"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="condominio" className="block text-sm font-medium text-[#133A4C] dark:text-white mb-2">
                      Nome do Condomínio *
                    </label>
                    <input
                      type="text"
                      id="condominio"
                      name="condominio"
                      required
                      value={formData.condominio}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white dark:bg-slate-600 border border-[#E5EBEE] dark:border-slate-500 rounded-xl focus:ring-2 focus:ring-[#0C6E8E] focus:border-transparent transition-colors duration-200 text-[#133A4C] dark:text-white"
                      placeholder="Nome do condomínio"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-[#133A4C] dark:text-white mb-2">
                      Telefone/WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      required
                      value={formData.telefone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white dark:bg-slate-600 border border-[#E5EBEE] dark:border-slate-500 rounded-xl focus:ring-2 focus:ring-[#0C6E8E] focus:border-transparent transition-colors duration-200 text-[#133A4C] dark:text-white"
                      placeholder="(84) 99999-9999"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#133A4C] dark:text-white mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white dark:bg-slate-600 border border-[#E5EBEE] dark:border-slate-500 rounded-xl focus:ring-2 focus:ring-[#0C6E8E] focus:border-transparent transition-colors duration-200 text-[#133A4C] dark:text-white"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-[#133A4C] dark:text-white mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    rows={4}
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-600 border border-[#E5EBEE] dark:border-slate-500 rounded-xl focus:ring-2 focus:ring-[#0C6E8E] focus:border-transparent transition-colors duration-200 text-[#133A4C] dark:text-white resize-none"
                    placeholder="Conte-nos sobre as necessidades do seu condomínio..."
                  ></textarea>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="lgpd"
                    name="lgpd"
                    required
                    checked={formData.lgpd}
                    onChange={handleInputChange}
                    className="mt-1 w-5 h-5 text-[#0C6E8E] bg-white dark:bg-slate-600 border-[#E5EBEE] dark:border-slate-500 rounded focus:ring-[#0C6E8E] focus:ring-2"
                  />
                  <label htmlFor="lgpd" className="text-sm text-[#7C8A96] dark:text-gray-300 leading-relaxed">
                    Aceito receber comunicações da Experience Administração e concordo com a{' '}
                    <a href="#" className="text-[#0C6E8E] hover:underline">
                      Política de Privacidade
                    </a>
                    . Seus dados serão utilizados exclusivamente para contato comercial.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center space-x-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-[#0C6E8E] to-[#1F5168] hover:from-[#0A5A73] hover:to-[#1A4559] text-white'
                    }`}
                >
                  {isSubmitting ? (
                    <div className="animate-spin w-6 h-6 border-2 border-white border-t-transparent rounded-full"></div>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Enviar Mensagem</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;