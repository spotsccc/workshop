export type TaskProps = {
  title: string
  id: number
  isDone: false
}

export const Task = ({ title, isDone }: TaskProps) => {
  return (
    <div>
      <p>{title}</p>
      <input type="checkbox" checked={isDone} />
    </div>
  )
}
