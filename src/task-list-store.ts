import { makeAutoObservable } from 'mobx'

export enum Filter {
  all = 'all',
  done = 'done',
  notDone = 'notDone',
}

class TaskListStore {
  private tasks = [
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
  public filter = Filter.all
  private lastTaskId = 3

  constructor() {
    makeAutoObservable(this)
  }

  get filteredTasks() {
    return this.tasks.filter((task) => {
      switch (this.filter) {
        case Filter.all:
          return task
        case Filter.done:
          return task.isDone
        case Filter.notDone:
          return !task.isDone
        default:
          return task
      }
    })
  }

  public changeNewTaskTitle(title: string) {
    this.newTaskTitle = title
  }

  public changeFilter(filter: Filter) {
    this.filter = filter
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

  public toggleTaskStatus(id: number) {
    const task = this.tasks.find((task) => task.id === id)
    if (!task) {
      throw new Error('Task not found!')
    }
    task.isDone = !task.isDone
  }
}

export const taskListStore = new TaskListStore()
