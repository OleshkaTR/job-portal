import React from 'react'
import { Outlet } from 'react-router-dom'

const ProtectedRoute = ({ requiredRole }) => {
  return <Outlet />
}

export default ProtectedRoute