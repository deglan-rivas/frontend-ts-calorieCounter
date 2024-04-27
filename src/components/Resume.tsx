const ResumeItems = [
  {
    id: 1,
    value: 0,
    label: "Consumidas"
  },
  {
    id: 2,
    value: 0,
    label: "Ejercicio"
  },
  {
    id: 3,
    value: 20,
    label: "Diferencia"
  }
]

function ResumeItem ({label, value}) {
  return (
    <div className="flex flex-col justify-center gap-2">
      <p className="text-6xl text-white font-semibold text-center">
        {value}
      </p>
      <p className="text-sm text-white font-semibold text-center">
        {label}
      </p>
    </div>
  )
}

export default function Resume () {
  return (
    <section className="bg-slate-800 py-10">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl text-white font-semibold text-center mb-10">
        Resumen de Calorías
      </h2>

      <div className="flex flex-col justify-between px-4 gap-4
      md:flex-row">
        {
          ResumeItems.map((item) => (
            <ResumeItem
              key={item.id}
              label={item.label}
              value={item.value}
            />
          ))
        }
      </div>
    </div>
    </section>
  )
}