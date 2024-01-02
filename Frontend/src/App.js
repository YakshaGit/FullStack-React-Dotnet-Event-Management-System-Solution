import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventManagementForm from './components/EventManagementForm';
import EventManagementList from './components/EventManagementList';

function EventApp() {
  const [events, setEvents] = useState([]);
  const [editEvent, setEditEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:8081/event-management/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  const createEvent = async (event) => {
    try {
      const addedEvent = await axios.post('http://localhost:8081/event-management/events', event);
      setEvents([...events, addedEvent.data]);
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  const deleteEvent = async (eventId) => {
    try {
      await axios.delete(`http://localhost:8081/event-management/events/${eventId}`);
      setEvents(events.filter((event) => event.id !== eventId));
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  const updateEvent = async (eventId, event) => {
    try {
      await axios.put(`http://localhost:8081/event-management/events/${eventId}`, event);
      setEvents(events.map((e) => (e.id === eventId ? { ...e, ...event } : e)));
      setEditEvent(null);
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  return (
    <div>
      <h2>Welcome to your Event Manager</h2>
      <h2>Event Form</h2>
      <EventManagementForm createEvent={createEvent} editEvent={editEvent} updateEvent={updateEvent} />
      <h2>Event List</h2>
      <EventManagementList events={events} deleteEvent={deleteEvent} setEditEvent={setEditEvent} />
    </div>
  );
}

export default EventApp;