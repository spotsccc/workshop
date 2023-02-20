import './index.css'
import { observer } from 'mobx-react-lite'
import { Filter, taskListStore } from '../task-list-store'

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
