export default function GestionSSTPage() {
  return (
    <div className="min-h-screen bg-background text-on-background">
      <section className="py-xl bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg items-center">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-md">¿Qué es el SG-SST en Construcción?</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-sm">
                El Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST) es un proceso lógico y por etapas, basado en la mejora continua (Ciclo PHVA), de cumplimiento obligatorio auditable por el Ministerio de Trabajo.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                En el sector construcción (Riesgo Clase IV/V), la implementación rigurosa es crítica para prevenir accidentes mortales y asegurar la continuidad del proyecto frente a inspecciones gubernamentales.
              </p>
            </div>
            <div className="glass-panel p-lg rounded-xl">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-sm border-b border-outline-variant pb-xs">El Ciclo PHVA</h3>
              <ul className="space-y-sm">
                <li className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-orange-industrial">edit_document</span>
                  <span className="font-body-md text-body-md"><strong>Planificar:</strong> Identificación de peligros, evaluación y valoración de riesgos.</span>
                </li>
                <li className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-orange-industrial">construction</span>
                  <span className="font-body-md text-body-md"><strong>Hacer:</strong> Ejecución de medidas de prevención y control.</span>
                </li>
                <li className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-orange-industrial">fact_check</span>
                  <span className="font-body-md text-body-md"><strong>Verificar:</strong> Auditorías, inspecciones y medición de indicadores.</span>
                </li>
                <li className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-orange-industrial">autorenew</span>
                  <span className="font-body-md text-body-md"><strong>Actuar:</strong> Acciones preventivas y correctivas para mejora continua.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-xl bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-md">
          <h2 className="font-headline-lg text-headline-lg text-primary text-center mb-lg">Marco Normativo Colombiano</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <div className="md:col-span-2 bg-surface-container-lowest rounded-lg p-md shadow-sm border border-surface-dim">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">Normativa General</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-primary-container text-on-primary-container font-label-caps text-label-caps">
                      <th className="p-xs border-b border-surface-dim">Norma</th>
                      <th className="p-xs border-b border-surface-dim">Descripción</th>
                    </tr>
                  </thead>
                  <tbody className="font-body-sm text-body-sm text-on-surface-variant">
                    <tr className="border-b border-surface-dim hover:bg-surface-bright">
                      <td className="p-xs font-bold text-primary">Decreto 1072 de 2015</td>
                      <td className="p-xs">Decreto Único Reglamentario del Sector Trabajo. Define directrices obligatorias para el SG-SST.</td>
                    </tr>
                    <tr className="border-b border-surface-dim hover:bg-surface-bright bg-surface-bright/50">
                      <td className="p-xs font-bold text-primary">Resolución 0312 de 2019</td>
                      <td className="p-xs">Estándares mínimos del SG-SST.</td>
                    </tr>
                    <tr className="border-b border-surface-dim hover:bg-surface-bright">
                      <td className="p-xs font-bold text-primary">Ley 1562 de 2012</td>
                      <td className="p-xs">Modifica el Sistema de Riesgos Laborales y dicta otras disposiciones en materia de salud ocupacional.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-error-container text-on-error-container p-md rounded-lg shadow-sm flex flex-col justify-center">
              <span className="material-symbols-outlined text-4xl mb-xs">warning</span>
              <h4 className="font-headline-sm text-headline-sm font-bold mb-xs">Atención: Estándares Mínimos</h4>
              <p className="font-body-sm text-body-sm">
                En el sector construcción (Riesgo IV y V), la normativa exige el cumplimiento del <strong>conjunto completo de 21 estándares mínimos</strong> de la Res. 0312, independientemente del tamaño de la empresa.
              </p>
            </div>

            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-md mt-sm">
              <div className="bg-surface-container-lowest p-md rounded-lg border-t-4 border-orange-industrial shadow-sm">
                <div className="flex items-center gap-xs mb-xs">
                  <span className="material-symbols-outlined text-primary">height</span>
                  <h4 className="font-headline-sm text-headline-sm text-primary">Trabajo en Alturas</h4>
                </div>
                <p className="font-label-caps text-label-caps text-secondary mb-xs">Res. 4272 de 2021</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Requisitos mínimos de seguridad para el desarrollo de trabajos en alturas y programas de protección contra caídas.</p>
              </div>
              <div className="bg-surface-container-lowest p-md rounded-lg border-t-4 border-primary shadow-sm">
                <div className="flex items-center gap-xs mb-xs">
                  <span className="material-symbols-outlined text-primary">bolt</span>
                  <h4 className="font-headline-sm text-headline-sm text-primary">Riesgo Eléctrico</h4>
                </div>
                <p className="font-label-caps text-label-caps text-secondary mb-xs">RETIE</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Reglamento Técnico de Instalaciones Eléctricas. Prevención de riesgos en instalaciones temporales de obra.</p>
              </div>
              <div className="bg-surface-container-lowest p-md rounded-lg border-t-4 border-secondary shadow-sm">
                <div className="flex items-center gap-xs mb-xs">
                  <span className="material-symbols-outlined text-primary">architecture</span>
                  <h4 className="font-headline-sm text-headline-sm text-primary">Sismo Resistencia</h4>
                </div>
                <p className="font-label-caps text-label-caps text-secondary mb-xs">NSR-10</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Norma Sismo Resistente. Regulaciones estructurales que impactan la seguridad durante la ejecución de la obra.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-xl bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-md">
          <h2 className="font-headline-lg text-headline-lg text-primary text-center mb-lg">Nuestros Servicios de Consultoría SG-SST</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
            <div className="flex gap-sm items-start">
              <div className="bg-primary-container text-on-primary-container p-xs rounded-full">
                <span className="material-symbols-outlined">design_services</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary">Diseño e Implementación</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Estructuración completa del SG-SST adaptado a las dinámicas específicas de su proyecto de construcción.</p>
              </div>
            </div>
            <div className="flex gap-sm items-start">
              <div className="bg-primary-container text-on-primary-container p-xs rounded-full">
                <span className="material-symbols-outlined">grading</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary">Auditorías e Inspecciones</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Evaluación del cumplimiento normativo en obra, verificando estándares mínimos y condiciones operativas.</p>
              </div>
            </div>
            <div className="flex gap-sm items-start">
              <div className="bg-primary-container text-on-primary-container p-xs rounded-full">
                <span className="material-symbols-outlined">grid_on</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary">Matrices GTC 45</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Elaboración detallada de la Matriz de Identificación de Peligros y Valoración de Riesgos (IPVR) por frentes de obra.</p>
              </div>
            </div>
            <div className="flex gap-sm items-start">
              <div className="bg-primary-container text-on-primary-container p-xs rounded-full">
                <span className="material-symbols-outlined">model_training</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary">Capacitación SST</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Programas de formación técnica para brigadas, COPASST y personal operativo en normativas de seguridad.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
