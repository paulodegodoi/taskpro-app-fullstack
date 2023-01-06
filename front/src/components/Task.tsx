import { ITask } from "../interface/ITask"
import {
  faFaceMeh,
  faFaceSmile,
  faFaceSurprise,
} from "@fortawesome/free-regular-svg-icons"
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import { TaskToUpdateContext } from "../context/TaskToUpdateContext"

interface ITaskProps {
  task: ITask
  setShowUpdateModal: (value: boolean) => void
  setShowDeleteModal: (value: boolean) => void
}

export default function Task({
  task,
  setShowUpdateModal,
  setShowDeleteModal,
}: ITaskProps) {
  const { setTaskToUpdate } = useContext(TaskToUpdateContext)

  function handleShowUpdateModal(selectedTask: ITask) {
    setTaskToUpdate(selectedTask)
    setShowUpdateModal(true)
  }

  function handleShowDeleteModal(task: ITask) {
    setTaskToUpdate(task)
    setShowDeleteModal(true)
  }

  function setPriorityName(value: number, style?: boolean) {
    switch (value) {
      case 1:
        return !style ? "Baixa" : "success"
      case 2:
        return !style ? "Normal" : "warning"
      case 3:
        return !style ? "Alta" : "danger"
      default:
        return "Não definida"
    }
  }

  return (
    <div
      key={task.id}
      className={
        "card shadow-sm my-3 border-" + setPriorityName(task.priority, true)
      }
    >
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">{task.name}</h5>
          <h6 className="card-subtitle">
            Prioridade:
            <span
              className={"ms-1 text-" + setPriorityName(task.priority, true)}
            >
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
            onClick={() => handleShowUpdateModal(task)}
          >
            <FontAwesomeIcon className="me-1" icon={faPen} />
            Editar
          </button>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => handleShowDeleteModal(task)}
          >
            <FontAwesomeIcon className="me-1" icon={faTrash} />
            Deletar
          </button>
        </div>
      </div>
    </div>
  )
}
