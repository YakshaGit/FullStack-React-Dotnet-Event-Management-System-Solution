import axios from "axios";

const BACKEND_URL = "http://localhost:8081/event-management/events";

const axiosInstance = axios.create({
    baseURL: BACKEND_URL,
});

const eventService = {
    getAllEvents: async () => {
        try {
            const res = await axiosInstance.get("");
            return res.data;
        } catch (error) {
            throw error;
        }
    },

    getEventById: async (id) => {
        try {
            const res = await axiosInstance.get(`/${id}`);
            return res.data;
        } catch (error) {
            throw error;
        }
    },

    createEvent: async (eventData) => {
        try {
            const res = await axiosInstance.post("", eventData);
            return res.data;
        } catch (error) {
            throw error;
        }
    },

    updateEvent: async (eventId, eventData) => {
        try {
            if (!eventId) {
                throw new Error("EventId is required!");
            }
            const res = await axiosInstance.put(`/${eventId}`, eventData);
            return res.data;
        } catch (error) {
            throw error;
        }
    },

    deleteEvent: async (eventId) => {
        try {
            if (!eventId) {
                throw new Error("EventId is required!");
            }
            const res = await axiosInstance.delete(`/${eventId}`);
            return res.data;
        } catch (error) {
            throw error;
        }
    },

    searchEventsByName: async (name) => {
        try {
            const res = await axiosInstance.get(`/searchByName?name=${name}`);
            return res.data;
        } catch (error) {
            throw error;
        }
    },

    searchEventsByStatus: async (status) => {
        try {
            const res = await axiosInstance.get(`/searchByStatus?status=${status}`);
            return res.data;
        } catch (error) {
            throw error;
        }
    },
};

export default eventService;