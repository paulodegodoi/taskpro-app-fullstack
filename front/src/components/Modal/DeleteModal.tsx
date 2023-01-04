import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import { TasksContext } from "../../context/TasksContext"
import { TaskToUpdateContext } from "../../context/TaskToUpdateContext"
import api from "../../services/api"
import { AlertVariantEnum } from "../AlertMessage"

interface IDeleteModalProps {
  showDeleteModal: boolean
  setShowDeleteModal: (value: boolean) => void
  setAlertMessage: (message: string) => void
  setAlertVariant: (variant: AlertVariantEnum | undefined) => void
}

export default function DeleteModal({
  showDeleteModal,
  setShowDeleteModal,
  setAlertMessage,
  setAlertVariant,
}: IDeleteModalProps) {
  const { tasks, setTasks } = useContext(TasksContext)
  const { taskToUpdate } = useContext(TaskToUpdateContext)

  async function handleDeleteTask() {
    await api.delete("atividade/" + taskToUpdate!.id).then((response) => {
      if (response.data.message == "Deletado") {
        const filteredTasks = tasks.filter((atv) => atv.id != taskToUpdate!.id)
        setTasks(filteredTasks)

        setAlertMessage("Tarefa excluída com sucesso.")
        setAlertVariant(AlertVariantEnum.Success)
        setTimeout(() => {
          setAlertMessage("")
        }, 3000)
      } else {
        setAlertMessage("Não foi possível remover a tarefa.")
        setAlertVariant(AlertVariantEnum.Fail)
        setTimeout(() => {
          setAlertMessage("")
        }, 3000)
      }
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
