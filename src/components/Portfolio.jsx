import React, { useState, useEffect, useRef } from 'react';

const projects = [
  {
    title: 'Viaducto Metropolitano',
    description: 'Cimentación profunda y diseño estructural con implementación total de seguridad en alturas.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCm3SJzPRAKA3ICXNxF2wJl0YrOyBXWqyuGvnobqfv9AIkhh4gvBzOPuvtIWfxS3M3dQGAPd7eM3he1Xg9NTAdZrML3NEPPG-pv84pLOX6nG3CF2A2rADHzo-Uqp-OEiS8bycVibaYkTRmEHuqzHdESMeQ5RSW1nyWAgpuHN8FPTDGuMlpwztb-2srM-gA_D4HPBLjQmECnIWarpRCHzfNr4oM-SWH5jc1cE8lGuWeyLb1TM0RLJIEPkOTj-UCZEifKSXruqfBaA0Q',
    category: 'CIVIL + SST',
    metric: '12.500+',
    metricLabel: 'Horas/Hombre sin incidentes',
  },
  {
    title: 'Centro Logístico Industrial',
    description: 'Auditoría de riesgos y supervisión técnica para planta de 5.000m².',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_X2Lk_GfLAGVTSZWLpDIDsfV9N7KXmWUzsu6y_ax7tD_ubQW9xjAoltol3c9lJU82qzvdfRX7Qeiqn_6-tPOjc3Hlvq3ToZWEGqMavS09pWrxge1k5BZgE-k6LhN2IDYQVqL_wNJJSC6hpnEuytTNIDDEwVLtTJuZ9lMuiwrW8Oqakwbbdx9BcHHCkGVsiGpmNLNcG2rD4nwGs2Ptk2oucs7rIQ81GO3h5Ks7yNDTv_MSb0z-b4J6gvv0Kb_yA1_rAdKZEId4wqo',
    category: 'INDUSTRIAL',
    metric: '45.000+',
    metricLabel: 'Horas/Hombre sin incidentes',
  },
  {
    title: 'Subestación Energía Norte',
    description: 'Implementación completa del Sistema de Gestión de Seguridad y Salud (ISO 45001).',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANnAm65X5dpBo0xx87Fdu5xzslV8i2AINR2HWh3m8y7UN379_1OxrMP5jdOIdi_-KT4nPKLyIxobKSWTLibzKzrsCUyMZKZD-V_dL7ajqAI-lwk3s0m7cpZCHYuwH_UbJDppVgzRAPZAWl_Ai40tNCNEmcciPPwkUjg4gPYm4wy6Or4XEhUyJb0peabC80xpNBCxkHIJULt5nQgilLOkmE6QrpCI5WGeAwHiL5FENrxHM3wk-vTxEwKQ3bWCUcXvg9Pzgm_50mGKE',
    category: 'CONSULTORÍA SST',
    metric: '18.200+',
    metricLabel: 'Horas/Hombre sin incidentes',
  },
];

function ProjectCard({ title, description, image, category, metric, metricLabel }) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md">
      <div className="h-64 overflow-hidden relative">
        <img
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          src={image}
        />
        <div className="absolute top-sm right-sm bg-primary text-white px-sm py-xs rounded font-label-caps text-label-caps">
          {category}
        </div>
      </div>
      <div className="p-md">
        <h4 className="font-headline-sm text-headline-sm text-primary mb-xs">{title}</h4>
        <p className="font-body-sm text-body-sm text-secondary mb-md">{description}</p>
        <div className="flex items-center justify-between pt-md border-t border-surface-variant">
          <div className="flex flex-col">
            <span className="text-industrial-orange font-bold font-body-md text-body-md">{metric}</span>
            <span className="text-[10px] uppercase text-secondary font-bold">{metricLabel}</span>
          </div>
          <span className="material-symbols-outlined text-primary">arrow_outward</span>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [index, setIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(typeof window !== 'undefined' && window.innerWidth >= 768 ? 3 : 1);
  const trackRef = useRef(null);

  useEffect(() => {
    function onResize() {
      setSlidesPerView(window.innerWidth >= 768 ? 3 : 1);
      setIndex(0);
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const groups = Math.max(1, Math.ceil(projects.length / slidesPerView));

  function prev() {
    setIndex((i) => Math.max(0, i - 1));
  }

  function next() {
    setIndex((i) => Math.min(groups - 1, i + 1));
  }

  return (
    <section className="py-xl bg-surface" id="portfolio">
      <div className="max-w-container-max mx-auto px-md">
        <div className="text-center mb-xl">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-xs">Proyectos Emblemáticos</h2>
          <p className="font-body-md text-body-md text-secondary max-w-2xl mx-auto">Nuestra trayectoria se mide en estructuras firmes y vidas protegidas.</p>
        </div>

        <div className="relative">
          <button
            aria-label="Anterior"
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 p-2 rounded-full shadow-md hover:bg-white"
          >
            ‹
          </button>

          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.title} className="flex-shrink-0 w-full md:w-1/3 px-2">
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>

          <button
            aria-label="Siguiente"
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 p-2 rounded-full shadow-md hover:bg-white"
          >
            ›
          </button>

          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: groups }).map((_, g) => (
              <button
                key={g}
                onClick={() => setIndex(g)}
                className={`w-3 h-3 rounded-full ${g === index ? 'bg-primary' : 'bg-gray-300'}`}
                aria-label={`Ir al grupo ${g + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
