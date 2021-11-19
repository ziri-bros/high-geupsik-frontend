import React from 'react';
import Header from '../component/common/Header';
import HeaderNavigation from '../component/common/HeaderNavigation';
import Wrapper from '../component/common/Wrapper';
import Timetable from '../component/Timetable';

const SchedulePage = () => (
  <Wrapper>
    <Header />
    <HeaderNavigation />
    <Timetable />
  </Wrapper>
);

export default SchedulePage;
