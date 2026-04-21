import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from "./views/Login"
import MainLayout from "./views/MainLayout"
import { UserProvider } from './context/UserContext'

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<MainLayout />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </UserProvider>
  )
}

export default App