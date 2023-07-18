import type { ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

import { useNavContext } from '../../contexts/nav';

const Wrapper = styled(({ ...props }) => (
  <main {...(({ sticky, ...rest }) => rest)(props)}>{props.children}</main>
))<{ sticky: boolean }>`
  ${tw`w-full`}
  ${({ sticky }) => sticky && tw`mt-16`}
`;

export default function MainWrapper({ children }: { children: ReactNode }) {
  const { sticky, active } = useNavContext();

  return <Wrapper sticky={sticky || active}>{children}</Wrapper>;
}
