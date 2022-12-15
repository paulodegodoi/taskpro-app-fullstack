import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFaceSmile,
  faFaceMeh,
  faFaceSurprise,
} from "@fortawesome/free-regular-svg-icons"
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

function App() {
  const myTasks = [
    {
      id: 1,
      name: "Tarefa 01",
      descricao: "...",
      prioridade: 1,
    },
    {
      id: 2,
      name: "Tarefa 02",
      descricao: "...",
      prioridade: 2,
    },
    {
      id: 3,
      name: "Teste",
      descricao: "teste",
      prioridade: 3,
    },
  ]

  const [tasks, setTasks] = useState(myTasks)

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

  function deleteTask(id: number) {
    const filteredTasks = tasks.filter((atv) => atv.id != id)
    setTasks([...filteredTasks])
  }

  return (
    <div className="container my-3">
      <form className="row g-3 my-3">
        <div className="col-md-6 mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Nome
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Example input placeholder"
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Descrição
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Another input placeholder"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="selectPriority" className="form-label">
            Prioridade
          </label>
          <select
            id="selectPriority"
            className="form-select"
            aria-label="Selecione uma prioridade"
          >
            <option defaultValue={0}>Sem prioridade</option>
            <option value="1">Baixa</option>
            <option value="2">Normal</option>
            <option value="3">Alta</option>
          </select>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-outline-primary">
            Adicionar
          </button>
        </div>
      </form>

      <div className="col-12">
        {tasks.map((atv) => (
          <div className="card shadow-sm my-3">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">{atv.name}</h5>
                <h6 className="card-subtitle">
                  Prioridade:
                  <span
                    className={"ms-1 " + setPriorityName(atv.prioridade, true)}
                  >
                    <FontAwesomeIcon
                      className="me-1"
                      icon={
                        atv.prioridade == 1
                          ? faFaceSmile
                          : atv.prioridade == 2
                          ? faFaceMeh
                          : faFaceSurprise
                      }
                    />
                    <b>{setPriorityName(atv.prioridade)}</b>
                  </span>
                </h6>
              </div>
              <p className="card-text">Minha primeira atividade.</p>
              <div className="d-flex justify-content-end">
                <button className="me-2 btn btn-sm btn-outline-primary">
                  <FontAwesomeIcon className="me-1" icon={faPen} />
                  Editar
                </button>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => deleteTask(atv.id)}
                >
                  <FontAwesomeIcon className="me-1" icon={faTrash} />
                  Deletar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
