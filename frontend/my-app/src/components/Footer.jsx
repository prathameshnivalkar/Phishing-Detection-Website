import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="logo">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>PhishGuard</span>
              </div>
              <p>Advanced phishing detection technology to keep you safe online. Scan any website instantly and get detailed security reports.</p>
              <div className="social-links">
                <a href="#" aria-label="Twitter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M23 3A10.9 10.9 0 0 1 20.1 4.7A4.48 4.48 0 0 0 22.46 2A9 9 0 0 1 19.36 3.74A4.48 4.48 0 0 0 12.93 7.7A12.94 12.94 0 0 1 3.35 2.47A4.48 4.48 0 0 0 4.75 9.26A4.48 4.48 0 0 1 2.8 8.72V8.86A4.48 4.48 0 0 0 6.4 13.15A4.48 4.48 0 0 1 4.75 13.46A4.48 4.48 0 0 0 8.93 16.65A9 9 0 0 1 2 18.13A12.94 12.94 0 0 0 9 20.29C18.64 20.29 23.69 12.5 23.69 5.66C23.69 5.47 23.69 5.27 23.67 5.07A9.18 9.18 0 0 0 26 2.39Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M16 8A6 6 0 0 1 22 14V21H18V14A2 2 0 0 0 14 14V21H10V9H14V11A6 6 0 0 1 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </a>
                <a href="#" aria-label="GitHub">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 19C4 20.5 4 16.5 2 16M22 16V18.13A2.38 2.38 0 0 1 20.73 20.24C20.39 20.45 19.94 20.24 19.73 19.9A18.15 18.15 0 0 1 19 14.05V9A4.83 4.83 0 0 0 17.91 6.07C18.73 4.5 18.38 2.22 17.91 1.74A7.36 7.36 0 0 0 14.58 2.14A11.44 11.44 0 0 0 12 2A11.44 11.44 0 0 0 9.42 2.14A7.36 7.36 0 0 0 6.09 1.74C5.62 2.22 5.27 4.5 6.09 6.07A4.83 4.83 0 0 0 5 9V14.05A18.15 18.15 0 0 1 4.27 19.9C4.06 20.24 3.61 20.45 3.27 20.24A2.38 2.38 0 0 1 2 18.13V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-links">
              <div className="link-group">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#scan">Website Scanner</a></li>
                  <li><a href="#privacy">Privacy Policy</a></li>
                  <li><a href="#terms">Terms of Service</a></li>
                  <li><a href="#api">Documentation</a></li>
                </ul>
              </div>

              <div className="link-group">
                <h4>Contact</h4>
                <ul>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2"/>
                      <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    support@veryphishy.com
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M22 16.92V19A2 2 0 0 1 20.11 21A19.79 19.79 0 0 1 2 3.11A2 2 0 0 1 3 1H5.09A2 2 0 0 1 7.11 2.46L8.5 6.5A2 2 0 0 1 8.12 8.77L6.82 10.07A16 16 0 0 0 13.93 17.18L15.23 15.88A2 2 0 0 1 17.5 15.5L21.54 16.89A2 2 0 0 1 22 16.92Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    +91-9974968745
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M21 10C21 17 12 23 12 23S3 17 3 10A9 9 0 0 1 12 1A9 9 0 0 1 21 10Z" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    Dombivali ,Maharashtra
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 VeryPhishy. All rights reserved.</p>
            <p>Made with Privacy</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
