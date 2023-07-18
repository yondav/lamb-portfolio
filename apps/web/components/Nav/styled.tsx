import { motion } from 'framer-motion';
import tw, { styled } from 'twin.macro';

import { flex, gutters, link, slideStyles } from '../../styles';
import Container from '../Container';
import { Helper } from '../Typography';

interface NavProps {
  sticky: boolean;
  active: boolean;
}

interface NavLinkProps {
  size: 'sm' | 'lg';
  copy: string;
  as: string;
}

const NavContainer = styled(({ ...props }) => (
  <Container
    as='header'
    base={{ variant: 'flex', align: 'center' }}
    {...(({ sticky, active, ...rest }) => rest)(props)}
  >
    {props.children}
  </Container>
))<NavProps>`
  ${tw`z-50 w-screen h-16 transition-all duration-700`}
  ${slideStyles({ type: 'background', color: 'surface', to: 'bottom' }).inactive}
  ${({ active }) => active && tw`bg-brand-surface`}
  ${({ sticky }) => sticky && tw`fixed backdrop-blur-md`}
  ${({ sticky }) =>
    sticky && slideStyles({ type: 'background', color: 'surface', to: 'bottom' }).active}
    &:before {
    opacity: 60% !important;
  }
`;

const InnerNav = styled(Container).attrs({
  base: { variant: 'flex', justify: 'between', align: 'center' },
})(() => [gutters, tw`z-50 xl:max-w-full`]);

const DrawerContainer = styled(motion.nav).attrs({
  variants: {
    inactive: { pointerEvents: 'none', opacity: 0.8, transform: 'translateX(100%)' },
    active: { pointerEvents: 'auto', opacity: 1, transform: 'translateX(0)' },
  },
  transition: {
    duration: 0.6,
    ease: 'easeInOut',
    delayChildren: 0.3,
    staggerChildren: 0.1,
  },
})(() => [
  tw`fixed top-16 w-full h-[calc(100vh - 64px)] bg-brand-surface z-50 transition-all duration-700`,
  flex({ orientation: 'col', align: 'center' }),
  tw`md:(max-h-[calc(100vh - 64px)] w-fit pr-24) py-6 px-12 right-0 shadow-button`,
]);

const NavLinkGroupContainer = styled(Container).attrs({
  base: { variant: 'flex', orientation: 'col', align: 'center' },
})(tw`w-full`);

const NavLinkGroupList = styled(Container).attrs({
  base: { variant: 'flex', orientation: 'col', align: 'center' },
})(tw`w-full px-4 border-brand-cerise-100`);

const AdminPanelContainer = styled.div(tw`mt-auto w-full`);

const PFPContainer = styled(Container).attrs({
  base: { variant: 'flex' },
})(tw`w-full pb-4 mb-8 gap-4 border-b border-brand-peony`);

const PFPImg = tw`rounded-full border-2 border-brand-cerise-100`;

const PFPInfo = styled(Container).attrs({
  base: { variant: 'flex', orientation: 'col' },
})(tw`gap-0.5`);

const PFPInfoCopy = styled(Helper)<{ variant: 'name' | 'title' }>(({ variant }) => [
  variant === 'name' && tw`font-bold text-brand-cerise-100`,
  variant === 'title' && tw`text-xs text-brand-cerise-300`,
]);

const NavLinkContainer = styled(Container).attrs({
  base: { variant: 'flex', justify: 'start', align: 'center' },
  variants: {
    inactive: { opacity: 0 },
    active: { opacity: 1 },
  },
  transition: {
    opacity: { duration: 0.6 },
    ease: 'easeIn',
  },
})(tw`w-full py-2 gap-4 text-o-md lg:text-o-lg text-brand-cerise-100`);

const NavLinkCopy = styled.span<Pick<NavLinkProps, 'size'>>(({ size = 'sm' }) => [
  link,
  tw`w-fit cursor-pointer`,
  size === 'sm' && tw`font-copy font-extrabold text-o-sm lg:text-o-lg`,
  size === 'lg' && tw`font-header font-normal text-h2-sm sm:text-h2-md lg:text-h3-lg`,
]);

export {
  NavContainer,
  InnerNav,
  DrawerContainer,
  NavLinkGroupContainer,
  NavLinkGroupList,
  AdminPanelContainer,
  PFPContainer,
  PFPImg,
  PFPInfo,
  PFPInfoCopy,
  NavLinkContainer,
  NavLinkCopy,
};

export type { NavProps, NavLinkProps };
