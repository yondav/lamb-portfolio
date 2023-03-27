import tw, { css, styled, theme } from 'twin.macro';

const EchoContainer = styled.div(
  () => css`
    ${tw`md:(h-full relative overflow-hidden shadow-nav)`}
    & div {
      ${tw`absolute left-0 w-screen sm:flex md:(relative w-full) lg:(grid grid-cols-2 gap-0)`}
      & svg {
        ${tw`w-full sm:w-1/2`}
        @media only screen and (min-width: ${theme`screens.lg`}) {
          ${tw`col-span-1 w-auto`}
        }
      }
    }
  `
);

function Graphic() {
  return (
    <>
      <g id='a' />
      <g id='b'>
        <g>
          <path d='M390,0H0V390H390V0Z' fill='#b38f89' />
          <path
            d='M390,0H0V390c103.43,0,202.63-41.09,275.77-114.23C348.91,202.63,390,103.43,390,0Z'
            fill='#68263a'
          />
          <path
            d='M0,198.05v-6.09c50.89-.05,99.69-20.29,135.67-56.28C171.66,99.69,191.9,50.89,191.95,0h6.09c-.06,52.51-20.94,102.85-58.07,139.98C102.85,177.1,52.51,197.99,0,198.05Z'
            fill='#b38f89'
          />
          <path
            d='M0,100.55v-6.09c25.04-.03,49.05-9.99,66.76-27.69C84.47,49.05,94.43,25.04,94.45,0h6.09c-.03,26.66-10.64,52.21-29.49,71.06C52.21,89.91,26.66,100.51,0,100.55Z'
            fill='#b38f89'
          />
          <path
            d='M0,295.55v-6.09c76.74-.08,150.32-30.61,204.58-84.87C258.85,150.32,289.37,76.74,289.45,0h6.09c-.08,78.36-31.25,153.48-86.66,208.89C153.48,264.3,78.36,295.46,0,295.55Z'
            fill='#b38f89'
          />
        </g>
      </g>
    </>
  );
}

export default function Echo() {
  return (
    <EchoContainer>
      <div>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 390 390'>
          <Graphic />
        </svg>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 390 390'
          tw='hidden sm:block'
        >
          <Graphic />
        </svg>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 390 390'
          tw='hidden lg:block'
        >
          <Graphic />
        </svg>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 390 390'
          tw='hidden lg:block'
        >
          <Graphic />
        </svg>
      </div>
    </EchoContainer>
  );
}
