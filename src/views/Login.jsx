import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import styles from '../styles/login.module.scss'
import { BotonGenerico } from '../components/BotonGenerico'
import { empleadosList } from '../mock/mockEmpleados'

const Login = () => {
  const navigate = useNavigate()
  const { login } = useContext(UserContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    const foundUser = empleadosList.find(
      emp => emp.username === username && emp.password === password
    )

    if (foundUser) {
      login({
        username: foundUser.username,
        role: foundUser.rol,
        nombre: foundUser.nombre,
        apellido: foundUser.apellido,
        sexo: foundUser.sexo
      })
      navigate('/')
    } else {
      setError('Usuario o contraseña inválidos')
    }
  }

  return (
    <div className={styles.loginSection}>
      <div className={styles.loginContent}>
        <img
          src="/img/logo.png"
          alt="Company Logo"
          className={styles.loginLogo}
        />
        <form onSubmit={handleSubmit}>
          {error && <div className={styles.errorMessage}>{error}</div>}
          <div>
            <label htmlFor="username">Usuario</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <BotonGenerico tipo="accion" type="submit">Iniciar Sesion</BotonGenerico>
          <BotonGenerico tipo="accionSecundario">Olvide mi contraseña</BotonGenerico>
        </form>
      </div>
    </div>
  )
}

export default Login

