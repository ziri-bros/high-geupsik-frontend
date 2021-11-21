import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BoardComponent from './BoardComponent';

const PrivewItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 96%;
  height: auto;
  margin: 4px 0 4px 0;
  border: 0.5px solid #adadad;
  border-radius: 5px;
  background-color: white;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 94%;
  height: 40px;
  margin: 10px 3%;
  span {
    margin: 0 0 0 5px;
  }
`;

const IconItem = styled.div`
  display: flex;
  cursor: pointer;
  img {
    margin: 5px 5px 0 0;
    width: 30px;
    height: 36px;
  }
`;

const CafeteriaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  height: auto;
  border-radius: 5px;
  margin: 0 0 10px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CafeteriaItem = styled.div`
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

const CafeteriaTitleWrapper = styled.div`
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
  cursor: pointer;
  margin: 0 5px 0 9px;

  &:hover {
    font-weight: bold;
    background-color: #cbe54e;
  }
`;

const CafeteriaMenu = styled.div`
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
    margin: 1px 0 0 15px;
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
  background-color: blue;
`;

// 예시 DB
const examplePost = {
  title: '제목입니다',
  time: '21/7/23 11:34',
  view: '100',
  content: '점심메뉴 추천 좀',
  images: ['/images/icons/square.png', '/images/icons/square.png'],
  like: 5,
  liked: true,
  totalCommentCount: 4,
  isMe: true,
  comments: [
    {
      name: '익명1',
      time: '21/7/23 11:50',
      content: '냉모밀 먹어라',
      goodCount: 0,
      cocomments: [],
    },
    {
      name: '익명2',
      time: '21/7/23 11:50',
      content: '치킨 먹어라',
      goodCount: 2,
      cocomments: [
        {
          name: '익명(글쓴이)',
          time: '21/7/23 11:50',
          content: '추천 고마워',
          goodCount: 0,
          cocommentsCount: 1,
        },
        {
          name: '익명2',
          time: '21/7/23 11:50',
          content: '맛있게 먹어',
          goodCount: 1,
          cocommentsCount: 0,
        },
      ],
    },
  ],
};

const Preview = ({ type }) => {
  console.log('default');
  return (
    <>
      {type === 'cafeteria' && (
        <PrivewItem>
          <TitleWrapper>
            <span>오늘의 급식</span>
            <IconItem>
              <Link to="/home">
                <img src="/images/icons/right_arrow.png" alt="right_arrow" />
              </Link>
            </IconItem>
          </TitleWrapper>
          <CafeteriaWrapper>
            <CafeteriaItem>
              <CafeteriaTitleWrapper>
                <DaytimeItem>아침</DaytimeItem>
                <span>11월17일</span>
              </CafeteriaTitleWrapper>
              <CafeteriaMenu>쇠고기 무국</CafeteriaMenu>
            </CafeteriaItem>
            <CafeteriaItem>
              <CafeteriaTitleWrapper>
                <DaytimeItem>점심</DaytimeItem>
                <span>12월15일</span>
              </CafeteriaTitleWrapper>
              <CafeteriaMenu>파전</CafeteriaMenu>
            </CafeteriaItem>
            <CafeteriaItem>
              <CafeteriaTitleWrapper>
                <DaytimeItem>저녁</DaytimeItem>
                <span>12월27일</span>
              </CafeteriaTitleWrapper>
              <CafeteriaMenu>박성호</CafeteriaMenu>
            </CafeteriaItem>
          </CafeteriaWrapper>
        </PrivewItem>
      )}
      {type === 'board' && (
        <PrivewItem>
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
        </PrivewItem>
      )}
      {type === 'post' && (
        <PrivewItem>
          <TitleWrapper>
            <span>최근 게시글</span>
            <IconItem>
              <Link to="/board">
                <img src="/images/icons/right_arrow.png" alt="right_arrow" />
              </Link>
            </IconItem>
          </TitleWrapper>
          <RecentPostWrapper>
            <BoardComponent
              noticeExistence={`${false}`}
              objects={examplePost}
            />
          </RecentPostWrapper>
        </PrivewItem>
      )}
    </>
  );
};

Preview.propTypes = {
  type: PropTypes.string,
};

export default Preview;
