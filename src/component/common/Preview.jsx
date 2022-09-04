import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import XMLParser from 'react-xml-parser';

import styled from '@emotion/styled';
import PropTypes, { func } from 'prop-types';
import { getTargetDate, getTodayDate } from '../../utils';

import BoardComponent from './BoardComponent';
import { getBoardList } from '../../lib/api/board';
import { mealServiceDietInfo } from '../../lib/api/schoolFoodInfo';
import { getSchoolFoodList } from '../../store/schoolFoodList';
import MySchoolLink from '../MyScoolLink';

const PreviewItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 94%;
  height: auto;
  margin: 12px 0 0 0;
  border: 0.5px solid #adadad;
  border-radius: 5px;
  background-color: white;
  :last-of-type {
    margin: 12px 0 12px 0;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 94%;
  height: 40px;
  margin: 10px 0 0 15px;
  span {
    margin: 0 0 0 5px;
  }
  span:nth-of-type(2) {
    display: flex;
    font-size: 10px;
    font-weight: 400;
    color: #4f4f4f;
    margin: 6px auto 0 10px;
  }
`;

const IconItem = styled.div`
  display: flex;
  cursor: pointer;
  img {
    margin: 5px 5px 0 0;
    width: 26px;
    height: 26px;
  }
`;

const SchoolFoodWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: auto;
  height: auto;
  border-radius: 5px;
  margin: 0 0 0 0;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  @media only screen and (max-width: 400px) {
    justify-content: flex-start;
  }
`;

const SchoolFoodItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  width: 120px;
  height: 160px;
  border: 0.5px solid #adadad;
  border-radius: 5px;
  background-color: white;
  margin: 10px;
`;

const SchoolFoodTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  margin: 5px 0;
  span {
    font-weight: 500;
    font-size: 10px;
    color: #4f4f4f;
  }
`;

const DaytimeItem = styled.div`
  width: 30px;
  height: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 500;
  font-size: 10px;
  color: #5d6e1e;

  background-color: #fdfff6;
  border: 1px solid #5d6e1e;
  border-radius: 5px;
  margin: 0 5px 0 9px;
`;

const SchoolFoodMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 9px 0 9px;
  font-weight: 400;
  font-size: 11px;
  color: #4f4f4f;
`;

const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  margin: 0 0 10px;
`;

const BoardItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 96%;
  height: 30px;
  margin: 5px;
  span:nth-of-type(1) {
    font-weight: 500;
    font-size: 12px;
    margin: 0 0 0 15px;
    color: black;
  }
  span:nth-of-type(2) {
    font-weight: 400;
    font-size: 11px;
    margin: 0 0 0 15px;
    color: black;
  }
`;

const RecentPostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  border-radius: 5px;
  margin: 0 0 10px;
`;

const Preview = ({ type }) => {
  const [firstContentObject, setFirstContentObject] = useState({
    free: '',
    free_id: '',
    information: '',
    information_id: '',
    hot: '',
    hot_id: '',
    promotion: '',
    promotion_id: '',
  });

  const info = useSelector(({ userInfo }) => userInfo.info);
  const dispatch = useDispatch();

  useEffect(() => {
    if (info) {
      const loadBoard = async () => {
        const FREE = await getBoardList({
          category: 'FREE',
          page: 0,
          region: info.schoolResDTO.region,
        });
        const INFORMATION = await getBoardList({
          category: 'INFORMATION',
          page: 0,
          region: info.schoolResDTO.region,
        });
        const HOT = await getBoardList({
          category: 'HOT',
          page: 0,
          region: info.schoolResDTO.region,
        });
        const PROMOTION = await getBoardList({
          category: 'PROMOTION',
          page: 0,
          region: info.schoolResDTO.region,
        });

        setFirstContentObject({
          free_title: FREE[0] ? FREE[0].title : '',
          free_id: FREE[0] ? FREE[0].id : '',

          information_title: INFORMATION[0] ? INFORMATION[0].title : '',
          information_id: INFORMATION[0] ? INFORMATION[0].id : '',

          hot_title: HOT[0] ? HOT[0].title : '',
          hot_id: HOT[0] ? HOT[0].id : '',

          promotion_title: PROMOTION[0] ? PROMOTION[0].title : '',
          promotion_id: PROMOTION[0] ? PROMOTION[0].id : '',
        });
      };

      loadBoard();
    }
  }, [info]);

  const [month, setMonth] = useState(null);
  const [date, setDate] = useState(null);
  const [day, setDay] = useState(null);
  const dateItem = new Date();

  // 초기 단 한번
  useEffect(() => {
    setMonth(dateItem.getMonth());
    setDate(dateItem.getDate());
    dateItem.getDay() === 0 && setDay('일');
    dateItem.getDay() === 1 && setDay('월');
    dateItem.getDay() === 2 && setDay('화');
    dateItem.getDay() === 3 && setDay('수');
    dateItem.getDay() === 4 && setDay('목');
    dateItem.getDay() === 5 && setDay('금');
    dateItem.getDay() === 6 && setDay('토');
  }, []);

  const [breakfast, setBreakfast] = useState(null);
  const [lunch, setLunch] = useState(null);
  const [dinner, setDinner] = useState(null);

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
      .replace(/[~!^*_+|<>?:{}]/g, '')
      .replace(/[(k)]/g, '');

    return completeSchoolFood;
  };

  useEffect(() => {
    if (info) {
      const { code, regionCode } = info.schoolResDTO;
      const data = {
        code,
        regionCode,
        targetDate: getTodayDate(),
      };

      const mealServiceDietInfoAPI = async () => {
        const response = await mealServiceDietInfo(data);
        const xmlToJson = new XMLParser().parseFromString(response);

        // 아점저 처리.
        if (xmlToJson.children[0].name === 'head') {
          switch (xmlToJson.children.length) {
            case 2:
              setBreakfast({
                ...breakfast,
                kcal: '',
                foodlist: '식사 없음',
              });
              setLunch({
                ...lunch,
                kcal: xmlToJson.children[1].children[10].value.replace(
                  />/g,
                  '',
                ),
                foodlist: deleteSchoolFoodCharacters(
                  xmlToJson.children[1].children[8].value,
                ),
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
                kcal: xmlToJson.children[1].children[10].value.replace(
                  />/g,
                  '',
                ),
                foodlist: deleteSchoolFoodCharacters(
                  xmlToJson.children[1].children[8].value,
                ),
              });
              setLunch({
                ...lunch,
                kcal: xmlToJson.children[2].children[10].value.replace(
                  />/g,
                  '',
                ),
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
                kcal: xmlToJson.children[1].children[10].value.replace(
                  />/g,
                  '',
                ),
                foodlist: deleteSchoolFoodCharacters(
                  xmlToJson.children[1].children[8].value,
                ),
              });
              setLunch({
                ...lunch,
                kcal: xmlToJson.children[2].children[10].value.replace(
                  />/g,
                  '',
                ),
                foodlist: deleteSchoolFoodCharacters(
                  xmlToJson.children[2].children[8].value,
                ),
              });
              setDinner({
                ...dinner,
                kcal: xmlToJson.children[3].children[10].value.replace(
                  />/g,
                  '',
                ),
                foodlist: deleteSchoolFoodCharacters(
                  xmlToJson.children[3].children[8].value,
                ),
              });
          }
        } else {
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
        }
      };
      mealServiceDietInfoAPI();
    }
  }, [info]);

  useEffect(() => {
    if (breakfast) {
      dispatch(getSchoolFoodList({ type: 'breakfast', data: breakfast }));
    }
    if (lunch) {
      dispatch(getSchoolFoodList({ type: 'lunch', data: lunch }));
    }
    if (dinner) {
      dispatch(getSchoolFoodList({ type: 'dinner', data: dinner }));
    }
  }, [breakfast, lunch, dinner]);

  return (
    <>
      {type === 'myschool' && (
        <PreviewItem>
          <MySchoolLink schooloInfo={info} />
        </PreviewItem>
      )}
      {type === 'schoolfood' && (
        <PreviewItem>
          <TitleWrapper>
            <span>오늘의 급식</span>
            <span>{`${month + 1}월 ${date}일 (${day})`}</span>
            <IconItem>
              <Link to="/schoolfood">
                <img src="/images/icons/right_arrow.png" alt="right_arrow" />
              </Link>
            </IconItem>
          </TitleWrapper>
          {breakfast && lunch && dinner && (
            <SchoolFoodWrapper>
              <SchoolFoodItem>
                <SchoolFoodTitleWrapper>
                  <DaytimeItem>아침</DaytimeItem>
                  <span> {breakfast.kcal}</span>
                </SchoolFoodTitleWrapper>
                <SchoolFoodMenu>{breakfast.foodlist}</SchoolFoodMenu>
              </SchoolFoodItem>
              <SchoolFoodItem>
                <SchoolFoodTitleWrapper>
                  <DaytimeItem>점심</DaytimeItem>
                  <span> {lunch.kcal}</span>
                </SchoolFoodTitleWrapper>
                <SchoolFoodMenu>{lunch.foodlist}</SchoolFoodMenu>
              </SchoolFoodItem>
              <SchoolFoodItem>
                <SchoolFoodTitleWrapper>
                  <DaytimeItem>저녁</DaytimeItem>
                  <span> {dinner.kcal}</span>
                </SchoolFoodTitleWrapper>
                <SchoolFoodMenu>{dinner.foodlist}</SchoolFoodMenu>
              </SchoolFoodItem>
            </SchoolFoodWrapper>
          )}
        </PreviewItem>
      )}
      {type === 'board' && (
        <PreviewItem>
          <TitleWrapper>
            <span>게시판 모아보기</span>
            <IconItem>
              <Link to="/board">
                <img src="/images/icons/right_arrow.png" alt="right_arrow" />
              </Link>
            </IconItem>
          </TitleWrapper>
          <BoardWrapper>
            <BoardItem>
              <Link to="/board/free">
                <span>자유 게시판</span>
              </Link>
              <Link to={`/boards/${firstContentObject.free_id}`}>
                <span>{firstContentObject.free_title}</span>
              </Link>
            </BoardItem>
            <BoardItem>
              <Link to="/board/information">
                <span>정보 게시판</span>
              </Link>
              <Link to={`/boards/${firstContentObject.information_id}`}>
                <span>{firstContentObject.information_title}</span>
              </Link>
            </BoardItem>
            <BoardItem>
              <Link to="/board/hot">
                <span>인기 게시판</span>
              </Link>
              <Link to={`/boards/${firstContentObject.hot_id}`}>
                <span>{firstContentObject.hot_title}</span>
              </Link>
            </BoardItem>
            <BoardItem>
              <Link to="/board/promotion">
                <span>홍보 게시판</span>
              </Link>
              <Link to={`/boards/${firstContentObject.promotion_id}`}>
                <span>{firstContentObject.promotion_title}</span>
              </Link>
            </BoardItem>
          </BoardWrapper>
        </PreviewItem>
      )}
      {type === 'post' && (
        <PreviewItem>
          <TitleWrapper>
            <span>최근 게시글</span>
            <IconItem>
              <Link to="/board">
                <img src="/images/icons/right_arrow.png" alt="right_arrow" />
              </Link>
            </IconItem>
          </TitleWrapper>
          <RecentPostWrapper>
            <BoardComponent />
          </RecentPostWrapper>
        </PreviewItem>
      )}
    </>
  );
};

Preview.propTypes = {
  type: PropTypes.string,
};

export default Preview;
