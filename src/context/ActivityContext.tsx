import { createContext, useReducer } from "react";
import { ActivityAction, activityReducer, ActivityState, initialState } from "../reducers/activity-reducer";

interface ActivityContextProps {
  state: ActivityState;
  dispatch: React.Dispatch<ActivityAction>;
  foodCalories: number;
  burnedCalories: number
}

export const ActivityContext = createContext<ActivityContextProps>(null!);

export const ActivityProvider = ({ children }: { children: React.ReactNode}) => {
  const [state, dispatch] = useReducer(activityReducer, initialState)

  const foodCalories = state.activities.reduce((acc, activity) => (activity.category === "comida") ? acc + activity.calories : acc, 0)
  const burnedCalories = state.activities.reduce((acc, activity) => (activity.category === "ejercicio") ? acc + activity.calories : acc, 0)

  return (
    <ActivityContext.Provider value={{ 
      state, 
      dispatch,
      foodCalories,
      burnedCalories
    }}>
      {children}
    </ActivityContext.Provider>
  )
}