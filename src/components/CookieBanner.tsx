import React, { useState, useEffect } from 'react';
import { Cookie, X, Shield, Settings } from 'lucide-react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
    functional: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setIsVisible(false);
    setShowPreferences(false);
  };

  const handleRejectAll = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setIsVisible(false);
  };

  const handlePreferenceChange = (type: keyof typeof preferences) => {
    if (type === 'necessary') return; // Can't disable necessary cookies
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full border border-gray-200 dark:border-slate-600 animate-slideUp">
        {!showPreferences ? (
          // Main Cookie Banner
          <div className="p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0C6E8E] to-[#1F5168] rounded-xl flex items-center justify-center flex-shrink-0">
                <Cookie className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#133A4C] dark:text-white mb-2">
                  Utilizamos cookies para melhorar sua experiência
                </h3>
                <p className="text-[#7C8A96] dark:text-gray-300 leading-relaxed">
                  Este site utiliza cookies para personalizar conteúdo, analisar tráfego e melhorar sua experiência. 
                  Ao continuar navegando, você concorda com nossa{' '}
                  <a href="#" className="text-[#0C6E8E] hover:underline">
                    Política de Privacidade
                  </a>{' '}
                  e uso de cookies.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => setShowPreferences(true)}
                className="flex items-center space-x-2 text-[#7C8A96] hover:text-[#1F5168] dark:hover:text-[#0C6E8E] transition-colors duration-200"
              >
                <Settings className="w-4 h-4" />
                <span>Personalizar</span>
              </button>

              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
                <button
                  onClick={handleRejectAll}
                  className="px-6 py-3 border border-gray-300 dark:border-slate-600 text-[#7C8A96] dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-xl transition-colors duration-200 font-medium"
                >
                  Rejeitar
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-3 bg-gradient-to-r from-[#0C6E8E] to-[#1F5168] hover:from-[#0A5A73] hover:to-[#1A4559] text-white rounded-xl transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
                >
                  Aceitar Todos
                </button>
              </div>
            </div>
          </div>
        ) : (
          // Cookie Preferences Panel
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0C6E8E] to-[#1F5168] rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#133A4C] dark:text-white">
                  Preferências de Cookies
                </h3>
              </div>
              <button
                onClick={() => setShowPreferences(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6 mb-8">
              {/* Necessary Cookies */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold text-[#133A4C] dark:text-white mb-1">
                    Cookies Necessários
                  </h4>
                  <p className="text-sm text-[#7C8A96] dark:text-gray-300">
                    Essenciais para o funcionamento básico do site. Não podem ser desabilitados.
                  </p>
                </div>
                <div className="ml-4">
                  <input
                    type="checkbox"
                    checked={preferences.necessary}
                    disabled
                    className="w-5 h-5 text-[#0C6E8E] bg-gray-100 rounded focus:ring-2 focus:ring-[#0C6E8E]"
                  />
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold text-[#133A4C] dark:text-white mb-1">
                    Cookies de Análise
                  </h4>
                  <p className="text-sm text-[#7C8A96] dark:text-gray-300">
                    Ajudam-nos a entender como os visitantes interagem com o site.
                  </p>
                </div>
                <div className="ml-4">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={() => handlePreferenceChange('analytics')}
                    className="w-5 h-5 text-[#0C6E8E] bg-gray-100 rounded focus:ring-2 focus:ring-[#0C6E8E] cursor-pointer"
                  />
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold text-[#133A4C] dark:text-white mb-1">
                    Cookies de Marketing
                  </h4>
                  <p className="text-sm text-[#7C8A96] dark:text-gray-300">
                    Utilizados para personalizar anúncios e medir sua eficácia.
                  </p>
                </div>
                <div className="ml-4">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={() => handlePreferenceChange('marketing')}
                    className="w-5 h-5 text-[#0C6E8E] bg-gray-100 rounded focus:ring-2 focus:ring-[#0C6E8E] cursor-pointer"
                  />
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold text-[#133A4C] dark:text-white mb-1">
                    Cookies Funcionais
                  </h4>
                  <p className="text-sm text-[#7C8A96] dark:text-gray-300">
                    Permitem funcionalidades avançadas e personalização do site.
                  </p>
                </div>
                <div className="ml-4">
                  <input
                    type="checkbox"
                    checked={preferences.functional}
                    onChange={() => handlePreferenceChange('functional')}
                    className="w-5 h-5 text-[#0C6E8E] bg-gray-100 rounded focus:ring-2 focus:ring-[#0C6E8E] cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              <button
                onClick={() => setShowPreferences(false)}
                className="flex-1 px-6 py-3 border border-gray-300 dark:border-slate-600 text-[#7C8A96] dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-xl transition-colors duration-200 font-medium"
              >
                Cancelar
              </button>
              <button
                onClick={handleAcceptSelected}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-[#0C6E8E] to-[#1F5168] hover:from-[#0A5A73] hover:to-[#1A4559] text-white rounded-xl transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
              >
                Salvar Preferências
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieBanner;