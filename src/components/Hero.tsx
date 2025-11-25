import React from 'react';
import { ChevronDown, ExternalLink, MessageCircle } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSolicitarProposta = () => {
    const message = encodeURIComponent(
      'Olá! Gostaria de solicitar uma proposta para gestão condominial da Experience Administração.'
    );
    window.open(`https://wa.me/5584991776106?text=${message}`, '_blank');
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#E5EBEE] via-white to-[#E5EBEE] dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 pt-20"
    >
      {/* Liquid Glass Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#0C6E8E]/20 to-[#1F5168]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#133A4C]/15 to-[#0C6E8E]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#1F5168]/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-left">
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#133A4C] dark:text-white mb-6 leading-tight">
                Gestão Condominial com{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0C6E8E] to-[#1F5168]">
                  Transparência
                </span>
                ,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1F5168] to-[#0C6E8E]">
                  Segurança
                </span>{' '}
                e{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0C6E8E] to-[#133A4C]">
                  Resultados
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl sm:text-2xl text-[#7C8A96] dark:text-gray-300 mb-8 leading-relaxed">
                Soluções completas em Natal/RN para administração, finanças e suporte jurídico —{' '}
                <span className="font-semibold text-[#1F5168] dark:text-[#0C6E8E]">
                  com atendimento 24h
                </span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
                <button
                  onClick={handleSolicitarProposta}
                  className="group flex items-center space-x-2 bg-[#0C6E8E] hover:bg-[#0A5A73] text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Solicitar Proposta</span>
                </button>

                <a
                  href="https://admin113212.superlogica.net/clients/areadocondomino"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2 border-2 border-[#1F5168] text-[#1F5168] dark:border-[#0C6E8E] dark:text-[#0C6E8E] hover:bg-[#1F5168] hover:text-white dark:hover:bg-[#0C6E8E] dark:hover:text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg"
                >
                  <span>Área do Condômino</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-4 max-w-lg mb-12">
                {[
                  'Transparência',
                  'Atendimento 24h',
                  'Equipe Especializada',
                  'Tecnologia Avançada'
                ].map((benefit, index) => (
                  <div
                    key={benefit}
                    className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-4 text-center transform hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <p className="text-sm font-semibold text-[#133A4C] dark:text-white">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Edifícios residenciais modernos representando gestão condominial"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#0C6E8E] mb-1">100+</p>
                  <p className="text-sm font-medium text-[#7C8A96] dark:text-gray-300">
                    Condomínios Atendidos
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="text-center mt-16">
            <button
              onClick={() => scrollToSection('#sobre')}
              className="animate-bounce bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label="Rolar para próxima seção"
            >
              <ChevronDown className="w-6 h-6 text-[#1F5168] dark:text-[#0C6E8E]" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-8 w-16 h-16 bg-gradient-to-br from-[#0C6E8E]/20 to-[#1F5168]/20 rounded-2xl rotate-45 animate-float"></div>
      <div className="absolute bottom-1/4 right-8 w-12 h-12 bg-gradient-to-br from-[#1F5168]/20 to-[#133A4C]/20 rounded-full animate-float-delayed"></div>
    </section>
  );
};

export default Hero;