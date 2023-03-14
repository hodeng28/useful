import { useRef, useEffect } from 'react';

// use mui snackBar

const usePrevious = <T>(value: T | null | undefined) => {
  const ref = useRef<T | null | undefined>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export default usePrevious;
