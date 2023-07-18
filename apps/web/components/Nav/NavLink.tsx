import type { LinkProps } from 'next/link';
import Link from 'next/link';
import { useCallback, useMemo } from 'react';
import tw from 'twin.macro';

import { useNavContext } from '../../contexts/nav';
import { slideStyles } from '../../styles/classes';

import type { NavLinkProps } from './styled';
import { NavLinkContainer, NavLinkCopy } from './styled';

export default function NavLink({ copy, size, ...props }: NavLinkProps & LinkProps) {
  const {
    setActive,
    jamburger: { toggle },
    activeRoute,
    scrollTo,
  } = useNavContext();

  const route = useMemo(() => props.as.replace('/', '').replace('#', ''), [props.as]);

  const linkClickHandler = useCallback(() => {
    setActive(false);
    toggle();
    scrollTo(route);
  }, [route, scrollTo, setActive, toggle]);

  const isActiveRoute = useMemo(() => activeRoute === route, [activeRoute, route]);

  return (
    <NavLinkContainer>
      <Link {...props} shallow onClick={linkClickHandler}>
        <NavLinkCopy
          size={size}
          css={
            isActiveRoute
              ? slideStyles({ type: 'underline', color: 'cerise-200', to: 'right' })
                  .active
              : tw`text-brand-cerise-100`
          }
        >
          {copy}
        </NavLinkCopy>
      </Link>
    </NavLinkContainer>
  );
}
