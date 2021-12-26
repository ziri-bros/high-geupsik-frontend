import React from 'react';
import AdminController from '../component/AdminController';
import Header from '../component/common/Header';
import HeaderNavigation from '../component/common/HeaderNavigation';
import HeaderWrapper from '../component/common/HeaderWrapper';
import Wrapper from '../component/common/Wrapper';

const AdminPage = () => (
  <Wrapper>
    <HeaderWrapper>
      <Header admin />
    </HeaderWrapper>
    <AdminController />
  </Wrapper>
);

export default AdminPage;
