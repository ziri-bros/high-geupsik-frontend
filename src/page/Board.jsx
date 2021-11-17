import React from 'react';
import BoardNaviagtion from '../component/common/BoardNavigation';
import Header from '../component/common/Header';
import HeaderNavigation from '../component/common/HeaderNavigation';
import Wrapper from '../component/common/Wrapper';

const Board = () => (
  <Wrapper>
    <Header />
    <HeaderNavigation />
    <BoardNaviagtion />
  </Wrapper>
);

export default Board;
