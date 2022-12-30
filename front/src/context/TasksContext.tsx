import { createContext } from "react"
import { ITask } from "../interface/ITask"

type TasksContextProps = {
  tasks: ITask[]
  setTasks: (tasks: ITask[], newtask?: ITask) => void
}

const initialValue = {
  tasks: [
    {
      id: 0,
      name: "",
      description: "",
      priority: 0,
    },
  ],
  setTasks: (a: any) => {},
}

export const TasksContext = createContext<TasksContextProps>(initialValue)
