import './task.css'

export type TaskProps = {
  title: string
  id: number
  isDone: false
}

export const Task = ({ title, isDone }: TaskProps) => {
  return (
    <div className="task">
      <p className="taskTitle">{title}</p>
      <input type="checkbox" checked={isDone} />
    </div>
  )
}
