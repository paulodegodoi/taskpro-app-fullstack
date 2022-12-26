import { ITask } from "../interface/ITask"
import {
  faFaceMeh,
  faFaceSmile,
  faFaceSurprise,
} from "@fortawesome/free-regular-svg-icons"
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Modal } from "react-bootstrap"
import { useState } from "react"

interface ITaskProps {
  task: ITask
  handleDeleteTask: (id: number) => void
  handleEditTask: (task: ITask) => void
}

export default function Task(props: ITaskProps) {
  const [task, setTask] = useState(props.task)
  const handleDeleteTask = props.handleDeleteTask

  const [taskToEdit, setTaskToEdit] = useState<ITask>()
  const [showModal, setShowModal] = useState(false)

  function handleEditTask() {
    setTask(taskToEdit!)
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

  function handleShowModal(selectedTask: ITask) {
    setTaskToEdit(selectedTask)
    setShowModal(true)
  }

  function setPriorityName(value: number, style?: boolean) {
    switch (value) {
      case 1:
        return !style ? "Baixa" : "text-success"
      case 2:
        return !style ? "Normal" : "text-warning"
      case 3:
        return !style ? "Alta" : "text-danger"
      default:
        return "Não definida"
    }
  }

  return (
    <>
      <div key={task.id} className="card shadow-sm my-3">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5 className="card-title">{task.name}</h5>
            <h6 className="card-subtitle">
              Prioridade:
              <span className={"ms-1 " + setPriorityName(task.priority, true)}>
                <FontAwesomeIcon
                  className="me-1"
                  icon={
                    task.priority == 1
                      ? faFaceSmile
                      : task.priority == 2
                      ? faFaceMeh
                      : faFaceSurprise
                  }
                />
                <b>{setPriorityName(task.priority)}</b>
              </span>
            </h6>
          </div>
          <p className="card-text">{task.description}</p>
          <div className="d-flex justify-content-end">
            <button
              className="me-2 btn btn-sm btn-outline-primary"
              onClick={() => handleShowModal(props.task)}
            >
              <FontAwesomeIcon className="me-1" icon={faPen} />
              Editar
            </button>
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => handleDeleteTask(task.id!)}
            >
              <FontAwesomeIcon className="me-1" icon={faTrash} />
              Deletar
            </button>
          </div>
        </div>
      </div>
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
              value={taskToEdit?.name}
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
              value={taskToEdit?.description}
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
              value={taskToEdit?.priority}
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
    </>
  )
}
