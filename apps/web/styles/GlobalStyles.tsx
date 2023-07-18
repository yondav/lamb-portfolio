import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles as BaseStyles, theme } from 'twin.macro';

import { brand } from './colors';

const CustomStyles = createGlobalStyle`
:root {
  --brand-black: ${brand.black};
  --brand-white: ${brand.white};
  --brand-surface: ${brand.surface};
  --brand-peony: ${brand.peony};
  --brand-cerise-100: ${brand.cerise[100]};
  --brand-cerise-200: ${brand.cerise[200]};
  --brand-cerise-300: ${brand.cerise[300]};
  --brand-aegean: ${brand.aegean};
  --brand-lapis: ${brand.lapis};

  --brand-surface-60: rgba(239, 231, 230, .6);
}

* {
  ${tw`focus-visible:(outline-none ring-2 ring-brand-lapis) focus:outline-none`}
}

html {
  minWidth: 350px;
  scroll-behavior: smooth !important;
  --scroll-behavior: smooth !important;
  scroll-padding-top: ${theme`space.16`};
}

body {
  ${tw`antialiased bg-brand-surface min-h-[200vh]`}
}

#__next {
  ${tw`flex flex-col items-center`}
}

blockquote {
  ${tw`italic ml-2 py-1 px-4 border-l-4 border-brand-peony`}
}

code {
  ${tw`p-0.5 bg-brand-surface brightness-90 font-mono text-brand-black text-helper shadow-inner rounded`}
}

ol {
  list-style: inside;
  list-style-type: decimal;
}

ul {
  list-style: inside;
}`;

// const CustomStyles = createGlobalStyle({
//   ':root': {
//     '--brand-black': '#0f0f0f',
//     '--brand-white': '#ffffff',
//     '--brand-surface': '#EFE7E6',
//     '--brand-peony': '#B38F89',
//     '--brand-cerise-100': '#C15777',
//     '--brand-cerise-200': '#993855',
//     '--brand-cerise-300': '#68263A',
//     '--brand-aegean': '#82BDCA',
//     '--brand-lapis': '#0C1351',

//     '--brand-surface-60': 'rgba(239, 231, 230, .6)',
//   },

//   '*': {
//     ...tw`focus-visible:(outline-none ring-2 ring-brand-lapis) focus:outline-none`,
//   },

//   html: {
//     minWidth: '350px',
//     scrollBehavior: 'smooth !important',
//     '--scroll-behavior': 'smooth !important',
//     scrollPaddingTop: theme`space.16`,
//   },

//   body: {
//     ...tw`antialiased bg-brand-surface min-h-[200vh]`,
//   },

//   '#__next': {
//     ...tw`flex flex-col items-center`,
//   },

//   blockquote: {
//     ...tw`italic ml-2 py-1 px-4 border-l-4 border-brand-peony`,
//   },

//   code: {
//     ...tw`p-0.5 bg-brand-surface brightness-90 font-mono text-brand-black text-helper shadow-inner rounded`,
//   },

//   ol: {
//     listStyle: 'inside',
//     listStyleType: 'decimal',
//   },

//   ul: {
//     listStyle: 'inside',
//   },
// });

function GlobalStyles() {
  return (
    <>
      <BaseStyles />
      <CustomStyles />
    </>
  );
}

export default GlobalStyles;
