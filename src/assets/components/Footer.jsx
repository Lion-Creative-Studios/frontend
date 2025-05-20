import React from 'react'
import { NavLink } from 'react-router-dom'

/* Html structure updated by chatgpt 4o generated code to fix flex problem */

const Footer = () => {
  return (
    <footer id="footer">
      <section className="footer-copyright">
        <div className="footer-copyright-contact">
          <p className="footer-copyright-p">Copyright © 2025 Peterdraw</p>
          <nav className="footer-text-links">
            <NavLink to="#"><span className="footer-nav-link-span">Privacy Policy</span></NavLink>
            <NavLink to="#"><span className="footer-nav-link-span">Terms and Conditions</span></NavLink>
            <NavLink to="#"><span className="footer-nav-link-span">Contact</span></NavLink>
          </nav>
        </div>
      </section>

      <nav className="footer-icon-links">
        <a className="footer-nav-link" href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src="/facebook-logo.svg" /></a>
        <a className="footer-nav-link" href="https://x.com" target="_blank" rel="noopener noreferrer"><img src="/x-logo.svg" /></a>
        <a className="footer-nav-link" href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src="/instagram-logo.svg" /></a>
        <a className="footer-nav-link" href="https://youtube.com" target="_blank" rel="noopener noreferrer"><img src="/youtube-logo.svg" /></a>
        <a className="footer-nav-link" href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><img src="/linkedin-logo.svg" /></a>
      </nav>
    </footer>
  )
}

export default Footer

/* Html structure updated by chatgpt 4o generated code to fix flex problem */