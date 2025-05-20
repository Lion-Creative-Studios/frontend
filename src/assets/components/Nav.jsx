import React from 'react'
import { NavLink } from 'react-router-dom'

/* Code converted from razor to react with help of chatgpt 4o generated code */

const Nav = () => {
  return (
    <aside id="sidebar">
      <section className="logotype">
          <a href="/">
            <div className='siderbar-a-logo-wrapper'>
              <img src="logotype-icon.svg" alt="Alpha logotype" />
              <p className='ventixe-name'>Ventixe</p>
            </div>
          </a>
      </section>

      <nav className="nav-links">
        <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          <i class="fa-regular fa-grid-2"></i>
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/events" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          <i class="fa-regular fa-ticket"></i>
          <span>Events</span>
        </NavLink>
      </nav>
    </aside>
  )
}

export default Nav

/* Code converted from razor to react with help of chatgpt 4o generated code */