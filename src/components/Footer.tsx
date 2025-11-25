import React from 'react';
import { MapPin, Mail, Phone, Clock, ExternalLink, Instagram } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#133A4C] dark:bg-slate-900 text-white transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0C6E8E] to-[#1F5168] rounded-lg flex items-center justify-center">
                <div className="grid grid-cols-3 gap-0.5">
                  <div className="w-1 h-3 bg-white rounded-sm"></div>
                  <div className="w-1 h-4 bg-white rounded-sm"></div>
                  <div className="w-1 h-2 bg-white rounded-sm"></div>
                </div>
              </div>
              <span className="text-xl font-bold">Experience</span>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Gestão condominial com transparência, tecnologia e excelência em Natal/RN.
            </p>

            {/* Social Media */}
            <a
              href="https://www.instagram.com/eacondominio/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 hover:bg-[#0C6E8E] rounded-lg flex items-center justify-center transition-colors duration-200"
              aria-label="Instagram da Experience Administração"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#0C6E8E]">Links Rápidos</h3>
            <ul className="space-y-3">
              {[
                { name: 'Início', href: '#home' },
                { name: 'Sobre', href: '#sobre' },
                { name: 'Serviços', href: '#servicos' },
                { name: 'Processos', href: '#processos' },
                { name: 'Equipe', href: '#equipe' },
                { name: 'Depoimentos', href: '#depoimentos' },
                { name: 'FAQ', href: '#faq' },
                { name: 'Contato', href: '#contato' }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-[#0C6E8E] transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#0C6E8E]">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#0C6E8E] mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Av. Engenheiro Roberto Freire, 481 - 8m<br />
                  Capim Macio, Natal RN<br />
                  <span className="text-sm">Atendemos toda região metropolitana</span>
                </span>
              </li>

              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#0C6E8E] flex-shrink-0" />
                <a
                  href={`https://wa.me/${CONTACT_INFO.WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#0C6E8E] transition-colors duration-200"
                >
                  {CONTACT_INFO.WHATSAPP_DISPLAY}
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#0C6E8E] flex-shrink-0" />
                <a
                  href="mailto:contato@eadministracao.com.br"
                  className="text-gray-300 hover:text-[#0C6E8E] transition-colors duration-200"
                >
                  contato@eadministracao.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours & Access */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#0C6E8E]">Horários & Acesso</h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-[#0C6E8E] mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p className="font-medium mb-1">Atendimento:</p>
                  <p className="text-sm">Seg-Sex: 8h às 18h</p>
                  <p className="text-sm">Emergência: 24h</p>
                </div>
              </div>

              <a
                href="https://admin113212.superlogica.net/clients/areadocondomino"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#0C6E8E] hover:bg-[#0A5A73] px-4 py-3 rounded-xl transition-colors duration-200 font-medium text-sm"
              >
                <span>Área do Condômino</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Experience Administração de Condomínios — Todos os direitos reservados.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-2">
              <span className="text-gray-400 text-xs mr-2">Desenvolvido por</span>
              <a
                href="https://erilsondigital.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#0C6E8E] to-[#1F5168] hover:from-[#0A5A73] hover:to-[#1A4559] text-white px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-200 transform hover:scale-105"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                Erilson Araujo
              </a>
              <a
                href="https://wa.me/5584991502101"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20BD5A] text-white px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-200 transform hover:scale-105"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp
              </a>
              <a
                href="https://www.linkedin.com/in/jose-erilson-araujo-3265a52b1/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#0077B5] hover:bg-[#006399] text-white px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-200 transform hover:scale-105"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/erilsonaraujo/ErilsonDigital"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#24292e] hover:bg-[#1a1e22] text-white px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-200 transform hover:scale-105"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;