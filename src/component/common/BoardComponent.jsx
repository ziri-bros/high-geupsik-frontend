import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { css } from '@emotion/react';
import BoardNotice from './BoardNotice';
import PostNotFound from './PostNotFound';
import { getBoardList, getMyPostList } from '../../lib/api/board';
import { parseTime } from '../../utils';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

const BoardWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: white;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const BoardContents = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 95%;
  min-width: 300px;
  max-width: 460px;
  height: auto;
  margin: 7px 0 0 0;
  border: 0.5px solid #adadad;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  color: black;
  :last-of-type {
    margin: 7px 0 7px 0;
  }
  ${props =>
    props.noticeExistence &&
    css`
      :first-of-type {
        margin: 45px 0 0 0;
      }
    `}
`;

const BoardInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 15px 0 15px;
  img {
    display: flex;
    width: 20px;
    height: 18px;
  }
  .content-img {
    display: flex;
    width: 50px;
    height: 50px;
  }
  :last-of-type {
    margin-bottom: 10px;
  }
`;

const ContentsTitle = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const ContentsDate = styled.span`
  font-size: 10px;
  font-weight: 400;
  color: #626262;
`;

const ContentsContent = styled.span`
  font-size: 11px;
  font-weight: 400;
  color: #626262;
`;

const ContentsType = styled.span`
  font-size: 10px;
  font-weight: 500;
  color: #4f4f4f;
`;

const ContentsInformationSet = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 9px;
  font-weight: 500;
  color: #828282;
  img {
    display: flex;
    width: 15px;
    height: 15px;
    margin: 0 0 0 10px;
  }
  span {
    margin: 0 0 0 4px;
  }
`;

const DetectBoardInfiniteScroll = styled.div`
  border: 1px solid black;
`;

const BoardComponent = ({ noticeExistence, myPost, type }) => {
  const [normalPost, setNormalPost] = useState([]);
  const [myWritePost, setMyWritePost] = useState([]);

  const info = useSelector(({ userInfo }) => userInfo.info);

  const {
    data: boardData,
    setSize,
    error,
    ref: boardRef,
  } = useInfiniteScroll({
    key: `/board/${type}`,
    api: (_, pageIndex) =>
      getBoardList({
        category: type,
        page: pageIndex,
        region: info.schoolResDTO.region,
      }),
  });

  const { data: myBoardData, ref: myBoardRef } = useInfiniteScroll({
    key: '/board/myBoard',
    api: (_, pageIndex) => getMyPostList(pageIndex),
  });

  const getCategoryKor = engCategory => {
    if (engCategory === 'FREE') {
      return '자유게시판';
    }
    if (engCategory === 'INFORMATION') {
      return '정보게시판';
    }
    if (engCategory === 'PROMOTION') {
      return '홍보게시판';
    }
    return '기타게시판';
  };

  useEffect(() => {
    setSize(1);
  }, [type]);

  useEffect(() => {
    if (boardData) {
      setNormalPost(boardData.flat());
    }
  }, [boardData]);

  useEffect(() => {
    if (myPost && myBoardData) {
      setMyWritePost(myBoardData.flat());
    }
  }, [myBoardData]);

  return (
    <>
      {!error && (
        <BoardWrapper>
          {noticeExistence === 'true' && <BoardNotice />}
          {myPost !== true ? (
            <>
              {normalPost.map(elem => (
                <BoardContents
                  to={`/boards/${elem.id}`}
                  noticeExistence={noticeExistence}
                >
                  <BoardInnerWrapper>
                    <ContentsTitle>{elem.title}</ContentsTitle>
                    <ContentsDate>{parseTime(elem.createdDate)}</ContentsDate>
                  </BoardInnerWrapper>
                  <BoardInnerWrapper>
                    <ContentsContent>{elem.content}</ContentsContent>
                    {elem.thumbnail && (
                      <img
                        className="content-img"
                        src={elem.thumbnail}
                        alt=""
                      />
                    )}
                  </BoardInnerWrapper>
                  <BoardInnerWrapper>
                    <ContentsType>{getCategoryKor(elem.category)}</ContentsType>
                    <ContentsInformationSet>
                      {/* <img src="/images/icons/view.png" alt="view" />
                    <span>999</span> */}
                      <img src="/images/icons/heart.png" alt="heart" />
                      <span>{elem.likeCount}</span>
                      <img src="/images/icons/chat.png" alt="chat" />
                      <span>{elem.commentCount}</span>
                    </ContentsInformationSet>
                  </BoardInnerWrapper>
                </BoardContents>
              ))}
              <DetectBoardInfiniteScroll ref={boardRef} />
            </>
          ) : (
            <>
              {myWritePost.map(elem => (
                <BoardContents
                  to={`/boards/${elem.id}`}
                  noticeExistence={noticeExistence}
                >
                  <BoardInnerWrapper>
                    <ContentsTitle>{elem.title}</ContentsTitle>
                    <ContentsDate>{parseTime(elem.createdDate)}</ContentsDate>
                  </BoardInnerWrapper>
                  <BoardInnerWrapper>
                    <ContentsContent>{elem.content}</ContentsContent>
                    {elem.thumbnail && (
                      <img
                        className="content-img"
                        src={elem.thumbnail}
                        alt=""
                      />
                    )}
                  </BoardInnerWrapper>
                  <BoardInnerWrapper>
                    <ContentsType>{getCategoryKor(elem.category)}</ContentsType>
                    <ContentsInformationSet>
                      {/* <img src="/images/icons/view.png" alt="view" />
                    <span>123</span> */}
                      <img src="/images/icons/heart.png" alt="heart" />
                      <span>{elem.likeCount}</span>
                      <img src="/images/icons/chat.png" alt="chat" />
                      <span>{elem.commentCount}</span>
                    </ContentsInformationSet>
                  </BoardInnerWrapper>
                </BoardContents>
              ))}
              <DetectBoardInfiniteScroll ref={myBoardRef} />
            </>
          )}
        </BoardWrapper>
      )}
    </>
  );
};

BoardComponent.propTypes = {
  noticeExistence: PropTypes.string,
  myPost: PropTypes.bool,
  type: PropTypes.string,
};

export default BoardComponent;
