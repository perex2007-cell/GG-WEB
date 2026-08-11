export default function ConsultProjectPage() {
  return (
    <section className="min-h-screen bg-[#eef2ff] flex items-center justify-center px-md py-xl">
      <div className="w-full max-w-4xl rounded-[2rem] bg-white shadow-xl border border-surface-variant p-8 md:p-14">
        <div className="max-w-2xl space-y-8">
          <div className="space-y-4">
            <h1 className="font-headline-xl text-headline-xl text-primary">Consulta el avance de tu proyecto</h1>
            <p className="font-body-lg text-body-lg text-secondary max-w-2xl">
              Accede a la información detallada, cronogramas y reportes en tiempo real ingresando el código de tu proyecto.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <input
              type="text"
              placeholder="xxx-xxx-xxx"
              defaultValue="GYG-2026-00125"
              className="w-full rounded-full border border-surface-variant bg-white px-6 py-4 text-body-md text-on-background shadow-sm focus:border-primary-container focus:outline-none"
            />
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-industrial-orange px-lg py-sm text-white font-headline-sm hover:bg-industrial-orange/90 transition-all gap-xs"
            >
              Consultar Proyecto
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
