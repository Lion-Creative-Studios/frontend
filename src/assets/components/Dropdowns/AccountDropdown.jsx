import React, { useState } from 'react'

const AccountDropdown = ({ isAuthenticated = false, userName = 'Guest' }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  const handleDarkModeToggle = (e) => {
    // Add your dark mode toggle logic here
    const enabled = e.target.checked
    document.body.classList.toggle('dark-mode', enabled)
  }

  return (
    <div id="account-container">
      <button type="button" onClick={toggleDropdown} className="btn-account">
        <img src="/user-template-male-green.svg" alt="template avatar" />
      </button>

      {isOpen && (
        <div id="account-dropdown" className="dropdown">
          <div className="dropdown-header">
            <div className="account-name">
              <img src="/user-template-male-green.svg" alt="template avatar" />
              <span>{isAuthenticated ? userName : 'Guest'}</span>
            </div>
            <div className="divider"></div>

            <div className="dropdown-body">
              <nav className="dropdown-options">
                <div className="dropdown-option">
                  <label htmlFor="darkModeToggle" className="switch-label">
                    <i className="fa-duotone fa-cog"></i>
                    <span>Dark Mode</span>
                  </label>
                  <label className="switch">
                    <input
                      type="checkbox"
                      id="darkModeToggle"
                      onChange={handleDarkModeToggle}
                    />
                    <span className="slider"></span>
                  </label>
                </div>
              </nav>

              <div className="divider"></div>

              <nav className="dropdown-actions">
                <a href="/auth/logout" className="dropdown-action">
                  <i className="fa-duotone fa-right-from-bracket"></i>
                  <span>Logout</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AccountDropdown
