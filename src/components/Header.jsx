export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-primary shadow-md shadow-primary/10">
      <div className="flex items-center justify-between px-md py-sm max-w-container-max mx-auto text-on-primary">
        <div className="flex items-center gap-xs">
          <span className="material-symbols-outlined text-industrial-orange" style={{ fontSize: 32 }}>
            foundation
          </span>
          <span className="font-headline-md text-headline-md font-bold tracking-tight">G&G</span>
        </div>
        <div className="hidden md:flex items-center gap-md">
          <a className="text-tertiary-fixed font-bold border-b-2 border-tertiary-fixed font-body-sm text-body-sm" href="#hero">
            Inicio
          </a>
          <a className="text-on-primary opacity-80 hover:opacity-100 font-body-sm text-body-sm" href="#servicios">
            Servicios
          </a>
          <a className="text-on-primary opacity-80 hover:opacity-100 font-body-sm text-body-sm" href="#gestion-sst">
            Gestión SST
          </a>
          <a className="text-on-primary opacity-80 hover:opacity-100 font-body-sm text-body-sm" href="#portfolio">
            Proyectos
          </a>
          <button className="text-on-primary opacity-80 hover:opacity-100 font-body-sm text-body-sm bg-transparent border-none p-0" type="button" onClick={(e) => e.preventDefault()}>
            Consultar Proyecto
          </button>
          <a className="text-on-primary opacity-80 hover:opacity-100 font-body-sm text-body-sm" href="#contacto">
            Contacto
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
