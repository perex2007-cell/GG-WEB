import { useMemo, useState } from 'react';
import { findProjectByCode } from '../data/projectCatalog';

const defaultCode = 'GG-2026-00125';

export default function ConsultProjectPage() {
  const [projectCode, setProjectCode] = useState(defaultCode);
  const [result, setResult] = useState(() => findProjectByCode(defaultCode));
  const [searched, setSearched] = useState(false);

  const statusMessage = useMemo(() => {
    if (!searched) {
      return 'Consulta tu proyecto con el código asignado.';
    }

    if (!result) {
      return 'No encontramos un proyecto con ese código. Verifica la información o contacta a tu gestor.';
    }

    return 'Proyecto encontrado con éxito.';
  }, [searched, result]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const project = findProjectByCode(projectCode);
    setResult(project);
    setSearched(true);
  };

  return (
    <section className="min-h-screen bg-[#eef2ff] px-md py-xl pt-24">
      <div className="mx-auto max-w-5xl rounded-[2rem] bg-white shadow-xl border border-surface-variant p-6 md:p-14">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-industrial-orange">Seguimiento</p>
              <h1 className="font-headline-xl text-headline-xl text-primary">Consulta el avance de tu proyecto</h1>
              <p className="font-body-lg text-body-lg text-secondary max-w-2xl">
                Accede a la información detallada, cronogramas y reportes en tiempo real ingresando el código del proyecto.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <label htmlFor="project-code" className="sr-only">Código del proyecto</label>
              <input
                id="project-code"
                type="text"
                value={projectCode}
                onChange={(event) => setProjectCode(event.target.value)}
                placeholder="GG-2026-00125"
                className="w-full rounded-full border border-surface-variant bg-white px-6 py-4 text-body-md text-on-background shadow-sm focus:border-primary-container focus:outline-none"
                aria-label="Código del proyecto"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-industrial-orange px-lg py-sm text-white font-headline-sm hover:bg-industrial-orange/90 transition-all gap-xs"
              >
                Consultar Proyecto
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </form>

            <p className="font-body-sm text-body-sm text-secondary" aria-live="polite">
              {statusMessage}
            </p>
          </div>

          <div className="rounded-2xl border border-surface-variant bg-surface p-5 shadow-sm">
            {result ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-label-caps text-label-caps uppercase text-secondary">Código</p>
                    <h2 className="font-headline-sm text-headline-sm text-primary">{result.code}</h2>
                  </div>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-800">{result.status}</span>
                </div>

                <div>
                  <p className="font-label-caps text-label-caps uppercase text-secondary">Proyecto</p>
                  <h3 className="font-headline-md text-headline-md text-primary">{result.title}</h3>
                </div>

                <div className="space-y-2 text-sm text-secondary">
                  <p><strong className="text-primary">Cliente:</strong> {result.client}</p>
                  <p><strong className="text-primary">Fase:</strong> {result.phase}</p>
                  <p><strong className="text-primary">Última actualización:</strong> {result.lastUpdate}</p>
                  <p><strong className="text-primary">Siguiente hito:</strong> {result.nextMilestone}</p>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-label-caps text-label-caps uppercase text-secondary">Avance</span>
                    <span className="font-bold text-primary">{result.progress}%</span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-surface-variant">
                    <div className="h-full rounded-full bg-industrial-orange" style={{ width: `${result.progress}%` }} />
                  </div>
                </div>

                <p className="font-body-sm text-body-sm text-secondary">{result.description}</p>
                <p className="font-headline-sm text-headline-sm text-primary">Presupuesto: {result.budget}</p>
              </div>
            ) : (
              <div className="flex min-h-[280px] items-center justify-center rounded-xl border border-dashed border-surface-variant bg-white p-6 text-center text-secondary">
                <p>Sin resultados para este código.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
