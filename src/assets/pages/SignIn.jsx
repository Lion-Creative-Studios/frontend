/* File updated to react compatible with code generated by chatgpt 4o */

import React from 'react'

const SignIn = () => {
  return (
    <section id="signin">
      <div className="card">

        <div className="card-header">
          <h1>Sign In</h1>
        </div>

        <div className="card-body">
          <form method="post" noValidate>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input className="form-input" type="email" id="email" name="email" />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="password">Password</label>
              <input className="form-input" type="password" id="password" name="password" />
            </div>

            <div className="form-checkbox-group">
              <label className="form-checkbox">
                <input type="checkbox" id="remember" className="form-checkbox-input" />
                <span className="form-checkbox-box"></span>
              </label>
              <label htmlFor="remember" className="form-label">Remember me</label>
            </div>

            <button type="submit" className="btn">Log In</button>
          </form>
        </div>

        <div className="card-footer">
          Don't have an account? <a href="/signup">Sign Up</a>
        </div>

      </div>
    </section>
  )
}

export default SignIn

/* File updated to react compatible with code generated by chatgpt 4o */