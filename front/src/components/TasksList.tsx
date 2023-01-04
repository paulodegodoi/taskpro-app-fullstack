import { useContext, useEffect, useState } from "react"
import { TasksContext } from "../context/TasksContext"
import AlertMessage, { AlertVariantEnum } from "./AlertMessage"
import DeleteModal from "./Modal/DeleteModal"
import UpdateModal from "./Modal/UpdateModal"
import Task from "./Task"

export default function TasksList() {
  const { tasks } = useContext(TasksContext)
  const [showUpdateModal, setShowUpdateModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [alertMessage, setAlertMessage] = useState<string>("")
  const [alertVariant, setAlertVariant] = useState<
    AlertVariantEnum | undefined
  >(undefined)

  return (
    <div className="col-12">
      {alertMessage != "" && (
        <AlertMessage message={alertMessage} variant={alertVariant} />
      )}
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
        setAlertMessage={setAlertMessage}
        setAlertVariant={setAlertVariant}
      />
      <DeleteModal
        showDeleteModal={showDeleteModal}
        setShowDeleteModal={setShowDeleteModal}
        setAlertMessage={setAlertMessage}
        setAlertVariant={setAlertVariant}
      />
    </div>
  )
}
