import { v4 as uuidv4 } from 'uuid';
import { DisplayedActivity } from "../types";

export type ActivityState = {
  activities: DisplayedActivity[],
  activity: DisplayedActivity
}

export type ActivityAction = 
{type: "restart-app"} |
{ type: "save-activity", payload: {activity: DisplayedActivity} } |
  {type: "update-activity", payload: {id: DisplayedActivity[ 'id']}} |
  {type: "delete-activity", payload: {id: DisplayedActivity[ 'id']}}

export const initialActivity: DisplayedActivity = {
  category: "",
  activity: "",
  calories: 0,
  id:""
}

const initialActivities: DisplayedActivity[] = localStorage.getItem('activities') ? JSON.parse(localStorage.getItem('activities')!) : []

export const initialState = {
  activities: initialActivities,
  activity: initialActivity
}

export const activityReducer = (
  state: ActivityState = initialState,
  action: ActivityAction
) => {
  switch (action.type) {
    case "restart-app":
      return {
        ...state,
        activities: [],
        activity: initialActivity
      }
    case "save-activity": {
      if (!state.activity.id) {
        const newActivity = {...action.payload.activity, id: uuidv4()}
        return {
          ...state,
          activities: [...state.activities, newActivity],
          activity: initialActivity
        }
      }

      const updatedActivities = state.activities.map((act) => act.id === action.payload.activity.id ? action.payload.activity : act)
      return {
        ...state,
        activities: updatedActivities,
        activity: initialActivity
      }
    }
    case "update-activity":
      return {
        ...state,
        activity: state.activities.find((activity) => activity.id === action.payload.id)
      }
    case "delete-activity":
      return {
        ...state,
        activities: state.activities.filter((activity) => activity.id !== action.payload.id)
      }
    default:
      return state
  }
}