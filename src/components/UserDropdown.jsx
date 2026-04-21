import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../styles/userDropdown.module.scss'
import { FaUserCircle } from 'react-icons/fa'

const User = () => {
  const navigate = useNavigate()
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const dropdownRef = useRef(null)

  const handleLogout = () => {
    setDropdownOpen(false)
    navigate('/')
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
          <button className={styles.logoutBtn} onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </div>
      )}
    </div>
  )
}

export default User
