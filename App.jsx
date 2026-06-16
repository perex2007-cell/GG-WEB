import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleAnchorClick = (event) => {
      event.preventDefault();
      const target = document.querySelector(event.currentTarget.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    };

    anchors.forEach((anchor) => anchor.addEventListener('click', handleAnchorClick));

    const header = document.querySelector('header');
    const handleScroll = () => {
      if (!header) return;
      if (window.scrollY > 100) {
        header.classList.add('bg-primary/95', 'backdrop-blur-md');
      } else {
        header.classList.remove('bg-primary/95', 'backdrop-blur-md');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      anchors.forEach((anchor) => anchor.removeEventListener('click', handleAnchorClick));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-background text-on-background selection:bg-industrial-orange selection:text-white">
      <header className="fixed top-0 w-full z-50 bg-primary shadow-md shadow-primary/10">
        <div className="flex items-center justify-between px-md py-sm max-w-container-max mx-auto text-on-primary">
          <div className="flex items-center gap-xs">
            <span className="material-symbols-outlined text-industrial-orange" style={{ fontSize: 32 }}>foundation</span>
            <span className="font-headline-md text-headline-md font-bold tracking-tight">G&G</span>
          </div>
          <div className="hidden md:flex items-center gap-md">
            <a className="text-tertiary-fixed font-bold border-b-2 border-tertiary-fixed font-body-sm text-body-sm" href="#">Home</a>
            <a className="text-on-primary opacity-80 hover:opacity-100 font-body-sm text-body-sm" href="#servicios">Servicios</a>
            <a className="text-on-primary opacity-80 hover:opacity-100 font-body-sm text-body-sm" href="#portfolio">Portfolio</a>
            <a className="bg-industrial-orange text-white px-md py-xs rounded-lg hover:scale-95 transition-transform font-label-caps text-label-caps" href="#contacto">Get Quote</a>
          </div>
          <button className="md:hidden p-xs active:scale-95 transition-transform" type="button">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>

      <main className="pt-[64px]">
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
            <img
              alt="G&G Hero"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYo3ctFUQAlUhgg7YJpNEy66IXvIGfWcCNIGBMO22dZ-QJ8HR2bCfU_SfEI3i64rGFwtlW39OCJUDk8E6Ucja5kvryaO7eb_YB6sp-YqRILE0Q7heeAhGW_xh82XGGGUDdGwS2vVGFqouJl4xrSWYeQyR_cVuaJ_jTUih0bruzEctWUI8-HrQKuxazWsoIRaB4RWbmWPvSzCcCBWnCMwMd7-jdQbY7ZltcRFreazsbNI-y5cXcO_em4LbC4IZEEVZT6hC9oTlzFpk"
            />
            <div className="absolute inset-0 gradient-overlay" />
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-md py-xl">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-xs bg-industrial-orange/10 border border-industrial-orange/30 px-sm py-xs rounded-full mb-md">
                <span className="w-2 h-2 rounded-full bg-industrial-orange animate-pulse" />
                <span className="text-industrial-orange font-label-caps text-label-caps uppercase tracking-widest">Líderes en Seguridad &amp; Construcción</span>
              </div>
              <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-white mb-md leading-tight">
                Construimos infraestructura sólida bajo los más altos estándares de seguridad
              </h1>
              <p className="font-body-lg text-body-lg text-white/80 mb-lg max-w-2xl">
                Solidez técnica, rigurosidad y compromiso innegociable con la prevención de riesgos y el cumplimiento legal.
              </p>
              <div className="flex flex-col sm:flex-row gap-sm">
                <a className="bg-industrial-orange text-white px-lg py-sm rounded-lg font-headline-sm text-headline-sm text-center hover:bg-industrial-orange/90 transition-all flex items-center justify-center gap-xs" href="#servicios">
                  Nuestros Servicios
                  <span className="material-symbols-outlined">arrow_forward</span>
                </a>
                <a className="bg-white/10 backdrop-blur-md border-2 border-white/20 text-white px-lg py-sm rounded-lg font-headline-sm text-headline-sm text-center hover:bg-white/20 transition-all" href="#contacto">
                  Hablar con un Asesor
                </a>
              </div>
            </div>
          </div>
        </section>

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
              <div className="bento-card bg-white p-md rounded-xl shadow-sm industrial-border flex flex-col justify-between h-48 group">
                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform" style={{ fontSize: 40 }}>architecture</span>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-primary">Diseño Estructural</h4>
                </div>
              </div>
              <div className="bento-card bg-primary p-md rounded-xl shadow-sm flex flex-col justify-between h-48 group">
                <span className="material-symbols-outlined text-industrial-orange group-hover:scale-110 transition-transform" style={{ fontSize: 40 }}>construction</span>
                <div className="text-white">
                  <h4 className="font-headline-sm text-headline-sm">Ejecución de Obras</h4>
                </div>
              </div>
              <div className="bento-card bg-white p-md rounded-xl shadow-sm border border-outline-variant flex flex-col justify-between h-48 group">
                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform" style={{ fontSize: 40 }}>visibility</span>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-primary">Interventoría</h4>
                </div>
              </div>
              <div className="bento-card bg-surface-container-high p-md rounded-xl shadow-sm flex flex-col justify-between h-48 group">
                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform" style={{ fontSize: 40 }}>layers</span>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-primary">Estudios de Suelos</h4>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-sm">
              <div className="col-span-full mb-xs">
                <h3 className="font-label-caps text-label-caps text-industrial-orange uppercase mb-xs tracking-widest">Bloque 02 — SST Especializada</h3>
              </div>
              <div className="bento-card bg-white p-md rounded-xl shadow-sm border border-outline-variant flex flex-col justify-between h-48 group">
                <span className="material-symbols-outlined text-industrial-orange group-hover:scale-110 transition-transform" style={{ fontSize: 40 }}>fact_check</span>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-primary">Implementación SG-SST</h4>
                </div>
              </div>
              <div className="bento-card bg-white p-md rounded-xl shadow-sm industrial-border flex flex-col justify-between h-48 group">
                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform" style={{ fontSize: 40 }}>assignment_late</span>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-primary">Auditorías de Riesgo</h4>
                </div>
              </div>
              <div className="bento-card bg-primary p-md rounded-xl shadow-sm flex flex-col justify-between h-48 group">
                <span className="material-symbols-outlined text-industrial-orange group-hover:scale-110 transition-transform" style={{ fontSize: 40 }}>height</span>
                <div className="text-white">
                  <h4 className="font-headline-sm text-headline-sm">Seguridad en Alturas</h4>
                </div>
              </div>
              <div className="bento-card bg-white p-md rounded-xl shadow-sm border border-outline-variant flex flex-col justify-between h-48 group">
                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform" style={{ fontSize: 40 }}>school</span>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-primary">Capacitación Técnica</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary-container text-white py-xl">
          <div className="max-w-container-max mx-auto px-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
              <div>
                <h2 className="font-headline-lg text-headline-lg mb-md text-on-primary-container">Nuestro Compromiso SST</h2>
                <p className="font-body-lg text-body-lg text-on-primary-container/80 mb-lg">
                  En G&G, la seguridad no es un requisito, es nuestro valor fundamental. Protegemos el capital más valioso de su empresa: las personas.
                </p>
                <div className="space-y-md">
                  <div className="flex items-start gap-md">
                    <div className="bg-industrial-orange p-xs rounded-lg shrink-0">
                      <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>gavel</span>
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm text-white">Cumplimiento Legal y Normativo</h4>
                      <p className="font-body-sm text-body-sm text-white/70">Aseguramos total adherencia a las regulaciones nacionales e internacionales.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-md">
                    <div className="bg-industrial-orange p-xs rounded-lg shrink-0">
                      <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm text-white">Política de Cero Accidentes</h4>
                      <p className="font-body-sm text-body-sm text-white/70">Metodologías predictivas para eliminar incidentes en el lugar de trabajo.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-md">
                    <div className="bg-industrial-orange p-xs rounded-lg shrink-0">
                      <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm text-white">Cultura de Prevención y Gestión de Riesgos</h4>
                      <p className="font-body-sm text-body-sm text-white/70">Fomentamos la autoconciencia y el liderazgo en seguridad a todo nivel.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-industrial-orange/10 rounded-3xl overflow-hidden shadow-2xl relative">
                  <img
                    alt="SST Excellence"
                    className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 transition-all duration-700"
                    data-alt="A professional heavy equipment operator at a high-tech construction site wearing bright orange safety gear and a white hard hat. The scene is illuminated by the golden hour sunlight, highlighting dust particles in the air for a dramatic, industrial atmosphere. The photograph captures the precision and focus required in modern engineering, with architectural structures in the background under a clear sky. The overall style is professional, high-contrast, and emphasizes corporate reliability."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxuQFodpHP9uLwpuNt-ekzDpEJ5Tl1mmA5X_JA1KIrxa9JlUtLMWFxl53_R5ZWRHJHZG259EKh31orE2lFYvkS6NVKPkzmsu7HyvZvH3N3x3PHlBHbybuWTt_b71hhhsFdkosINXi6c3kaLIfglx98clwHwM9UJc_TXop_8eXXpdEDQ2Xm6v-rS_aHjaiNmwWsUsf4imCVIoGSA5ljQBlnNoLgvQm0qTNmIHLLwfuuZUQSyJgrN5Hn8wdefy1trZDzroZZ0UUBcxc"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-transparent to-transparent" />
                  <div className="absolute bottom-md left-md right-md bg-white/10 backdrop-blur-xl p-md rounded-2xl border border-white/20">
                    <div className="text-industrial-orange font-headline-xl text-headline-xl leading-none">0%</div>
                    <div className="font-label-caps text-label-caps uppercase text-white tracking-widest mt-xs">Índice de Siniestralidad en Proyectos 2023</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-xl bg-surface" id="portfolio">
          <div className="max-w-container-max mx-auto px-md">
            <div className="text-center mb-xl">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-xs">Proyectos Emblemáticos</h2>
              <p className="font-body-md text-body-md text-secondary max-w-2xl mx-auto">Nuestra trayectoria se mide en estructuras firmes y vidas protegidas.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
              <div className="group bg-white rounded-xl overflow-hidden shadow-md">
                <div className="h-64 overflow-hidden relative">
                  <img
                    alt="Proyecto Vial"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    data-alt="Close up of a massive steel bridge structure undergoing engineering inspection during sunset. The golden light reflects off the metallic surfaces and safety cables. In the distance, civil engineers in white helmets and reflective vests are seen working. The image conveys strength, scale, and meticulous technical oversight in a modern industrial setting with deep navy blue and orange tones."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCm3SJzPRAKA3ICXNxF2wJl0YrOyBXWqyuGvnobqfv9AIkhh4gvBzOPuvtIWfxS3M3dQGAPd7eM3he1Xg9NTAdZrML3NEPPG-pv84pLOX6nG3CF2A2rADHzo-Uqp-OEiS8bycVibaYkTRmEHuqzHdESMeQ5RSW1nyWAgpuHN8FPTDGuMlpwztb-2srM-gA_D4HPBLjQmECnIWarpRCHzfNr4oM-SWH5jc1cE8lGuWeyLb1TM0RLJIEPkOTj-UCZEifKSXruqfBaA0Q"
                  />
                  <div className="absolute top-sm right-sm bg-primary text-white px-sm py-xs rounded font-label-caps text-label-caps">
                    CIVIL + SST
                  </div>
                </div>
                <div className="p-md">
                  <h4 className="font-headline-sm text-headline-sm text-primary mb-xs">Viaducto Metropolitano</h4>
                  <p className="font-body-sm text-body-sm text-secondary mb-md">Cimentación profunda y diseño estructural con implementación total de seguridad en alturas.</p>
                  <div className="flex items-center justify-between pt-md border-t border-surface-variant">
                    <div className="flex flex-col">
                      <span className="text-industrial-orange font-bold font-body-md text-body-md">12.500+</span>
                      <span className="text-[10px] uppercase text-secondary font-bold">Horas/Hombre sin incidentes</span>
                    </div>
                    <span className="material-symbols-outlined text-primary">arrow_outward</span>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-xl overflow-hidden shadow-md">
                <div className="h-64 overflow-hidden relative">
                  <img
                    alt="Planta Industrial"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    data-alt="A modern industrial warehouse construction site showing the skeletal structure of steel beams and concrete flooring. The workspace is pristine, showcasing high organizational safety standards with clearly marked walkways and protective barriers. Bright natural light fills the space, highlighting the precision of the construction. The visual aesthetic is clean, corporate, and focuses on architectural integrity and workplace safety."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_X2Lk_GfLAGVTSZWLpDIDsfV9N7KXmWUzsu6y_ax7tD_ubQW9xjAoltol3c9lJU82qzvdfRX7Qeiqn_6-tPOjc3Hlvq3ToZWEGqMavS09pWrxge1k5BZgE-k6LhN2IDYQVqL_wNJJSC6hpnEuytTNIDDEwVLtTJuZ9lMuiwrW8Oqakwbbdx9BcHHCkGVsiGpmNLNcG2rD4nwGs2Ptk2oucs7rIQ81GO3h5Ks7yNDTv_MSb0z-b4J6gvv0Kb_yA1_rAdKZEId4wqo"
                  />
                  <div className="absolute top-sm right-sm bg-primary text-white px-sm py-xs rounded font-label-caps text-label-caps">
                    INDUSTRIAL
                  </div>
                </div>
                <div className="p-md">
                  <h4 className="font-headline-sm text-headline-sm text-primary mb-xs">Centro Logístico Industrial</h4>
                  <p className="font-body-sm text-body-sm text-secondary mb-md">Auditoría de riesgos y supervisión técnica para planta de 5.000m².</p>
                  <div className="flex items-center justify-between pt-md border-t border-surface-variant">
                    <div className="flex flex-col">
                      <span className="text-industrial-orange font-bold font-body-md text-body-md">45.000+</span>
                      <span className="text-[10px] uppercase text-secondary font-bold">Horas/Hombre sin incidentes</span>
                    </div>
                    <span className="material-symbols-outlined text-primary">arrow_outward</span>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-xl overflow-hidden shadow-md">
                <div className="h-64 overflow-hidden relative">
                  <img
                    alt="Infraestructura Eléctrica"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    data-alt="Wide angle shot of a large scale energy infrastructure project featuring tall electrical pylons and a modern substation under construction. The sky is a deep twilight blue, and the site is brightly lit by industrial floodlights. Engineers in safety gear are visible near a portable office unit. The image emphasizes large-scale project management, technical complexity, and 24/7 safety commitment in an urban utility context."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuANnAm65X5dpBo0xx87Fdu5xzslV8i2AINR2HWh3m8y7UN379_1OxrMP5jdOIdi_-KT4nPKLyIxobKSWTLibzKzrsCUyMZKZD-V_dL7ajqAI-lwk3s0m7cpZCHYuwH_UbJDppVgzRAPZAWl_Ai40tNCNEmcciPPwkUjg4gPYm4wy6Or4XEhUyJb0peabC80xpNBCxkHIJULt5nQgilLOkmE6QrpCI5WGeAwHiL5FENrxHM3wk-vTxEwKQ3bWCUcXvg9Pzgm_50mGKE"
                  />
                  <div className="absolute top-sm right-sm bg-primary text-white px-sm py-xs rounded font-label-caps text-label-caps">
                    CONSULTORÍA SST
                  </div>
                </div>
                <div className="p-md">
                  <h4 className="font-headline-sm text-headline-sm text-primary mb-xs">Subestación Energía Norte</h4>
                  <p className="font-body-sm text-body-sm text-secondary mb-md">Implementación completa del Sistema de Gestión de Seguridad y Salud (ISO 45001).</p>
                  <div className="flex items-center justify-between pt-md border-t border-surface-variant">
                    <div className="flex flex-col">
                      <span className="text-industrial-orange font-bold font-body-md text-body-md">18.200+</span>
                      <span className="text-[10px] uppercase text-secondary font-bold">Horas/Hombre sin incidentes</span>
                    </div>
                    <span className="material-symbols-outlined text-primary">arrow_outward</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
      </main>

      <footer className="bg-primary w-full mt-lg border-t-4 border-tertiary">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-md py-xl max-w-container-max mx-auto text-on-primary">
          <div className="space-y-md">
            <div className="flex items-center gap-xs">
              <span className="material-symbols-outlined text-industrial-orange" style={{ fontSize: 24 }}>foundation</span>
              <span className="font-headline-sm text-headline-sm font-bold text-tertiary-fixed">G&G</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-primary/70">
              Consultoría de ingeniería de alta precisión y gestión integral de seguridad en el trabajo.
            </p>
            <div className="inline-flex border-2 border-industrial-orange px-sm py-xs rounded-full">
              <span className="font-label-caps text-[10px] text-industrial-orange uppercase tracking-[2px]">Compromiso con la Seguridad y la Vida</span>
            </div>
          </div>
          <div>
            <h4 className="font-label-caps text-label-caps text-white uppercase mb-md">Ecosistema</h4>
            <ul className="space-y-xs font-body-sm text-body-sm text-on-primary/70">
              <li><a className="hover:text-on-primary hover:underline transition-all" href="#">Services</a></li>
              <li><a className="hover:text-on-primary hover:underline transition-all" href="#">Project Portfolio</a></li>
              <li><a className="hover:text-on-primary hover:underline transition-all" href="#">Safety Standards</a></li>
              <li><a className="hover:text-on-primary hover:underline transition-all" href="#">SST Compliance</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-caps text-label-caps text-white uppercase mb-md">Compañía</h4>
            <ul className="space-y-xs font-body-sm text-body-sm text-on-primary/70">
              <li><a className="hover:text-on-primary hover:underline transition-all" href="#">Careers</a></li>
              <li><a className="hover:text-on-primary hover:underline transition-all" href="#">Contact</a></li>
              <li><a className="hover:text-on-primary hover:underline transition-all" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-on-primary hover:underline transition-all" href="#">Legal Terms</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-caps text-label-caps text-white uppercase mb-md">Newsletter Técnico</h4>
            <p className="font-body-sm text-body-sm text-on-primary/70 mb-sm">Reciba actualizaciones sobre normatividad SST y avances en ingeniería.</p>
            <div className="flex">
              <input className="bg-white/10 border-none text-white rounded-l-lg w-full font-body-sm text-body-sm p-sm focus:ring-1 focus:ring-industrial-orange" placeholder="Email" type="email" />
              <button className="bg-industrial-orange p-sm" type="button">
                <span className="material-symbols-outlined text-white">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-md">
          <p className="text-center font-body-sm text-body-sm text-on-primary/50">
            © 2024 G&G. Commitment to Safety and Life. All rights reserved.
          </p>
        </div>
      </footer>

      <style>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          vertical-align: middle;
        }
        .gradient-overlay {
          background: linear-gradient(180deg, rgba(0, 10, 30, 0.7) 0%, rgba(0, 10, 30, 0.9) 100%);
        }
        .bento-card {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease;
        }
        .bento-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 33, 71, 0.12);
        }
        .industrial-border {
          border-left: 4px solid #e16300;
        }
      `}</style>
    </div>
  );
}
