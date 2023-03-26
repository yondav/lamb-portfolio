import tw, { styled } from 'twin.macro';

export const H1 = styled.h1(
  tw`font-header font-normal text-h1-sm md:text-h1-md lg:text-h1-lg`
);

export const H2 = styled.h1(
  tw`font-header font-normal text-h2-sm md:text-h2-md lg:text-h2-lg`
);

export const H3 = styled.h1(
  tw`font-copy font-bold text-h3-sm md:text-h3-md lg:text-h3-lg`
);

export const P = styled.h1(tw`font-copy font-normal text-p-sm md:text-p-md lg:text-p-lg`);

export const Overline = styled.h1(
  tw`font-copy font-normal text-o-sm md:text-o-md lg:text-o-lg`
);

export const Helper = styled.h1(tw`font-copy font-normal text-helper`);

const Typography = {
  H1,
  H2,
  H3,
  P,
  Overline,
  Helper,
};

export default Typography;
