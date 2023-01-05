interface INewTaskMenuProps {
  setShowNewTaskModal: (value: boolean) => void
}

export default function NewTaskMenu({
  setShowNewTaskModal,
}: INewTaskMenuProps) {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <h2 className="d-inline">Atividades</h2>
      <button
        onClick={() => setShowNewTaskModal(true)}
        className="btn btn-rounded btn-success"
      >
        Adicionar
      </button>
    </div>
  )
}
