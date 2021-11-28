import React, { useState, useEffect } from 'react';
import Header from '../component/common/Header';
import HeaderNavigation from '../component/common/HeaderNavigation';
import Wrapper from '../component/common/Wrapper';
import SchoolFood from '../component/SchoolFoold';

const HomePage = () => (
  <>
    <Wrapper>
      <Header />
      <HeaderNavigation />
      <SchoolFood />
    </Wrapper>
  </>
);

export default HomePage;
