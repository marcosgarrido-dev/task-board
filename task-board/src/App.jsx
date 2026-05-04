import { useState } from "react"
import { initialTasks } from "./data/initialTasks"
import Column from "./components/Column"

function App() {
  const [tasks, setTasks] = useState(initialTasks)

  return (
    <div>
      <h1>Task Board</h1>

      <Column
        title="To Do"
        type="todo"
        tasks={tasks}
      />

      <Column
        title="Doing"
        type="doing"
        tasks={tasks}
      />

      <Column
        title="Done"
        type="done"
        tasks={tasks}
      />
    </div>
  )
}

export default App