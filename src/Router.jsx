import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Objetivos } from './pages/Objetivos'
import { Publico } from './pages/Publico'
import { Equipamentos } from './pages/Equipamentos'
import { Funcionamento } from './pages/Funcionamento'
import { Download } from './pages/Download'
import { Bibliografia } from './pages/Bibliografia'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Objetivos" element={<Objetivos />} />
      <Route path="/Publico" element={<Publico />} />
      <Route path="/Equipamentos" element={<Equipamentos />} />
      <Route path="/Funcionamento" element={<Funcionamento />} />
      <Route path="/Download" element={<Download />} />
      <Route path="/Bibliografia" element={<Bibliografia />} />
    </Routes>
  )
}
