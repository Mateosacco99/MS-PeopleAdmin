import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from "./views/Login"
import MainLayout from "./views/MainLayout"
import { UserProvider } from './context/UserContext'
import Inicio from './views/Inicio'

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<MainLayout />}>
            <Route path="/" element={<Inicio />} />
            <Route path="/perfil" element={<div>Mi Perfil</div>} />
            <Route path="/recibos" element={<div>Mis Recibos</div>} />
            <Route path="/avisos" element={<div>Comunicaciones</div>} />
            <Route path="/configuracion" element={<div>Configuración</div>} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </UserProvider>
  )
}

export default App