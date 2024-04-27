export default function Resume () {
  return (
    <section className="bg-slate-800 py-10">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl text-white font-semibold text-center mb-10">
        Resumen de Calorías
      </h2>

      <div className="flex flex-col justify-between px-4 gap-4
      md:flex-row">
        <div className="flex flex-col justify-center gap-2">
          <p className="text-6xl text-white font-semibold text-center">
            0
          </p>
          <p className="text-sm text-white font-semibold text-center">
            Consumidas
          </p>
        </div>

        <div className="flex flex-col justify-center gap-2">
          <p className="text-6xl text-white font-semibold text-center">
            0
          </p>
          <p className="text-sm text-white font-semibold text-center">
            Ejercicio
          </p>
        </div>

        <div className="flex flex-col justify-center gap-2">
          <p className="text-6xl text-white font-semibold text-center">
            0
          </p>
          <p className="text-sm text-white font-semibold text-center">
            Diferencia
          </p>
        </div>
      </div>
    </div>
    </section>
  )
}