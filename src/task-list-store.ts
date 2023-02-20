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

  public newTaskTitle = ''
  private lastTaskId = 3

  constructor() {
    makeAutoObservable(this)
  }

  public changeNewTaskTitle(title: string) {
    this.newTaskTitle = title
  }

  public createTask() {
    this.lastTaskId++
    this.tasks.push({
      title: this.newTaskTitle,
      isDone: false,
      id: this.lastTaskId,
    })

    this.newTaskTitle = ''
  }
}

export const taskListStore = new TaskListStore()
