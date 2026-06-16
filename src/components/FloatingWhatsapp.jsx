import React from 'react';

export default function FloatingWhatsapp() {
  return (
    <div className="fixed right-4 bottom-8 z-50">
      <a
        href="https://wa.me/573000000000?text=Hola%20ConstructPro"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-105 transition-transform flex items-center gap-2"
        aria-label="Enviar mensaje por WhatsApp"
      >
        <span className="text-xl">📲</span>
        <span className="hidden sm:inline font-body-sm">WhatsApp</span>
      </a>
    </div>
  );
}
