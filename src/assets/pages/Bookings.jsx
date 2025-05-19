import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Bookings = () => {
  const { id } = useParams();

  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    const res = await fetch("https://eventservicenew-dxbphqh2cegwf7gq.swedencentral-01.azurewebsites.net/api/Events");
    if (res.ok) {
      const data = await res.json();

      // Normalize the data for EventCard compatibility
      const mappedEvents = data.result.map(event => ({
        id: event.id,
        image: event.image || "/placeholder.svg",
        name: event.title || "Untitled Event",
        date: event.eventDate || "No date",
        location: event.location || "No location",
        price: event.price ?? "60", // If you add price later
        category: event.category ?? "Music", // Optional
        status: event.status ?? "Active", // Optional
        description: event.description ?? "Music Event",
      }));

      setEvents(mappedEvents);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);


  return (
    <div>Book Event - {id} - ph </div>
  )
}

export default Bookings