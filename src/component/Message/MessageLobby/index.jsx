import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import useInfiniteScroll from '../../../hooks/useInfiniteScroll';
import { getMessageRooms } from '../../../lib/api/message';

import MessageLobbyItem from './MessageLobbyItem';

import * as S from './style';

const MessageLobby = () => {
  const info = useSelector(({ userInfo }) => userInfo.info);

  const [roomList, setRoomList] = useState([]);

  const { data, error, ref } = useInfiniteScroll({
    key: '/message/lobby',
    api: (_, pageIndex) =>
      getMessageRooms({ userId: info.id, page: pageIndex }),
  });

  useEffect(() => {
    if (data) {
      setRoomList(data.flat());
    }
  }, [data]);

  return (
    <S.Container>
      {!error && (
        <>
          {roomList.map(content => (
            <MessageLobbyItem key={content.roomId} content={content} />
          ))}
          <S.InfiniteScrollCheck ref={ref} />
        </>
      )}
    </S.Container>
  );
};

export default MessageLobby;
