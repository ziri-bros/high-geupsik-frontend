import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BoardComponent from './BoardComponent';

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
    font-size: 12px;
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
  }
  span:nth-of-type(2) {
    font-weight: 400;
    font-size: 11px;
    margin: 0 0 0 15px;
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

const Preview = ({ type }) => (
  <>
    {type === 'schoolfood' && (
      <PreviewItem>
        <TitleWrapper>
          <span>오늘의 급식</span>
          <span>7월 22일</span>
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
              <span>11월17일</span>
            </SchoolFoodTitleWrapper>
            <SchoolFoodMenu>쇠고기 무국</SchoolFoodMenu>
          </SchoolFoodItem>
          <SchoolFoodItem>
            <SchoolFoodTitleWrapper>
              <DaytimeItem>점심</DaytimeItem>
              <span>12월15일</span>
            </SchoolFoodTitleWrapper>
            <SchoolFoodMenu>파전</SchoolFoodMenu>
          </SchoolFoodItem>
          <SchoolFoodItem>
            <SchoolFoodTitleWrapper>
              <DaytimeItem>저녁</DaytimeItem>
              <span>12월27일</span>
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
            <span>자유 게시판</span>
            <span>내용1</span>
          </BoardItem>
          <BoardItem>
            <span>정보 게시판</span>
            <span>내용2</span>
          </BoardItem>
          <BoardItem>
            <span>인기 게시판</span>
            <span>내용3</span>
          </BoardItem>
          <BoardItem>
            <span>홍보 게시판</span>
            <span>내용4</span>
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

Preview.propTypes = {
  type: PropTypes.string,
};

export default Preview;
