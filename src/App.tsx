// src/App.js

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { LoginPage } from './pages/Login'
import { RegisterPage } from './pages/Register'
import { DashboardPage } from './pages/Dashboard'
import { ForgotPasswordPage } from './pages/ForgotPassword'
import { ProtectedRoutes } from './utils/ProtectedRoutes'
import { Provider } from 'react-redux'
import store from './store/configureStore'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer
        theme="colored"
        position="top-right"
        autoClose={5000}
        newestOnTop
        bodyStyle={{ fontSize: '14px' }}
      />
    </Provider>
  )
}

export default App
