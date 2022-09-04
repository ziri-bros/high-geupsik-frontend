import React from 'react';
import PropTypes from 'prop-types';

import * as S from './style';

const MessageLobbyItem = ({ content }) => (
  <S.Container
    to={`/message/${content.boardId}/${content.roomId}/${content.receiverId}`}
  >
    <S.MainContainer>
      <S.AnonymousName>익명</S.AnonymousName>
      <S.Date>{content.modifiedDate.split('T').join(' ')}</S.Date>
    </S.MainContainer>
    <S.SubContainer>
      <S.ChatContent>{content.recentMessage}</S.ChatContent>
      {content.newMessageCount !== 0 && (
        <S.Notification>{content.newMessageCount}</S.Notification>
      )}
    </S.SubContainer>
  </S.Container>
);

MessageLobbyItem.propTypes = {
  content: PropTypes.object,
};

export default MessageLobbyItem;
