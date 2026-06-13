import { render, screen } from '@testing-library/react';
import App from './App';

// 🔹 FIX: Mock Swiper components so Jest ignores the module resolution error
jest.mock('swiper/react', () => ({
  Swiper: ({ children }) => <div className="mock-swiper">{children}</div>,
  SwiperSlide: ({ children }) => <div className="mock-swiper-slide">{children}</div>,
}));

jest.mock('swiper/modules', () => ({
  Navigation: () => null,
}));

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
