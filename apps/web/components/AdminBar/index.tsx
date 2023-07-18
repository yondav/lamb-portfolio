import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import tw, { styled } from 'twin.macro';

import Button from '../Button';
import Container from '../Container';
import { A, Helper } from '../Typography';

const Bar = styled(Container).attrs({
  base: { variant: 'flex', orientation: 'col', justify: 'center', align: 'center' },
  md: { variant: 'flex', orientation: 'row' },
  variants: {
    hidden: { transform: 'translateY(100%)' },
    visible: { transform: 'translateY(0)' },
  },
  initial: 'hidden',
  animate: 'visible',
  exit: 'hidden',
  transition: { duration: 0.5 },
})(
  tw`fixed bottom-0 w-full p-4 z-40 text-center bg-brand-black text-brand-white border-brand-cerise-100 gap-4`
);

export default function AdminBar() {
  return (
    <Bar>
      <Helper>
        You are currently previewing unpublished content. Drafts can be published in the{' '}
        <A href='http://' target='_blank' rel='noopener noreferrer'>
          CMS
        </A>
      </Helper>
      <Button variant='primary' size='sm'>
        <Link href='/api/exit-preview'>Close Preview</Link>
      </Button>
    </Bar>
  );
}
