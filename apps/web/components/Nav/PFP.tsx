import type { Maybe } from '@lamb/gqlsdk';
import Image from 'next/image';
import type { Session } from 'next-auth';

import { PFPContainer, PFPImg, PFPInfo, PFPInfoCopy } from './styled';

interface PFPProps {
  user: Session['user'];
}

export default function PFP({ user }: PFPProps): Maybe<JSX.Element> {
  if (!user?.image) return null;

  return (
    <PFPContainer>
      <Image
        width={36}
        height={36}
        src={user.image}
        alt={user?.name ?? ''}
        title={user?.name || ''}
        css={PFPImg}
      />
      <PFPInfo>
        <PFPInfoCopy variant='name'>{user?.name}</PFPInfoCopy>
        <PFPInfoCopy variant='title'>Admin</PFPInfoCopy>
      </PFPInfo>
    </PFPContainer>
  );
}
