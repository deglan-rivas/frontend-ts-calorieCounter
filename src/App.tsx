import ActivityList from './components/ActivityList';
import Counter from "./components/Counter";
import Resume from "./components/Resume";

function App() {
  function restartApp () {
    console.log("Reiniciando App...")
  }

  function saveActivity (e) {
    e.preventDefault()
    console.log("Guardando actividad...")
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
