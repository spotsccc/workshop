import { observer } from 'mobx-react-lite'
import { taskListStore } from '../task-list-store'

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
