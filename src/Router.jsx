import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { SignIn } from './pages/SignIn'
import { Objective } from './pages/Objective'
import { Public } from './pages/Public'
import { Hardware } from './pages/Hardware'
import { Operation } from './pages/Operation'
import { Download } from './pages/Download'
import { Bibliography } from './pages/Bibliography'
import { DefaultLayout } from './layout/Default'
import { SignUp } from './pages/SignUp'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Publico" element={<Public />} />

      <Route path="/" element={<DefaultLayout />}>
        <Route path="/Login" element={<SignIn />} />
        <Route path="/Cadastro" element={<SignUp />} />
        <Route path="/Objetivos" element={<Objective />} />
        <Route path="/Equipamentos" element={<Hardware />} />
        <Route path="/Funcionamento" element={<Operation />} />
        <Route path="/Download" element={<Download />} />
        <Route path="/Bibliografia" element={<Bibliography />} />
      </Route>
    </Routes>
  )
}
