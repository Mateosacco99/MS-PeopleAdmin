import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from "./views/Login"
import MainLayout from "./views/MainLayout"
import { UserProvider } from './context/UserContext'
import Inicio from './views/Inicio'
import Perfil from './views/Perfil'
import Recibos from './views/Recibos'
import Avisos from './views/Avisos'
import Configuracion from './views/Configuracion'

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<MainLayout />}>
            <Route path="/" element={<Inicio />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/recibos" element={<Recibos />} />
            <Route path="/avisos" element={<Avisos />} />
            <Route path="/configuracion" element={<Configuracion />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </UserProvider>
  )
}

export default App