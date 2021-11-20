import React from 'react';
import AdminController from '../component/AdminController';
import Header from '../component/common/Header';
import HeaderNavigation from '../component/common/HeaderNavigation';
import Wrapper from '../component/common/Wrapper';

const AdminPage = () => (
  <Wrapper>
    <Header />
    <AdminController />
  </Wrapper>
);

export default AdminPage;
