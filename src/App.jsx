import './reset.css'
import './App.css'
import { useState } from 'react'
import { Home } from './pages/Home'
import { Log } from './pages/Log'
import { Report } from './pages/Report'

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
  const [currentPage, setCurrentPage] = useState('home');
  return (
    <div>
      {currentPage === 'home' && <Home logRoute={logRoute} reportRoute={reportRoute}/>}
      {currentPage === 'log' && <Log homeRoute={homeRoute}/>}
      {currentPage === 'report' && <Report homeRoute={homeRoute}/>}
    </div>
    
  )
}

export default App
