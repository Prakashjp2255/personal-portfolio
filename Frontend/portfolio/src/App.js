import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import TechnicalProficiency from './Components/TechnicalProficiency'
import AboutMe from './Components/AboutMe'
import MyProjects from './Components/MyProjects'
import Contact from './Components/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <TechnicalProficiency/>
      <AboutMe/>
      <MyProjects/>
      <Contact/>
    </div>
  )
}

export default App