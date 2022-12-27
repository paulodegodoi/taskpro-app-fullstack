import { useContext, useState } from "react"
import { TasksContext } from "../context/TasksContext"
import { ITask } from "../interface/ITask"
import api from "../services/api"

export default function Form() {
  const { tasks, setTasks } = useContext(TasksContext)
  const [newTask, setNewTask] = useState<ITask>()
  const [taskName, setTaskName] = useState("")
  const [taskDescription, setTaskDescription] = useState("")
  const [taskPriority, setTaskPriority] = useState(0)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    async function addNewTask() {
      await api
        .post("atividade", newTask)
        .then((response) => setTasks([...tasks, response.data]))
    }
    if (newTask != undefined && newTask!.name != "") {
      addNewTask()
    } else {
      window.alert("Preencha o nome da tarefa")
    }
  }

  function handleAddNewTask() {
    setNewTask({
      name: taskName,
      description: taskDescription,
      priority: taskPriority,
    })
  }

  return (
    <form className="row g-3 my-3" onSubmit={handleSubmit}>
      <div className="col-md-6 mb-3">
        <label htmlFor="formGroupExampleInput" className="form-label">
          Nome
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Nome da tarefa"
          onChange={(e) => setTaskName(e.target.value)}
          value={taskName}
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
          placeholder="Descrição da tarefa"
          onChange={(e) => setTaskDescription(e.target.value)}
          value={taskDescription}
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
          onChange={(e) => setTaskPriority(parseInt(e.target.value))}
          value={taskPriority}
        >
          <option defaultValue={0}>Sem prioridade</option>
          <option value="1">Baixa</option>
          <option value="2">Normal</option>
          <option value="3">Alta</option>
        </select>
      </div>
      <div className="col-12">
        <button
          type="submit"
          className="btn btn-outline-primary"
          onClick={handleAddNewTask}
        >
          Adicionar
        </button>
      </div>
    </form>
  )
}
