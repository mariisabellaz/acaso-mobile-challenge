import { act, renderHook } from '@testing-library/react-hooks';
import { useRefreshCode } from '../useRefreshCode';

// Mock para jest.useFakeTimers
jest.useFakeTimers();

test('useRefreshCode starts and stops countdown correctly', () => {
  const { result } = renderHook(() => useRefreshCode());

  expect(result.current.countdown).toBe(120);
  expect(result.current.isCounting).toBe(false);

  act(() => {
    result.current.startCountdown();
  });

  expect(result.current.isCounting).toBe(true);

  jest.advanceTimersByTime(1000);
  expect(result.current.countdown).toBe(119);

  act(() => {
    result.current.startCountdown();
  });

  expect(result.current.isCounting).toBe(false);
  expect(result.current.countdown).toBe(119);

  jest.advanceTimersByTime(1000);
  expect(result.current.countdown).toBe(119);
});
