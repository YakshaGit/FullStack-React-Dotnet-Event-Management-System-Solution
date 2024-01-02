import React, { useState, useEffect } from 'react';

const EventManagementForm = ({ createEvent, updateEvent, events, editEvent }) => {
    const [event, setEvent] = useState({ id: '', name: '', description: '', status: true });

    useEffect(() => {
        if (editEvent) {
            setEvent({ ...editEvent });
        } else {
            setEvent({ id: '', name: '', description: '', status: true });
        }
    }, [editEvent]);

    const isEditForm = !!editEvent;

    const isFormIncomplete = !event.name || !event.description;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!event.name.trim() || !event.description.trim()) {
            alert('Please enter name and description for the event.');
            return;
        }
        if (isEditForm) {
            updateEvent(event.id, event);
        } else {
            createEvent({ ...event });
        }
        setEvent({ id: '', name: '', description: '', status: true });
    };

    return (
        <div>
            <h2>{isEditForm ? 'Edit Event' : 'Create Event'}</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Name:
                    <input
                        id="name"
                        type="text"
                        value={event.name}
                        onChange={(e) => setEvent({ ...event, name: e.target.value })}
                        required
                    />
                </label>
                <label htmlFor="description">
                    Description:
                    <textarea
                        id="description"
                        value={event.description}
                        onChange={(e) => setEvent({ ...event, description: e.target.value })}
                        required
                    />
                </label>
                <label htmlFor="status">
                    Status:
                    <select
                        id="status"
                        value={event.status}
                        onChange={(e) => setEvent({ ...event, status: e.target.value === 'true' })}
                    >
                        <option value={true}>Active</option>
                        <option value={false}>Inactive</option>
                    </select>
                </label>
                <button type="submit" disabled={isFormIncomplete}>
                    {isEditForm ? 'Update Event' : 'Create Event'}
                </button>
            </form>
        </div>
    );
};

export default EventManagementForm;