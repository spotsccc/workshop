import { makeAutoObservable } from 'mobx'

class TaskListStore {
  public tasks = [
    {
      title: 'Learn html',
      id: 0,
      isDone: false,
    },
    {
      title: 'Learn css',
      id: 1,
      isDone: false,
    },
    {
      title: 'Learn js',
      id: 2,
      isDone: false,
    },
    {
      title: 'Learn React',
      id: 3,
      isDone: false,
    },
  ]

  constructor() {
    makeAutoObservable(this)
  }
}

export const taskListStore = new TaskListStore()
