import type { Work } from '@lamb/gqlsdk';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';
import tw, { styled } from 'twin.macro';

import { fade, slideHover } from '../../../styles';
import Container from '../../Container';
import { H3, RichText } from '../../Typography';

const Cell = styled(Container).attrs({
  base: { variant: 'flex', orientation: 'col' },
})(tw`relative col-span-12 md:col-span-6 gap-8 overflow-hidden`);

const Title = styled(H3)(tw`ml-8 md:m-0`);

const Card = styled(motion.div)(() => [
  tw`max-w-sm w-full mx-auto md:m-0 h-56 bg-cover bg-no-repeat bg-center hover:(shadow-button scale-105) transition duration-500 cursor-pointer overflow-hidden`,
  slideHover({ type: 'background', color: 'aegean', to: 'right' }),
  tw`before:(opacity-95 backdrop-blur-3xl)`,
]);

const CardCopy = styled(Container).attrs({
  as: 'article',
  base: { variant: 'flex', orientation: 'col', justify: 'between' },
  variants: fade(),
  initial: 'hidden',
  animate: 'visible',
  transition: { delay: 0.5, duration: 0.3, ease: 'easeInOut' },
})(tw`absolute h-full w-full p-8`);

export default function WorkCard({ work }: { work: Work }) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <Cell>
      <Title>{work.title}</Title>
      <Link href={`/work/${work.slug?.current}`}>
        <Card
          style={{ backgroundImage: `url("${work.card?.image?.asset?.url}")` }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered && (
            <CardCopy>
              <RichText value={work.card?.descriptionRaw} />
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='133'
                height='34'
                viewBox='0 0 133 34'
                fill='none'
                css={{ ...tw`ml-auto` }}
              >
                <path
                  d='M1.07324 18.3012H131.54M131.54 18.3012L108.76 1.73401M131.54 18.3012L108.76 32.7974'
                  stroke='#0C1351'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </CardCopy>
          )}
        </Card>
      </Link>
    </Cell>
  );
}
