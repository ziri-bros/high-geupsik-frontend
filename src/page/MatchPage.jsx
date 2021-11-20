import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import MatchProcedure from '../component/MatchProcedure';
import Header from '../component/common/Header';
import HeaderNavigation from '../component/common/HeaderNavigation';
import Wrapper from '../component/common/Wrapper';

const MatchPage = ({ match }) => (
  <Wrapper>
    <Header />
    <HeaderNavigation />
    <MatchProcedure path={match.path} />
  </Wrapper>
);

MatchPage.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default MatchPage;
