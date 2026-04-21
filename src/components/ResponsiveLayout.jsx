import React from 'react'
import useWindowSize from '../hooks/useWindowSize'
import NavBar from './NavBar'
import Sidebar from './Sidebar'
import styles from '../styles/responsiveLayout.module.scss'

const ResponsiveLayout = ({ children }) => {
  const { width } = useWindowSize()
  
  // Mobile and Tablet (up to 980px)
  const isMobile = width <= 980

  return (
    <div className={styles.layoutContainer}>
      {isMobile ? (
        <NavBar />
      ) : (
        <Sidebar />
      )}
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  )
}

export default ResponsiveLayout
