import { motion } from 'framer-motion';
import { css, styled, theme } from 'twin.macro';

import { flex, grid, type FlexStyles, type GridStyles } from '../../styles/classes';

type ContainerStyles =
  | ({ variant: 'flex' } & FlexStyles)
  | ({ variant: 'grid' } & GridStyles);

interface ContainerProps {
  base: ContainerStyles;
  sm?: ContainerStyles;
  md?: ContainerStyles;
  lg?: ContainerStyles;
  xl?: ContainerStyles;
}

const Container = styled(motion.div)<ContainerProps>(({ base, sm, md, lg, xl }) => [
  base.variant === 'flex' && flex(base),
  base.variant === 'grid' && grid(base),

  sm &&
    css`
      @media (min-width: ${theme`screens.sm`}) {
        ${sm.variant === 'flex' ? flex(sm) : grid(sm)}
      }
    `,

  md &&
    css`
      @media (min-width: ${theme`screens.md`}) {
        ${md.variant === 'flex' ? flex(md) : grid(md)}
      }
    `,

  lg &&
    css`
      @media (min-width: ${theme`screens.lg`}) {
        ${lg.variant === 'flex' ? flex(lg) : grid(lg)}
      }
    `,

  xl &&
    css`
      @media (min-width: ${theme`screens.xl`}) {
        ${xl.variant === 'flex' ? flex(xl) : grid(xl)}
      }
    `,
]);

export type { ContainerProps };
export default Container;
