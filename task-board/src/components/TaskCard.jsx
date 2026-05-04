function TaskCard({ task, type, tasks, setTasks }) {
  const handleDelete = () => {
    const updatedTasks = tasks[type].filter((item) => item.id !== task.id)

    setTasks({
      ...tasks,
      [type]: updatedTasks
    })
  }

  return (
    <div className="task-card">
      <p>{task.text}</p>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  )
}

export default TaskCard