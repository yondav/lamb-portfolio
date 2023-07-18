import type { Work } from '@lamb/gqlsdk';
import sdk from '@lamb/gqlsdk';
import type { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';

import PageBlock from '../../components/PageBlock';
import type { Cols } from '../../styles';
import { cell, wrapper } from '../../styles';

export default function Page({ work }: { work: Work[] }) {
  return (
    <main css={wrapper}>
      {work[0].page?.map((block, i) => (
        <PageBlock key={i} block={block} />
      ))}
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { getAllWork } = sdk();
  const { allWork } = await getAllWork({ preview: false });

  const paths = allWork.map(work => `/work/${work.slug?.current}` as string);

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({
  preview = false,
  previewData,
  params,
}) => {
  console.log({ params });
  try {
    const { work } = params as { work: string };

    const previewCookie = { Cookie: previewData as string };

    const { getWorkBySlug } = sdk();
    const { allWork } = await getWorkBySlug({ preview, slug: work }, previewCookie);

    return {
      props: {
        work: allWork,
        preview,
      },
    };
  } catch (err) {
    return { notFound: true };
  }
};
