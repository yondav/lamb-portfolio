import type {
  CopyPageBlock,
  GalleryPageBlock,
  ImagePageBlock,
  PageBlock,
  Maybe,
} from '@lamb/gqlsdk';
import Image from 'next/image';
import { useEffect } from 'react';
import tw from 'twin.macro';

import { cell, type Cols } from '../../styles';
import { P, RichText } from '../Typography';

interface PageBlockProps {
  block: Maybe<PageBlock>;
}

function BlockElement({
  element,
}: {
  element: Maybe<CopyPageBlock | GalleryPageBlock | ImagePageBlock>;
}) {
  if (!element) return null;

  switch (element.__typename) {
    case 'CopyPageBlock':
      return <RichText value={element?.copyBlockRaw} />;

    case 'ImagePageBlock':
      return (
        <>
          <div css={{ ...tw`w-full h-full relative` }}>
            <Image
              fill
              // width={32}
              // height={32}
              src={element.image?.asset?.url as string}
              alt={element.alt as string}
              title={element.alt as string}
            />
          </div>
          <RichText value={element.copyRaw} />
        </>
      );
    default:
      return <P>{element.__typename}</P>;
  }
}

export default function PageBlock({ block }: PageBlockProps) {
  useEffect(() => {
    console.log({ block });
  });
  return (
    <div css={cell({ span: (block?.colSpan as Cols) || 12 })}>
      {block?.elements?.map((element, i) => (
        <BlockElement key={i} element={element} />
      ))}
    </div>
  );
}
