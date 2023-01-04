import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import { TasksContext } from "../../context/TasksContext"
import { TaskToUpdateContext } from "../../context/TaskToUpdateContext"
import api from "../../services/api"

interface IDeleteModalProps {
  showDeleteModal: boolean
  setShowDeleteModal: (value: boolean) => void
}

export default function DeleteModal({
  showDeleteModal,
  setShowDeleteModal,
}: IDeleteModalProps) {
  const { tasks, setTasks } = useContext(TasksContext)
  const { taskToUpdate } = useContext(TaskToUpdateContext)

  async function handleDeleteTask() {
    await api.delete("atividade/" + taskToUpdate!.id).then((response) => {
      if (response.data.message == "Deletado") {
        const filteredTasks = tasks.filter((atv) => atv.id != taskToUpdate!.id)
        setTasks(filteredTasks)
      } else alert("Não foi possível remover a tarefa")
    })
    setShowDeleteModal(false)
  }

  return (
    <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Deletar tarefa: {taskToUpdate?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>Deseja realmente deletar a tarefa?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={handleDeleteTask}>
          Deletar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
