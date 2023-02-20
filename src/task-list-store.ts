import { makeObservable } from 'mobx'

class TaskListStore {
  constructor() {
    makeObservable(this)
  }
}

export const taskListStore = new TaskListStore()
