import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('should render the "learn react" link', () => {
    render(<App />);
    const link = screen.getByRole('link', { name: /learn react/i });
    expect(link).toBeInTheDocument();
  });
});

