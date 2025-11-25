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

            <div className="text-gray-500 text-xs text-center md:text-right bg-white/5 p-4 rounded-xl border border-white/10">
              <p className="font-medium text-gray-400 mb-2">Desenvolvimento e Tecnologia</p>
              <p className="mb-1">
                <a
                  href="https://erilsondigital.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0C6E8E] hover:text-white transition-colors duration-200 font-bold text-sm"
                >
                  Erilson Araujo
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/5584991502101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#0C6E8E] transition-colors duration-200 flex items-center justify-end gap-1"
                >
                  <Phone className="w-3 h-3" />
                  +55 84 99150-2101
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;