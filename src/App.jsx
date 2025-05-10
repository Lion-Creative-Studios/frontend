/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CenterLayout from './assets/layouts/CenterLayout'
import PortalLayout from './assets/layouts/PortalLayout'
import { Route, Routes } from 'react-router-dom'
import Events from './assets/pages/Events'
import SignUp from './assets/pages/SignUp'
import LogIn from './assets/pages/LogIn'
import Bookings from './assets/pages/Bookings'
import Dashboard from './assets/pages/Dashboard'
import EventDetails from './assets/pages/EventDetails'

function App() {


  return (
    <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/bookings" element={<Bookings />}/>
        <Route path="/login" element={<LogIn />}/>
        <Route path="/signup" element={<SignUp />}/>
    </Routes>
  )
}

export default App


