import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders h2 to page', () => {
  render(<App />);
  const HeaderElement = screen.getByRole('heading', /Sign In/i);
  expect(HeaderElement).toBeInTheDocument();
});
