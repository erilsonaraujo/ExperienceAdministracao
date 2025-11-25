import React from 'react';
import { Shield, Clock, Users, Zap, TrendingUp } from 'lucide-react';

const About = () => {
  const differentials = [
    {
      icon: Shield,
      title: 'Transparência',
      description: 'Relatórios claros e acesso total às informações financeiras'
    },
    {
      icon: Clock,
      title: 'Atendimento 24h',
      description: 'Suporte disponível a qualquer hora para emergências'
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais experientes em gestão condominial'
    },
    {
      icon: Zap,
      title: 'Tecnologia',
      description: 'Plataforma digital moderna para gestão eficiente'
    },
    {
      icon: TrendingUp,
      title: 'Valorização Patrimonial',
      description: 'Estratégias para aumentar o valor do seu patrimônio'
    }
  ];

  return (
    <section
      id="sobre"
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#133A4C] dark:text-white mb-6">
              Sobre a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0C6E8E] to-[#1F5168]">
                Experience
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0C6E8E] to-[#1F5168] mx-auto mb-8"></div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-[#7C8A96] dark:text-gray-300">
                A <span className="font-semibold text-[#133A4C] dark:text-white">Experience Administração</span> combina
                experiência local e tecnologia para oferecer gestão condominial transparente e eficiente.
              </p>

              <p className="text-lg leading-relaxed text-[#7C8A96] dark:text-gray-300">
                Atuamos em <span className="font-semibold text-[#1F5168] dark:text-[#0C6E8E]">Natal e região</span>,
                cuidando da administração, contabilidade, assessoria jurídica e serviços operacionais para
                síndicos e moradores viverem com tranquilidade e segurança.
              </p>

              <div className="bg-gradient-to-br from-[#E5EBEE] to-white dark:from-slate-800 dark:to-slate-700 p-6 rounded-2xl">
                <p className="text-[#133A4C] dark:text-white font-medium text-lg">
                  "Nossa missão é transformar a gestão condominial através da transparência,
                  tecnologia e atendimento personalizado."
                </p>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/497391/pexels-photo-497391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Edifício residencial moderno representando gestão condominial"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Floating Card */}
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

          {/* Differentials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {differentials.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group bg-gradient-to-br from-white to-[#E5EBEE]/50 dark:from-slate-800 dark:to-slate-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0C6E8E] to-[#1F5168] rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-lg font-bold text-[#133A4C] dark:text-white mb-2">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#7C8A96] dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;