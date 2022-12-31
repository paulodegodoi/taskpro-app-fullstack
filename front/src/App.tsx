import { useEffect, useState } from "react"
import Header from "./components/Header"
import NewTaskModal from "./components/Modal/NewTaskModal"
import TasksList from "./components/TasksList"
import { TasksContext } from "./context/TasksContext"
import { TaskToUpdateContext } from "./context/TaskToUpdateContext"
import { ITask } from "./interface/ITask"
import api from "./services/api"

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | undefined>(undefined)
  const [showNewTaskModal, setShowNewTaskModal] = useState(false)

  useEffect(() => {
    const getTasks = async () => {
      await api.get("atividade").then((response) => setTasks(response.data))
    }
    getTasks()
  }, [])

  return (
    <div className="container my-3">
      <TasksContext.Provider value={{ tasks, setTasks }}>
        <Header setShowNewTaskModal={setShowNewTaskModal} />
        <NewTaskModal
          showNewTaskModal={showNewTaskModal}
          setShowNewTaskModal={setShowNewTaskModal}
        />
        <TaskToUpdateContext.Provider value={{ taskToUpdate, setTaskToUpdate }}>
          <TasksList />
        </TaskToUpdateContext.Provider>
      </TasksContext.Provider>
    </div>
  )
}

export default App
