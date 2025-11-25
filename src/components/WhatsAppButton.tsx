import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    const message = encodeURIComponent(
      'Olá! Vim através do site da Experience Administração. Gostaria de mais informações sobre os serviços de gestão condominial.'
    );
    window.open(`https://wa.me/${CONTACT_INFO.WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute bottom-16 right-0 bg-white dark:bg-slate-800 text-[#133A4C] dark:text-white p-3 rounded-xl shadow-xl border border-gray-200 dark:border-slate-600 min-w-[200px] animate-fadeInUp">
              <button
                onClick={() => setShowTooltip(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <X className="w-4 h-4" />
              </button>
              <p className="text-sm font-medium mb-1">Precisa de ajuda?</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Clique aqui para falar conosco pelo WhatsApp!
              </p>
              <div className="absolute bottom-0 right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white dark:border-t-slate-800 transform translate-y-full"></div>
            </div>
          )}

          {/* Button */}
          <button
            onClick={handleClick}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="group w-16 h-16 bg-[#25D366] hover:bg-[#20BD5A] rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center animate-bounce-slow"
            aria-label="Falar no WhatsApp"
          >
            <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-200" />
          </button>

          {/* Pulse Animation */}
          <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping"></div>
        </div>
      </div>
    </>
  );
};

export default WhatsAppButton;