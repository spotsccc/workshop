import './task-list.css'
import { Task } from './task'

const taskList = [
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

export const TaskList = () => {
  return (
    <div className="taskList">
      <h1>Task list</h1>
      <NewTaskForm />
      {taskList.map((task) => (
        <Task
          key={task.id}
          title={task.title}
          id={task.id}
          isDone={task.isDone}
        />
      ))}
    </div>
  )
}

export const NewTaskForm = () => {
  return (
    <form>
      <input placeholder="title" />
      <button>create</button>
    </form>
  )
}
