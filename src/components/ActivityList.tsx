import Delete from "../icons/Delete"
import Update from "../icons/Update"

const Activities = [
  {
    id: 1,
    category: "Comida",
    name: "Comida_1",
    calories: 9
  },
  {
    id: 2,
    category: "Ejercicio",
    name: "Ejercicio_1",
    calories: 6
  }
]

function ActivityCard ({category, name, calories}) {
  return (
    <div className="border border-gray-300 rounded-md py-10 px-5 shadow-md relative">
        <div className={`${category==='Comida' ? 'bg-lime-500' : 'bg-orange-500'} text-white text-center uppercase w-40 py-2 absolute -left-4 top-2`}>
          {category}
        </div>
        
        <div className="mt-8 flex justify-between items-center">
          <div className="space-y-2">
            <p className="font-semibold text-xl">
              {name}
            </p>
            <p className="text-lime-500 font-semibold text-4xl">
              {calories} Calorías
            </p>
          </div>
          <div className="flex justify-between gap-4">
            <Update />
            <Delete />
          </div>
        </div>
      </div>
  )
}

export default function ActivityList () {
  return (
    <section className="py-10 px-10 space-y-4">
      <h2 className="text-4xl font-semibold text-gray-600 text-center">
        Comida y Actividades
      </h2>

      {
        Activities.map((activity) => (
          <ActivityCard 
            key={activity.id} 
            category={activity.category} 
            name={activity.name} 
            calories={activity.calories}
          />
        ))
      }
    </section>
  )
}