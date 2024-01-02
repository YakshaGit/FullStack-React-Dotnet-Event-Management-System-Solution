import React from 'react';

const EventManagementList = ({ events, deleteEvent, setEditEvent }) => {
    return (
        <div>
            <h3>Event List</h3>
            <ul>
                {events.length > 0 ? (
                    events.map((event) => (
                        <li key={event.id}>
                            <strong>Name:</strong> {event.name}
                            <br />
                            <strong>Description:</strong> {event.description}
                            <br />
                            <strong>Status:</strong> {event.status ? 'Active' : 'Inactive'}
                            <br />
                            <button onClick={() => setEditEvent(event)}>Edit</button>
                            <button onClick={() => deleteEvent(event.id)}>Delete</button>
                        </li>
                    ))
                ) : (
                    <li>No Events found</li>
                )}
            </ul>
        </div>
    );
};

export default EventManagementList;