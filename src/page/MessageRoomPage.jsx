import { React, useState } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import BoardNaviagtion from '../component/common/BoardNavigation';
import Header from '../component/common/Header';
import HeaderNavigation from '../component/common/HeaderNavigation';
import HeaderWrapper from '../component/common/HeaderWrapper';
import Wrapper from '../component/common/Wrapper';
import MessageRoom from '../component/Message/MessageRoom';
import Post from '../component/Post';

const MessageRoomPage = ({ match }) => {
  const { boardId, roomId, receiverId } = match.params;

  return (
    <Wrapper>
      <HeaderWrapper>
        <Header />
        <HeaderNavigation />
      </HeaderWrapper>
      <MessageRoom boardId={boardId} roomId={roomId} receiverId={receiverId} />
    </Wrapper>
  );
};

export default MessageRoomPage;

MessageRoomPage.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};
