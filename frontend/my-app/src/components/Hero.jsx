// Hero.jsx
import React, { useState } from 'react'
import './Hero.css'
import SecurityReport from './SecurityReport'

const Hero = () => {
  const [url, setUrl] = useState('')
  const [report, setReport] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const validateUrl = (url) => {
    // More flexible URL validation
    const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
    return urlPattern.test(url) || url.includes('.')
  }

  const speakButtonScanning = () => {
    let utterance = new window.SpeechSynthesisUtterance("Scanning");
    utterance.lang = "hi-IN";
    window.speechSynthesis.speak(utterance);
  };
  const scanUrl = async () => {
    speakButtonScanning()
    // Clear previous states
    setError('')
    setReport(null)

    if (!url.trim()) {
      setError('Please enter a URL')
      return
    }

    if (!validateUrl(url.trim())) {
      setError('Please enter a valid URL (e.g., google.com or https://example.com)')
      return
    }

    setLoading(true)

    try {
      console.log('🚀 Starting scan for:', url)

      const response = await fetch('http://localhost:4000/api/scan', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ url: url.trim() })
      })

      console.log('📡 Response status:', response.status)

      if (!response.ok) {
        const errorData = await response.text()
        console.error('❌ Response not OK:', errorData)
        throw new Error(`Server error: ${response.status}`)
      }

      const data = await response.json()
      console.log('✅ Received data:', data)

      if (data.success !== false) {
        // Adjust security score and status based on detections
        let securityScore = data.securityScore ?? 100
        let status = data.status ?? 'safe'

        if (data.detections && data.detections.positive > 0) {
          // If positives detected, mark dangerous and lower max score
          securityScore = Math.min(securityScore, 30)
          status = 'dangerous'
        } else if (securityScore < 70) {
          status = 'suspicious'
        } else {
          status = 'safe'
        }

        setReport({
          ...data,
          securityScore,
          status
        })
        setError('')
      } else {
        throw new Error(data.error || 'Scan failed')
      }
    } catch (error) {
      console.error(' Scan error:', error)

      if (error.message.includes('fetch')) {
        setError('Cannot connect to server. Make sure the backend is running on port 4000.')
      } else if (error.message.includes('NetworkError')) {
        setError('Network error. Please check your internet connection.')
      } else {
        setError('Scan completed with limited analysis. Please try again for full results.')
      }
    } finally {
      setLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      scanUrl()
    }
  }

  const clearResults = () => {
    setReport(null)
    setError('')
    setUrl('')
  }

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Detect Phishing Websites
            <span className="hero-highlight"> Instantly</span>
          </h1>
          <p className="hero-description">
            Protect yourself from online threats with our advanced AI-powered phishing detection.
            Simply enter any website URL and get instant security analysis with detailed risk
            assessment powered by VirusTotal.
          </p>
          
          <div className="url-scanner">
            <div className="input-group">
              <input
                type="text"
                placeholder="Enter website URL (e.g., google.com or https://example.com)"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyPress={handleKeyPress}
                className="url-input"
                disabled={loading}
              />
              <button 
                className="btn btn-primary scan-btn" 
                onClick={scanUrl} 
                disabled={loading || !url.trim()}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                  <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2"/>
                </svg>
                {loading ? 'Scanning...' : 'Scan Now'}
              </button>
            </div>
            
            {error && (
              <div className="error-message" style={{
                color: '#e74c3c',
                marginTop: '10px',
                padding: '10px',
                backgroundColor: '#fdf2f2',
                border: '1px solid #f5c6cb',
                borderRadius: '4px',
                fontSize: '14px'
              }}>
                {error}
              </div>
            )}

            {loading && (
              <div className="loading-message" style={{
                color: '#3498db',
                marginTop: '10px',
                padding: '10px',
                backgroundColor: '#f0f8ff',
                border: '1px solid #b3d9ff',
                borderRadius: '4px',
                fontSize: '14px',
                textAlign: 'center'
              }}>
                <div>🔍 Analyzing URL with VirusTotal...</div>
                <div style={{ fontSize: '12px', marginTop: '5px' }}>
                  This may take a few seconds
                </div>
              </div>
            )}
          </div>

          <div className="trust-indicators">
            <div className="trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Dombivali Protection
            </div>
            <div className="trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Instant Results
            </div>
            <div className="trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              </svg>
              No Sign-Up Required
            </div>
            <div className="trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Real-time Analysis
            </div>
          </div>

          {report && (
            <div style={{ marginTop: '30px' }}>
              <button
                onClick={clearResults}
                style={{
                  marginBottom: "20px",
                  padding: "10px 18px",
                  backgroundColor: "#6c757d",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#5a6268";
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#6c757d";
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.transform = "scale(0.95)";
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
              >
                Clear Results
              </button>

              <SecurityReport report={report} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
