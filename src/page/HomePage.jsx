import React from 'react';
import styled from '@emotion/styled';
import Header from '../component/common/Header';
import HeaderNavigation from '../component/common/HeaderNavigation';
import Wrapper from '../component/common/Wrapper';
import Preview from '../component/common/Preview';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  background-color: #e5e5e5;
`;

const HomePage = () => (
  <Wrapper>
    <Header />
    <HeaderNavigation />
    <HomeWrapper>
      <Preview type="cafeteria" />
      <Preview type="board" />
      <Preview type="post" />
    </HomeWrapper>
  </Wrapper>
);

export default HomePage;
