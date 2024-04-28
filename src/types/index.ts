export interface Activity {
  category: string
  activity: string
  calories: number
}

export interface DisplayedActivity extends Activity {
  id?: string
}