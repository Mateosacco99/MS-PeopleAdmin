import React, { useState, useRef, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import styles from '../styles/userDropdown.module.scss'
import { FaUserCircle } from 'react-icons/fa'

const User = () => {
  const navigate = useNavigate()
  const { user, logout } = useContext(UserContext)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const dropdownRef = useRef(null)

  const handleLogout = () => {
    setDropdownOpen(false)
    logout()
    navigate('/login')
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className={styles.userMenuContainer} ref={dropdownRef}>
      <button 
        className={styles.userIcon}
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <FaUserCircle/>
      </button>
      {dropdownOpen && (
        <div className={styles.dropdown}>
          <div className={styles.username}>{user?.username}</div>
          <hr></hr>
          <button className={styles.logoutBtn} onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </div>
      )}
    </div>
  )
}

export default User
