import React, { useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import styles from '../styles/sidebar.module.scss'
import logo from '/img/logo.png'
import { FaHome, FaUser, FaUsers, FaCog, FaSignOutAlt, FaFileContract, FaCommentAlt } from 'react-icons/fa'
import { BotonGenerico } from './BotonGenerico'

const Sidebar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { user, logout } = useContext(UserContext)

  const menuItems = [
    { id: 'dashboard', label: 'Inicio', icon: FaHome, path: '/' },
    { id: 'perfil', label: 'Mi Perfil', icon: FaUser, path: '/perfil' },
    { id: 'recibos', label: 'Mis Recibos', icon: FaFileContract, path: '/recibos' },
    { id: 'avisos', label: 'Avisos', icon: FaCommentAlt, path: '/avisos' },
    { id: 'configuracion', label: 'Configuración', icon: FaCog, path: '/configuracion' },
  ]

  const getActiveItem = () => {
    const currentPath = location.pathname
    const activeMenuItem = menuItems.find(item => item.path === currentPath)
    return activeMenuItem ? activeMenuItem.id : 'dashboard'
  }

  const handleMenuClick = (item) => {
    navigate(item.path)
  }

  return (
    <div className={styles.sidebar}>
      <div className={styles.logoSection}>
        <img
          src={logo}
          alt="Logo"
          className={styles.sidebarLogo}
          onClick={() => navigate('/')}
        />
        <div className={styles.roleLabel}>{user?.nombre} {user?.apellido}</div>
      </div>

      <nav className={styles.sidebarContent}>
        <ul className={styles.menuList}>
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.id}>
                <BotonGenerico
                  tipo="sidebar"

                  className={`${styles.menuItem} ${getActiveItem() === item.id ? styles.active : ''}`}
                  onClick={() => handleMenuClick(item)}
                >
                  <Icon className={styles.menuIcon} />
                  <span className={styles.menuLabel}>{item.label}</span>
                </BotonGenerico>
              </li>
            )

          })}
        </ul>
        <div className={styles.logoutSection}>
          <BotonGenerico
            tipo="sidebarSalir"
            onClick={() => {
              logout()
              navigate('/login')
            }}
          >
            <FaSignOutAlt className={styles.logoutIcon} />
            <span className={styles.logoutLabel}>Cerrar Sesión</span>
          </BotonGenerico>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar

