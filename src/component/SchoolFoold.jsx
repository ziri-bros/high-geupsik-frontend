import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

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

const SchoolFoodItem = styled.div`
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

const SchoolFood = () => {
  const [year, setYear] = useState(null);
  const [month, setMonth] = useState(null);
  const [date, setDate] = useState(null);

  const dateItem = new Date();
  // 초기 단 한번
  useEffect(() => {
    setYear(dateItem.getFullYear());
    setMonth(dateItem.getMonth());
    setDate(dateItem.getDate());
  }, []);

  // 현재 날짜와 DB의 날짜를 비교해서 depth를 파악 후 오늘급식 띄우는게 우선.

  return (
    <>
      <DateWrapper>
        <img src="/images/icons/left_arrow.png" alt="left_arrow" />
        {`${month + 1}월 ${date}일`}
        <img src="/images/icons/right_arrow.png" alt="right_arrow" />
      </DateWrapper>
      <SchoolFoodWrapper>
        <SchoolFoodItem>
          <SchoolFoodUpperWrapper>
            <DaytimeItem>아침</DaytimeItem>
            <Kcal>890 kcal</Kcal>
          </SchoolFoodUpperWrapper>
          <SchoolFoodList>식단1</SchoolFoodList>
        </SchoolFoodItem>
        <SchoolFoodItem>
          <SchoolFoodUpperWrapper>
            <DaytimeItem>점심</DaytimeItem>
            <Kcal>890 kcal</Kcal>
          </SchoolFoodUpperWrapper>
          <SchoolFoodList>식단2</SchoolFoodList>
        </SchoolFoodItem>
        <SchoolFoodItem>
          <SchoolFoodUpperWrapper>
            <DaytimeItem>저녁</DaytimeItem>
            <Kcal>890 kcal</Kcal>
          </SchoolFoodUpperWrapper>
          <SchoolFoodList>식단3</SchoolFoodList>
        </SchoolFoodItem>
      </SchoolFoodWrapper>
    </>
  );
};

export default SchoolFood;
