import { useState } from 'react';
import emailjs from '@emailjs/browser';

const initialForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

export default function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, service, message } = formData;

    if (!name.trim() || !email.trim() || !service || !message.trim()) {
      setStatus({
        type: 'error',
        message: 'Completa nombre, correo, servicio y mensaje para enviar tu solicitud.',
      });
      return;
    }

    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    if (!publicKey || !serviceId || !templateId) {
      setStatus({
        type: 'error',
        message: 'Falta la configuración de EmailJS. Agrega VITE_EMAILJS_PUBLIC_KEY, VITE_EMAILJS_SERVICE_ID y VITE_EMAILJS_TEMPLATE_ID en tu archivo .env.',
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          company: formData.company || 'Sin empresa',
          email,
          phone: formData.phone || 'No especificado',
          service,
          message,
        },
        publicKey,
      );

      setStatus({
        type: 'success',
        message: 'Tu solicitud se envió correctamente. Nuestro equipo te contactará pronto.',
      });
      setFormData(initialForm);
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus({
        type: 'error',
        message: 'No pudimos enviar el mensaje. Intenta de nuevo o escríbenos directamente a proyectos@gng.co.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-xl px-md" id="contacto">
      <div className="max-w-container-max mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-surface-variant">
          <div className="md:w-1/3 bg-primary p-lg text-white">
            <h2 className="font-headline-lg text-headline-lg mb-md">Inicie su proyecto con expertos</h2>
            <p className="font-body-md text-body-md text-white/70 mb-lg">Estamos listos para brindarle la solidez técnica y seguridad que su infraestructura requiere.</p>
            <div className="space-y-sm">
              <div className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-industrial-orange">call</span>
                <span className="font-body-sm text-body-sm">+57 (601) 555-0123</span>
              </div>
              <div className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-industrial-orange">mail</span>
                <span className="font-body-sm text-body-sm">proyectos@gng.co</span>
              </div>
              <div className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-industrial-orange">location_on</span>
                <span className="font-body-sm text-body-sm">Bogotá D.C., Colombia</span>
              </div>
            </div>
            <div className="mt-xl">
              <span className="font-label-caps text-label-caps uppercase text-industrial-orange">SST Compliance Certified</span>
              <div className="flex gap-xs mt-sm opacity-50" aria-hidden="true">
                <div className="w-8 h-8 rounded bg-white" />
                <div className="w-8 h-8 rounded bg-white" />
                <div className="w-8 h-8 rounded bg-white" />
              </div>
            </div>
          </div>
          <div className="md:w-2/3 p-lg">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <div>
                <label htmlFor="contact-name" className="block font-label-caps text-label-caps text-primary mb-xs">Nombre</label>
                <input
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border-2 border-outline-variant focus:border-primary-container focus:ring-0 transition-colors p-sm"
                  placeholder="Su nombre completo"
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="contact-company" className="block font-label-caps text-label-caps text-primary mb-xs">Empresa</label>
                <input
                  id="contact-company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full rounded-lg border-2 border-outline-variant focus:border-primary-container focus:ring-0 transition-colors p-sm"
                  placeholder="Nombre de la compañía"
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block font-label-caps text-label-caps text-primary mb-xs">Correo</label>
                <input
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border-2 border-outline-variant focus:border-primary-container focus:ring-0 transition-colors p-sm"
                  placeholder="email@empresa.com"
                  type="email"
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="block font-label-caps text-label-caps text-primary mb-xs">Teléfono</label>
                <input
                  id="contact-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border-2 border-outline-variant focus:border-primary-container focus:ring-0 transition-colors p-sm"
                  placeholder="+57 300 000 0000"
                  type="tel"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="contact-service" className="block font-label-caps text-label-caps text-primary mb-xs">Tipo de Servicio</label>
                <select
                  id="contact-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-lg border-2 border-outline-variant focus:border-primary-container focus:ring-0 transition-colors p-sm"
                >
                  <option value="">Seleccione un servicio</option>
                  <option value="Obra Civil">Obra Civil</option>
                  <option value="Consultoría SST">Consultoría SST</option>
                  <option value="Interventoría Técnica">Interventoría Técnica</option>
                  <option value="Capacitación Integral">Capacitación Integral</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="contact-message" className="block font-label-caps text-label-caps text-primary mb-xs">Mensaje</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border-2 border-outline-variant focus:border-primary-container focus:ring-0 transition-colors p-sm"
                  placeholder="Cuéntenos sobre su proyecto o necesidad técnica..."
                  rows={4}
                />
              </div>
              <div className="md:col-span-2">
                <button
                  className="w-full bg-primary text-white font-headline-sm text-headline-sm py-sm rounded-lg hover:bg-primary-container transition-colors flex items-center justify-center gap-xs disabled:opacity-70"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
                  <span className="material-symbols-outlined">send</span>
                </button>
                {status.message && (
                  <p
                    className={`mt-3 text-sm ${status.type === 'error' ? 'text-red-600' : 'text-green-700'}`}
                    aria-live="polite"
                  >
                    {status.message}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
