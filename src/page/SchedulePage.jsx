import React from 'react';
import Header from '../component/common/Header';
import HeaderNavigation from '../component/common/HeaderNavigation';
import HeaderWrapper from '../component/common/HeaderWrapper';
import Wrapper from '../component/common/Wrapper';
import Timetable from '../component/Timetable';

const SchedulePage = () => (
  <Wrapper>
    <HeaderWrapper>
      <Header />
      <HeaderNavigation />
    </HeaderWrapper>
    <Timetable />
  </Wrapper>
);

export default SchedulePage;
