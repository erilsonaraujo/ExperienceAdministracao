import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Maria Santos',
      role: 'Síndica',
      content: 'A Experience transformou a gestão do nosso condomínio. A transparência nos relatórios e o atendimento 24h nos trouxeram muito mais tranquilidade.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'João Oliveira',
      role: 'Síndico',
      content: 'Profissionais competentes e tecnologia de ponta. Conseguimos reduzir a inadimplência em 40% no primeiro ano com a Experience.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Ana Costa',
      role: 'Síndica',
      content: 'O suporte jurídico foi fundamental para resolver questões complexas em nosso condomínio. Equipe muito preparada e eficiente.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Roberto Silva',
      role: 'Síndico',
      content: 'A gestão financeira ficou muito mais organizada. Os relatórios são claros e as prestações de conta são impecáveis.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Carla Mendes',
      role: 'Síndica',
      content: 'O atendimento de emergência 24h já nos salvou várias vezes. É reconfortante saber que sempre podemos contar com eles.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3771118/pexels-photo-3771118.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="depoimentos"
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#133A4C] dark:text-white mb-6">
              O que nossos{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0C6E8E] to-[#1F5168]">
                clientes dizem
              </span>
            </h2>
            <p className="text-xl text-[#7C8A96] dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Depoimentos reais de síndicos e moradores que confiam em nossos serviços
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0C6E8E] to-[#1F5168] mx-auto mt-6"></div>
          </div>

          {/* Testimonial Slider */}
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gradient-to-br from-[#E5EBEE] to-white dark:from-slate-800 dark:to-slate-700 rounded-3xl p-12 shadow-xl backdrop-blur-sm border border-white/20 max-w-4xl mx-auto">
                      {/* Quote Icon */}
                      <div className="flex justify-center mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#0C6E8E] to-[#1F5168] rounded-full flex items-center justify-center">
                          <Quote className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <blockquote className="text-xl lg:text-2xl text-[#133A4C] dark:text-white text-center mb-8 leading-relaxed font-medium">
                        "{testimonial.content}"
                      </blockquote>

                      {/* Rating */}
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                        ))}
                      </div>

                      {/* Author */}
                      <div className="flex items-center justify-center space-x-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover shadow-lg"
                          loading="lazy"
                        />
                        <div className="text-center">
                          <h4 className="text-lg font-bold text-[#133A4C] dark:text-white">
                            {testimonial.name}
                          </h4>
                          <p className="text-[#7C8A96] dark:text-gray-300">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-6 h-6 text-[#1F5168] dark:text-[#0C6E8E]" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-6 h-6 text-[#1F5168] dark:text-[#0C6E8E]" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-[#0C6E8E] scale-125' 
                    : 'bg-[#7C8A96] hover:bg-[#1F5168]'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center bg-gradient-to-br from-[#E5EBEE] to-white dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
              <div className="text-4xl font-bold text-[#0C6E8E] mb-2">98%</div>
              <p className="text-[#7C8A96] dark:text-gray-300 font-medium">Satisfação dos Clientes</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-[#E5EBEE] to-white dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
              <div className="text-4xl font-bold text-[#0C6E8E] mb-2">5.0</div>
              <p className="text-[#7C8A96] dark:text-gray-300 font-medium">Avaliação Média</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-[#E5EBEE] to-white dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
              <div className="text-4xl font-bold text-[#0C6E8E] mb-2">100+</div>
              <p className="text-[#7C8A96] dark:text-gray-300 font-medium">Clientes Satisfeitos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;