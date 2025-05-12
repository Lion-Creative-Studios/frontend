import React, { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';

{/* File updated by chatgpt 4o to properly render the events */}

const Events = () => {
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    const res = await fetch("https://localhost:7283/api/events");
    if (res.ok) {
      const data = await res.json();
      setEvents(data);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div id="events">
      <h2>Events</h2>
      <div className="event-list">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

{/* File updated by chatgpt 4o to properly render the events */}

export default Events;
