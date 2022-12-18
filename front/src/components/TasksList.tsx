import { useContext, useState } from "react"
import { TasksContext } from "../context/TasksContext"
import { ITask } from "../interface/ITask"
import Task from "./Task"

export default function TasksList() {
  const { tasks, setTasks } = useContext(TasksContext!)

  function handleEditTask(task: ITask) {
    console.log(task)
  }

  function handleDeleteTask(id: number) {
    const filteredTasks = tasks.filter((atv) => atv.id != id)
    setTasks([...filteredTasks])
  }

  return (
    <div className="col-12">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleDeleteTask={handleDeleteTask}
          handleEditTask={handleEditTask}
        />
      ))}
    </div>
  )
}
