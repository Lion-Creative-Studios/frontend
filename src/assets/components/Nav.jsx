import React from 'react'
import { NavLink } from 'react-router-dom'

/* Code converted from razor to react with help of chatgpt 4o generated code */

const Nav = () => {
  return (
    <aside id="sidebar">
      <section className="logotype">
        <a href="/">
          <img src="/images/logotype/alpha-logotype-icon.svg" alt="Alpha logotype" />
          <span>alpha</span>
        </a>
      </section>

      <nav className="nav-links">
        <NavLink to="/dashboard" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          <i className="fa-duotone fa-briefcase"></i>
          <span>Projects</span>
        </NavLink>
        <NavLink to="/events" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          <i className="fa-duotone fa-handshake"></i>
          <span>Clients</span>
        </NavLink>
      </nav>
    </aside>
  )
}

export default Nav

/* Code converted from razor to react with help of chatgpt 4o generated code */