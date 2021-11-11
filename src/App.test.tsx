import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders @ sign', () => {
  render(<App />);
  const linkElement = screen.getByText(/@/i);
  expect(linkElement).toBeInTheDocument();
});

// test('moves @ sign with key press', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/@/i);
//   const location = linkElement.;
//   userEvent.keyboard('{arrowleft}');
//   console.log(location);
//   console.log(screen.getByText(/@/i).ariaPosInSet);
//   expect(location).toEqual(screen.getByText(/@/i).ariaPosInSet);
// })
