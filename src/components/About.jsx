export default function About() {
  return (
    <section id="nosotros" className="py-xl px-md bg-white">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-lg">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-xs">Nosotros</h2>
          <p className="font-body-md text-body-md text-secondary max-w-2xl mx-auto">Conozca nuestra misión, visión y lo que opinan nuestros clientes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-xl">
          <div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Misión</h3>
            <p className="font-body-sm text-body-sm text-secondary">Brindar servicios de ingeniería y gestión SST que garanticen proyectos seguros, eficientes y conformes a la normativa, protegiendo vidas y activos.</p>
          </div>
          <div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Visión</h3>
            <p className="font-body-sm text-body-sm text-secondary">Ser la firma de referencia en la región por excelencia técnica, cultura de prevención y solución integral en seguridad y obras civiles.</p>
          </div>
          <div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Valores</h3>
            <p className="font-body-sm text-body-sm text-secondary">Compromiso, profesionalismo, prevención y mejora continua en cada proyecto.</p>
          </div>
        </div>

        <div className="mb-xl">
          <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">Testimonios</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
              <div className="bg-surface-container-high p-md rounded-lg shadow-sm">
              <p className="font-body-sm text-body-sm text-secondary">"La intervención técnica de G&G redujo nuestros incidentes y mejoró la productividad."</p>
              <div className="mt-3 font-label-caps text-label-caps text-primary">— Ing. Laura Martínez</div>
            </div>
            <div className="bg-surface-container-high p-md rounded-lg shadow-sm">
              <p className="font-body-sm text-body-sm text-secondary">"Profesionales, responsables y orientados a resultados. Altamente recomendados."</p>
              <div className="mt-3 font-label-caps text-label-caps text-primary">— Sr. Carlos Gómez</div>
            </div>
            <div className="bg-surface-container-high p-md rounded-lg shadow-sm">
              <p className="font-body-sm text-body-sm text-secondary">"Implementaron un SG-SST claro y efectivo en tiempo récord."</p>
              <div className="mt-3 font-label-caps text-label-caps text-primary">— Dra. Paula Ríos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
