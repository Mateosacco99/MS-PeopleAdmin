import React, { useState, useEffect } from 'react'
import styles from '../styles/login.module.scss'
import { BotonGenerico } from '../components/BotonGenerico'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login attempt:', { username, password })
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
