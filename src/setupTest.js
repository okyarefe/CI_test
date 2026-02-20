import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('renders vite and react logos', () => {
  render(<App />);
  const title = screen.getByText(/Vite \+ React/i);
  expect(title).toBeInTheDocument();
});