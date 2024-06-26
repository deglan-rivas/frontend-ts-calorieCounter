import { useActivity } from "../hooks/useActivity"
import Delete from "../icons/Delete"
import Update from "../icons/Update"
import { DisplayedActivity } from "../types"

// const Activities = [
//   {
//     id: 1,
//     category: "Comida",
//     name: "Comida_1",
//     calories: 9
//   },
//   {
//     id: 2,
//     category: "Ejercicio",
//     name: "Ejercicio_1",
//     calories: 6
//   }
// ]

interface ActivityCardProps {
  activityCard: DisplayedActivity
}

function ActivityCard ({activityCard}: ActivityCardProps) {
  // const {id, category, activity: name, calories} = activity
    const {id, category, activity, calories} = activityCard
    const {dispatch} = useActivity()

  return (
    <div className="border border-gray-300 rounded-md py-10 px-5 shadow-md relative">
        <div className={`${category==='comida' ? 'bg-lime-500' : 'bg-orange-500'} text-white text-center uppercase w-40 py-2 absolute -left-4 top-2`}>
          {category}
        </div>
        
        <div className="mt-8 flex justify-between items-center">
          <div className="space-y-2">
            <p className="font-semibold text-xl">
              {activity}
            </p>
            <p className="text-lime-500 font-semibold text-4xl">
              {calories} Calorías
            </p>
          </div>
          <div className="flex justify-between gap-4">
            <button
              // onClick={() => updateActivity(id)}
              onClick={() => dispatch({type: 'update-activity', payload: {id}})}
            >
              <Update />
            </button>

            <button
              onClick={() => dispatch({type: 'delete-activity', payload: {id}})}
            >
              <Delete />
            </button>
          </div>
        </div>
      </div>
  )
}

export default function ActivityList () {
  const {state: {activities}} = useActivity()

  return (
    <section className="py-10 px-10 space-y-4 max-w-4xl mx-auto">
      <h2 className="text-4xl font-semibold text-gray-600 text-center">
        Comida y Actividades
      </h2>

      {
        activities.length === 0 ? (
          <p className="text-lg text-center">
            No hay actividades aún ...
          </p>
        ) : (
          activities.map((activityCard) => (
            <ActivityCard 
            key={activityCard.id} 
            activityCard={activityCard}
            />
          ))
        )
      }
    </section>
  )
}