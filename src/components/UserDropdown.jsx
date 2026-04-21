import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../styles/userDropdown.module.scss'
import { FaUserCircle } from 'react-icons/fa'

const User = () => {
  const navigate = useNavigate()
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const handleLogout = () => {
    setDropdownOpen(false)
    navigate('/')
  }

  return (
    <div className={styles.userMenuContainer}>
      <button 
        className={styles.userIcon}
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <FaUserCircle/>
      </button>
      {dropdownOpen && (
        <div className={styles.dropdown}>
          <button className={styles.logoutBtn} onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </div>
      )}
    </div>
  )
}

export default User
