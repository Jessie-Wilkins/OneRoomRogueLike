import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Move from './Move'

test('renders @ sign', () => {
    render(<Character />);
    const linkElement = screen.getByText(/@/i);
    expect(linkElement).toBeInTheDocument();
  });