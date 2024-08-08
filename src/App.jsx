import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import PageNotFound from './components/PageNotFound'
import Footer from './components/Footer'

const App = () => {
  return (
      <div>
        <Router>
       <Navbar/>
          <Routes>
            <Route path='/' element = {<Home/>} />
            <Route path='/about' element = {<About/>} />
            <Route path='/services' element = {<Services/>} />
            <Route path='/contact' element = {<Contact/>} />
            <Route path='*' element = {<PageNotFound/>} />
          </Routes>
        </Router>
        <Footer/>
      </div>
  )
}

export default App
