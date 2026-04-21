import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from "./views/Login"
import MainLayout from "./views/MainLayout"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<MainLayout />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App

