export default function ActivityList () {
  return (
    <section className="py-10 px-10 space-y-4">
      <h2 className="text-4xl font-semibold text-gray-600 text-center">
        Comida y Actividades
      </h2>

      <div className="border border-gray-300 rounded-md py-10 px-5 shadow-md relative">
        <div className="bg-lime-500 text-white text-center uppercase w-40 py-2 absolute -left-4 top-2">
          Comida
        </div>
        
        <div className="mt-8 flex justify-between items-center">
          <div className="space-y-2">
            <p className="font-semibold text-xl">
              Comida_1
            </p>
            <p className="text-lime-500 font-semibold text-4xl">
              9 Calorías
            </p>
          </div>
          <div className="flex justify-between gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="h-8 w-8 text-gray-800"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="h-8 w-8 text-red-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
        </div>
      </div>

      <div className="border border-gray-300 rounded-md py-10 px-5 shadow-md relative">
        <div className="bg-orange-500 text-white text-center uppercase w-40 py-2 absolute -left-4 top-2">
          Ejercicio
        </div>
        
        <div className="mt-8 flex justify-between items-center">
          <div className="space-y-2">
            <p className="font-semibold text-xl">
              Ejercicio_1
            </p>
            <p className="text-lime-500 font-semibold text-4xl">
              6 Calorías
            </p>
          </div>
          <div className="flex justify-between gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="h-8 w-8 text-gray-800"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="h-8 w-8 text-red-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
        </div>
      </div>
    </section>
  )
}