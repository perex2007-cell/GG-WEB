import React from 'react';
import FloatingIA from './components/FloatingIA';
import FloatingWhatsapp from './components/FloatingWhatsapp';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold">G&G - Demo</h1>
        <p className="mt-2 text-sm text-gray-600">Página de prueba para los componentes flotantes.</p>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <p>Contenido de ejemplo. Abre el asistente IA o el botón de WhatsApp en la esquina.</p>
      </main>

      <FloatingIA />
      <FloatingWhatsapp />
    </div>
  );
}
