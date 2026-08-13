import React, { useState } from 'react';

export default function FloatingIA() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed left-4 bottom-8 z-50 flex flex-col items-start">
      {open && (
        <div className="mb-2 w-80 bg-white rounded-lg shadow-lg border border-surface-variant overflow-hidden">
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
          <div className="p-3 text-sm text-on-surface">
            <p>Hola — soy el asistente virtual. Escribe tu pregunta y te ayudaré.</p>
            <div className="mt-3">
              <label htmlFor="assistant-message" className="sr-only">mensaje del asistente IA</label>
              <input id="assistant-message" placeholder="Escribe aquí..." className="w-full rounded-md border p-2 text-sm" aria-label="Escribe tu mensaje al asistente IA" />
              <button type="button" className="mt-2 w-full bg-industrial-orange text-white py-2 rounded-md">Enviar</button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((s) => !s)}
        className="bg-primary text-white p-3 rounded-full shadow-lg hover:scale-105 transition-transform flex items-center gap-2"
        aria-label={open ? 'Cerrar asistente IA' : 'Abrir asistente IA'}
        type="button"
      >
        <span className="material-symbols-outlined">smart_toy</span>
      </button>
    </div>
  );
}
