import './task.css'
import { observer } from 'mobx-react-lite'

export type TaskProps = {
  title: string
  id: number
  isDone: boolean
}

export const Task = observer(({ title, isDone }: TaskProps) => {
  return (
    <div className="task">
      <p className="taskTitle">{title}</p>
      <input type="checkbox" checked={isDone} />
    </div>
  )
})
