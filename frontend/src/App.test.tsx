import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Deve renderizar o botão que faz a chamada nativa do toast', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Chamar Toast Nativo!/i);
  expect(buttonElement).toBeInTheDocument();
});
