import eventService from "../services/EventManagement.service";
import axios from 'axios';

jest.mock('axios');

const mockEvents = [
    {
        id: 1,
        name: 'Event 1',
        description: 'Description 1',
        status: true,
    },
    {
        id: 2,
        name: 'Event 2',
        description: 'Description 2',
        status: false,
    },
];

describe('functional', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('EventService functional Should get all events', async () => {
        axios.get.mockResolvedValueOnce({ data: mockEvents });
        const result = await eventService.getAllEvents();
        expect(axios.get).toHaveBeenCalledWith('http://localhost:8081/event-management/events');
        expect(result).toEqual(mockEvents);
    });

    test('EventService functional Should get event by ID', async () => {
        const eventId = 1;
        axios.get.mockResolvedValueOnce({ data: mockEvents[0] });
        const result = await eventService.getEventById(eventId);
        expect(axios.get).toHaveBeenCalledWith(`http://localhost:8081/event-management/events/${eventId}`);
        expect(result).toEqual(mockEvents[0]);
    });

    test('EventService functional Should create a new event', async () => {
        const eventData = {
            name: 'New Event',
            description: 'New Description',
            status: true,
        };
        axios.post.mockResolvedValueOnce({ data: eventData });
        const result = await eventService.createEvent(eventData);
        expect(axios.post).toHaveBeenCalledWith('http://localhost:8081/event-management/events', eventData);
        expect(result).toEqual(eventData);
    });

    test('EventService functional Should update event by ID', async () => {
        const eventId = 1;
        const updatedEventData = {
            name: 'Updated Event',
            description: 'Updated Description',
            status: false,
        };
        axios.put.mockResolvedValueOnce({ data: { ...mockEvents[0], ...updatedEventData } });
        const result = await eventService.updateEvent(eventId, updatedEventData);
        expect(axios.put).toHaveBeenCalledWith(`http://localhost:8081/event-management/events/${eventId}`, updatedEventData);
        expect(result).toEqual({ ...mockEvents[0], ...updatedEventData });
    });

    test('EventService functional Should delete event by ID', async () => {
        const eventId = 1;
        axios.delete.mockResolvedValueOnce({ data: mockEvents[0] });
        const result = await eventService.deleteEvent(eventId);
        expect(axios.delete).toHaveBeenCalledWith(`http://localhost:8081/event-management/events/${eventId}`);
        expect(result).toEqual(mockEvents[0]);
    });

    test('EventService functional Should search events by name', async () => {
        const eventName = 'Event';
        axios.get.mockResolvedValueOnce({ data: mockEvents });
        const result = await eventService.searchEventsByName(eventName);
        expect(axios.get).toHaveBeenCalledWith(`http://localhost:8081/event-management/events/searchByName?name=${eventName}`);
        expect(result).toEqual(mockEvents);
    });

    test('EventService functional Should search events by status', async () => {
        const status = true;
        axios.get.mockResolvedValueOnce({ data: mockEvents });
        const result = await eventService.searchEventsByStatus(status);
        expect(axios.get).toHaveBeenCalledWith(`http://localhost:8081/event-management/events/searchByStatus?status=${status}`);
        expect(result).toEqual(mockEvents);
    });
});
