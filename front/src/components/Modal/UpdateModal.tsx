import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import { TaskToUpdateContext } from "../../context/TaskToUpdateContext"
import { ITask } from "../../interface/ITask"

interface IUpdateModalProps {
  showModal: boolean
  setShowModal: (value: boolean) => void
  taskToEdit: ITask | undefined
  setTaskToEdit: (task: ITask) => void
}

export default function UpdateModal({
  showModal,
  setShowModal,
  taskToEdit,
  setTaskToEdit,
}: IUpdateModalProps) {
  const { taskToUpdate, setTaskToUpdate } = useContext(TaskToUpdateContext)

  function handleEditTask() {
    // setTask(taskToUpdate!)
    setShowModal(false)
  }

  function textHandler(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target
    if (name == "priority") {
      const intValue = parseInt(value)
      setTaskToEdit({
        ...taskToEdit!,
        [name]: intValue,
      })
    } else {
      setTaskToEdit({
        ...taskToEdit!,
        [name]: value,
      })
    }
  }
  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Editar tarefa: {taskToEdit?.name}</Modal.Title>
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
            // newTaskName !== undefined ? newTaskName :
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
        <Button variant="secondary" onClick={() => setShowModal(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={handleEditTask}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
