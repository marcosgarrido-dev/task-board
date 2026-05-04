function TaskCard({ task }) {
  return (
    <div className="task-card">
      <p>{task.text}</p>
    </div>
  )
}

export default TaskCard