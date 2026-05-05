import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import styles from '../styles/navbar.module.scss'
import logo from '/img/logo.png'
import User from './UserDropdown'

const NavBar = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.navbar}>
      <img
        src={logo}
        alt="Logo"
        className={styles.navbarLogo}
        onClick={() => navigate('/')}
      />
      <div className={styles.icons}>
        <FaBars className={styles.hamburgerIcon} />
        <User />
      </div>
    </div>
  )
}

export default NavBar
