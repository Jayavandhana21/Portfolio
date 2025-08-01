import About from './components/About'
import Contact from './components/Contacts'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Technologies from './components/Technologies'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"


function App() {

  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 '>
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      </div>  
      <div className='container mx-auto px-10'>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero/>
              <About/>
              <Education/>
              <Technologies/>
              <Experience/>
              <Projects/>
              <Contact/>
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
        <Analytics />
        
      </div>
    </div>
  )
}

export default App