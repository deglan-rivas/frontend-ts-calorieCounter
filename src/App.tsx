import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ActivityList from './components/ActivityList';
import Counter from "./components/Counter";
import Resume from "./components/Resume";
import { Activity, DisplayedActivity } from './types';

function App() {
  const initiaActivity = {category:"", activity:"", calories:0}
  const initialActivities = localStorage.getItem('activities') ? JSON.parse(localStorage.getItem('activities')!) : []
  const [activity, setActivity] = useState(initiaActivity as Activity)
  const [activities, setActivities] = useState(initialActivities as DisplayedActivity[])

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(activities))
  }, [activities])

  function restartApp () {
    setActivities([])
  }

  function saveActivity (e) {
    e.preventDefault()
    const newActivity = {...activity, id: uuidv4()}
    setActivities([...activities, newActivity])
    setActivity(initiaActivity)
  }

  function updateActivity (id) {
    console.log("Actualizando actividad...", id)
  }

  function deleteActivity (id) {
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
