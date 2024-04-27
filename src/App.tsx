import { useEffect, useState } from 'react';
import ActivityList from './components/ActivityList';
import Counter from "./components/Counter";
import Resume from "./components/Resume";
import { Activity } from './types';

function App() {
  const initiaActivity = {category:"", activity:"", calories:0}
  const initialActivities = localStorage.getItem('activities') ? JSON.parse(localStorage.getItem('activities')!) : []
  const [activity, setActivity] = useState(initiaActivity as Activity)
  const [activities, setActivities] = useState(initialActivities as Activity[])

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(activities))
  }, [activities])

  function restartApp () {
    console.log("Reiniciando App...")
  }

  function saveActivity (e) {
    e.preventDefault()
    setActivities([...activities, activity])
    setActivity(initiaActivity)
  }

  function updateActivity (id) {
    console.log("Actualizando actividad...", id)
  }

  function deleteActivity (id) {
    console.log("Eliminando actividad ...", id)
  }

  return (
    <>
      <Counter
        restartApp={restartApp}
        saveActivity={saveActivity}
        activity={activity}
        setActivity={setActivity}
        setActivities={setActivities}
      />
      <Resume/>
      <ActivityList
        updateActivity={updateActivity}
        deleteActivity={deleteActivity}
      />
    </>
  )
}

export default App
