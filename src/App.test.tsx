import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home and about pages title', () => {
  render(<App />);
  const homePageTitle = screen.getByText(/home page/i);
  const aboutPageTitle = screen.getByText(/about us/i);
  expect(homePageTitle).toBeInTheDocument();
  expect(aboutPageTitle).toBeInTheDocument();
});
