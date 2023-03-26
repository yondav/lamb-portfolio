import { useRouter } from 'next/router';
import type { RefObject } from 'react';
import { useCallback, useEffect } from 'react';
import { useScrollData } from 'scroll-data-hook';

interface ScrollRoutingParams {
  section: RefObject<HTMLElement>;
  sectionId: string;
}

export default function useScrollRouting({ section, sectionId }: ScrollRoutingParams) {
  const router = useRouter();
  const {
    position: { y },
  } = useScrollData();

  const bounds = section.current?.getBoundingClientRect();

  const pushRoute = useCallback(() => {
    if (!bounds) return;
    if (y === 0) router.push(`/`, undefined, { shallow: true });
    if (y > bounds.top && y < bounds.bottom) {
      if (router.asPath === `/#${sectionId}`) return;
      router.push(`/#${sectionId}`, undefined, { shallow: true });
    }
  }, [bounds, router, sectionId, y]);

  useEffect(() => {
    pushRoute();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [y]);
}
