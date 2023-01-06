import { useEffect, useState } from "react"
import NewTaskMenu from "./components/NewTaskMenu"
import NewTaskModal from "./components/Modal/NewTaskModal"
import { TasksContext } from "./context/TasksContext"
import { TaskToUpdateContext } from "./context/TaskToUpdateContext"
import { ITask } from "./interface/ITask"
import api from "./services/api"
import Header from "./components/Header"
import { BrowserRouter as Router } from "react-router-dom"
import MainRoutes from "./routes"

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | undefined>(undefined)

  useEffect(() => {
    const getTasks = async () => {
      await api.get("atividade").then((response) => setTasks(response.data))
    }
    getTasks()
  }, [])

  return (
    <>
      <Router>
        <Header />
        <div className="container my-3">
          <TasksContext.Provider value={{ tasks, setTasks }}>
            <TaskToUpdateContext.Provider
              value={{ taskToUpdate, setTaskToUpdate }}
            >
              <MainRoutes />
            </TaskToUpdateContext.Provider>
          </TasksContext.Provider>
        </div>
      </Router>
    </>
  )
}

export default App
