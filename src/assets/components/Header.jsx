import React from 'react'
import NotificationDropdown from './Dropdowns/NotificationDropdown'
import AccountDropdown from './Dropdowns/AccountDropdown'
import SettingsDropdown from './Dropdowns/SettingsDropdown'

/* Code converted from razor to react with help of chatgpt 4o generated code */

const Header = () => {
  return (
    <header id="header">
      <div className="header-nav-section">
        <span className="header-nav-section-span">
          <p className="header-nav-role-pink">Dashboard </p>
          <p className="header-nav-role-slash">/ </p>
          <p className="header-nav-role">Events</p>
        </span>
        <h2 className="header-nav-name">Events</h2>
      </div>
      <div className="header-wrapper">
        <form className="search-form" method="get" noValidate>
          <input type="search" className="form-search-input" placeholder="Search anything..." />
          <i className="fa-solid fa-magnifying-glass"></i>
        </form>
        <NotificationDropdown />
        <SettingsDropdown />
        <AccountDropdown />
        <div className="header-account">
          <h2 className="header-name">Orlando Laurentius</h2>
          <p className="header-role">Admin</p>
        </div>
      </div>

    </header>
  )
}

export default Header

/* Code converted from razor to react with help of chatgpt 4o generated code */