import React from 'react';
import PropTypes from 'prop-types';
import Header from '../component/common/Header';
import HeaderNavigation from '../component/common/HeaderNavigation';
import Wrapper from '../component/common/Wrapper';
import Sign from '../component/Login';
import HeaderWrapper from '../component/common/HeaderWrapper';

const AuthPage = ({ type }) => (
  <Wrapper>
    <HeaderWrapper>
      <Header />
      <HeaderNavigation />
    </HeaderWrapper>
    <Sign type={type} />
  </Wrapper>
);

AuthPage.propTypes = {
  type: PropTypes.string.isRequired,
};

export default AuthPage;
