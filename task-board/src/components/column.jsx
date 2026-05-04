function Column({ title, type, tasks }) {
  return (
    <div>
      <h2>{title}</h2>

      <p>Total tareas: {tasks[type].length}</p>
    </div>
  )
}

export default Column