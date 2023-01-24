import { useCallback, useRef } from 'react';
import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

interface ScrollProps {
  id: number;
  scroll: number;
}

const darkModeAtom = atomWithStorage('darkMode', false);

const ScrollRestoration = () => {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);

  // const [scrollStorageAtom, setScrollStorageAtom] = useAtom(scrollStorage);
  // const saveCurrentScrollToSessionStorage = useCallback(
  //   (scroll: number) => {
  //     const willStoreScroll: ScrollProps = {
  //       id,
  //       scroll
  //     };
  //   },
  //   [id, scrollStorage]
  // );

  return (
    <>
      <h1>Welcome to {darkMode ? 'dark' : 'light'} mode!</h1>
      <button onClick={() => setDarkMode(!darkMode)}>toggle theme</button>
    </>
  );
};

export default ScrollRestoration;
