import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
  function handle() {
    const style = "color: black"
    return `style=${style}`
  }
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          PRO ATIVIDADE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="clientes">
              Clientes
            </Nav.Link>
            <Nav.Link as={NavLink} to="atividades">
              Atividades
            </Nav.Link>
          </Nav>
          <NavDropdown
            className="text-white"
            title="Paulo"
            id="basic-nav-dropdown"
            align="end"
          >
            <NavDropdown.Item href="#action/3.1">Perfil</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Configurações
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.3">Sair</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
