import './reset.css'
import './App.css'
import { useState } from 'react'
import { Home } from './pages/Home'
import { Log } from './pages/Log'
import { Report } from './pages/Report'
import { Register } from './pages/Register'
import { Login } from './pages/Login'

function App() {
  const logRoute = () => {
    setCurrentPage('log')
  }
  const homeRoute = () => {
    setCurrentPage('home')
  }
  const reportRoute = () => {
    setCurrentPage('report')
  }
  const registerRoute = () => {
    setCurrentPage('register')
  }
  const loginRoute = () => {
    setCurrentPage('login')
  }
  const [currentPage, setCurrentPage] = useState('register');
  return (
    <div>
      {currentPage === 'home' && <Home logRoute={logRoute} reportRoute={reportRoute}/>}
      {currentPage === 'log' && <Log homeRoute={homeRoute}/>}
      {currentPage === 'report' && <Report homeRoute={homeRoute}/>}
      {currentPage === 'register' && <Register homeRoute={registerRoute}/>}
      {currentPage === 'login' && <Login homeRoute={loginRoute}/>}
    </div>
    
  )
}

export default App
