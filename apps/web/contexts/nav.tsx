import { useCycle } from 'framer-motion';
import { useRouter } from 'next/router';
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { useCallback } from 'react';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useScrollData } from 'scroll-data-hook';

import debounce from '../utils/debounce';

export enum JamburgerState {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

// export enum Routes {
//   INDEX = '',
//   ABOUT = 'info',
//   DETAILS = 'details',
// }

interface NavContextState {
  sticky: boolean;
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  jamburger: {
    icon: JamburgerState;
    toggle: () => void;
  };
  activeRoute: string;
  scrollTo: (route: string) => void;
}

const INITIAL_STATE = {
  sticky: false,
  active: false,
  setActive: () => false,
  jamburger: {
    icon: JamburgerState.INACTIVE,
    toggle: () => null,
  },
  activeRoute: '',
  scrollTo: () => null,
};

const NavContextState = createContext<NavContextState>(INITIAL_STATE);

export function useNavContext() {
  return useContext(NavContextState);
}

export default function NavContextStateProvider({ children }: { children: ReactNode }) {
  // sticky nav
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

  const [active, setActive] = useState<boolean>(false);

  // current route
  const { asPath } = useRouter();
  const [activeRoute, setActiveRoute] = useState<string>('');

  const assignActiveRoute = useCallback(() => {
    setActiveRoute(asPath.replace('/', '').replace('#', ''));
  }, [asPath]);

  useEffect(() => {
    assignActiveRoute();
  }, [asPath, assignActiveRoute]);

  // jamburger icon and navigation menu
  const [icon, toggleIcon] = useCycle<JamburgerState>(
    JamburgerState.INACTIVE,
    JamburgerState.ACTIVE
  );

  const toggleIconState = useCallback(() => {
    toggleIcon();
  }, [toggleIcon]);

  const toggleState = useCallback(() => {
    setActive(icon === 'active');
  }, [icon, setActive]);

  useEffect(() => {
    toggleState();
  }, [toggleState, icon]);

  // scroll link
  const scrollTo = useCallback((route: string) => {
    if (typeof window === 'undefined') return;

    let target = document.getElementById(route);
    const elementPosition = target?.getBoundingClientRect().top;

    if (elementPosition) {
      window.scrollTo({
        top: elementPosition + window.pageYOffset - 60,
        behavior: 'smooth',
      });
    }
  }, []);

  const value = useMemo(
    () => ({
      sticky,
      active,
      setActive,
      jamburger: { icon, toggle: toggleIconState },
      activeRoute,
      scrollTo,
    }),
    [active, activeRoute, icon, scrollTo, sticky, toggleIconState]
  );

  return <NavContextState.Provider value={value}>{children}</NavContextState.Provider>;
}
