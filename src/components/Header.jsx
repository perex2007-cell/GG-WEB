import { useEffect, useState } from 'react';

const navItems = [
  { id: 'hero', label: 'Inicio', href: '#hero' },
  { id: 'servicios', label: 'Servicios', href: '#servicios' },
  { id: 'gestion-sst', label: 'Gestión SST', href: '#gestion-sst' },
  { id: 'portfolio', label: 'Proyectos', href: '#portfolio' },
  { id: 'contacto', label: 'Contacto', href: '#contacto' },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);

    const updateActiveSectionFromHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && sectionIds.includes(hash)) {
        setActiveSection(hash);
      }
    };

    updateActiveSectionFromHash();
    window.addEventListener('hashchange', updateActiveSectionFromHash);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter((entry) => entry.isIntersecting);
        if (visibleSections.length === 0) {
          return;
        }

        const topSection = visibleSections.reduce((prev, current) =>
          current.intersectionRatio > prev.intersectionRatio ? current : prev,
        );

        if (sectionIds.includes(topSection.target.id)) {
          setActiveSection(topSection.target.id);
        }
      },
      {
        rootMargin: '-40% 0px -55% 0px',
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
      },
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      window.removeEventListener('hashchange', updateActiveSectionFromHash);
      observer.disconnect();
    };
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-primary shadow-md shadow-primary/10">
      <div className="flex items-center justify-between px-md h-16 max-w-container-max mx-auto text-on-primary">
        <div className="flex items-center gap-xs">
          <span className="material-symbols-outlined text-industrial-orange" style={{ fontSize: 32 }}>
            foundation
          </span>
          <span className="font-headline-md text-headline-md font-bold tracking-tight">G&G</span>
        </div>
        <div className="hidden md:flex items-center gap-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                className={`font-body-sm text-body-sm border-b-2 transition-all ${
                  isActive
                    ? 'border-white text-white opacity-100'
                    : 'border-transparent text-on-primary opacity-80 hover:opacity-100 hover:border-white'
                }`}
                href={item.href}
              >
                {item.label}
              </a>
            );
          })}
          <a className="text-on-primary opacity-80 hover:opacity-100 font-body-sm text-body-sm bg-transparent border-none p-0" href="#consultar-proyecto">
            Consultar Proyecto
          </a>
          <a className="bg-industrial-orange text-white px-md py-xs rounded-lg hover:scale-95 transition-transform font-label-caps text-label-caps" href="#contacto">
            Solicitar Cotización
          </a>
        </div>
        <button className="md:hidden p-xs active:scale-95 transition-transform" type="button">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
}
