import React from 'react';
import Header from '../component/common/Header';
import HeaderNavigation from '../component/common/HeaderNavigation';
import HeaderWrapper from '../component/common/HeaderWrapper';
import NotificationItem from '../component/common/NotificationItem';
import Wrapper from '../component/common/Wrapper';
import Notification from '../component/Notification';

const NotificationPage = () => (
  <Wrapper>
    <HeaderWrapper>
      <Header />
      <HeaderNavigation />
    </HeaderWrapper>
    <Notification />
  </Wrapper>
);

export default NotificationPage;
