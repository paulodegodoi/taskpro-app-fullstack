import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Form } from "react-bootstrap"

export default function Clientes() {
  const clientList = [
    {
      nome: "Google",
      responsavel: "Clinton",
      numero: 83939848,
    },
    {
      nome: "Facebook",
      responsavel: "Mark",
      numero: 12832723,
    },
    {
      nome: "Microsoft",
      responsavel: "Bill",
      numero: 32234233,
    },
  ]

  const keys = Object.keys(clientList[0])

  return (
    <>
      <Form.Control
        size="lg"
        type="text"
        placeholder="Buscar"
        className="mb-2"
      />
      <table className="table table-striped table-hover">
        <thead className="table-primary ">
          <tr>
            {keys.map((key) => (
              <th key={key}>{key}</th>
            ))}
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {clientList.map((cliente) => (
            <tr key={cliente.numero}>
              <td>{cliente.nome}</td>
              <td>{cliente.responsavel}</td>
              <td>{cliente.numero}</td>
              <td colSpan={1}>
                <button className="btn btn-rouded btn-outline-primary me-2">
                  <FontAwesomeIcon className="me-2" icon={faPen} />
                  Editar
                </button>
                <button className="btn btn-rouded btn-outline-danger">
                  <FontAwesomeIcon className="me-2" icon={faTrash} />
                  Desativar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
