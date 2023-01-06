import { Routes, Route, Link } from "react-router-dom"
import Atividades from "./pages/atividades/Atividades"
import Clientes from "./pages/clientes/Clientes"
import Home from "./pages/home/Home"

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="atividades" element={<Atividades />} />
      <Route path="clientes" element={<Clientes />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
