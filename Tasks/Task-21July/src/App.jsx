import { useState } from 'react'
import HighlightCard from './components/HighlightCard'
import Header from './components/Header'
import WelcomeSection from './components/WelcomeSection'
import ProjectSection from './components/ProjectSection'
import ZigzagSection from './components/ZigzagSection'
import TestimonialSection from './components/TestimonialSection'
import Footer from './components/Footer'

function App() {

  return (
    <div className='bg-slate-300 min-h-screen font-["Poppins"]'>
      <Header/>
      <WelcomeSection/>
      <ProjectSection/>
      <ZigzagSection/>
      <TestimonialSection/>
      <Footer/>
    </div>
  )
}

export default App
