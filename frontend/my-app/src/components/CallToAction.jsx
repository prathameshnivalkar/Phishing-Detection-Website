import React from 'react'
import './CallToAction.css'

const CallToAction = () => {
  return (
    <section className="cta section section-blue">
      <div className="container">
        <div className="cta-content text-center">
          <h2>Stay Safe Online Today</h2>
          <p>Don't let phishing attacks compromise your security. Start protecting yourself with our free website scanner.</p>
          <button className="btn btn-white">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
              <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2"/>
            </svg>
            Start Scanning Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
