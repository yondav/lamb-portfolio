import tw, { css, theme } from 'twin.macro';

interface SlideHoverProps {
  type: 'background' | 'underline';
  color:
    | 'cerise-100'
    | 'cerise-200'
    | 'cerise-300'
    | 'aegean'
    | 'lapis'
    | 'peony'
    | 'surface'
    | 'white'
    | 'black';
  to: 'top' | 'right' | 'bottom' | 'left';
}

export type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface CellProps {
  span: Cols;
  md?: Cols;
  lg?: Cols;
}

export const gutters = tw`mx-auto max-w-[1200px] w-[calc(100vw - 32px)] md:w-[calc(100vw - 96px)] xl:w-[calc(100vw - 240px)]`;

export const wrapper = {
  ...gutters,
  ...tw`py-16 grid grid-cols-12 gap-x-3 gap-y-16 md:(w-[calc(100vw - 96px)] gap-x-4) xl:(w-[calc(100vw - 240px)] gap-6)`,
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

export const scrollHide = css`
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const slideStyles = ({ type, color, to }: SlideHoverProps) => {
  const colorVariant = `var(--brand-${color})`;
  return {
    inactive: css`
      ${tw`before:(pointer-events-none content-[''] absolute h-full transition-all duration-500)`}
      ${type === 'background' && tw`before:w-full`}
      ${type === 'underline' && tw`before:(w-1/2 border-b)`}
      &:before {
        background-color: ${type === 'background' ? colorVariant : 'transparent'};
        border-color: ${type === 'underline' ? colorVariant : 'transparent'};
        ${to === 'left' || to === 'right'
          ? 'top: 0px'
          : `left: ${type === 'underline' ? '25%' : '0px'}`};
        ${to === 'bottom' && 'bottom: 100%;'}
        ${to}: 100%;
      }
    `,
    active: css`
      color: ${type === 'underline' ? colorVariant : ''};
      &:before {
        ${(to === 'top' || to === 'bottom') &&
        `left: ${type === 'underline' ? '25%' : '0px'};`}
        ${to}: ${type === 'background' || to === 'bottom' || to === 'top' ? '0px' : '25%'}
      }
    `,
  };
};

export const slideHover = (props: SlideHoverProps) => [
  slideStyles(props).inactive,
  css`&:hover {
    ${slideStyles(props).active}}
  }`,
];

export const link = () => [
  tw`relative text-brand-cerise-100 hover:text-brand-cerise-200 transition-colors`,
  // slideHover({ type: 'underline', color: 'cerise-200', to: 'right' }),
];
