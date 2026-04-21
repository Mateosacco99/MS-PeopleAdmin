import React from 'react'
import styles from '../styles/navbar.module.scss'
import logo from '/img/logo.png'
import User from './UserDropdown'

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <img src={logo} alt="Logo" className={styles.navbarLogo} />
      <User />
    </div>
  )
}

export default NavBar
