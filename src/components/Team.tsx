import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Eriberto Rocha',
      role: 'Diretor Executivo',
      bio: 'Especialista em administração condominial com mais de 15 anos de experiência no mercado imobiliário.',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#'
    },
    {
      name: 'Hugo Modesto',
      role: 'Gerente Administrativo',
      bio: 'Formado em Administração, especializado em gestão de condomínios e relacionamento com clientes.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#'
    },
    {
      name: 'Fabíola Santos',
      role: 'Coordenadora Financeira',
      bio: 'Contadora certificada com expertise em gestão financeira e compliance para condomínios.',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#'
    },
    {
      name: 'Felipe Xavier',
      role: 'Assessor Jurídico',
      bio: 'Advogado especializado em direito condominial e imobiliário, com vasta experiência em consultoria.',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#'
    },
    {
      name: 'Vinícius Silva',
      role: 'Coordenador Operacional',
      bio: 'Especialista em operações condominiais e coordenação de equipes de manutenção.',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#'
    }
  ];

  return (
    <section
      id="equipe"
      className="py-20 bg-gradient-to-br from-[#E5EBEE] to-white dark:from-slate-800 dark:to-slate-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#133A4C] dark:text-white mb-6">
              Nossa{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0C6E8E] to-[#1F5168]">
                Equipe
              </span>
            </h2>
            <p className="text-xl text-[#7C8A96] dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Profissionais qualificados e experientes, comprometidos com a excelência em gestão condominial
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0C6E8E] to-[#1F5168] mx-auto mt-6"></div>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="group bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Photo */}
                <div className="relative mb-6">
                  <div className="aspect-square rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Overlay with Social Links */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#133A4C]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end justify-center pb-4">
                    <div className="flex space-x-3">
                      <a
                        href={member.linkedin}
                        className="w-10 h-10 bg-white/90 rounded-lg flex items-center justify-center hover:bg-white transition-colors duration-200"
                        aria-label={`LinkedIn de ${member.name}`}
                      >
                        <Linkedin className="w-5 h-5 text-[#0C6E8E]" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-[#133A4C] dark:text-white mb-2 group-hover:text-[#0C6E8E] dark:group-hover:text-[#0C6E8E] transition-colors duration-300">
                    {member.name}
                  </h3>
                  
                  <p className="text-[#0C6E8E] font-semibold mb-3">
                    {member.role}
                  </p>
                  
                  <p className="text-[#7C8A96] dark:text-gray-300 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Team Stats */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-[#0C6E8E] mb-2">15+</div>
              <p className="text-[#7C8A96] dark:text-gray-300 font-medium">Anos de Experiência</p>
            </div>
            
            <div className="text-center bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-[#0C6E8E] mb-2">100+</div>
              <p className="text-[#7C8A96] dark:text-gray-300 font-medium">Condomínios Gerenciados</p>
            </div>
            
            <div className="text-center bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-[#0C6E8E] mb-2">24/7</div>
              <p className="text-[#7C8A96] dark:text-gray-300 font-medium">Suporte Disponível</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-[#133A4C] to-[#1F5168] rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">
                Quer conhecer nossa equipe pessoalmente?
              </h3>
              <p className="text-xl opacity-90 mb-8">
                Agende uma reunião e conheça os profissionais que cuidarão do seu condomínio
              </p>
              <button
                onClick={() => {
                  const message = encodeURIComponent('Olá! Gostaria de agendar uma reunião para conhecer a equipe da Experience Administração.');
                  window.open(`https://wa.me/5584991776106?text=${message}`, '_blank');
                }}
                className="bg-white hover:bg-gray-100 text-[#133A4C] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Agendar Reunião
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;