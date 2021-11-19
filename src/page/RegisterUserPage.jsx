import React from 'react';
import Header from '../component/common/Header';
import HeaderNavigation from '../component/common/HeaderNavigation';
import Wrapper from '../component/common/Wrapper';
import RegisterUserInfo from '../component/RegisterUserInfo';

const RegisterUserPage = () => (
  <Wrapper>
    <Header />
    <HeaderNavigation />
    <RegisterUserInfo />
  </Wrapper>
);

export default RegisterUserPage;
