import React from 'react';

// 🔹 THE FIX: Mock swiper globally before your tests execute
jest.mock('swiper/react', () => ({
  Swiper: ({ children }) => <div data-testid="mock-swiper">{children}</div>,
  SwiperSlide: ({ children }) => <div data-testid="mock-swiper-slide">{children}</div>,
}));

jest.mock('swiper/modules', () => ({
  Navigation: () => null,
}));

// Your existing Crio tests start here...
test('renders learn react link', () => {
  // test contents...
});