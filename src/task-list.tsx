import './task-list.css'
import { observer } from 'mobx-react-lite'
import { Task } from './task'
import { taskListStore } from './task-list-store'

export const TaskList = observer(() => {
  return (
    <div className="taskList">
      <h1>Task list</h1>
      <NewTaskForm />
      {taskListStore.tasks.map((task) => (
        <Task
          key={task.id}
          title={task.title}
          id={task.id}
          isDone={task.isDone}
        />
      ))}
    </div>
  )
})

export const NewTaskForm = observer(() => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
      }}
    >
      <input placeholder="title" name="title" />
      <button type="submit">create</button>
    </form>
  )
})
