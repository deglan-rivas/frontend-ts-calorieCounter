export default function Counter ({restartApp, saveActivity, activity, setActivity, setActivities}) {
  // Object.values(activity).some(value => value === "" || value === 0)
  const isFull = Object.values(activity).every((value) => !!value)

  return (
    <>
      <section className="bg-lime-600">
        <div className="max-w-4xl mx-auto px-5 py-4 flex justify-between items-center">
          <h1 className="text-lg uppercase text-white font-semibold">
            Contador de calorías
          </h1>

          <button className="bg-black rounded-md uppercase text-white font-semibold px-2 py-2 text-sm"
            onClick={() => restartApp()}
          >
            Reiniciar App
          </button>
        </div>
      </section>

      <section className="bg-lime-500 px-5 py-20">
        <form action=""
          className="bg-white rounded-md px-10 py-10 max-w-4xl mx-auto"
        >
          <div className="mb-4">
            <label 
              htmlFor="category"
              className="block font-semibold mb-4"
            >
              Categoría:
            </label>
            <select 
              name="category" 
              id="category"
              className="w-full px-2 py-2 rounded-md bg-white border border-gray-300"
              // multiple
              // disabled
              // size={3}
              // defaultValue={""}
              onChange={(e) => setActivity({ ...activity, [e.target.name]: e.target.value })}
              value={activity.category}
            >
              <option 
                className="text-sm" 
                value={""}
                disabled
                // selected  
              >
                -- Seleccione --
              </option>
              <option value="comida" className="text-sm">
                Comida
              </option>
              <option value="ejercicio" className="text-sm">
                Ejercicio
              </option>
            </select>
          </div>

          <div className="mb-4">
            <label 
              htmlFor="activity"
              className="block font-semibold mb-4"
            >
              Actividad:
            </label>
            <input 
              id="activity"
              name="activity"
              type="text"
              className="border border-gray-300 w-full rounded-md px-2 py-2 text-ellipsis"
              placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta"
              onChange={(e) => setActivity({ ...activity, [e.target.name]: e.target.value })}
              value={activity.activity}
            />
          </div>

          <div className="mb-8">
            <label 
              htmlFor="calories"
              className="block font-semibold mb-4"
            >
              Calorías:
            </label>
            <input 
              id="calories"
              name="calories"
              type="number"
              className="border border-gray-300 px-2 py-2 w-full rounded-md"
              // defaultValue={0}
              min={0}
              step={2}
              onChange={(e) => setActivity({ ...activity, [e.target.name]: +e.target.value })}
              value={activity.calories}
            />
          </div>

          <input 
            type="submit"
            className={`${isFull ? 'bg-black text-white cursor-pointer' : 'bg-black/20 text-black/20 cursor-not-allowed'} font-semibold px-2 py-2 rounded-md uppercase w-full`}
            value={`Guardar ${activity.category}`}
            onClick={(e) => saveActivity(e)}
            disabled={!isFull}
          />
        </form>
      </section>
    </>
  )
}