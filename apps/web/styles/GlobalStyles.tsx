import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle({
  ':root': {
    '--brand-black': '#0f0f0f',
    '--brand-white': '#ffffff',
    '--brand-surface': '#EFE7E6',
    '--brand-peony': '#B38F89',
    '--brand-cerise-100': '#C15777',
    '--brand-cerise-200': '#993855',
    '--brand-cerise-300': '#68263A',
    '--brand-aegean': '#82BDCA',
    '--brand-lapis': '#0C1351',
  },

  '*': {
    ...tw`focus-visible:(outline-none ring-2 ring-brand-lapis) focus:outline-none`,
  },

  body: {
    ...tw`antialiased`,
  },
});

function GlobalStyles() {
  return (
    <>
      <BaseStyles />
      <CustomStyles />
    </>
  );
}

export default GlobalStyles;
