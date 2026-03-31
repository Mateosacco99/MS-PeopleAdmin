import React from 'react'
import styles from '../styles/navbar.module.scss'
import logo from '/img/logo.png'
import { FaUserCircle } from 'react-icons/fa'

const NavBar = () => {
  return (
    
    <div className={styles.navbar}>
      <img src={logo} alt="Logo" className={styles.navbarLogo} />
      
      <div><FaUserCircle/></div>
    </div>
  )
}

export default NavBar
