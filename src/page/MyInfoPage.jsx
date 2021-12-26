import React from 'react';
import styled from '@emotion/styled';
import Header from '../component/common/Header';
import HeaderNavigation from '../component/common/HeaderNavigation';
import Wrapper from '../component/common/Wrapper';
import MyInfo from '../component/MyInfo';
import HeaderWrapper from '../component/common/HeaderWrapper';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #e5e5e5;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const MyInfoPage = () => (
  <Wrapper>
    <HeaderWrapper>
      <Header />
      <HeaderNavigation />
    </HeaderWrapper>
    <HomeWrapper>
      <MyInfo />
    </HomeWrapper>
  </Wrapper>
);

export default MyInfoPage;
