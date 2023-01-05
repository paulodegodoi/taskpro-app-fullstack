import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">PRO ATIVIDADE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Clientes</Nav.Link>
            <Nav.Link href="#link">Atividades</Nav.Link>
          </Nav>
          <NavDropdown title="Paulo" id="basic-nav-dropdown" align="end">
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
