import './index.css'
import { observer } from 'mobx-react-lite'
import { NewTaskForm } from '../new-task-form'
import { taskListStore } from '../task-list-store'
import { TasksFilter } from '../tasks-filters'
import { Index } from './task'

export const TaskList = observer(() => {
  return (
    <div className="taskList">
      <h1>Task list</h1>
      <NewTaskForm />
      <TasksFilter />
      {taskListStore.filteredTasks.map((task) => (
        <Index
          key={task.id}
          title={task.title}
          id={task.id}
          isDone={task.isDone}
        />
      ))}
    </div>
  )
})
