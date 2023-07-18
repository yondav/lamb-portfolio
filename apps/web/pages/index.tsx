import sdk, { type Info, type Work } from '@lamb/gqlsdk';
import { AnimatePresence } from 'framer-motion';
import type { GetStaticProps } from 'next';
import { useEffect, useRef } from 'react';

import { AdminBar, Layout, Sections } from '../components';
import { useAuthContext } from '../contexts/auth';
import { useNavContext } from '../contexts/nav';
import useScrollRouting from '../hooks/useScrollRouting';

function IndexPage({
  info,
  work,
  preview,
}: {
  info: Info;
  work: Work[];
  preview: boolean;
}) {
  const { adminRequest, authenticate, session } = useAuthContext();
  const { active } = useNavContext();

  const infoRef = useRef<HTMLElement>(null);
  const detailsRef = useRef<HTMLElement>(null);
  const workRef = useRef<HTMLElement>(null);

  useScrollRouting({ section: infoRef, sectionId: 'info' });
  useScrollRouting({ section: detailsRef, sectionId: 'details' });
  useScrollRouting({ section: workRef, sectionId: 'work' });

  useEffect(() => {
    if (adminRequest && !session) authenticate();
  }, [adminRequest, authenticate, session]);

  return (
    <>
      <Layout.MainWrapper>
        <Sections.Info
          ref={infoRef}
          sectionId='info'
          title={info.title}
          credentials={info.credentials}
        />
        <Sections.Details ref={detailsRef} sectionId='details' content={info.details} />
        <Sections.Work ref={workRef} sectionId='work' content={work} />
      </Layout.MainWrapper>
      <AnimatePresence>{preview && !active && <AdminBar />}</AnimatePresence>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({
  preview = false,
  previewData,
}) => {
  try {
    const previewCookie = { Cookie: previewData as string };

    const { getInfo, getAllWork } = sdk();
    const res = await getInfo({ preview }, previewCookie);
    const { allWork } = await getAllWork({ preview }, previewCookie);

    console.log({ res });
    return {
      props: {
        info: res.allInfo[0],
        work: allWork,
        preview,
      },
    };
  } catch (err) {
    return { notFound: true };
  }
};

export default IndexPage;
