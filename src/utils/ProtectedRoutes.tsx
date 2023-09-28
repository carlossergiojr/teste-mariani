import useAppSelector from '@/hooks/useAppSelector'
import { Outlet, Navigate, useLocation } from 'react-router-dom'

const useAuth = () => {
  const location = useLocation()
  const PUBLIC_PATHS = [
    '/',
    '/login',
    '/register',
    '/forgot-password',
    '/dashboard'
  ]

  if (PUBLIC_PATHS.includes(location.pathname)) return true

  const { token } = useAppSelector((state) => state.auth)

  if (token) return true

  return false
}

export const ProtectedRoutes = () => {
  const isAuth = useAuth()

  return isAuth ? <Outlet /> : <Navigate to="/login" />
}
