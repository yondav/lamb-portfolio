import { motion } from 'framer-motion';
import tw, { styled } from 'twin.macro';

import { fade } from '../../styles';

const DetailsContainer = styled.div(
  tw`opacity-[20%] absolute top-0 left-0 w-screen h-[26rem] overflow-hidden sm:h-[30rem] xl:h-[41.5rem]`
);

const DetailsSvg = styled(motion.svg).attrs({
  variants: fade(),
  initial: 'hidden',
  whileInView: 'visible',
  transition: { duration: 0.9, ease: 'easeInOut', damping: 300 },
  viewBox: '0 0 1739 1739',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
})(tw`w-[750px] sm:w-[1000px] md:w-full`);

export default function Details() {
  return (
    <DetailsContainer>
      <DetailsSvg>
        <path d='M1738.73 0.814453H0.731934V1738.81H1738.73V0.814453Z' fill='#B38F89' />
        <path
          d='M869.732 1630.19C1289.68 1630.19 1630.11 1289.76 1630.11 869.814C1630.11 449.871 1289.68 109.439 869.732 109.439C449.788 109.439 109.357 449.871 109.357 869.814C109.357 1289.76 449.788 1630.19 869.732 1630.19Z'
          fill='#0C1351'
        />
        <path
          d='M869.732 1195.69C1049.71 1195.69 1195.61 1049.79 1195.61 869.814C1195.61 689.838 1049.71 543.939 869.732 543.939C689.756 543.939 543.857 689.838 543.857 869.814C543.857 1049.79 689.756 1195.69 869.732 1195.69Z'
          fill='#82BDCA'
        />
        <path d='M1738.73 0.814453L0.731934 1738.81H1738.73V0.814453Z' fill='#68263A' />
      </DetailsSvg>
    </DetailsContainer>
  );
}
