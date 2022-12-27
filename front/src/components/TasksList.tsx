import { useContext, useState } from "react"
import { TasksContext } from "../context/TasksContext"
import { ITask } from "../interface/ITask"
import UpdateModal from "./Modal/UpdateModal"
import Task from "./Task"

export default function TasksList() {
  const { tasks } = useContext(TasksContext!)
  const [showModal, setShowModal] = useState(false)
  const [taskToEdit, setTaskToEdit] = useState<ITask>()

  return (
    <div className="col-12">
      {tasks.map((task) => (
        <Task key={task.id} task={task} setShowModal={setShowModal} />
      ))}
      <UpdateModal
        showModal={showModal}
        setShowModal={setShowModal}
        taskToEdit={taskToEdit}
        setTaskToEdit={setTaskToEdit}
      />
    </div>
  )
}
