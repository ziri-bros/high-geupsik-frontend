import { useEffect } from 'react';
import useSWRInfinite from 'swr/infinite';
import { useInView } from 'react-intersection-observer';

const useChatRoomInfiniteScroll = ({ key, api }) => {
  const [ref, inView] = useInView();

  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null;
    if (pageIndex === 0) return `${key}`;
    return [`${key}&lastMessageId=${pageIndex}`, pageIndex];
  };

  const { data, error, setSize } = useSWRInfinite(getKey, api);

  useEffect(() => {
    if (!inView) return;
    setSize(prev => prev + 1);
  }, [inView]);

  return {
    data,
    error,
    setSize,
    ref,
  };
};

export default useChatRoomInfiniteScroll;
