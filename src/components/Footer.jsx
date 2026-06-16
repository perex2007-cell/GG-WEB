export default function Footer() {
  return (
    <footer className="bg-primary w-full mt-lg border-t-4 border-tertiary">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-md py-xl max-w-container-max mx-auto text-on-primary">
        <div className="space-y-md">
          <div className="flex items-center gap-xs">
            <span className="material-symbols-outlined text-industrial-orange" style={{ fontSize: 24 }}>
              foundation
            </span>
            <span className="font-headline-sm text-headline-sm font-bold text-tertiary-fixed">G&G</span>
          </div>
          <p className="font-body-sm text-body-sm text-on-primary/70">
            Consultoría de ingeniería de alta precisión y gestión integral de seguridad en el trabajo.
          </p>
          <div className="inline-flex border-2 border-industrial-orange px-sm py-xs rounded-full">
            <span className="font-label-caps text-[10px] text-industrial-orange uppercase tracking-[2px]">
              Compromiso con la Seguridad y la Vida
            </span>
          </div>
        </div>
        <div>
          <h4 className="font-label-caps text-label-caps text-white uppercase mb-md">Ecosistema</h4>
          <ul className="space-y-xs font-body-sm text-body-sm text-on-primary/70">
            <li>
              <a className="hover:text-on-primary hover:underline transition-all" href="#">
                Servicioss
              </a>
            </li>
            <li>
              <a className="hover:text-on-primary hover:underline transition-all" href="#">
                Portafolio
              </a>
            </li>
            <li>
              <a className="hover:text-on-primary hover:underline transition-all" href="#">
                Estandares de Seguridad
              </a>
            </li>
            <li>
              <a className="hover:text-on-primary hover:underline transition-all" href="#">
                Gestion SST
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-caps text-label-caps text-white uppercase mb-md">Compañía</h4>
          <ul className="space-y-xs font-body-sm text-body-sm text-on-primary/70">
            <li>
              <a className="hover:text-on-primary hover:underline transition-all" href="#">
                Carrera
              </a>
            </li>
            <li>
              <a className="hover:text-on-primary hover:underline transition-all" href="#">
                Contacto
              </a>
            </li>
            <li>
              <a className="hover:text-on-primary hover:underline transition-all" href="#">
                Politica de Privacidad
              </a>
            </li>
            <li>
              <a className="hover:text-on-primary hover:underline transition-all" href="#">
                Terminos de Servicio
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-caps text-label-caps text-white uppercase mb-md">Newsletter Técnico</h4>
          <p className="font-body-sm text-body-sm text-on-primary/70 mb-sm">
            Reciba actualizaciones sobre normatividad SST y avances en ingeniería.
          </p>
          <div className="flex">
            <input
              className="bg-white/10 border-none text-white rounded-l-lg w-full font-body-sm text-body-sm p-sm focus:ring-1 focus:ring-industrial-orange"
              placeholder="Email"
              type="email"
            />
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
  );
}
