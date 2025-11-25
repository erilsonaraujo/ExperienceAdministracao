import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, ExternalLink, User } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Processos', href: '#processos' },
    { name: 'Equipe', href: '#equipe' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contato' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('#home')}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200"
              aria-label="Experience Administração - Página inicial"
            >
              <img
                src="https://cdn.superlogica.com/clients/areadocondomino/publico/logo?filename=admin113212&date=08/20/2025"
                alt="Experience Administração de Condomínios"
                className="h-8 lg:h-10 w-auto"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <ul className="flex items-center space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`font-medium transition-colors duration-200 ${
                      isScrolled 
                        ? 'text-[#1F5168] dark:text-gray-300 hover:text-[#0C6E8E] dark:hover:text-white' 
                        : 'text-white hover:text-[#E5EBEE]'
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isScrolled 
                  ? 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700' 
                  : 'bg-white/20 hover:bg-white/30 backdrop-blur-sm'
              }`}
              aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
            >
              {theme === 'light' ? (
                <Moon className={`w-5 h-5 ${isScrolled ? 'text-[#1F5168]' : 'text-white'}`} />
              ) : (
                <Sun className="w-5 h-5 text-yellow-500" />
              )}
            </button>

            {/* Área do Condômino Button */}
            <a
              href="https://admin113212.superlogica.net/clients/areadocondomino"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center space-x-2 bg-[#0C6E8E] hover:bg-[#0A5A73] text-white px-4 py-2 rounded-full transition-colors duration-200 font-medium"
            >
              <User className="w-4 h-4" />
              <span>Área do Condômino</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
                isScrolled 
                  ? 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700' 
                  : 'bg-white/20 hover:bg-white/30 backdrop-blur-sm'
              }`}
              aria-label="Abrir menu"
            >
              {isMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-[#1F5168] dark:text-white' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-[#1F5168] dark:text-white' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-slate-900 rounded-lg shadow-lg mt-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 rounded-md text-[#1F5168] dark:text-gray-300 hover:text-[#0C6E8E] dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              ))}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-2">
                <a
                  href="https://admin113212.superlogica.net/clients/areadocondomino"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 w-full px-3 py-2 bg-[#0C6E8E] hover:bg-[#0A5A73] text-white rounded-md transition-colors duration-200 font-medium"
                >
                  <User className="w-4 h-4" />
                  <span>Área do Condômino</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;