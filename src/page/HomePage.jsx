import React from 'react';
import styled from '@emotion/styled';
import Header from '../component/common/Header';
import HeaderNavigation from '../component/common/HeaderNavigation';
import Wrapper from '../component/common/Wrapper';
import Preview from '../component/common/Preview';
import HeaderWrapper from '../component/common/HeaderWrapper';
import MyScoolLink from '../component/MyScoolLink';

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

const HomePage = () => (
  <Wrapper>
    <HeaderWrapper>
      <Header />
      <HeaderNavigation />
    </HeaderWrapper>
    <MyScoolLink />
    <HomeWrapper>
      <Preview type="schoolfood" />
      <Preview type="board" />
      <Preview type="post" />
    </HomeWrapper>
  </Wrapper>
);

export default HomePage;
