import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useScrollData } from 'scroll-data-hook';

import debounce from '../utils/debounce';

interface StickyContextState {
  sticky: boolean;
}

const INITIAL_STATE = {
  sticky: false,
};

const StickyContextState = createContext<StickyContextState>(INITIAL_STATE);

export function useStickyContext() {
  return useContext(StickyContextState);
}

export default function StickyContextStateProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [sticky, setSticky] = useState<boolean>(false);

  const {
    position: { y },
  } = useScrollData();

  const updateSticky = (val: boolean) => {
    setSticky(val);
  };

  const debouncedSticky = debounce(updateSticky, 500);

  useEffect(() => {
    if (y >= 64) debouncedSticky(true);
    else debouncedSticky(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [y]);

  const value = useMemo(() => ({ sticky }), [sticky]);

  return (
    <StickyContextState.Provider value={value}>{children}</StickyContextState.Provider>
  );
}
