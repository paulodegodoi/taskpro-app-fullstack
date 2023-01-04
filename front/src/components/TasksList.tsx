import { useContext, useEffect, useState } from "react"
import { TasksContext } from "../context/TasksContext"
import DeleteModal from "./Modal/DeleteModal"
import UpdateModal from "./Modal/UpdateModal"
import Task from "./Task"

export default function TasksList() {
  const { tasks } = useContext(TasksContext)
  const [showUpdateModal, setShowUpdateModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  return (
    <div className="col-12">
      {tasks != null &&
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            setShowUpdateModal={setShowUpdateModal}
            setShowDeleteModal={setShowDeleteModal}
          />
        ))}
      <UpdateModal
        showUpdateModal={showUpdateModal}
        setShowUpdateModal={setShowUpdateModal}
      />
      <DeleteModal
        showDeleteModal={showDeleteModal}
        setShowDeleteModal={setShowDeleteModal}
      />
    </div>
  )
}
