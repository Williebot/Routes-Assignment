import React from 'react';
import { render, screen } from '@testing-library/react';
import FullstackAssignment1 from './FullstackAssignment1';
/* test for Fullstack Assignment 1*/
test('renders FullstackAssignment1 and checks for specific text', () => {
  render(<FullstackAssignment1 />);
  const textElement = screen.getByText(/who is better\?/i);
  expect(textElement).toBeInTheDocument();
});
