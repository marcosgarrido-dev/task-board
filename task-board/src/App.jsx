// import { useState } from "react"
import { useLocalStorage } from "./hooks/useLocalStorage"
import { initialTasks } from "./data/initialTasks"
import Column from "./components/Column"

function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", initialTasks)

  return (
    <div className="app">
    <h1>Task Board</h1>

    <div className="board">
      <Column title="To Do" type="todo" tasks={tasks} setTasks={setTasks}/>
      <Column title="Doing" type="doing" tasks={tasks} setTasks={setTasks}/>
      <Column title="Done" type="done" tasks={tasks} setTasks={setTasks}/>
    </div>
  </div>
  )
}

export default App