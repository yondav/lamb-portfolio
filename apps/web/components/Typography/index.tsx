import type { PortableTextProps } from '@portabletext/react';
import { PortableText } from '@portabletext/react';
import tw, { styled } from 'twin.macro';

import { link } from '../../styles';

export const H1 = styled.h1(
  tw`font-header font-normal text-h1-sm sm:text-h1-md xl:text-h1-lg`
);

export const H2 = styled.h2(
  tw`font-header font-normal text-h2-sm sm:text-h2-md xl:text-h2-lg`
);

export const H3 = styled.h3(
  tw`font-copy font-bold text-h3-sm sm:text-h3-md xl:text-h3-lg`
);

export const P = styled.p(tw`font-copy font-normal text-p-sm sm:text-p-md xl:text-p-lg`);

export const Overline = styled.h4(
  tw`uppercase font-copy font-normal text-o-sm sm:text-o-md xl:text-o-lg`
);

export const Helper = styled.span(tw`font-copy font-normal text-helper`);

export const A = styled.a(() => link);

export const RichText = (props: Omit<PortableTextProps, 'components'>) => (
  <PortableText
    {...props}
    components={{
      // types: {},
      marks: {
        link: ({ children, value }) => {
          const href = value.href.startsWith('https://' || 'http://')
            ? value.href
            : `https://${value.href}`;
          return (
            <A href={href} target='_blank'>
              {children}
            </A>
          );
        },
      },
      block: {
        h1: H1,
        h2: H2,
        h3: H3,
        h4: Overline,
        h5: P,
        h6: Helper,
        normal: P,
      },
      list: {},
    }}
  />
);

const Typography = {
  H1,
  H2,
  H3,
  P,
  Overline,
  Helper,
  RichText,
};

export default Typography;
