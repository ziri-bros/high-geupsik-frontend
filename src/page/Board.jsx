import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import BoardNaviagtion from '../component/common/BoardNavigation';
import Header from '../component/common/Header';
import HeaderNavigation from '../component/common/HeaderNavigation';
import Wrapper from '../component/common/Wrapper';
import BoardPosting from '../component/common/BoardPosting';
import Writing from '../component/common/Writing';

const Board = ({ match }) => (
  <Wrapper>
    <Header />
    <HeaderNavigation />
    <BoardNaviagtion />
    <BoardPosting path={match.path} />
    <Writing />
  </Wrapper>
);

Board.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default Board;
