import React from 'react';
import { Search, FileText, ClipboardCheck, Key } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Process = () => {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Diagnóstico',
      description: 'Análise completa da situação atual do condomínio, identificando necessidades e oportunidades de melhoria.',
      details: ['Auditoria financeira', 'Análise documental', 'Avaliação operacional', 'Diagnóstico de necessidades']
    },
    {
      number: '02',
      icon: FileText,
      title: 'Proposta',
      description: 'Elaboração de proposta personalizada com soluções específicas e cronograma detalhado de implementação.',
      details: ['Plano de trabalho', 'Cronograma de ações', 'Proposta comercial', 'Definição de objetivos']
    },
    {
      number: '03',
      icon: ClipboardCheck, // Changed from Settings
      title: 'Implantação',
      description: 'Implementação gradual dos serviços com acompanhamento próximo e ajustes conforme necessário.',
      details: ['Transição suave', 'Treinamento de equipe', 'Configuração de sistemas', 'Acompanhamento próximo']
    },
    {
      number: '04',
      icon: Key, // Changed from BarChart3
      title: 'Relatórios',
      description: 'Relatórios periódicos detalhados com indicadores de performance e resultados alcançados.',
      details: ['Relatórios mensais', 'Indicadores de performance', 'Prestação de contas', 'Análise de resultados']
    }
  ];

  // handleIniciarProcesso function removed as it's no longer used by the new CTA

  return (
    <section
      id="processos"
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300 relative"
    >
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.05] pointer-events-none"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#133A4C] dark:text-white mb-6">
              Como{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0C6E8E] to-[#1F5168]">
                Trabalhamos
              </span>
            </h2>
            <p className="text-xl text-[#7C8A96] dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Um processo estruturado e transparente para garantir os melhores resultados
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0C6E8E] to-[#1F5168] mx-auto mt-6"></div>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#E5EBEE] via-[#0C6E8E] to-[#E5EBEE] transform -translate-y-1/2 z-0"></div>

            {/* Steps Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.number}
                    className="group relative"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {/* Step Card */}
                    <div className="bg-gradient-to-br from-white to-[#E5EBEE]/30 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-white/20 backdrop-blur-sm">
                      {/* Step Number */}
                      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0C6E8E] to-[#1F5168] rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl font-bold text-white">{step.number}</span>
                      </div>

                      {/* Icon */}
                      <div className="flex items-center justify-center w-12 h-12 bg-[#E5EBEE] dark:bg-slate-600 rounded-xl mb-4 mx-auto">
                        <Icon className="w-6 h-6 text-[#1F5168] dark:text-[#0C6E8E]" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-[#133A4C] dark:text-white mb-4 text-center group-hover:text-[#0C6E8E] dark:group-hover:text-[#0C6E8E] transition-colors duration-300">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[#7C8A96] dark:text-gray-300 mb-6 leading-relaxed text-center">
                        {step.description}
                      </p>

                      {/* Details */}
                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center text-sm text-[#7C8A96] dark:text-gray-300">
                            <div className="w-2 h-2 bg-[#0C6E8E] rounded-full mr-3 flex-shrink-0"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Arrow for desktop */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                        <div className="w-8 h-8 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-lg border-2 border-[#0C6E8E]">
                          {/* ArrowRight icon removed */}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-br from-[#E5EBEE] to-white dark:from-slate-800 dark:to-slate-700 rounded-3xl p-12 backdrop-blur-sm border border-white/20">
              <h3 className="text-3xl font-bold text-[#133A4C] dark:text-white mb-4">
                Pronto para começar?
              </h3>
              <p className="text-xl text-[#7C8A96] dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Agende uma visita gratuita para diagnóstico completo do seu condomínio
              </p>
              <a
                href={`https://wa.me/${CONTACT_INFO.WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-[#0C6E8E] to-[#1F5168] hover:from-[#0A5A73] hover:to-[#1A4559] text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                Começar Agora
              </a>

              <p className="text-sm text-[#7C8A96] dark:text-gray-400 mt-4">
                * Sem compromisso • Atendimento em até 24h
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;