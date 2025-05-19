/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/images/Symbol.svg'
import './App.css'
import CenterLayout from './assets/layouts/CenterLayout'
import PortalLayout from './assets/layouts/PortalLayout'
import { Route, Routes } from 'react-router-dom'
import Bookings from './assets/pages/Bookings'
import BookEventPage from './assets/pages/BookEventPage'
import EventDetails from './assets/pages/EventDetails'
import Dashboard from './assets/pages/Dashboard'
import SignIn from './assets/pages/SignIn'
import SignUp from './assets/pages/SignUp'
import Events from './assets/pages/Events'

{/* Routes updated by generated code chatgpt 4o, to use Layout correctly */}

function App() {


  return (
    <Routes>

      <Route element={<PortalLayout />}>
        <Route path="/" element={<Dashboard />} />
      </Route>

      <Route element={<PortalLayout />}>
        <Route path="/events" element={<Events />} />
      </Route>

      {/* 👇 Use CenterLayout for event details page */}
      <Route element={<PortalLayout />}>
        <Route path="/events/:id" element={<EventDetails />} />
      </Route>

      <Route element={<PortalLayout />}>
        <Route path="/events/bookings" element={<Bookings />} />
      </Route>

      <Route element={<PortalLayout />}>
        <Route path="/events/bookings/:id" element={<BookEventPage />} />
      </Route>

      <Route element={<CenterLayout />}>
        <Route path="/signin" element={<SignIn />} />
      </Route>

      <Route element={<CenterLayout />}>
        <Route path="/signup" element={<SignUp />} />
      </Route>


    </Routes>
  )
}

{/* Routes updated by generated code chatgpt 4o, to use Layout correctly */}

export default App


