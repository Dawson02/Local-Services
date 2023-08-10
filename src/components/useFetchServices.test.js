// useFetchServices.test.js
import { renderHook } from '@testing-library/react-hooks';
import useFetchServices from './useFetchServices';

// Mocking the global fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([{ id: 1, name: 'Service 1' }, { id: 2, name: 'Service 2' }]),
  })
);

test('fetches and returns data correctly', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useFetchServices());

  // Since useEffect is async, we need to wait for it to finish.
  await waitForNextUpdate();

  expect(result.current.services).toHaveLength(2);
  expect(result.current.services[0].name).toBe('Service 1');
  expect(result.current.loading).toBe(false);
  expect(result.current.error).toBe(null);
});

test('handles fetch error', async () => {
  global.fetch.mockImplementationOnce(() => Promise.reject('Network error'));

  const { result, waitForNextUpdate } = renderHook(() => useFetchServices());

  await waitForNextUpdate();

  expect(result.current.services).toHaveLength(0);
  expect(result.current.loading).toBe(false);
  expect(result.current.error).toBe('An error occurred while fetching services.');
});
