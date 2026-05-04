function TaskCard({ task, type, tasks, setTasks, isEditing }) {
  const updateTaskText = (newText) => {
    const updated = tasks[type].map((item) => {
      if (item.id === task.id) {
        return { ...item, text: newText }
      }

      return item
    })

    setTasks({
      ...tasks,
      [type]: updated
    })
  }

  const moveTask = (newType) => {
    const updatedCurrent = tasks[type].filter((item) => item.id !== task.id)
    const updatedTarget = [...tasks[newType], task]

    setTasks({
      ...tasks,
      [type]: updatedCurrent,
      [newType]: updatedTarget
    })
  }

  const handleDelete = () => {
    const updated = tasks[type].filter((item) => item.id !== task.id)

    setTasks({
      ...tasks,
      [type]: updated
    })
  }

  return (
    <div className="task-card">
      {isEditing ? (
        <input
          className="edit-input"
          value={task.text}
          onChange={(e) => updateTaskText(e.target.value)}
        />
      ) : (
        <p>{task.text}</p>
      )}

      <div className="task-buttons">
        <div className="left-zone">
          {type === "doing" && (
            <button className="icon-btn" onClick={() => moveTask("todo")}>←</button>
          )}

          {type === "done" && (
            <button className="icon-btn" onClick={() => moveTask("doing")}>←</button>
          )}
        </div>

        <div className="center-zone">
          <button className="delete-btn" onClick={handleDelete}>
            Eliminar
          </button>
        </div>

        <div className="right-zone">
          {type === "todo" && (
            <button className="icon-btn" onClick={() => moveTask("doing")}>→</button>
          )}

          {type === "doing" && (
            <button className="icon-btn" onClick={() => moveTask("done")}>→</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default TaskCard