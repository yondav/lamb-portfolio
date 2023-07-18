import type { ReactNode } from 'react';
import tw, { styled, css } from 'twin.macro';

import { slideHover } from '../../styles';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md';
}

const StyledButton = styled.button(({ variant, size = 'md' }: ButtonProps) => [
  tw`w-fit relative overflow-hidden rounded transition duration-300 font-copy font-bold active:shadow-inner`,

  size === 'sm' && tw`px-3 py-1.5 text-helper`,
  size === 'md' && tw`px-6 py-3  text-button-sm sm:text-button-md lg:text-button-lg`,

  variant === 'primary' &&
    css`
      ${tw`bg-brand-cerise-100 text-brand-white shadow-button`}
      ${slideHover({ type: 'background', color: 'cerise-300', to: 'right' })}
    `,

  variant === 'secondary' &&
    css`
      ${tw`border border-brand-cerise-100 bg-brand-surface text-brand-cerise-300 hover:border-brand-surface`}
      ${slideHover({ type: 'underline', color: 'cerise-100', to: 'right' })}
    `,
]);

export default function Button({
  variant,
  size,
  children,
}: ButtonProps & { children: ReactNode }) {
  return (
    <StyledButton variant={variant} size={size}>
      <span tw='relative'>{children}</span>
    </StyledButton>
  );
}
