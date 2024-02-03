import { useEffect, useState } from 'react';

/**
 * Custom hook for determining if the component is currently mounted.
 * @returns {boolean} A function that returns a boolean value indicating whether the component is mounted.
 * @see [Documentation](https://usehooks-ts.com/react-hook/use-is-mounted)
 * @example
 * const isComponentMounted = useIsMounted();
 * // Use isComponentMounted() to check if the component is currently mounted before performing certain actions.
 */
export default function useIsMounted() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
}
