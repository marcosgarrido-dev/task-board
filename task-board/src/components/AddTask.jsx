import { useState } from "react"

function AddTask({ type, tasks, setTasks }) {
  const [text, setText] = useState("")

  const handleAdd = () => {
    if (!text) return

    const newTask = {
      id: Date.now(),
      text
    }

    setTasks({
      ...tasks,
      [type]: [...tasks[type], newTask]
    })

    setText("")
  }

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nueva tarea"
      />

      <button onClick={handleAdd}>Añadir</button>
    </div>
  )
}

export default AddTask