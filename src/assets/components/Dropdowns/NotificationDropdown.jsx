import React, { useState } from 'react'

const NotificationDropdown = ({ notifications = [] }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  return (
    <div id="notification-container">
      <button type="button" onClick={toggleDropdown} className="btn-notification">
        <div className="setting-name">
            <img src="/notification-icon.svg" alt="template avatar" />
        </div>
      </button>

      {isOpen && (
        <div id="notification-dropdown" className="dropdown">
          <div className="dropdown-header">
            <h4>Notifications</h4>
            {notifications.length > 0 && <div className="badge badge-red"></div>}
          </div>

          <div className="divider"></div>

          <div className="notifications">
            {notifications.length === 0 ? (
              <div className="notification empty">No notifications</div>
            ) : (
              notifications.map((n, index) => (
                <div className="notification" key={index} data-notification-type={n.type}>
                  <div className="user-image">
                    <img src={n.image || '/user-template-male-green.svg'} alt="avatar" />
                  </div>
                  <span className="message">{n.message}</span>
                  <span className="time">{n.time}</span>
                  <button className="btn-remove" onClick={() => n.onRemove?.(index)}></button>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default NotificationDropdown
