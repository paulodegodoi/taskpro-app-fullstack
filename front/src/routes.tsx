import { Routes, Route, Link } from "react-router-dom"
import Atividades from "./pages/atividades/Atividades"

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="atividades" element={<Atividades />} />
    </Routes>
  )
}
