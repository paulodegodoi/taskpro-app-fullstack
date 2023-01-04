import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import { TasksContext } from "../../context/TasksContext"
import { TaskToUpdateContext } from "../../context/TaskToUpdateContext"
import api from "../../services/api"
import { AlertVariantEnum } from "../AlertMessage"

interface IUpdateModalProps {
  showUpdateModal: boolean
  setShowUpdateModal: (value: boolean) => void
  setAlertMessage: (message: string) => void
  setAlertVariant: (variant: AlertVariantEnum | undefined) => void
}

export default function UpdateModal({
  showUpdateModal,
  setShowUpdateModal,
  setAlertMessage,
  setAlertVariant,
}: IUpdateModalProps) {
  const { tasks, setTasks } = useContext(TasksContext)
  const { taskToUpdate, setTaskToUpdate } = useContext(TaskToUpdateContext)

  async function handleEditTask() {
    await api
      .put("atividade/" + taskToUpdate!.id, taskToUpdate)
      .then((response) => {
        if (response.status == 200) {
          const { id } = response.data
          setTasks(tasks.map((task) => (task.id === id ? response.data : task)))

          setAlertMessage("Tarefa atualizada com sucesso.")
          setAlertVariant(AlertVariantEnum.Success)
          setTimeout(() => {
            setAlertMessage("")
          }, 3000)
        } else {
          setAlertMessage("Não foi possível atualizar a tarefa.")
          setAlertVariant(AlertVariantEnum.Fail)
          setTimeout(() => {
            setAlertMessage("")
          }, 3000)
        }
      })
    setShowUpdateModal(false)
  }

  function textHandler(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target
    if (name == "priority") {
      const intValue = parseInt(value)
      setTaskToUpdate({
        ...taskToUpdate!,
        [name]: intValue,
      })
    } else {
      setTaskToUpdate({
        ...taskToUpdate!,
        [name]: value,
      })
    }
  }

  return (
    <Modal show={showUpdateModal} onHide={() => setShowUpdateModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Editar tarefa: {taskToUpdate?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="col-md-12 mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Nome
          </label>
          <input
            name="name"
            type="text"
            className="form-control"
            placeholder="Nome da tarefa"
            value={taskToUpdate?.name}
            onChange={textHandler}
          />
        </div>
        <div className="col-md-12 mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Descrição
          </label>
          <textarea
            name="description"
            className="form-control"
            placeholder="Descrição da tarefa"
            value={taskToUpdate?.description}
            onChange={textHandler}
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="selectPriority" className="form-label">
            Prioridade
          </label>
          <select
            name="priority"
            className="form-select"
            aria-label="Selecione uma prioridade"
            value={taskToUpdate?.priority}
            onChange={textHandler}
          >
            <option value={4}>Sem prioridade</option>
            <option value={1}>Baixa</option>
            <option value={2}>Normal</option>
            <option value={3}>Alta</option>
          </select>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowUpdateModal(false)}>
          Fechar
        </Button>
        <Button variant="primary" onClick={handleEditTask}>
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
