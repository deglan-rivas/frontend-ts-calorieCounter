import { createContext, useReducer } from "react";
import { ActivityAction, activityReducer, ActivityState, initialState } from "../reducers/activity-reducer";

interface ActivityContextProps {
  state: ActivityState;
  dispatch: React.Dispatch<ActivityAction>;
}

export const ActivityContext = createContext<ActivityContextProps>(null!);

export const ActivityProvider = ({ children }: { children: React.ReactNode}) => {
  const [state, dispatch] = useReducer(activityReducer, initialState)

  return (
    <ActivityContext.Provider value={{ state, dispatch }}>
      {children}
    </ActivityContext.Provider>
  )
}