import tw, { css, theme } from 'twin.macro';

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface CellProps {
  span: Cols;
  md?: Cols;
  lg?: Cols;
}

export const container = ({ hasBackground }: { hasBackground: boolean }) => [
  tw`flex flex-col items-center h-[500vh]`,
  hasBackground && tw`bg-brand-surface`,
];

export const gutters = tw`mx-auto max-w-[1200px] w-[calc(100vw - 32px)] md:w-[calc(100vw - 96px)] lg:w-[calc(100vw - 240px)]`;

export const wrapper = {
  ...gutters,
  ...tw`py-16 grid grid-cols-12 gap-x-3 gap-y-16 md:(w-[calc(100vw - 96px)] gap-4) lg:(w-[calc(100vw - 240px)] gap-6)`,
};

export const cell = ({ span, md, lg }: CellProps) => [
  css`
    grid-column: span ${span} / span ${span};
  `,

  md &&
    css`
      @media only screen and (min-width: ${theme`screens.md`}) {
        grid-column: span ${md} / span ${md};
      }
    `,

  lg &&
    css`
      @media only screen and (min-width: ${theme`screens.lg`}) {
        grid-column: span ${lg} / span ${lg};
      }
    `,
];
