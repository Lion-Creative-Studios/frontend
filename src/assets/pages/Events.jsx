import React, { useState } from 'react'
import EventCard from '../components/EventCard'

const Events = () => {
    const [events, SetEvents] = useState([])

    const getEvents = async () => {
        const res = await fetch("https://localhost:7283/api/events")

        if (res.ok) {
            const data = await res.json()
            SetEvents(data)
        }
    }

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <div>
            <h2>Events</h2>
            {
                events.map(event => (
                    <EventCard key={event.id} event={event} />
                ))
            }
        </div>
    )
}

export default Events