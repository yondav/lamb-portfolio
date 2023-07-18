import type { Info } from '@lamb/gqlsdk';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import tw, { css, styled, theme } from 'twin.macro';

import { cell, flex, gutters, parallax, wrapper } from '../../../styles';
import Button from '../../Button';
import Container from '../../Container';
import { Echo } from '../../SVG';
import { H1 } from '../../Typography';
import type { SectionProps } from '../types.sectionProps';

interface InfoProps extends SectionProps {
  title: Info['title'];
  credentials: Info['credentials'];
}

const InfoSectionWrapper = styled.section(tw`w-full`);

const InfoSectionContentWrapper = styled.div(() => [
  tw`w-full pt-16 md:pb-16`,

  css`
    @media only screen and (min-width: ${theme`screens.md`}) {
      ${gutters}
    }

    @media only screen and (min-width: ${theme`screens.lg`}) {
      ${wrapper}
    }
  `,
]);

const InfoHeader = styled(motion.header).attrs({
  variants: parallax(),
  initial: 'hidden',
  whileInView: 'visible',
  transition: { duration: 0.9, ease: 'easeInOut' },
})(() => [
  flex({ orientation: 'col' }),

  tw`gap-y-16 mb-8`,

  css`
    @media only screen and (max-width: ${theme`screens.md`}) {
      ${gutters}
    }

    & h1 {
      ${tw`max-w-xs sm:max-w-md lg:max-w-xl xl:max-w-2xl`}
    }
  `,

  cell({ span: 7 }),
]);

const InfoButtonGroup = styled(Container).attrs({
  base: { variant: 'flex', orientation: 'col' },
  xl: { variant: 'flex', orientation: 'row' },
})(tw`w-fit gap-6`);

const InfoSection = forwardRef<HTMLElement, InfoProps>(
  ({ title, credentials, sectionId }, ref) => (
    <InfoSectionWrapper id={sectionId} ref={ref}>
      <InfoSectionContentWrapper>
        <InfoHeader>
          <H1>{title}</H1>
          <InfoButtonGroup>
            <Button variant='primary'>
              <a
                href={credentials?.readout?.asset?.url as string}
                target='_blank'
                rel='noopener noreferrer'
              >
                View full portfolio here
              </a>
            </Button>
            <Button variant='secondary'>
              <a
                href={credentials?.resume?.asset?.url as string}
                target='_blank'
                rel='noopener noreferrer'
              >
                View resumé
              </a>
            </Button>
          </InfoButtonGroup>
        </InfoHeader>
        <Echo span={5} />
      </InfoSectionContentWrapper>
    </InfoSectionWrapper>
  )
);

InfoSection.displayName = 'Info';

export default InfoSection;
