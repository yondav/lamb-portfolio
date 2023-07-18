import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { useCallback, useEffect, useRef } from 'react';
import {
  RiDatabase2Line,
  RiEyeFill,
  RiEyeOffFill,
  RiLogoutCircleLine,
} from 'react-icons/ri';

import { useAuthContext } from '../../contexts/auth';
import { useNavContext } from '../../contexts/nav';
import { A } from '../Typography';

import NavLink from './NavLink';
import PFP from './PFP';
import {
  AdminPanelContainer,
  DrawerContainer,
  NavLinkContainer,
  NavLinkCopy,
  NavLinkGroupContainer,
  NavLinkGroupList,
} from './styled';

export default function Drawer() {
  const { isVerified, session, isPreview } = useAuthContext();
  const navigationRef = useRef<HTMLElement>(null);

  const {
    active,
    setActive,
    jamburger: { icon, toggle },
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
    <DrawerContainer ref={navigationRef} initial={icon} animate={icon}>
      {isVerified && <PFP user={session?.user} />}
      <NavLink href='/#info' as='info' size='lg' copy='About' />
      <NavLink href='/#details' as='details' size='lg' copy='Details' />
      <NavLinkGroupContainer>
        <NavLink href='/#work' as='work' size='lg' copy='Work' />
        <NavLinkGroupList>
          <NavLink href='work/print' as='work/print' size='sm' copy='Print' />
          <NavLink
            href='work/presentation'
            as='work/presentation'
            size='sm'
            copy='Presentation'
          />
          <NavLink href='work/ui-ux' as='work/ui-ux' size='sm' copy='UI/UX' />
        </NavLinkGroupList>
      </NavLinkGroupContainer>
      {isVerified && (
        <AdminPanelContainer>
          <Link
            href={
              isPreview
                ? '/api/exit-preview'
                : `/api/preview?secret=${process.env.NEXT_PUBLIC_SANITY_PREVIEW_TOKEN}`
            }
          >
            <NavLinkContainer>
              {isPreview ? <RiEyeOffFill size='1.2em' /> : <RiEyeFill size='1.2em' />}
              <NavLinkCopy size='sm'>
                {isPreview ? 'Leave preview' : 'View Preview'}
              </NavLinkCopy>
            </NavLinkContainer>
          </Link>
          <NavLinkContainer>
            <RiDatabase2Line size='1.2em' />
            <NavLinkCopy as={A} size='sm'>
              CMS
            </NavLinkCopy>
          </NavLinkContainer>
          <NavLinkContainer onClick={() => signOut()}>
            <RiLogoutCircleLine size='1.2em' />
            <NavLinkCopy size='sm'>Sign Out</NavLinkCopy>
          </NavLinkContainer>
        </AdminPanelContainer>
      )}
    </DrawerContainer>
  );
}
