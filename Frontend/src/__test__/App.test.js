import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

jest.mock('axios');

describe('boundary', () => {
    test('AppComponen boundary renders without crashing', () => {
        render(<App />);
    });

    test('AppComponen boundary has "Welcome to your Event Manager" h2', () => {
        render(<App />);
        expect(screen.queryByText('Welcome to your Event Manager')).toBeInTheDocument();
    });

    test('AppComponen boundary has "Event Form" h2', () => {
        render(<App />);
        expect(screen.queryByText('Event Form')).toBeInTheDocument();
    });

    test('AppComponen boundary has "Event List" h2', () => {
        render(<App />);
        expect(screen.queryAllByText('Event List')[0]).toBeInTheDocument();
    });
});
