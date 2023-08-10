// Footer.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

test('renders footer with correct text', () => {
  const { getByText } = render(<Footer />);
  
  const currentYear = new Date().getFullYear();
  const expectedText = `© ${currentYear} Service Fusion. All rights reserved.`;

  const footerElement = getByText(expectedText);
  expect(footerElement).toBeInTheDocument();
});
