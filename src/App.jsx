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
          <Route element={<MainLayout />}>
            <Route path="/" element={<div>Dashboard</div>} />
            <Route path="/profile" element={<div>Profile</div>} />
            <Route path="/users" element={<div>Users</div>} />
            <Route path="/settings" element={<div>Settings</div>} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </UserProvider>
  )
}

export default App