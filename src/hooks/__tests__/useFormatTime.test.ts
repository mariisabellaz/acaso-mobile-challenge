import { renderHook } from '@testing-library/react-hooks';
import { useFormatTime } from '../useFormatTime';

test('useFormatTime formats seconds correctly', () => {
  const { result, rerender } = renderHook((seconds: number) => useFormatTime(seconds), {
    initialProps: 65,
  });

  expect(result.current).toBe('01:05');

  rerender(120);
  expect(result.current).toBe('02:00');
});
