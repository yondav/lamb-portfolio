import type { Transition } from 'framer-motion';
import { motion } from 'framer-motion';
import tw, { styled } from 'twin.macro';

import type { CellProps } from '../../styles';
import { cell, fade } from '../../styles';
import Container from '../Container';

const EchoContainer = styled.div<CellProps>(props => [
  tw`md:(h-fit mt-auto relative overflow-hidden shadow-nav)`,
  cell(props),
]);

const EchoGrid = styled(Container)(tw`w-screen md:(relative w-full) lg:gap-0`);

const EchoSvg = styled.svg.attrs({
  xmls: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 390 390',
})<{ visible?: 'sm' | 'lg' }>(({ visible }) => [
  tw`w-full sm:w-1/2 lg:w-auto`,

  visible === 'sm' && tw`hidden sm:block`,
  visible === 'lg' && tw`hidden lg:block`,

  cell({ span: 1 }),
]);

const pathTransition = ({ delay }: { delay: number }): Transition => ({
  duration: 1.2,
  ease: 'easeInOut',
  delay,
  repeat: Infinity,
  repeatType: 'mirror',
});

const EchoStrokePath = ({
  delayIncrease = 0,
  d,
}: {
  delayIncrease?: number;
  d: string;
}) => (
  <motion.path
    variants={fade({ from: 0.05, to: 1 })}
    initial='hidden'
    animate='visible'
    transition={pathTransition({ delay: delayIncrease })}
    d={d}
    fill='none'
    stroke='#b38f89'
    strokeMiterlimit='10'
    strokeWidth='6.2'
  />
);

function Graphic({ delayIncrease = 0 }: { delayIncrease?: number }) {
  return (
    <>
      <path d='M390.01,0H0V390H390.01V0Z' fill='#b38f89' />
      <path
        d='M390.01,0H0V390c103.43,0,202.63-41.09,275.77-114.23C348.92,202.63,390.01,103.43,390.01,0Z'
        fill='#68263a'
      />
      <EchoStrokePath
        delayIncrease={delayIncrease}
        d='M0,97.46c25.01-.05,51.07-11.01,68.76-28.69C86.48,51.05,97.44,25.04,97.46,0'
      />
      <EchoStrokePath
        delayIncrease={delayIncrease + 0.15}
        d='M0,194.96c50.89-.05,101.69-21.29,137.67-57.28C173.67,101.69,194.91,50.89,194.96,0'
      />
      <EchoStrokePath
        delayIncrease={delayIncrease + 0.3}
        d='M0,292.46c76.74-.08,152.32-31.61,206.58-85.87C260.86,152.32,292.38,76.74,292.46,0'
      />
    </>
  );
}

export default function Echo(props: CellProps) {
  return (
    <EchoContainer {...props}>
      <EchoGrid base={{ variant: 'flex' }} lg={{ variant: 'grid', cols: 2 }}>
        <EchoSvg>
          <Graphic />
        </EchoSvg>
        <EchoSvg visible='sm'>
          <Graphic delayIncrease={0.3} />
        </EchoSvg>
        <EchoSvg visible='lg'>
          <Graphic delayIncrease={0.6} />
        </EchoSvg>
        <EchoSvg visible='lg'>
          <Graphic delayIncrease={0.9} />
        </EchoSvg>
      </EchoGrid>
    </EchoContainer>
  );
}
