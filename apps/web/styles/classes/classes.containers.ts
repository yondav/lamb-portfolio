import tw, { css, theme } from 'twin.macro';

type FlexOrientations = 'col' | 'col-reverse' | 'row' | 'row-reverse';

type FlexJustify = 'between' | 'center' | 'end' | 'evenly' | 'start';

type FlexAlign = 'baseline' | 'center' | 'end' | 'start' | 'stretch';

export interface FlexStyles {
  orientation?: FlexOrientations;
  justify?: FlexJustify;
  align?: FlexAlign;
}

export const flex = ({ orientation, justify, align }: FlexStyles) => [
  tw`flex`,

  orientation === 'col' && tw`flex-col`,
  orientation === 'col-reverse' && tw`flex-col-reverse`,
  orientation === 'row' && tw`flex-row`,
  orientation === 'row-reverse' && tw`flex-row-reverse`,

  justify === 'between' && tw`justify-between`,
  justify === 'center' && tw`justify-center`,
  justify === 'end' && tw`justify-end`,
  justify === 'evenly' && tw`justify-evenly`,
  justify === 'start' && tw`justify-start`,

  align === 'baseline' && tw`items-baseline`,
  align === 'center' && tw`items-center`,
  align === 'end' && tw`items-end`,
  align === 'start' && tw`items-start`,
  align === 'stretch' && tw`items-stretch`,
];

interface FlexBreakPoints {
  base?: FlexStyles;
  sm?: FlexStyles;
  md?: FlexStyles;
  lg?: FlexStyles;
  xl?: FlexStyles;
}

export const flexBreakPoints = ({ base, sm, md, lg, xl }: FlexBreakPoints) => [
  base && flex(base),

  sm &&
    css`
      @media (min-width: ${theme`screens.sm`}) {
        ${flex(sm)}
      }
    `,

  md &&
    css`
      @media (min-width: ${theme`screens.md`}) {
        ${flex(md)}
      }
    `,

  lg &&
    css`
      @media (min-width: ${theme`screens.lg`}) {
        ${flex(lg)}
      }
    `,

  xl &&
    css`
      @media (min-width: ${theme`screens.xl`}) {
        ${flex(xl)}
      }
    `,
];

export type GridRows = 1 | 2 | 3 | 4 | 5 | 6;

export type GridCols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type GridFlow = 'column' | 'column dense' | 'dense' | 'row' | 'row dense';

export interface GridStyles {
  rows?: GridRows;
  cols?: GridCols;
  flow?: GridFlow;
}

export const grid = ({ rows, cols, flow }: GridStyles) => [
  tw`grid`,

  rows &&
    css`
      grid-template-rows: repeat(${rows}, minmax(0, 1fr));
    `,

  cols &&
    css`
      grid-template-columns: repeat(${cols}, minmax(0, 1fr));
    `,

  flow &&
    css`
      grid-auto-flow: ${flow};
    `,
];

interface GridBreakPoints {
  base?: GridStyles;
  sm?: GridStyles;
  md?: GridStyles;
  lg?: GridStyles;
  xl?: GridStyles;
}

export const gridBreakPoints = ({ base, sm, md, lg, xl }: GridBreakPoints) => [
  base && grid(base),

  sm &&
    css`
      @media (min-width: ${theme`screens.sm`}) {
        ${grid(sm)}
      }
    `,

  md &&
    css`
      @media (min-width: ${theme`screens.md`}) {
        ${grid(md)}
      }
    `,

  lg &&
    css`
      @media (min-width: ${theme`screens.lg`}) {
        ${grid(lg)}
      }
    `,

  xl &&
    css`
      @media (min-width: ${theme`screens.xl`}) {
        ${grid(xl)}
      }
    `,
];
