import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import useSWR from 'swr';
import { useSelector } from 'react-redux';

import useDetectOutsideClick from '../../../hooks/useDetectOutsideClick';
import MoreButtonPop from '../../common/MoreButtonPop';
import { getRoomMessages, postMessage } from '../../../lib/api/message';

import * as S from './style';

const MessageRoom = ({ boardId, roomId, receiverId }) => {
  const history = useHistory();

  const info = useSelector(({ userInfo }) => userInfo.info);

  // const { data, error, setSize, ref } = useInfiniteScroll({
  //   key: '/message/room',
  //   api: (_, pageIndex) => getRoomMessages({ roomId }),
  // });

  const { data, mutate } = useSWR(`/message/room/${roomId}`, () =>
    getRoomMessages({ roomId }),
  );

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (data) {
      setMessages(data.data);
    }
  }, [data]);

  const moreButtonPopRef = useRef(null);
  const [isMoreButtonPopOn, setIsMoreButtonPopOn] = useDetectOutsideClick(
    moreButtonPopRef,
    false,
  );

  const [messageValue, setMessageValue] = useState('');

  const handleMessageValue = e => {
    setMessageValue(e.target.value);
  };

  const onClickSendMessage = async () => {
    try {
      await postMessage({ roomId, content: messageValue });
      setMessageValue('');
      mutate();
    } catch (e) {
      console.log(e);
    }
  };

  const onKeyDownInput = e => {
    if (e.key === 'Enter') {
      onClickSendMessage();
    }
  };

  return (
    <>
      {isMoreButtonPopOn && (
        <MoreButtonPop
          type="message"
          roomId={roomId}
          morePopHandle={() => setIsMoreButtonPopOn(false)}
          moreButtonPopRef={moreButtonPopRef}
        />
      )}
      <S.Container>
        <S.FixedHeader>
          <S.LeftArrow onClick={() => history.goBack()}>
            <img src="/images/icons/left_arrow.png" alt="left_arrow" />
          </S.LeftArrow>
          <S.RoomName>익명</S.RoomName>
          <S.MoreButton onClick={() => setIsMoreButtonPopOn(true)}>
            <img src="/images/icons/more.png" alt="more" />
          </S.MoreButton>
        </S.FixedHeader>
        <S.ContentContainer>
          <S.MessagesContainer>
            {messages.map(message =>
              message.senderId === info.id ? (
                <S.MyMessageContainer>
                  <S.MyMessageWrapper>
                    <S.MyMessageTime>
                      {message.createdDate.split('T')[1]}
                    </S.MyMessageTime>
                    <S.MyMessageContent>{message.content}</S.MyMessageContent>
                  </S.MyMessageWrapper>
                </S.MyMessageContainer>
              ) : (
                <S.OpponentMessageContainer>
                  <S.OpponentMessageWrapper>
                    <S.OpponentMessageContent>
                      {message.content}
                    </S.OpponentMessageContent>
                    <S.OpponentMessageTime>
                      {message.createdDate.split('T')[1]}
                    </S.OpponentMessageTime>
                  </S.OpponentMessageWrapper>
                </S.OpponentMessageContainer>
              ),
            )}
          </S.MessagesContainer>
        </S.ContentContainer>
        <S.MessageInputWrapper>
          <S.Input
            type="text"
            placeholder="쪽지 내용을 입력하세요"
            name="message"
            value={messageValue}
            onChange={handleMessageValue}
            id="message-input"
            onKeyPress={onKeyDownInput}
          />
          <S.SendButton onClick={onClickSendMessage}>
            <img src="/images/icons/send_green.png" alt="send" />
          </S.SendButton>
        </S.MessageInputWrapper>
      </S.Container>
    </>
  );
};

MessageRoom.propTypes = {
  boardId: PropTypes.string.isRequired,
  roomId: PropTypes.string.isRequired,
  receiverId: PropTypes.string.isRequired,
};

export default MessageRoom;
