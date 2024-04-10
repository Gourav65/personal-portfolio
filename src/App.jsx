import React from 'react'
import './App.css'
import Blog from './pages/Blog/Blog.jsx'
import Landing from './pages/Landing/Landing.jsx'
import {BrowserRouter,Route,Routes} from"react-router-dom"
import Contact from './pages/contact/Contact.jsx'
import Work from './pages/Work/Work.jsx'
import Testimonials from './pages/Testimonials/Testimonials.jsx'
import Resume from './pages/Resume/Resume.jsx'
import Navbar from './component/Navbar/Navbar.jsx'
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/work' element={<Work/>} />
          <Route path='/testimonials' element={<Testimonials/>} />
          <Route path='/resume' element={<Resume/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App