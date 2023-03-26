import type { ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

import { useStickyContext } from '../../contexts/sticky';
import { wrapper } from '../../styles';

const Wrapper = styled(({ ...props }) => (
  <main {...(({ sticky, ...rest }) => rest)(props)}>{props.children}</main>
))<{ sticky: boolean }>`
  ${wrapper}
  ${({ sticky }) => sticky && tw`mt-16`}
`;

export default function MainWrapper({ children }: { children: ReactNode }) {
  const { sticky } = useStickyContext();

  return <Wrapper sticky={sticky}>{children}</Wrapper>;
}
