export type Meal = {
  id: number
  date: string
  image: string
  meal: string
}

export type Exercise = {
  id: number
  name: string
  kcal: number
  duration: number
}

export type Diary = {
  id: number
  date: number
  excerpt: string
}

export type Blog = {
  id: number
  date: number
  excerpt: string
  image: string
  hashtag: string[]
}
