import React, { useState } from 'react';

const FAQ_DATA = [
  {
    question: '¿Qué servicios ofrece G&G?',
    answer: 'Ofrecemos diseño estructural, ejecución de obras, interventoría, estudios de suelos e implementación integral del SG-SST.'
  },
  {
    question: '¿Cómo solicito una cotización?',
    answer: 'Puedes usar el botón "Solicitar Cotización" del menú superior o contactarnos directamente vía WhatsApp para atención prioritaria.'
  },
  {
    question: '¿Cumplen con la norma NSR-10 y Decreto 1072?',
    answer: 'Sí, todos nuestros diseños de ingeniería civil y sistemas de SG-SST cumplen estrictamente con la normativa colombiana vigente.'
  },
  {
    question: '¿Dónde prestan sus servicios?',
    answer: 'Operamos principalmente en Medellín, el Valle de Aburrá y el departamento de Antioquia, con capacidad de cobertura nacional según el proyecto.'
  }
];

export default function FloatingIA() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: '¡Hola! Soy el asistente virtual de G&G. Elige una pregunta frecuente o escribe tu consulta.' }
  ]);
  const [input, setInput] = useState('');

  const handleSelectFAQ = (faq) => {
    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: faq.question },
      { sender: 'bot', text: faq.answer }
    ]);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input;
    setInput('');

    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: userText },
      { sender: 'bot', text: 'Gracias por escribirnos. Un asesor revisará tu solicitud en breve. También puedes contactarnos por WhatsApp.' }
    ]);
  };

  return (
    <div className="fixed left-4 bottom-8 z-50 flex flex-col items-start">
      {open && (
        <div className="mb-2 w-80 sm:w-96 bg-white rounded-lg shadow-lg border border-surface-variant overflow-hidden flex flex-col h-[480px]">
          {/* Encabezado */}
          <div className="flex items-center justify-between bg-primary p-3 text-white">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-industrial-orange">smart_toy</span>
              <strong>Asistente IA</strong>
            </div>
            <button onClick={() => setOpen(false)} className="text-white opacity-90 hover:opacity-100 font-bold">
              ✕
            </button>
          </div>

          {/* Historial de Mensajes */}
          <div className="flex-1 p-3 text-sm text-on-surface overflow-y-auto flex flex-col gap-2 bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[85%] p-2.5 rounded-lg text-xs ${
                  msg.sender === 'user'
                    ? 'bg-primary text-white self-end rounded-br-none'
                    : 'bg-white text-gray-800 border border-surface-variant self-start shadow-xs rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            ))}

            {/* Opciones de Preguntas Frecuentes */}
            <div className="mt-2 flex flex-col gap-1.5">
              <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">Preguntas Frecuentes:</p>
              {FAQ_DATA.map((faq, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleSelectFAQ(faq)}
                  className="text-left bg-white border border-industrial-orange text-primary hover:bg-orange-50 font-medium p-2 rounded-md transition-colors text-xs shadow-xs"
                >
                  {faq.question}
                </button>
              ))}
            </div>
          </div>

          {/* Formulario de Entrada */}
          <form onSubmit={handleSend} className="p-3 border-t border-surface-variant bg-white">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe aquí..."
              className="w-full rounded-md border border-surface-variant p-2 text-xs focus:outline-none focus:border-primary"
            />
            <button type="submit" className="mt-2 w-full bg-industrial-orange text-white py-2 rounded-md text-xs font-semibold hover:opacity-95 transition-opacity">
              Enviar
            </button>
          </form>
        </div>
      )}

      {/* Botón Flotante */}
      <button
        onClick={() => setOpen((s) => !s)}
        className="bg-primary text-white p-3 rounded-full shadow-lg hover:scale-105 transition-transform flex items-center gap-2"
        aria-label="Abrir asistente IA"
      >
        <span className="material-symbols-outlined">smart_toy</span>
      </button>
    </div>
  );
}