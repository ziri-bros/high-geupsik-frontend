import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Header from '../component/common/Header';
import HeaderNavigation from '../component/common/HeaderNavigation';
import Wrapper from '../component/common/Wrapper';

const DateWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 40px;
  margin: 20px 0 20px 0;
  font-size: 16px;
  font-weight: 700;
  color: #4f4f4f;
  img {
    width: 20px;
    height: 24px;
    cursor: pointer;
  }
`;

const SchoolFoodWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CafeteriaItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  width: 90%;
  height: 100px;
  border: 0.5px solid #adadad;
  border-radius: 5px;
  background-color: white;
  margin-bottom: 8px;
  :nth-of-type(1) {
    margin-top: 8px;
  }
`;

const SchoolFoodUpperWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DaytimeItem = styled.span`
  width: 45px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 500;
  font-size: 12px;
  color: #5d6e1e;

  background-color: #fdfff6;
  border: 1px solid #5d6e1e;
  border-radius: 5px;
  cursor: pointer;
  margin: 12px 0 0 15px;
`;

const Kcal = styled.span`
  margin: 12px 15px 0 0;
  font-weight: 400;
  font-size: 12px;
  color: #626262;
`;

const SchoolFoodList = styled.div`
  margin: 10px 0 0 15px;
  width: 92%;
  font-weight: 400;
  font-size: 12px;
  color: #626262;
`;

// 예시 DB
const exampleSchoolFood = {
  year: '2021',
  month: '11',
  date: '21',
  meal1: '식단1입니다',
  meal2: '식단2입니다',
  meal3: '식단3입니다',
  menu: [
    {
      year: '2021',
      month: '11',
      date: '22',
      meal1: '식단4입니다',
      meal2: '식단5입니다',
      meal3: '식단6입니다',
      menu: [
        {
          year: '2021',
          month: '11',
          date: '23',
          meal1: '식단7입니다',
          meal2: '식단8입니다',
          meal3: '식단9입니다',
          menu: [],
        },
      ],
    },
  ],
};

const HomePage = () => {
  const [year, setYear] = useState(null);
  const [month, setMonth] = useState(null);
  const [date, setDate] = useState(null);

  const haveday31 = [0, 1, 3, 5, 7, 8, 10, 12];
  const haveday30 = [2, 4, 6, 9, 11];

  const dateItem = new Date();
  // 초기 단 한번
  useEffect(() => {
    console.log(exampleSchoolFood);
    setYear(dateItem.getFullYear());
    setMonth(dateItem.getMonth());
    setDate(dateItem.getDate());
  }, []);
  // date변경, 즉 버튼 클릭 시
  // useEffect(() => {
  //   // month처리
  //   if (haveday30.includes(month) && date < 1) {
  //     setMonth(month - 1);
  //     setDate(30);
  //   }
  //   if (haveday31.includes(month) && date < 1) {
  //     if (month === 0) setMonth(11);
  //     else setMonth(month - 1);
  //     setDate(31);
  //   }
  //   if (haveday30.includes(month + 1) && date > 30) {
  //     setMonth(month + 1);
  //     setDate(1);
  //   }
  //   if (haveday31.includes(month + 1) && date > 31) {
  //     if (month + 1 === 12) setMonth(0);
  //     else setMonth(month + 1);
  //     setDate(1);
  //   }
  //   // year처리
  // }, [date]);

  return (
    <>
      <Wrapper>
        <Header />
        <HeaderNavigation />
        <DateWrapper>
          <img src="/images/icons/left_arrow.png" alt="left_arrow" />
          {`${month + 1}월 ${date}일`}
          <img src="/images/icons/right_arrow.png" alt="right_arrow" />
        </DateWrapper>
        <SchoolFoodWrapper>
          <CafeteriaItem>
            <SchoolFoodUpperWrapper>
              <DaytimeItem>아침</DaytimeItem>
              <Kcal>890 kcal</Kcal>
            </SchoolFoodUpperWrapper>
            <SchoolFoodList>식단1</SchoolFoodList>
          </CafeteriaItem>
          <CafeteriaItem>
            <SchoolFoodUpperWrapper>
              <DaytimeItem>점심</DaytimeItem>
              <Kcal>890 kcal</Kcal>
            </SchoolFoodUpperWrapper>
            <SchoolFoodList>식단2</SchoolFoodList>
          </CafeteriaItem>
          <CafeteriaItem>
            <SchoolFoodUpperWrapper>
              <DaytimeItem>저녁</DaytimeItem>
              <Kcal>890 kcal</Kcal>
            </SchoolFoodUpperWrapper>
            <SchoolFoodList>식단3</SchoolFoodList>
          </CafeteriaItem>
        </SchoolFoodWrapper>
      </Wrapper>
    </>
  );
};

export default HomePage;
