import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Quais serviços a Experience Administração oferece?',
      answer: 'Oferecemos gestão administrativa completa, gestão financeira e contábil, assessoria jurídica condominial, manutenção operacional e atendimento de emergência 24h. Nossos serviços são personalizados para atender às necessidades específicas de cada condomínio.'
    },
    {
      question: 'Como funciona o processo de contratação?',
      answer: 'O processo inclui 4 etapas: Diagnóstico (análise completa do condomínio), Proposta (plano personalizado), Implantação (transição suave dos serviços) e Relatórios (acompanhamento contínuo com relatórios periódicos).'
    },
    {
      question: 'A Experience atende condomínios de que porte?',
      answer: 'Atendemos condomínios de todos os portes, desde pequenos condomínios residenciais até grandes complexos comerciais e residenciais. Nossos serviços são adaptados ao tamanho e necessidades específicas de cada empreendimento.'
    },
    {
      question: 'Como funciona o atendimento de emergência 24h?',
      answer: 'Nosso atendimento de emergência funciona 24 horas por dia, 7 dias por semana. Temos uma equipe de plantão para situações como vazamentos, problemas elétricos, questões de segurança e outras emergências que necessitem ação imediata.'
    },
    {
      question: 'Quais são os diferenciais da Experience?',
      answer: 'Nossos principais diferenciais são: transparência total nos relatórios, atendimento 24h, equipe especializada, uso de tecnologia avançada, foco na valorização patrimonial e experiência local no mercado de Natal/RN.'
    },
    {
      question: 'Como é feita a prestação de contas?',
      answer: 'A prestação de contas é feita mensalmente com relatórios detalhados sobre receitas, despesas, inadimplência e situação financeira geral. Disponibilizamos acesso online através da Área do Condômino para total transparência.'
    },
    {
      question: 'A Experience oferece assessoria jurídica?',
      answer: 'Sim, temos assessoria jurídica especializada em direito condominial. Oferecemos consultoria legal, elaboração de contratos, apoio em assembleias, cobrança judicial de inadimplentes e suporte em questões jurídicas diversas.'
    },
    {
      question: 'Como posso acompanhar a gestão do meu condomínio?',
      answer: 'Você pode acompanhar através da nossa plataforma online "Área do Condômino", onde disponibilizamos relatórios financeiros, extratos, comunicados, atas de reunião e todas as informações sobre a gestão do condomínio.'
    },
    {
      question: 'Qual é o prazo para implantação dos serviços?',
      answer: 'O prazo de implantação varia conforme a complexidade do condomínio, mas geralmente é de 15 a 30 dias. Durante este período, fazemos a transição gradual para garantir que não haja interrupção dos serviços essenciais.'
    },
    {
      question: 'A Experience atende apenas em Natal?',
      answer: 'Nosso foco principal é Natal e região metropolitana, mas avaliamos atendimento em outras cidades do Rio Grande do Norte conforme a demanda e viabilidade operacional. Entre em contato para verificarmos sua localização.'
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 bg-gradient-to-br from-[#E5EBEE] to-white dark:from-slate-800 dark:to-slate-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0C6E8E] to-[#1F5168] rounded-2xl mb-6">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-[#133A4C] dark:text-white mb-6">
              Perguntas{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0C6E8E] to-[#1F5168]">
                Frequentes
              </span>
            </h2>
            <p className="text-xl text-[#7C8A96] dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Esclarecemos as principais dúvidas sobre nossos serviços e processos
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0C6E8E] to-[#1F5168] mx-auto mt-6"></div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/40 dark:hover:bg-slate-700/40 transition-colors duration-200"
                  aria-expanded={openQuestion === index}
                >
                  <h3 className="text-lg font-semibold text-[#133A4C] dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openQuestion === index ? (
                      <ChevronUp className="w-6 h-6 text-[#0C6E8E]" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-[#0C6E8E]" />
                    )}
                  </div>
                </button>

                {openQuestion === index && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-[#E5EBEE] dark:border-slate-600 pt-6">
                      <p className="text-[#7C8A96] dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-[#133A4C] to-[#1F5168] rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">
                Não encontrou sua resposta?
              </h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Nossa equipe está pronta para esclarecer todas suas dúvidas sobre gestão condominial
              </p>
              <a
                href={`https://wa.me/${CONTACT_INFO.WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Tenho algumas dúvidas sobre os serviços da Experience Administração. Podem me ajudar?')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#0C6E8E] hover:bg-[#0A5A73] text-white px-8 py-3 rounded-full transition-colors duration-200 font-medium"
              >
                Falar com Especialista
              </a>

              <p className="text-sm opacity-75 mt-4">
                Resposta garantida em até 2 horas no horário comercial
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;