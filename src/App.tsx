import { useEffect } from 'react';

import ActivityList from './components/ActivityList';
import Counter from "./components/Counter";
import Resume from "./components/Resume";
import { useActivity } from './hooks/useActivity';

function App() {
  // const initiaActivity = {category:"", activity:"", calories:0, id:""}
  // const initialActivities = localStorage.getItem('activities') ? JSON.parse(localStorage.getItem('activities')!) : []
  // const [activity, setActivity] = useState(initiaActivity as DisplayedActivity)
  // const [activities, setActivities] = useState(initialActivities as DisplayedActivity[])
  const {state} = useActivity()

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities))
  }, [state.activities])


  return (
    <>
      <Counter
      />
      <Resume
      />
      <ActivityList
      />
    </>
  )
}

export default App
