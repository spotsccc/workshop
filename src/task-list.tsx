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
    <form
      onSubmit={(event) => {
        event.preventDefault()
        const form = document.querySelector('form')
        if (!form) {
          throw new Error('Form not found!')
        }
        const formData = new FormData(form)
        const title = formData.get('title')
        const lastId = taskList[taskList.length - 1].id
        if (typeof title !== 'string') {
          throw new TypeError('Wrong title format')
        }
        taskList.push({
          title,
          isDone: false,
          id: lastId + 1,
        })
        const input = document.querySelector('input')
        if (!input) {
          throw new Error('Input not found!')
        }
        input.value = ''
      }}
    >
      <input placeholder="title" name="title" />
      <button type="submit">create</button>
    </form>
  )
}
