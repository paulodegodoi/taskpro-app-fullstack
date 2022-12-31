interface INewTaskButtonProps {
  setShowNewTaskModal: (value: boolean) => void
}
export default function NewTaskButton({
  setShowNewTaskModal,
}: INewTaskButtonProps) {
  return (
    <button
      onClick={() => setShowNewTaskModal(true)}
      className="btn btn-rounded btn-success"
    >
      Adicionar
    </button>
  )
}
