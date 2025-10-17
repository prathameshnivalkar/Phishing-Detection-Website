import React from 'react'
import './HowItWorks.css'

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Enter URL",
      description: "Simply paste any website URL into our scanning tool and click analyze."
    },
    {
      number: 2,
      title: "AI Analysis",
      description: "Our advanced AI algorithms analyze the website for phishing indicators and security threats."
    },
    {
      number: 3,
      title: "Get Results",
      description: "Receive instant, detailed security analysis with actionable recommendations."
    }
  ]

  return (
    <section id="how" className="how-it-works section section-white">
      <div className="container">
        <div className="section-header text-center mb-6">
          <h2>How It Works</h2>
          <p>Our three-step process makes it easy to verify website security and protect yourself from phishing attacks.</p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={step.number} className="step-item">
              <div className="step-icon">
                <span className="step-number">{step.number}</span>
                {step.number === 1 && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                {step.number === 2 && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                    <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                )}
                {step.number === 3 && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
