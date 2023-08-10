// Header.test.js
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // To provide a router context
import Header from './Header';

test('renders header links', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const homeLink = getByText('Home');
  const serviceLink = getByText('Service');
  const createLink = getByText('Create');
  const policyLink = getByText('Policy');
  const accountLink = getByText('Account');

  expect(homeLink).toBeInTheDocument();
  expect(serviceLink).toBeInTheDocument();
  expect(createLink).toBeInTheDocument();
  expect(policyLink).toBeInTheDocument();
  expect(accountLink).toBeInTheDocument();
});
