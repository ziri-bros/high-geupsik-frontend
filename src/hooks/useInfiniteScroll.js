import { useEffect } from 'react';
import useSWRInfinite from 'swr/infinite';
import { useInView } from 'react-intersection-observer';

const useInfiniteScroll = ({ key, api }) => {
  const [ref, inView] = useInView();

  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null;
    return [`${key}&page=${pageIndex}`, pageIndex];
  };

  const { data, error, size, setSize, mutate } = useSWRInfinite(getKey, api);

  useEffect(() => {
    if (!inView) return;
    setSize(prev => prev + 1);
  }, [inView]);

  return {
    data,
    size,
    error,
    setSize,
    ref,
    mutate,
  };
};

export default useInfiniteScroll;
