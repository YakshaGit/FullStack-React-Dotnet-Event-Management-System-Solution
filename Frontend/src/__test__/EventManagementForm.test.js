import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EventManagementForm from '../components/EventManagementForm';

const createEventMock = jest.fn();
const updateEventMock = jest.fn();

describe('boundary', () => {
    test('EventManagementFormComponent boundary renders without crashing', () => {
        render(<EventManagementForm createEvent={createEventMock} />);
    });

    test('EventManagementFormComponent boundary has "Create Event" h2', () => {
        render(<EventManagementForm createEvent={createEventMock} />);
        expect(screen.getByRole('heading')).toHaveTextContent('Create Event');
    });

    test('EventManagementFormComponent boundary has "Edit Event" h2 when in edit mode', () => {
        render(<EventManagementForm editEvent={{ name: 'Edit Event' }} updateEvent={updateEventMock} />);
        expect(screen.getByRole('heading')).toHaveTextContent('Edit Event');
    });

    test('EventManagementFormComponent boundary has name input field', () => {
        render(<EventManagementForm createEvent={createEventMock} />);
        expect(screen.getByLabelText('Name:')).toBeInTheDocument();
    });

    test('EventManagementFormComponent boundary has description input field', () => {
        render(<EventManagementForm createEvent={createEventMock} />);
        expect(screen.getByLabelText('Description:')).toBeInTheDocument();
    });

    test('EventManagementFormComponent boundary has status select field', () => {
        render(<EventManagementForm createEvent={createEventMock} />);
        expect(screen.getByLabelText('Status:')).toBeInTheDocument();
    });

    test('EventManagementFormComponent boundary has "Create Event" button', () => {
        render(<EventManagementForm createEvent={createEventMock} />);
        expect(screen.getByRole('button', { name: 'Create Event' })).toBeInTheDocument();
    });

    test('EventManagementFormComponent boundary has "Update Event" button when in edit mode', () => {
        render(<EventManagementForm editEvent={{ name: 'Edit Event' }} updateEvent={updateEventMock} />);
        expect(screen.getByRole('button', { name: 'Update Event' })).toBeInTheDocument();
    });
});
