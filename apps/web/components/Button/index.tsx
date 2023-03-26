import type { ReactNode } from 'react';
import tw, { styled, css } from 'twin.macro';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
}

const StyledButton = styled.button(({ variant }: ButtonProps) => [
  tw`w-fit relative overflow-hidden px-6 py-3 rounded transition duration-300 font-copy font-bold text-button-sm md:text-button-md lg:text-button-lg active:shadow-inner`,

  variant === 'primary' &&
    tw`bg-brand-cerise-100 text-brand-white shadow-button before:(content-[''] absolute top-0 right-full w-full h-full bg-brand-cerise-300 transition-all duration-500) hover:before:right-0`,

  variant === 'secondary' &&
    css`
      ${tw`border border-brand-cerise-100 bg-brand-surface text-brand-cerise-300 hover:border-brand-surface before:(content-[''] absolute top-0 right-full w-1/2 h-full border-b border-brand-cerise-100 transition-all duration-500)  hover:(before:right-1/4 text-brand-cerise-100)`}
    `,
]);

export default function Button({
  variant,
  children,
}: ButtonProps & { children: ReactNode }) {
  return (
    <StyledButton variant={variant}>
      <span tw='relative'>{children}</span>
    </StyledButton>
  );
}
