import './task.css'
import { observer } from 'mobx-react-lite'
import { taskListStore } from './task-list-store'

export type TaskProps = {
  title: string
  id: number
  isDone: boolean
}

export const Task = observer(({ title, id, isDone }: TaskProps) => {
  return (
    <div className="task">
      <p className="taskTitle">{title}</p>
      <input
        type="checkbox"
        checked={isDone}
        onChange={() => {
          taskListStore.toggleTaskStatus(id)
        }}
      />
    </div>
  )
})
