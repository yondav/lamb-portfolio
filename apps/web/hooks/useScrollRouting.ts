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
    scrolling,
  } = useScrollData();

  const bounds = section.current?.getBoundingClientRect();

  const pushRoute = useCallback(() => {
    if (!bounds) return;
    if (y < 70) router.push(`/`, undefined, { shallow: true });
    if (bounds.top <= 70 && bounds.bottom >= 70) {
      if (router.asPath === `/${sectionId}`) return;
      router.push(`/#${sectionId}`, `/${sectionId}`, { shallow: true, scroll: false });
    }
  }, [bounds, router, sectionId, y]);

  useEffect(() => {
    if (!scrolling) {
      pushRoute();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [y, scrolling]);
}
