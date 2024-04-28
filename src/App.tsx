import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ActivityList from './components/ActivityList';
import Counter from "./components/Counter";
import Resume from "./components/Resume";
import { DisplayedActivity } from './types';

function App() {
  const initiaActivity = {category:"", activity:"", calories:0, id:""}
  const initialActivities = localStorage.getItem('activities') ? JSON.parse(localStorage.getItem('activities')!) : []
  const [activity, setActivity] = useState(initiaActivity as DisplayedActivity)
  const [activities, setActivities] = useState(initialActivities as DisplayedActivity[])

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(activities))
  }, [activities])

  function restartApp (): void {
    setActivities([])
    setActivity(initiaActivity)
  }

  function saveActivity (e: React.FormEvent): void {
    e.preventDefault()
    // para actualizar priemro hay que ver si existe previamente en nuestro array de activities
    // si no existe, se agrega
    // si sí existe, se actualiza
    // if (activity.id === "") {
    if (!activity.id) {
      const newActivity = {...activity, id: uuidv4()}
      setActivities([...activities, newActivity])
      setActivity(initiaActivity)
      return
    }

    const updatedActivities = activities.map((act) => act.id === activity.id ? activity : act)
    setActivities(updatedActivities)
    setActivity(initiaActivity)
    return
  }

  function updateActivity (id: DisplayedActivity['id']): void {
    const filteredActivity = activities.find((activity) => activity.id === id)!
    setActivity(filteredActivity)
  }

  function deleteActivity (id: DisplayedActivity['id']): void {
    const updatedActivities = activities.filter((activity) => activity.id !== id)
    setActivities(updatedActivities)
  }

  const foodCalories = activities.reduce((acc, activity) => (activity.category === "comida") ? acc + activity.calories : acc, 0)
  const burnedCalories = activities.reduce((acc, activity) => (activity.category === "ejercicio") ? acc + activity.calories : acc, 0)

  return (
    <>
      <Counter
        restartApp={restartApp}
        saveActivity={saveActivity}
        activity={activity}
        setActivity={setActivity}
        activities={activities}
      />
      <Resume
        foodCalories={foodCalories}
        burnedCalories={burnedCalories}
      />
      <ActivityList
        updateActivity={updateActivity}
        deleteActivity={deleteActivity}
        activities={activities}
      />
    </>
  )
}

export default App
