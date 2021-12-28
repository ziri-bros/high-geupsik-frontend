import React, { useState, useEffect } from 'react';
import Header from '../component/common/Header';
import HeaderNavigation from '../component/common/HeaderNavigation';
import HeaderWrapper from '../component/common/HeaderWrapper';
import Wrapper from '../component/common/Wrapper';
import SchoolFood from '../component/SchoolFood';

const SchoolFoodPage = () => (
  <>
    <Wrapper>
      <HeaderWrapper>
        <Header />
        <HeaderNavigation />
      </HeaderWrapper>
      <SchoolFood />
    </Wrapper>
  </>
);

export default SchoolFoodPage;
