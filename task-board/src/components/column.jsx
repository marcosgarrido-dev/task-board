import AddTask from "./AddTask"
import TaskCard from "./TaskCard"

function Column({ title, type, tasks, setTasks }) {
  return (
    <div className="column">
      <h2 className="columnTitle">{title}</h2>

      <p>Total tareas: {tasks[type].length}</p>

      <div className="task-list">
        {tasks[type].map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>

      <AddTask type={type} tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default Column