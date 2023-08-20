import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Call Native button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Call Native/i);
  expect(buttonElement).toBeInTheDocument();
});
