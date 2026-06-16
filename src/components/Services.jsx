const services = [
  {
    title: 'Diseño Estructural',
    icon: 'architecture',
    variant: 'bg-white',
    border: 'industrial-border',
    textClass: 'text-primary',
  },
  {
    title: 'Ejecución de Obras',
    icon: 'construction',
    variant: 'bg-primary',
    textClass: 'text-white',
  },
  {
    title: 'Interventoría',
    icon: 'visibility',
    variant: 'bg-white',
    textClass: 'text-primary',
    borderClass: 'border border-outline-variant',
  },
  {
    title: 'Estudios de Suelos',
    icon: 'layers',
    variant: 'bg-surface-container-high',
    textClass: 'text-primary',
  },
];

const sstServices = [
  {
    title: 'Implementación SG-SST',
    icon: 'fact_check',
    variant: 'bg-white',
    textClass: 'text-primary',
    borderClass: 'border border-outline-variant',
  },
  {
    title: 'Auditorías de Riesgo',
    icon: 'assignment_late',
    variant: 'bg-white',
    textClass: 'text-primary',
    border: 'industrial-border',
  },
  {
    title: 'Seguridad en Alturas',
    icon: 'height',
    variant: 'bg-primary',
    textClass: 'text-white',
  },
  {
    title: 'Capacitación Técnica',
    icon: 'school',
    variant: 'bg-white',
    textClass: 'text-primary',
    borderClass: 'border border-outline-variant',
  },
];

function ServiceCard({ title, icon, variant, textClass, border, borderClass }) {
  return (
    <div className={`bento-card ${variant} p-md rounded-xl shadow-sm ${border || ''} ${borderClass || ''} flex flex-col justify-between h-48 group`}>
      <span className={`material-symbols-outlined ${textClass} group-hover:scale-110 transition-transform`} style={{ fontSize: 40 }}>
        {icon}
      </span>
      <div>
        <h4 className={`font-headline-sm text-headline-sm ${textClass}`}>{title}</h4>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="py-xl px-md max-w-container-max mx-auto" id="servicios">
      <div className="flex flex-col md:flex-row justify-between items-end mb-lg gap-sm">
        <div className="max-w-2xl">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-xs uppercase tracking-tighter">Servicios Integrales</h2>
          <p className="font-body-md text-body-md text-secondary">Combinamos la precisión de la ingeniería civil con la rigurosidad normativa del SG-SST.</p>
        </div>
        <div className="hidden md:block w-32 h-1 bg-industrial-orange" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-sm">
          <div className="col-span-full mb-xs">
            <h3 className="font-label-caps text-label-caps text-industrial-orange uppercase mb-xs tracking-widest">Bloque 01 — Ingeniería Civil</h3>
          </div>
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
        <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-sm">
          <div className="col-span-full mb-xs">
            <h3 className="font-label-caps text-label-caps text-industrial-orange uppercase mb-xs tracking-widest">Bloque 02 — SST Especializada</h3>
          </div>
          {sstServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
