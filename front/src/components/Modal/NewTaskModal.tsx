import { useContext, useState } from "react"
import { Button, Modal } from "react-bootstrap"
import { TasksContext } from "../../context/TasksContext"
import { ITask } from "../../interface/ITask"
import api from "../../services/api"

interface INewTaskModalProps {
  showNewTaskModal: boolean
  setShowNewTaskModal: (value: boolean) => void
}

export default function NewTaskModal({
  showNewTaskModal,
  setShowNewTaskModal,
}: INewTaskModalProps) {
  const { tasks, setTasks } = useContext(TasksContext)
  const [newTask, setNewTask] = useState<ITask>()
  const [taskName, setTaskName] = useState("")
  const [taskDescription, setTaskDescription] = useState("")
  const [taskPriority, setTaskPriority] = useState(0)
  // React.FormEvent<HTMLFormElement>

  function handleAddNewTask(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault()

    const newTask = {
      name: taskName,
      description: taskDescription,
      priority: taskPriority,
    }

    async function saveNewTask() {
      await api
        .post("atividade", newTask)
        .then((response) => setTasks([...tasks, response.data]))
    }

    if (newTask.name != "") {
      saveNewTask()
      setShowNewTaskModal(false)
    } else {
      window.alert("Preencha o nome da tarefa")
    }
  }

  function clearData() {
    setTaskName("")
    setTaskDescription("")
    setTaskPriority(0)
    setShowNewTaskModal(false)
  }

  return (
    <Modal show={showNewTaskModal} onHide={() => setShowNewTaskModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Adicionar tarefa</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
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
        <div className="mt-3">
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
        <div className="mt-3">
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
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={clearData}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={(e) => handleAddNewTask(e)}>
          Adicionar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
