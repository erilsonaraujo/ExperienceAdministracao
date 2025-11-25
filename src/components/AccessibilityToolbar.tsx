import React, { useState } from 'react';
import { 
  Accessibility, 
  Eye, 
  Type, 
  MousePointer, 
  BookOpen, 
  X, 
  Settings
} from 'lucide-react';
import { useAccessibility } from '../contexts/AccessibilityContext';

const AccessibilityToolbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    highContrast,
    largeFont,
    readingMode,
    largeCursor,
    toggleHighContrast,
    toggleLargeFont,
    toggleReadingMode,
    toggleLargeCursor,
  } = useAccessibility();

  const accessibilityOptions = [
    {
      icon: Eye,
      title: 'Alto Contraste',
      description: 'Aumenta o contraste das cores',
      isActive: highContrast,
      toggle: toggleHighContrast,
    },
    {
      icon: Type,
      title: 'Texto Grande',
      description: 'Aumenta o tamanho da fonte',
      isActive: largeFont,
      toggle: toggleLargeFont,
    },
    {
      icon: MousePointer,
      title: 'Cursor Grande',
      description: 'Aumenta o tamanho do cursor',
      isActive: largeCursor,
      toggle: toggleLargeCursor,
    },
    {
      icon: BookOpen,
      title: 'Modo Leitura',
      description: 'Simplifica o layout para leitura',
      isActive: readingMode,
      toggle: toggleReadingMode,
    },
  ];

  return (
    <>
      {/* Accessibility Button */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 bg-[#0C6E8E] hover:bg-[#0A5A73] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
          aria-label="Abrir ferramentas de acessibilidade"
        >
          <Accessibility className="w-6 h-6" />
        </button>
      </div>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full border border-gray-200 dark:border-slate-600 animate-slideUp">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-slate-600">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0C6E8E] to-[#1F5168] rounded-lg flex items-center justify-center">
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-[#133A4C] dark:text-white">
                  Acessibilidade
                </h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                aria-label="Fechar ferramentas de acessibilidade"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Options */}
            <div className="p-6 space-y-4">
              <p className="text-[#7C8A96] dark:text-gray-300 text-sm leading-relaxed mb-6">
                Ajuste estas configurações para melhorar sua experiência de navegação.
              </p>

              {accessibilityOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <div
                    key={option.title}
                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-700 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200 ${
                        option.isActive 
                          ? 'bg-gradient-to-br from-[#0C6E8E] to-[#1F5168] text-white' 
                          : 'bg-gray-200 dark:bg-slate-600 text-[#7C8A96] dark:text-gray-300'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#133A4C] dark:text-white text-sm">
                          {option.title}
                        </h3>
                        <p className="text-xs text-[#7C8A96] dark:text-gray-300">
                          {option.description}
                        </p>
                      </div>
                    </div>
                    
                    <button
                      onClick={option.toggle}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0C6E8E] focus:ring-offset-2 ${
                        option.isActive ? 'bg-[#0C6E8E]' : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                      aria-label={`${option.isActive ? 'Desativar' : 'Ativar'} ${option.title}`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                          option.isActive ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200 dark:border-slate-600">
              <p className="text-xs text-[#7C8A96] dark:text-gray-400 text-center">
                Suas preferências são salvas automaticamente
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AccessibilityToolbar;