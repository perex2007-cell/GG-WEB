export default function Contact() {
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
              <div className="flex gap-xs mt-sm opacity-50">
                <div className="w-8 h-8 rounded bg-white" />
                <div className="w-8 h-8 rounded bg-white" />
                <div className="w-8 h-8 rounded bg-white" />
              </div>
            </div>
          </div>
          <div className="md:w-2/3 p-lg">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <div>
                <label className="block font-label-caps text-label-caps text-primary mb-xs">Nombre</label>
                <input className="w-full rounded-lg border-2 border-outline-variant focus:border-primary-container focus:ring-0 transition-colors p-sm" placeholder="Su nombre completo" type="text" />
              </div>
              <div>
                <label className="block font-label-caps text-label-caps text-primary mb-xs">Empresa</label>
                <input className="w-full rounded-lg border-2 border-outline-variant focus:border-primary-container focus:ring-0 transition-colors p-sm" placeholder="Nombre de la compañía" type="text" />
              </div>
              <div>
                <label className="block font-label-caps text-label-caps text-primary mb-xs">Correo</label>
                <input className="w-full rounded-lg border-2 border-outline-variant focus:border-primary-container focus:ring-0 transition-colors p-sm" placeholder="email@empresa.com" type="email" />
              </div>
              <div>
                <label className="block font-label-caps text-label-caps text-primary mb-xs">Teléfono</label>
                <input className="w-full rounded-lg border-2 border-outline-variant focus:border-primary-container focus:ring-0 transition-colors p-sm" placeholder="+57 300 000 0000" type="tel" />
              </div>
              <div className="md:col-span-2">
                <label className="block font-label-caps text-label-caps text-primary mb-xs">Tipo de Servicio</label>
                <select className="w-full rounded-lg border-2 border-outline-variant focus:border-primary-container focus:ring-0 transition-colors p-sm">
                  <option>Seleccione un servicio</option>
                  <option>Obra Civil</option>
                  <option>Consultoría SST</option>
                  <option>Interventoría Técnica</option>
                  <option>Capacitación Integral</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block font-label-caps text-label-caps text-primary mb-xs">Mensaje</label>
                <textarea className="w-full rounded-lg border-2 border-outline-variant focus:border-primary-container focus:ring-0 transition-colors p-sm" placeholder="Cuéntenos sobre su proyecto o necesidad técnica..." rows={4} />
              </div>
              <div className="md:col-span-2">
                <button className="w-full bg-primary text-white font-headline-sm text-headline-sm py-sm rounded-lg hover:bg-primary-container transition-colors flex items-center justify-center gap-xs" type="submit">
                  Enviar Solicitud
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
