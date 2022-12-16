import { useState } from "react"
import Form from "./components/Form"
import Tasks from "./components/Tasks"
import { TasksContext } from "./context/TasksContext"

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Tarefa 01",
      description: "...",
      priority: 1,
    },
    {
      id: 2,
      name: "Tarefa 02",
      description: "...",
      priority: 2,
    },
    {
      id: 3,
      name: "Teste",
      description: "teste",
      priority: 3,
    },
  ])

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      <div className="container my-3">
        <Form />
        <Tasks />
      </div>
    </TasksContext.Provider>
  )
}

export default App
