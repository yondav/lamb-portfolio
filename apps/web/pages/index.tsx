import type { Info } from '@lamb/gqlsdk';
import sdk from '@lamb/gqlsdk';
import type { GetStaticProps } from 'next';
import { useRef } from 'react';

import { Layout, Nav, Sections } from '../components';
import StickyContextStateProvider from '../contexts/sticky';
import useScrollRouting from '../hooks/useScrollRouting';
import { container } from '../styles';

function IndexPage({ info }: { info: Info }) {
  const infoRef = useRef<HTMLElement>(null);
  useScrollRouting({ section: infoRef, sectionId: 'info' });

  return (
    <StickyContextStateProvider>
      <div css={container({ hasBackground: true })}>
        <Nav />
        <Layout.MainWrapper>
          <Sections.Info
            ref={infoRef}
            sectionId='info'
            title={info.title}
            credentials={info.credentials}
          />
        </Layout.MainWrapper>
      </div>
    </StickyContextStateProvider>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { getInfo } = sdk();
  const { Info } = await getInfo();

  return {
    props: {
      info: Info,
    },
  };
};

export default IndexPage;
