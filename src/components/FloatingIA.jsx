import React, { useEffect, useState } from 'react';

const fallbackResponses = [
  'Para resolver dudas de SST, revisa primero el tipo de actividad, los riesgos asociados y los EPP mínimos recomendados. Si quieres, puedo orientarte sobre trabajo en alturas, riesgo eléctrico o excavaciones.',
  'La normativa en obra exige evaluación de riesgos, instrucción previa y uso obligatorio de EPE. Si compartes tu caso específico, te puedo guiar en la mejor práctica.',
  'Para trabajos en altura, el principal control es la línea de vida y la formación del personal. También es clave revisar el plan de trabajo y la inspección general del área.',
];

const getFallbackAnswer = () => fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];

const getLocalHistory = () => {
  try {
    return JSON.parse(localStorage.getItem('gg-chat-history') || '[]');
  } catch {
    return [];
  }
};

export default function FloatingIA() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hola — soy el asistente virtual de G&G. ¿Sobre qué actividad o riesgo en obra quieres consultar?' },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [showIntentButtons, setShowIntentButtons] = useState(true);

  useEffect(() => {
    if (!open) return;
    const saved = getLocalHistory();
    if (saved.length > 0) {
      setMessages(saved.slice(-4));
      setShowIntentButtons(false);
    } else {
      setShowIntentButtons(true);
    }
  }, [open]);

  const saveHistory = (nextMessages) => {
    try {
      localStorage.setItem('gg-chat-history', JSON.stringify(nextMessages.slice(-20)));
    } catch (error) {
      console.warn('No se pudo guardar el historial local del chat:', error);
    }
  };

  const handleIntentButton = (intent) => {
    if (intent === 'quote') {
      setOpen(false);
      const target = document.getElementById('contacto');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (intent === 'tracking') {
      setOpen(false);
      window.location.hash = '#consultar-proyecto';
    } else if (intent === 'question') {
      setShowIntentButtons(false);
    }
  };

  const askHuman = () => {
    window.open('https://wa.me/573001234567?text=Necesito%20hablar%20con%20un%20asesor%20de%20G%26G%20Construcciones', '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage = { type: 'user', text: trimmed };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput('');
    setIsLoading(true);

    try {
      const apiUrl = import.meta.env.VITE_AI_API_URL;

      if (apiUrl) {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: trimmed,
            context: 'Asistente técnico de SST para construcción y seguridad en obra.',
          }),
        });

        if (!response.ok) {
          throw new Error('AI API failed');
        }

        const data = await response.json();
        const aiText = data?.reply || data?.message || getFallbackAnswer();
        const botMessage = { type: 'bot', text: aiText };
        const updated = [...nextMessages, botMessage];
        setMessages(updated);
        saveHistory(updated);
        return;
      }

      const botMessage = { type: 'bot', text: getFallbackAnswer() };
      const updated = [...nextMessages, botMessage];
      setMessages(updated);
      saveHistory(updated);
    } catch (error) {
      console.error('Chatbot AI error:', error);
      const botMessage = {
        type: 'bot',
        text: 'La respuesta de IA no está disponible temporalmente. Mantenemos la guía general de seguridad y puedes hablar con un asesor humano si necesitas asistencia inmediata.',
      };
      const updated = [...nextMessages, botMessage];
      setMessages(updated);
      saveHistory(updated);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed left-4 bottom-8 z-50 flex flex-col items-start">
      {open && (
        <div className="mb-2 w-80 overflow-hidden rounded-lg border border-surface-variant bg-white shadow-lg">
          <div className="flex items-center justify-between bg-primary p-2 text-white">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">smart_toy</span>
              <strong>Asistente IA</strong>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white opacity-90 hover:opacity-100"
              aria-label="Cerrar asistente IA"
              type="button"
            >
              ✕
            </button>
          </div>

          <div className="max-h-96 space-y-2 overflow-y-auto bg-surface p-3 text-sm text-on-surface">
            {messages.map((message, index) => (
              <div
                key={`${message.type}-${index}`}
                className={`rounded-md p-2 ${
                  message.type === 'bot' ? 'bg-white text-on-surface' : 'bg-primary text-on-primary'
                }`}
              >
                {message.text}
              </div>
            ))}

            {/* Botones de intención inicial */}
            {showIntentButtons && messages.length === 1 && (
              <div className="mt-3 space-y-2">
                <button
                  type="button"
                  onClick={() => handleIntentButton('quote')}
                  className="w-full rounded-md bg-industrial-orange px-2 py-2 text-sm font-bold text-white hover:bg-industrial-orange/90 transition-colors"
                >
                  Quiero cotizar
                </button>
                <button
                  type="button"
                  onClick={() => handleIntentButton('tracking')}
                  className="w-full rounded-md bg-primary px-2 py-2 text-sm font-bold text-white hover:bg-primary-container transition-colors"
                >
                  Ver avance de mi obra
                </button>
                <button
                  type="button"
                  onClick={() => handleIntentButton('question')}
                  className="w-full rounded-md border border-primary bg-transparent px-2 py-2 text-sm font-bold text-primary hover:bg-primary/5 transition-colors"
                >
                  Tengo una duda técnica
                </button>
              </div>
            )}

            {isLoading && <div className="rounded-md bg-white p-2 text-on-surface">Pensando...</div>}
          </div>

          {!showIntentButtons && (
            <form onSubmit={handleSubmit} className="border-t border-surface-variant bg-white p-3">
              <label htmlFor="assistant-message" className="sr-only">
                mensaje del asistente IA
              </label>
              <input
                id="assistant-message"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Escribe aquí..."
                className="w-full rounded-md border border-surface-variant p-2 text-sm"
                aria-label="Escribe tu mensaje al asistente IA"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="mt-2 w-full rounded-md bg-industrial-orange py-2 text-white disabled:opacity-60"
              >
                {isLoading ? 'Enviando...' : 'Enviar'}
              </button>
              <button
                type="button"
                onClick={askHuman}
                className="mt-2 w-full rounded-md border border-primary bg-transparent py-2 text-primary"
              >
                Hablar con un asesor humano
              </button>
            </form>
          )}
        </div>
      )}

      <button
        onClick={() => setOpen((s) => !s)}
        className="flex items-center gap-2 rounded-full bg-primary p-3 text-white shadow-lg transition-transform hover:scale-105"
        aria-label={open ? 'Cerrar asistente IA' : 'Abrir asistente IA'}
        type="button"
      >
        <span className="material-symbols-outlined">smart_toy</span>
      </button>
    </div>
  );
}
