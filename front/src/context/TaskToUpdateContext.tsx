import { createContext } from "react"
import { ITask } from "../interface/ITask"

type TaskToUpdateContextProps = {
  taskToUpdate: ITask | undefined
  setTaskToUpdate: (task: ITask) => void
}

const initialValue = {
  taskToUpdate: undefined,
  setTaskToUpdate: (task: ITask) => {},
}

export const TaskToUpdateContext =
  createContext<TaskToUpdateContextProps>(initialValue)
