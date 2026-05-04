import AddTask from "./AddTask"

function Column({ title, type, tasks, setTasks }) {
  return (
    <div className="column">
      <h2>{title}</h2>
      <p>Total tareas: {tasks[type].length}</p>

      <AddTask type={type} tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default Column