import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';

import Header from '../component/common/Header';
import HeaderNavigation from '../component/common/HeaderNavigation';
import Wrapper from '../component/common/Wrapper';
import HeaderWrapper from '../component/common/HeaderWrapper';
import MessageLobby from '../component/Message/MessageLobby';

const MessagePage = ({ match }) => (
  <Wrapper>
    <HeaderWrapper>
      <Header />
      <HeaderNavigation />
    </HeaderWrapper>
    <MessageLobby path={match.path} />
  </Wrapper>
);

MessagePage.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default MessagePage;
