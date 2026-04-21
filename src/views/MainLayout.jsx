import React from 'react'
import { Outlet } from 'react-router-dom'
import ResponsiveLayout from '../components/ResponsiveLayout'

const MainLayout = () => {
  return (
    <ResponsiveLayout>
      <Outlet />
    </ResponsiveLayout>
  )
}

export default MainLayout
