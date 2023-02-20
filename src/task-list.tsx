import { Task } from './task'

export const TaskList = () => {
  return (
    <div>
      <h1>Task list</h1>
      <Task title="Learn html" id={0} isDone={false} />
      <Task title="Learn css" id={1} isDone={false} />
      <Task title="Learn js" id={2} isDone={false} />
      <Task title="Learn React" id={3} isDone={false} />
    </div>
  )
}
