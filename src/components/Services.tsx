import React from 'react';
import { 
  Building, 
  Calculator, 
  Scale, 
  Wrench, 
  Clock,
  Users,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building,
      title: 'Gestão Administrativa',
      description: 'Administração completa do condomínio, controle de portaria, correspondência, assembleia e documentação.',
      features: ['Controle de portaria', 'Gestão de assembleia', 'Documentação completa', 'Relacionamento com moradores']
    },
    {
      icon: Calculator,
      title: 'Gestão Financeira e Contábil',
      description: 'Controle total das finanças, emissão de boletos, prestação de contas e relatórios financeiros detalhados.',
      features: ['Emissão de boletos', 'Prestação de contas', 'Relatórios financeiros', 'Controle de inadimplência']
    },
    {
      icon: Scale,
      title: 'Assessoria Jurídica Condominial',
      description: 'Suporte jurídico especializado, elaboração de contratos, cobrança judicial e consultoria legal.',
      features: ['Consultoria jurídica', 'Elaboração de contratos', 'Cobrança judicial', 'Assessoria legal']
    },
    {
      icon: Wrench,
      title: 'Manutenção Operacional',
      description: 'Coordenação de serviços de manutenção, limpeza, jardinagem e reformas preventivas e corretivas.',
      features: ['Manutenção preventiva', 'Coordenação de reformas', 'Limpeza e conservação', 'Jardinagem']
    },
    {
      icon: Clock,
      title: 'Atendimento de Emergência 24h',
      description: 'Suporte disponível 24 horas para situações de emergência, vazamentos, problemas elétricos e segurança.',
      features: ['Plantão 24h', 'Suporte emergencial', 'Ação rápida', 'Equipe especializada']
    },
    {
      icon: Users,
      title: 'Gestão de Assembleias',
      description: 'Organização e condução de assembleias condominiais com transparência, atas digitais e suporte completo aos síndicos.',
      features: ['Organização completa', 'Atas digitais', 'Suporte aos síndicos', 'Transparência total']
    }
  ];

  const handleSolicitarServico = (serviceName: string) => {
    const message = encodeURIComponent(
      `Olá! Gostaria de mais informações sobre o serviço: ${serviceName}`
    );
    window.open(`https://wa.me/5584991776106?text=${message}`, '_blank');
  };

  return (
    <section
      id="servicos"
      className="py-20 bg-gradient-to-br from-[#E5EBEE] to-white dark:from-slate-800 dark:to-slate-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#133A4C] dark:text-white mb-6">
              Nossos{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0C6E8E] to-[#1F5168]">
                Serviços
              </span>
            </h2>
            <p className="text-xl text-[#7C8A96] dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Soluções completas e personalizadas para a gestão do seu condomínio
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0C6E8E] to-[#1F5168] mx-auto mt-6"></div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0C6E8E] to-[#1F5168] rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#133A4C] dark:text-white mb-4 group-hover:text-[#0C6E8E] dark:group-hover:text-[#0C6E8E] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#7C8A96] dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-[#7C8A96] dark:text-gray-300">
                        <div className="w-2 h-2 bg-[#0C6E8E] rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleSolicitarServico(service.title)}
                    className="group/btn flex items-center justify-between w-full bg-gradient-to-r from-[#0C6E8E] to-[#1F5168] hover:from-[#0A5A73] hover:to-[#1A4559] text-white px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <span className="font-medium">Saiba Mais</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-[#133A4C] to-[#1F5168] rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Precisa de um serviço personalizado?
            </h3>
            <p className="text-xl opacity-90 mb-8">
              Desenvolvemos soluções sob medida para as necessidades específicas do seu condomínio
            </p>
            <button
              onClick={() => handleSolicitarServico('Serviço Personalizado')}
              className="bg-white hover:bg-gray-100 text-[#133A4C] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Solicitar Consultoria Personalizada
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;