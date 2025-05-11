/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/images/Symbol.svg'
import './App.css'
import CenterLayout from './assets/layouts/CenterLayout'
import PortalLayout from './assets/layouts/PortalLayout'
import { Route, Routes } from 'react-router-dom'
import Bookings from './assets/pages/Bookings'
import EventDetails from './assets/pages/EventDetails'
import Dashboard from './assets/pages/Dashboard'
import SignIn from './assets/pages/SignIn'
import SignUp from './assets/pages/SignUp'
import Events from './assets/pages/Events'



function App() {


  return (
    <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/bookings" element={<Bookings />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/signup" element={<SignUp />}/>
    </Routes>
  )
}

export default App


