import tw, { styled } from 'twin.macro';

import { useStickyContext } from '../../contexts/sticky';
import { gutters } from '../../styles';
import { Jamburger, Logo } from '../SVG';

interface NavProps {
  sticky: boolean;
}

const Base = styled(({ ...props }) => (
  <header {...(({ sticky, ...rest }) => rest)(props)}>{props.children}</header>
))<NavProps>`
  ${tw`w-screen h-16 flex items-center transition-all duration-500 before:(content-[''] absolute -top-full right-full w-full h-16 bg-brand-surface opacity-60 transition-all duration-500)`}
  ${({ sticky }) => sticky && tw`fixed before:(top-0 right-0) z-40 backdrop-blur-md`}
`;

const Inner = styled.div({ ...gutters, ...tw`flex justify-between items-center z-50` });

export default function Nav() {
  const { sticky } = useStickyContext();

  return (
    <Base sticky={sticky}>
      <Inner>
        <Logo />
        <Jamburger />
      </Inner>
    </Base>
  );
}
