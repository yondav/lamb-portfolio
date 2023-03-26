import { motion, useCycle } from 'framer-motion';
import { useCallback } from 'react';
import tw from 'twin.macro';

const pathVariant = (d: string) => ({
  d,
  pathLength: [0, 1],
  rotate: [180, 0],
  transition: { duration: 0.5, type: 'spring' },
});

export default function Jamburger() {
  const [icon, toggleIcon] = useCycle('inactive', 'active');

  const toggle = useCallback(() => {
    toggleIcon();
  }, [toggleIcon]);

  return (
    <svg
      onClick={toggle}
      tw='cursor-pointer'
      width='26'
      height='20'
      viewBox='0 0 26 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <motion.path
        variants={{
          inactive: pathVariant('M1 1.70752H25'),
          active: pathVariant('M1.43799 18.8337L18.4086 1.86318'),
        }}
        initial={icon}
        animate={icon}
        stroke='#0C1351'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        css={icon === 'active' ? tw`hidden` : {}}
        d='M1 10.3484H25'
        stroke='#0C1351'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <motion.path
        variants={{
          inactive: pathVariant('M1 18.3484H25'),
          active: pathVariant('M18.4086 18.8337L1.43801 1.86318'),
        }}
        initial={icon}
        animate={icon}
        stroke='#0C1351'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
