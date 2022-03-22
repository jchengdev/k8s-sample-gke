import * as React from 'react';

export function useAsyncEffect(
  asyncFn: () => Promise<void>,
  deps?: React.DependencyList | undefined
): void {
  React.useEffect(() => {
    asyncFn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
