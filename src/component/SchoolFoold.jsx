import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import XMLParser from 'react-xml-parser';
import { getTargetDate, getWeek } from '../utils';
import { mealServiceDietInfo } from '../lib/api/schoolFoodInfo';

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

const Img = styled.img``;

const SchoolFood = () => {
  const info = useSelector(({ userInfo }) => userInfo.info);
  const [breakfast, setBreakfast] = useState({
    kcal: '',
    foodlist: '',
  });
  const [lunch, setLunch] = useState({
    kcal: '',
    foodlist: '',
  });
  const [dinner, setDinner] = useState({
    kcal: '',
    foodlist: '',
  });

  const [targetDate, setTargetDate] = useState(0);

  const [tmp, setTmp] = useState(1);

  const deleteSchoolFoodCharacters = value => {
    const completeSchoolFood = value
      .replace(/[0-9]/g, '')
      .replace(/\./g, '')
      .replace(/~/g, '')
      .replace(/\(과학고\)/g, '')
      .replace(/\(과\)/g, '')
      .replace(/\(조\/석\)/g, '')
      .replace(/\(조식-과학고\)/g, '')
      .replace(/\(중식-과학고\)/g, '')
      .replace(/\(석식-과학고\)/g, '')
      .replace(/\(조-과학고\)/g, '')
      .replace(/\(중-과학고\)/g, '')
      .replace(/\(석-과학고\)/g, '')
      .replace(/\(조식\)/g, '')
      .replace(/\(중식\)/g, '')
      .replace(/\(석식\)/g, '')
      .replace(/\(조\)/g, '')
      .replace(/\(중\)/g, '')
      .replace(/\(석\)/g, '')
      .replace(/<br\/>/g, ', ')
      .replace(/>/g, '')
      .replace(/[~!^*_+|<>?:{}]/g, '');

    return completeSchoolFood;
  };

  useEffect(() => {
    setTargetDate(getTargetDate(tmp));
  }, [tmp]);

  useEffect(() => {
    if (info) {
      const { code, regionCode } = info.schoolDTO;
      const data = {
        code,
        regionCode,
        targetDate,
      };

      const mealServiceDietInfoAPI = async () => {
        const response = await mealServiceDietInfo(data);
        const xmlToJson = new XMLParser().parseFromString(response);

        // 아점저 처리.
        switch (xmlToJson.children.length) {
          case 2:
            setBreakfast({
              ...breakfast,
              kcal: '',
              foodlist: '식사 없음',
            });
            setLunch({
              ...lunch,
              kcal: '',
              foodlist: '식사 없음',
            });
            setDinner({
              ...dinner,
              kcal: '',
              foodlist: '식사 없음',
            });
            break;
          case 3:
            setBreakfast({
              ...breakfast,
              kcal: xmlToJson.children[1].children[10].value.replace(/>/g, ''),
              foodlist: deleteSchoolFoodCharacters(
                xmlToJson.children[1].children[8].value,
              ),
            });
            setLunch({
              ...lunch,
              kcal: xmlToJson.children[2].children[10].value.replace(/>/g, ''),
              foodlist: deleteSchoolFoodCharacters(
                xmlToJson.children[2].children[8].value,
              ),
            });
            setDinner({
              ...dinner,
              kcal: '',
              foodlist: '식사 없음',
            });
            break;
          default:
            setBreakfast({
              ...breakfast,
              kcal: xmlToJson.children[1].children[10].value.replace(/>/g, ''),
              foodlist: deleteSchoolFoodCharacters(
                xmlToJson.children[1].children[8].value,
              ),
            });
            setLunch({
              ...lunch,
              kcal: xmlToJson.children[2].children[10].value.replace(/>/g, ''),
              foodlist: deleteSchoolFoodCharacters(
                xmlToJson.children[2].children[8].value,
              ),
            });
            setDinner({
              ...dinner,
              kcal: xmlToJson.children[3].children[10].value.replace(/>/g, ''),
              foodlist: deleteSchoolFoodCharacters(
                xmlToJson.children[3].children[8].value,
              ),
            });
        }
      };
      mealServiceDietInfoAPI();
    }
  }, [info, targetDate]);

  // 현재 날짜와 DB의 날짜를 비교해서 depth를 파악 후 오늘급식 띄우는게 우선.

  return (
    <>
      <DateWrapper>
        <Img
          onClick={() => setTmp(tmp - 1)}
          src="/images/icons/left_arrow.png"
          alt="left_arrow"
        />
        {`${getTargetDate(tmp).substring(4, 6)}월 ${getTargetDate(
          tmp,
        ).substring(6, 8)}일 (${getWeek(tmp)})`}
        <Img
          onClick={() => setTmp(tmp + 1)}
          src="/images/icons/right_arrow.png"
          alt="right_arrow"
        />
      </DateWrapper>
      <SchoolFoodWrapper>
        <SchoolFoodItem>
          <SchoolFoodUpperWrapper>
            <DaytimeItem>아침</DaytimeItem>
            <Kcal>{breakfast.kcal}</Kcal>
          </SchoolFoodUpperWrapper>
          <SchoolFoodList>{breakfast.foodlist}</SchoolFoodList>
        </SchoolFoodItem>
        <SchoolFoodItem>
          <SchoolFoodUpperWrapper>
            <DaytimeItem>점심</DaytimeItem>
            <Kcal>{lunch.kcal}</Kcal>
          </SchoolFoodUpperWrapper>
          <SchoolFoodList>{lunch.foodlist}</SchoolFoodList>
        </SchoolFoodItem>
        <SchoolFoodItem>
          <SchoolFoodUpperWrapper>
            <DaytimeItem>저녁</DaytimeItem>
            <Kcal>{dinner.kcal}</Kcal>
          </SchoolFoodUpperWrapper>
          <SchoolFoodList>{dinner.foodlist}</SchoolFoodList>
        </SchoolFoodItem>
      </SchoolFoodWrapper>
    </>
  );
};

export default SchoolFood;
