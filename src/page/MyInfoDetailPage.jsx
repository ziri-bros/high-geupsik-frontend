import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import Header from '../component/common/Header';
import HeaderNavigation from '../component/common/HeaderNavigation';
import Wrapper from '../component/common/Wrapper';
import MyInfoDetail from '../component/MyInfoDetail';

const MyInfoDetailPage = ({ match }) => (
  <Wrapper>
    <Header />
    <HeaderNavigation />
    <MyInfoDetail path={match.path} />
  </Wrapper>
);

MyInfoDetailPage.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default MyInfoDetailPage;
