import React from 'react'
import './AdvancedDetection.css'

const AdvancedDetection = () => {
  const stats = [
    {
      value: "99.7%",
      label: "Detection Rate"
    },
    {
      value: "<2.5s",
      label: "Scan Time"
    },
    {
      value: "400+",
      label: "Sites Analyzed"
    },
    {
      value: "24/7",
      label: "Monitoring"
    }
  ]

  return (
    <section className="advanced-detection section section-light">
      <div className="container">
        <div className="section-header text-center mb-6">
          <h2>Advanced Detection Technology</h2>
          <p>Our system uses real-time machine learning, domain reputation analysis, SSL and certificate verification, and malware detection to provide the most accurate security assessment.</p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdvancedDetection
