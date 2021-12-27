import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import BoardNaviagtion from '../component/common/BoardNavigation';
import Header from '../component/common/Header';
import HeaderNavigation from '../component/common/HeaderNavigation';
import Wrapper from '../component/common/Wrapper';
import BoardPosting from '../component/common/BoardPosting';
import Writing from '../component/common/Writing';
import HeaderWrapper from '../component/common/HeaderWrapper';

const BoardPage = ({ match }) => (
  <Wrapper>
    <HeaderWrapper>
      <Header />
      <HeaderNavigation />
      <BoardNaviagtion />
    </HeaderWrapper>
    <BoardPosting path={match.path} />
    <Writing />
  </Wrapper>
);

BoardPage.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default BoardPage;
