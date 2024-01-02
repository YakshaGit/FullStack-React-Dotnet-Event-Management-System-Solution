import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EventManagementList from '../components/EventManagementList';

const events = [
    { id: 1, name: 'Event 1', description: 'Description 1', status: true },
    { id: 2, name: 'Event 2', description: 'Description 2', status: false },
];

const deleteEvent = jest.fn();
const setEditEvent = jest.fn();

describe('boundary', () => {
    beforeEach(() => {
        render(
            <EventManagementList
                events={events}
                deleteEvent={deleteEvent}
                setEditEvent={setEditEvent}
            />
        );
    });

    test('EventManagementList boundary displays all events', () => {
        events.forEach((event) => {
            expect(screen.getAllByText(`Name:`)).toBeTruthy();
            expect(screen.getAllByText(`Description:`)).toBeTruthy();
            expect(screen.getAllByText(`Status:`)).toBeTruthy();
        });
    });

    test('EventManagementList boundary it displays the "Edit" button to edit an event', () => {
        const editButtons = screen.getAllByText('Edit');
        expect(editButtons.length).toBe(events.length);
    });

    test('EventManagementList boundary it calls deleteEvent when "Delete" button is clicked', () => {
        const deleteButtons = screen.getAllByText('Delete');
        fireEvent.click(deleteButtons[0]);
        expect(deleteEvent).toHaveBeenCalledWith(events[0].id);
    });

    test('EventManagementList boundary it removes the event after clicking the "Delete" button', () => {
        const deleteButton = screen.getAllByText('Delete')[0];
        fireEvent.click(deleteButton);
        expect(screen.queryByText(`Name: ${events[0].name}`)).toBeNull();
        expect(screen.queryByText(`Description: ${events[0].description}`)).toBeNull();
        expect(screen.queryByText(`Status: ${events[0].status ? 'Active' : 'Inactive'}`)).toBeNull();
    });

    test('EventManagementList boundary it displays "No events found" when there are no events', () => {
        render(
            <EventManagementList events={[]} deleteEvent={deleteEvent} setEditEvent={setEditEvent} />
        );
        const noEventsMessage = screen.getByText('No Events found');
        expect(noEventsMessage).toBeTruthy();
    });
});
