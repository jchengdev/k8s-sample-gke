import { useEffect } from 'react';

export function useAsyncEffect(
  asyncFn: () => Promise<void>,
  deps?: React.DependencyList | undefined
): void {
  useEffect(() => {
    asyncFn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
