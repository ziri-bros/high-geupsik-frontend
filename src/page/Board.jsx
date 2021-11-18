import React from 'react';
import BoardNaviagtion from '../component/common/BoardNavigation';
import Header from '../component/common/Header';
import HeaderNavigation from '../component/common/HeaderNavigation';
import Post from './Post';
import Wrapper from '../component/common/Wrapper';

const Board = () => (
  <Wrapper>
    <Header />
    <HeaderNavigation />
    <BoardNaviagtion />
    <Post />
  </Wrapper>
);

export default Board;
