import './task-list.css'
import './tasks-filter.css'
import { observer } from 'mobx-react-lite'
import { Task } from './task'
import { Filter, taskListStore } from './task-list-store'

export const TaskList = observer(() => {
  return (
    <div className="taskList">
      <h1>Task list</h1>
      <NewTaskForm />
      <TasksFilter />
      {taskListStore.filteredTasks.map((task) => (
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

export const TasksFilter = observer(() => {
  return (
    <div className="filters">
      <label>
        all
        <input
          checked={taskListStore.filter === Filter.all}
          type="radio"
          onChange={() => {
            taskListStore.changeFilter(Filter.all)
          }}
        />
      </label>
      <label>
        done
        <input
          checked={taskListStore.filter === Filter.done}
          type="radio"
          onChange={() => {
            taskListStore.changeFilter(Filter.done)
          }}
        />
      </label>
      <label>
        not done
        <input
          checked={taskListStore.filter === Filter.notDone}
          type="radio"
          onChange={() => {
            taskListStore.changeFilter(Filter.notDone)
          }}
        />
      </label>
    </div>
  )
})

export const NewTaskForm = observer(() => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        taskListStore.createTask()
      }}
    >
      <input
        onChange={(e) => {
          taskListStore.changeNewTaskTitle(e.target.value)
        }}
        value={taskListStore.newTaskTitle}
        placeholder="title"
        name="title"
      />
      <button type="submit">create</button>
    </form>
  )
})
