import type { Work } from '@lamb/gqlsdk';
import { forwardRef } from 'react';
import tw, { styled } from 'twin.macro';

import { wrapper } from '../../../styles';
import type { SectionProps } from '../types.sectionProps';

import WorkCard from './WorkCard';

interface WorkProps extends SectionProps {
  content: Work[];
}

const WorkSectionWrapper = styled.section(
  tw`relative h-[26rem] sm:h-[30rem] xl:h-[41.5rem]`
);

const WorkSectionContentWrapper = styled.div(() => [
  tw`py-16 h-full`,
  wrapper,
  tw`xl:px-16 w-full`,
]);

const WorkSection = forwardRef<HTMLElement, WorkProps>(({ content, sectionId }, ref) => (
  <WorkSectionWrapper id={sectionId} ref={ref}>
    <WorkSectionContentWrapper>
      {content.map((work, i) => (
        <WorkCard key={i} work={work} />
      ))}

      {/* <WorkSectionTitle>The details</WorkSectionTitle> */}
    </WorkSectionContentWrapper>
  </WorkSectionWrapper>
));

WorkSection.displayName = 'Work';

export default WorkSection;
