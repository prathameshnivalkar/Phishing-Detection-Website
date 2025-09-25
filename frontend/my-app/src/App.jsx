import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import SecurityReport from './components/SecurityReport'
import HowItWorks from './components/HowItWorks'
import AdvancedDetection from './components/AdvancedDetection'
import WhyChoose from './components/WhyChoose'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <SecurityReport />
      <HowItWorks />
      <AdvancedDetection />
      <WhyChoose />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default App
