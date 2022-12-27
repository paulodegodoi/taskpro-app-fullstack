import { useEffect, useState } from "react"
import Form from "./components/Form"
import TasksList from "./components/TasksList"
import { TasksContext } from "./context/TasksContext"
import { TaskToUpdateContext } from "./context/TaskToUpdateContext"
import { ITask } from "./interface/ITask"
import api from "./services/api"

function App() {
  const [tasks, setTasks] = useState([])
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | undefined>(undefined)

  useEffect(() => {
    const getTasks = async () => {
      await api.get("atividade").then((response) => setTasks(response.data))
    }
    getTasks()
  }, [])

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      <div className="container my-3">
        <Form />
        <TaskToUpdateContext.Provider value={{ taskToUpdate, setTaskToUpdate }}>
          <TasksList />
        </TaskToUpdateContext.Provider>
      </div>
    </TasksContext.Provider>
  )
}

export default App
