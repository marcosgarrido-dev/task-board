function TaskCard({ task, type, tasks, setTasks }) {

  const moveTask = (newType) => {
    // eliminar de la columna actual
    const updatedCurrent = tasks[type].filter((item) => item.id !== task.id)

    // añadir a la nueva columna
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
        <p>{task.text}</p>

        <div className="task-buttons">
        <div className="left-zone">
            {type === "doing" && (
            <button onClick={() => moveTask("todo")}>←</button>
            )}

            {type === "done" && (
            <button onClick={() => moveTask("doing")}>←</button>
            )}
        </div>

        <div className="center-zone">
            <button onClick={handleDelete}>Eliminar</button>
        </div>

        <div className="right-zone">
            {type === "todo" && (
            <button onClick={() => moveTask("doing")}>→</button>
            )}

            {type === "doing" && (
            <button onClick={() => moveTask("done")}>→</button>
            )}
        </div>
        </div>
    </div>
  )
}

export default TaskCard