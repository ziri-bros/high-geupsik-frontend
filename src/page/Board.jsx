import React from 'react';
import BoardNaviagtion from '../component/common/BoardNavigation';
import Header from '../component/common/Header';
import HeaderNavigation from '../component/common/HeaderNavigation';
import Wrapper from '../component/common/Wrapper';
import PostPage from './PostPage';
import Writing from '../component/common/Writing';

const Board = () => (
  <Wrapper>
    <Header />
    <HeaderNavigation />
    <BoardNaviagtion />
    <PostPage />
    <Writing />
  </Wrapper>
);

export default Board;
