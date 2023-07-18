import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import tw, { styled, theme } from 'twin.macro';

import type { JamburgerState } from '../../contexts/nav';
import { useNavContext } from '../../contexts/nav';
import Container from '../Container';

const JamburgerContainer = styled(Container).attrs({
  base: { variant: 'flex', align: 'center' },
})(tw`gap-4`);

const JamburgerSvg = styled.svg.attrs({
  width: '26',
  height: '20',
  viewBox: '0 0 26 20',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
})(tw`cursor-pointer`);

const pathVariant = (d: string) => ({
  d,
  pathLength: [0, 1],
  rotate: [180, 0],
  transition: { duration: 1.2, type: 'spring' },
});

const JamburgerPath = styled(motion.path).attrs({
  stroke: theme`colors.brand.lapis`,
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
})<{
  variants?: Variants;
  initial?: JamburgerState;
  animate?: JamburgerState;
  hidden?: boolean;
}>(({ hidden }) => (hidden ? tw`hidden` : {}));

export default function Jamburger() {
  const {
    jamburger: { icon, toggle },
  } = useNavContext();

  return (
    <JamburgerContainer>
      <JamburgerSvg onClick={toggle}>
        <JamburgerPath
          variants={{
            inactive: pathVariant('M1 1.70752H25'),
            active: pathVariant('M1.43799 18.8337L18.4086 1.86318'),
          }}
          initial={icon}
          animate={icon}
        />
        <JamburgerPath hidden={icon === 'active'} d='M1 10.3484H25' />
        <JamburgerPath
          variants={{
            inactive: pathVariant('M1 18.3484H25'),
            active: pathVariant('M18.4086 18.8337L1.43801 1.86318'),
          }}
          initial={icon}
          animate={icon}
        />
      </JamburgerSvg>
    </JamburgerContainer>
  );
}
