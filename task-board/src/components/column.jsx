import AddTask from "./AddTask"
import TaskCard from "./TaskCard"

function Column({ title, type, tasks, setTasks, editingColumn, setEditingColumn }) {
  const isEditing = editingColumn === type

  return (
    <div className="column">
      <button
        className="column-edit-btn"
        onClick={() => setEditingColumn(isEditing ? null : type)}
      >
        {isEditing ? "Guardar" : "✏️"}
      </button>

      <h2>{title}</h2>

      <p>Total tareas: {tasks[type].length}</p>

      <div className="task-list">
        {tasks[type].map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            type={type}
            tasks={tasks}
            setTasks={setTasks}
            isEditing={isEditing}
          />
        ))}
      </div>

      {type === "todo" && (
        <AddTask type={type} tasks={tasks} setTasks={setTasks} />
      )}
    </div>
  )
}

export default Column