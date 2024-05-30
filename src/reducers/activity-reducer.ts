import { Activity } from "../types"

export type ActivityState = {
  activities: Activity[],
  activity: Activity
}

export type ActivityAction = 
  { type: "add-activity", payload: Activity } 

const initialActivity = {
  category: "",
  activity: "",
  calories: 0
}

export const initialState = {
  activities: [],
  activity: initialActivity
}

export const activityReducer = (
  state: ActivityState = initialState,
  action: ActivityAction
) => {
  switch (action.type) {
    default:
      return state
  }
}