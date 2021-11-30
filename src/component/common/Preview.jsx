import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BoardComponent from './BoardComponent';
import { getBoardList } from '../../lib/api/board';

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
  margin: 0 0 0 9px;
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
    free: null,
    free_id: null,
    information: null,
    information_id: null,
    hot: null,
    hot_id: null,
    promotion: null,
    promotion_id: null,
  });

  if (type === 'board') {
    useEffect(() => {
      const loadBoard = async () => {
        const FREE = await getBoardList('FREE', 1);
        const INFORMATION = await getBoardList('INFORMATION', 1);
        const HOT = await getBoardList('HOT', 1);
        const PROMOTION = await getBoardList('PROMOTION', 1);

        setFirstContentObject({
          free:
            FREE.data.totalElements !== 0 ? FREE.data.content[0].content : null,
          free_id:
            FREE.data.totalElements !== 0 ? FREE.data.content[0].id : null,

          information:
            INFORMATION.data.totalElements !== 0
              ? INFORMATION.data.content[0].content
              : null,
          information_id:
            INFORMATION.data.totalElements !== 0
              ? INFORMATION.data.content[0].id
              : null,

          hot:
            HOT.data.totalElements !== 0 ? HOT.data.content[0].content : null,
          hot_id: HOT.data.totalElements !== 0 ? HOT.data.content[0].id : null,

          promotion:
            PROMOTION.data.totalElements !== 0
              ? PROMOTION.data.content[0].content
              : null,
          promotion_id:
            PROMOTION.data.totalElements !== 0
              ? PROMOTION.data.content[0].id
              : null,
        });
      };

      loadBoard();
    }, []);
  }

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

  return (
    <>
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
          <SchoolFoodWrapper>
            <SchoolFoodItem>
              <SchoolFoodTitleWrapper>
                <DaytimeItem>아침</DaytimeItem>
                <span> {`${month + 1}.${date} (${day})`}</span>
              </SchoolFoodTitleWrapper>
              <SchoolFoodMenu>쇠고기 무국</SchoolFoodMenu>
            </SchoolFoodItem>
            <SchoolFoodItem>
              <SchoolFoodTitleWrapper>
                <DaytimeItem>점심</DaytimeItem>
                <span> {`${month + 1}.${date} (${day})`}</span>
              </SchoolFoodTitleWrapper>
              <SchoolFoodMenu>파전</SchoolFoodMenu>
            </SchoolFoodItem>
            <SchoolFoodItem>
              <SchoolFoodTitleWrapper>
                <DaytimeItem>저녁</DaytimeItem>
                <span> {`${month + 1}.${date} (${day})`}</span>
              </SchoolFoodTitleWrapper>
              <SchoolFoodMenu>박성호</SchoolFoodMenu>
            </SchoolFoodItem>
          </SchoolFoodWrapper>
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
                <span>{firstContentObject.free}</span>
              </Link>
            </BoardItem>
            <BoardItem>
              <Link to="/board/information">
                <span>정보 게시판</span>
              </Link>
              <Link to={`/boards/${firstContentObject.information_id}`}>
                <span>{firstContentObject.information}</span>
              </Link>
            </BoardItem>
            <BoardItem>
              <Link to="/board/hot">
                <span>인기 게시판</span>
              </Link>
              <Link to={`/boards/${firstContentObject.hot_id}`}>
                <span>{firstContentObject.hot}</span>
              </Link>
            </BoardItem>
            <BoardItem>
              <Link to="/board/promotion">
                <span>홍보 게시판</span>
              </Link>
              <Link to={`/boards/${firstContentObject.promotion_id}`}>
                <span>{firstContentObject.promotion}</span>
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
