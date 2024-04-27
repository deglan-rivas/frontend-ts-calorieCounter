export default function Counter ({restartApp, saveActivity}) {
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
              defaultValue={""}
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
              htmlFor="category"
              className="block font-semibold mb-4"
            >
              Actividad:
            </label>
            <input 
              type="text"
              className="border border-gray-300 w-full rounded-md px-2 py-2 text-ellipsis"
              placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta"
            />
          </div>

          <div className="mb-8">
            <label 
              htmlFor="category"
              className="block font-semibold mb-4"
            >
              Calorías:
            </label>
            <input 
              type="number"
              className="border border-gray-300 px-2 py-2 w-full rounded-md"
              defaultValue={0}
              min={0}
              step={2}
            />
          </div>

          <input 
            type="submit"
            className="bg-black text-white font-semibold px-2 py-2 rounded-md cursor-pointer uppercase w-full"
            value={'Guardar Comida'}
            onClick={(e) => saveActivity(e)}
          />
        </form>
      </section>
    </>
  )
}