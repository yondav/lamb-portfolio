import type { Details, Info } from '@lamb/gqlsdk';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import tw, { styled } from 'twin.macro';

import { gutters, parallax } from '../../../styles';
import Carousel from '../../Carousel';
import Container from '../../Container';
import Graphic from '../../SVG/Details';
import { Overline, RichText } from '../../Typography';
import { H2 } from '../../Typography';
import type { SectionProps } from '../types.sectionProps';

const DetailsSectionWrapper = styled.section(
  tw`relative h-[26rem] sm:h-[30rem] xl:h-[41.5rem]`
);

const DetailsSectionContentWrapper = styled(motion.div).attrs({
  variants: parallax(),
  initial: 'hidden',
  whileInView: 'visible',
  transition: { duration: 0.9, ease: 'easeInOut' },
})(() => [tw`py-16 h-full`, gutters, tw`xl:px-16`]);

const DetailsSectionContent = styled(Container).attrs({
  base: { variant: 'flex', orientation: 'col' },
})(tw`gap-y-3 w-[20rem] sm:w-[31.2rem] xl:w-[31rem]`);

const DetailsSectionTitle = styled(H2)(tw`mb-6`);

interface DetailsProps extends SectionProps {
  content: Info['details'];
}

const DetailsSection = forwardRef<HTMLElement, DetailsProps>(
  ({ content, sectionId }, ref) => (
    <DetailsSectionWrapper id={sectionId} ref={ref}>
      <Graphic />
      <DetailsSectionContentWrapper>
        <DetailsSectionTitle>The details</DetailsSectionTitle>
        <Carousel
          items={(content as Details[]).map((c, i) => (
            <DetailsSectionContent key={i}>
              <Overline>{c.title}</Overline>
              <RichText value={c.copyRaw} />
            </DetailsSectionContent>
          ))}
        />
      </DetailsSectionContentWrapper>
    </DetailsSectionWrapper>
  )
);

DetailsSection.displayName = 'Details';

export default DetailsSection;
