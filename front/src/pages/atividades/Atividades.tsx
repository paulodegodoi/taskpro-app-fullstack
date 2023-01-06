import { useState } from "react"
import NewTaskModal from "../../components/Modal/NewTaskModal"
import NewTaskMenu from "../../components/NewTaskMenu"
import TasksList from "../../components/TasksList"

export default function Atividades() {
  const [showNewTaskModal, setShowNewTaskModal] = useState(false)

  return (
    <>
      <NewTaskMenu setShowNewTaskModal={setShowNewTaskModal} />
      <NewTaskModal
        showNewTaskModal={showNewTaskModal}
        setShowNewTaskModal={setShowNewTaskModal}
      />
      <TasksList />
    </>
  )
}
