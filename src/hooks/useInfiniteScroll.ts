import { useState, useEffect, useRef, useCallback } from 'react';


interface UseInfiniteScrollReturn {
  loadMoreRef: React.RefObject<HTMLDivElement>;
  loading: boolean;
}

const useInfiniteScroll = (
  fetchData: () => Promise<void>,
  hasMore: boolean
): UseInfiniteScrollReturn => {
  const [loading, setLoading] = useState(false);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const isIntersecting = entries[0]?.isIntersecting;
      
      if (isIntersecting && hasMore && !loading) {
        setLoading(true);
        fetchData().finally(() => setLoading(false));
      }
    },
    [fetchData, hasMore, loading]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '100px' // Start loading 100px before reaching the bottom
    });

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [handleIntersection]);

  return {
    loadMoreRef: loadMoreRef as React.RefObject<HTMLDivElement>,
    loading
  };
};

export default useInfiniteScroll;