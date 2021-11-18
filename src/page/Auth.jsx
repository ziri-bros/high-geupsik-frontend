import React from 'react';
import PropTypes from 'prop-types';
import Header from '../component/common/Header';
import HeaderNavigation from '../component/common/HeaderNavigation';
import Wrapper from '../component/common/Wrapper';
import Sign from '../component/Login';

const Auth = ({ type }) => (
  <Wrapper>
    <Header />
    <HeaderNavigation />
    <Sign type={type} />
  </Wrapper>
);

Auth.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Auth;
