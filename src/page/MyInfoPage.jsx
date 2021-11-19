import React from 'react';
import Header from '../component/common/Header';
import HeaderNavigation from '../component/common/HeaderNavigation';
import Wrapper from '../component/common/Wrapper';
import MyInfo from '../component/MyInfo';

const MyInfoPage = () => (
  <Wrapper>
    <Header />
    <HeaderNavigation />
    <MyInfo />
  </Wrapper>
);

export default MyInfoPage;
