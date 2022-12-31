import NewTaskButton from "./NewTaskButton"

interface IHeaderProps {
  setShowNewTaskModal: (value: boolean) => void
}

export default function Header({ setShowNewTaskModal }: IHeaderProps) {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <h2 className="d-inline">Atividades</h2>
      <NewTaskButton setShowNewTaskModal={setShowNewTaskModal} />
    </div>
  )
}
