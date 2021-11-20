import React from 'react';
import PropTypes from 'prop-types';
import Header from '../component/common/Header';
import HeaderNavigation from '../component/common/HeaderNavigation';
import Wrapper from '../component/common/Wrapper';
import Sign from '../component/Login';

const AuthPage = ({ type }) => (
  <Wrapper>
    <Header />
    <HeaderNavigation />
    <Sign type={type} />
  </Wrapper>
);

AuthPage.propTypes = {
  type: PropTypes.string.isRequired,
};

export default AuthPage;
