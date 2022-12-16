import { useContext, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFaceMeh,
  faFaceSmile,
  faFaceSurprise,
} from "@fortawesome/free-regular-svg-icons"
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons"
import { TasksContext } from "../context/TasksContext"
import { ITask } from "../interface/ITask"

interface ITaskProp {
  id: number
  name: string
  description: string
  priority: number
}

interface ITasksContext {
  tasks: ITask[]
  setTasks: (tasks: ITask[]) => void
}

export default function Tasks() {
  const { tasks, setTasks } = useContext(TasksContext!)

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

  function handleDeleteTask(id: number) {
    const filteredTasks = tasks.filter((atv) => atv.id != id)
    setTasks([...filteredTasks])
  }

  return (
    <div className="col-12">
      {tasks.map((atv) => (
        <div key={atv.id} className="card shadow-sm my-3">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5 className="card-title">{atv.name}</h5>
              <h6 className="card-subtitle">
                Prioridade:
                <span className={"ms-1 " + setPriorityName(atv.priority, true)}>
                  <FontAwesomeIcon
                    className="me-1"
                    icon={
                      atv.priority == 1
                        ? faFaceSmile
                        : atv.priority == 2
                        ? faFaceMeh
                        : faFaceSurprise
                    }
                  />
                  <b>{setPriorityName(atv.priority)}</b>
                </span>
              </h6>
            </div>
            <p className="card-text">{atv.description}</p>
            <div className="d-flex justify-content-end">
              <button className="me-2 btn btn-sm btn-outline-primary">
                <FontAwesomeIcon className="me-1" icon={faPen} />
                Editar
              </button>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => handleDeleteTask(atv.id)}
              >
                <FontAwesomeIcon className="me-1" icon={faTrash} />
                Deletar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
