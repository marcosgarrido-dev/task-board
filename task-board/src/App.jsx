import { useState } from 'react'
import { initialTasks } from "./data/initialTasks"

function App() {
  const [tasks, setTasks] = useState(initialTasks)
  
  console.log(tasks)

  return (
    <h1>Task Board</h1>
  )
}

export default App