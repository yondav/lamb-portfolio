import Link from 'next/link';
import { useCallback, useEffect, useRef } from 'react';

import { useNavContext } from '../../contexts/nav';
import { Jamburger, Logo } from '../SVG';

import Drawer from './Drawer';
import { InnerNav, NavContainer } from './styled';

export default function Nav() {
  const navigationRef = useRef<HTMLElement>(null);

  const {
    sticky,
    active,
    setActive,
    jamburger: { toggle },
  } = useNavContext();

  const blurNavigation = useCallback(
    (e: MouseEvent) => {
      if (!navigationRef.current) return;

      if (e.pageX < navigationRef.current?.offsetLeft) {
        setActive(false);
        toggle();
      }
    },
    [setActive, toggle]
  );

  useEffect(() => {
    if (active) window.addEventListener('click', blurNavigation);

    return () => window.removeEventListener('click', blurNavigation);
  });

  return (
    <>
      <NavContainer sticky={sticky || active} active={active}>
        <InnerNav>
          <Link scroll href='/'>
            <Logo />
          </Link>
          <Jamburger />
        </InnerNav>
      </NavContainer>
      <Drawer />
    </>
  );
}
