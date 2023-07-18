import { AnimatePresence, motion } from 'framer-motion';
import { wrap } from 'popmotion';
import { useCallback, useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';

import { scrollHide, swipe } from '../../styles';
import Container from '../Container';
import Indicator from '../SVG/Indicator';

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const CarouselWrapper = styled.div(() => [
  tw`relative h-[calc(100% - 3rem)]`,
  scrollHide,
]);

const CarouselContent = styled(Container).attrs({
  base: { variant: 'flex' },
  variants: swipe,
  initial: 'enter',
  animate: 'center',
  exit: 'exit',
  transition: {
    x: { type: 'spring', stiffness: 300, damping: 30 },
    opacity: { duration: 1, delay: 0.3 },
  },
  drag: 'x',
  dragConstraints: { left: 0, right: 0 },
  dragElastic: 1,
  style: { top: 0, left: 0 },
})(() => [tw`snap-x snap-mandatory overflow-scroll`, scrollHide]);

export default function Carousel({
  items,
  auto = false,
}: {
  items: JSX.Element[];
  auto?: boolean;
}) {
  const [[page, direction], setPage] = useState([0, 0]);

  const itemIndex = wrap(0, items.length, page);

  const paginate = useCallback(
    (newDirection: number) => {
      setPage([page + newDirection, newDirection]);
    },
    [page]
  );

  useEffect(() => {
    if (auto) {
      const interval = setInterval(() => {
        paginate(1);
      }, 20000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [auto, paginate]);

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <CarouselWrapper>
          <CarouselContent
            key={page}
            custom={direction}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          >
            {items[itemIndex]}
          </CarouselContent>
        </CarouselWrapper>
      </AnimatePresence>
      <div css={tw` w-full flex justify-center absolute bottom-4 left-0`}>
        {items.map((item, i) => (
          <Indicator
            key={`${item.key}`}
            active={i === itemIndex}
            onClick={() => setPage(prev => [i, prev[1]])}
          />
        ))}
      </div>
    </>
  );
}
