import React from 'react'
import styles from '../styles/navbar.module.scss'
import logo from '/img/logo.png'
import { FaUserCircle } from 'react-icons/fa'

const NavBar = () => {
  return (
    
    <div className={styles.navbar}>
      <img src={logo} alt="Logo" className={styles.navbarLogo} />
      
      <button className={styles.userIcon}><FaUserCircle/></button>
    </div>
  )
}

export default NavBar
