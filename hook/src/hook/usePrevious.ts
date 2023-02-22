import { useRef, useEffect } from 'react';

const usePrevious = <T>(value: T | null | undefined) => {
  const ref = useRef<T | null | undefined>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export default usePrevious;
