import type { Info } from '@lamb/gqlsdk';
import { forwardRef } from 'react';
import tw, { styled } from 'twin.macro';

import { cell, wrapper } from '../../styles';
import Button from '../Button';
import { Echo } from '../SVG';
import { H1 } from '../Typography';

import type { SectionProps } from './types.sectionProps';

interface InfoProps extends SectionProps {
  title: Info['title'];
  credentials: Info['credentials'];
}

const InfoSectionWrapper = styled.section<{ layout: 'grid' | 'flex' }>(({ layout }) => [
  layout === 'grid' && { ...wrapper, ...tw`py-0 gap-y-8 sm:gap-y-16` },
  layout === 'flex' && tw`flex flex-col gap-16`,
]);

const InfoHeader = styled(H1)(tw`max-w-xs md:max-w-md lg:max-w-xl xl:max-w-2xl`);

const InfoButtonGroup = styled.div(tw`w-fit flex flex-col gap-6 xl:flex-row`);

const InfoSection = forwardRef<HTMLElement, InfoProps>(
  ({ title, credentials, sectionId }, ref) => {
    return (
      <>
        <InfoSectionWrapper
          id={sectionId}
          ref={ref}
          css={cell({ span: 12 })}
          layout='grid'
        >
          <InfoSectionWrapper css={cell({ span: 12, lg: 7 })} layout='flex'>
            <InfoHeader>{title}</InfoHeader>
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
          </InfoSectionWrapper>
          <InfoSectionWrapper css={cell({ span: 12, lg: 5 })} layout='flex'>
            <Echo />
          </InfoSectionWrapper>
        </InfoSectionWrapper>
      </>
    );
  }
);

InfoSection.displayName = 'Info';

export default InfoSection;
