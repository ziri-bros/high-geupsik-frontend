import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import BoardNotice from './BoardNotice';
import PostNotFound from './PostNotFound';

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

const BoardContents = styled.div`
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
  :last-of-type {
    margin: 7px 0 7px 0;
  }
  ${props =>
    props.noticeExistence &&
    css`
      margin: 45px 0 0 0;
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

const BoardComponent = ({ noticeExistence, type, objects }) => {
  const [tmp, setTmp] = useState();

  return (
    <>
      <BoardWrapper>
        {noticeExistence === 'true' && <BoardNotice />}
        {objects.title ? (
          <BoardContents noticeExistence={noticeExistence}>
            <BoardInnerWrapper>
              <ContentsTitle>{objects.title}</ContentsTitle>
              <ContentsDate>{objects.time}</ContentsDate>
            </BoardInnerWrapper>
            <BoardInnerWrapper>
              <ContentsContent>{objects.content}</ContentsContent>
              <img
                className="content-img"
                src="/images/icons/square.png"
                alt=""
              />
            </BoardInnerWrapper>
            <BoardInnerWrapper>
              <ContentsType>[type]자유게시판</ContentsType>
              <ContentsInformationSet>
                <img src="/images/icons/view.png" alt="view" />
                <span>88</span>
                <img src="/images/icons/heart.png" alt="heart" />
                <span>12</span>
                <img src="/images/icons/chat.png" alt="chat" />
                <span>22</span>
              </ContentsInformationSet>
            </BoardInnerWrapper>
          </BoardContents>
        ) : (
          <PostNotFound />
        )}
        {objects.title ? (
          <BoardContents>
            <BoardInnerWrapper>
              <ContentsTitle>{objects.title}</ContentsTitle>
              <ContentsDate>{objects.time}</ContentsDate>
            </BoardInnerWrapper>
            <BoardInnerWrapper>
              <ContentsContent>{objects.content}</ContentsContent>
            </BoardInnerWrapper>
            <BoardInnerWrapper>
              <ContentsType>[type]자유게시판</ContentsType>
              <ContentsInformationSet>
                <img src="/images/icons/view.png" alt="view" />
                <span>88</span>
                <img src="/images/icons/heart.png" alt="heart" />
                <span>12</span>
                <img src="/images/icons/chat.png" alt="chat" />
                <span>22</span>
              </ContentsInformationSet>
            </BoardInnerWrapper>
          </BoardContents>
        ) : (
          <PostNotFound />
        )}
        {objects.title ? (
          <BoardContents>
            <BoardInnerWrapper>
              <ContentsTitle>{objects.title}</ContentsTitle>
              <ContentsDate>{objects.time}</ContentsDate>
            </BoardInnerWrapper>
            <BoardInnerWrapper>
              <ContentsContent>{objects.content}</ContentsContent>
              <img
                className="content-img"
                src="/images/icons/square.png"
                alt=""
              />
            </BoardInnerWrapper>
            <BoardInnerWrapper>
              <ContentsType>[type]자유게시판</ContentsType>
              <ContentsInformationSet>
                <img src="/images/icons/view.png" alt="view" />
                <span>88</span>
                <img src="/images/icons/heart.png" alt="heart" />
                <span>12</span>
                <img src="/images/icons/chat.png" alt="chat" />
                <span>22</span>
              </ContentsInformationSet>
            </BoardInnerWrapper>
          </BoardContents>
        ) : (
          <PostNotFound />
        )}
        {objects.title ? (
          <BoardContents>
            <BoardInnerWrapper>
              <ContentsTitle>{objects.title}</ContentsTitle>
              <ContentsDate>{objects.time}</ContentsDate>
            </BoardInnerWrapper>
            <BoardInnerWrapper>
              <ContentsContent>{objects.content}</ContentsContent>
              <img
                className="content-img"
                src="/images/icons/square.png"
                alt=""
              />
            </BoardInnerWrapper>
            <BoardInnerWrapper>
              <ContentsType>[type]자유게시판</ContentsType>
              <ContentsInformationSet>
                <img src="/images/icons/view.png" alt="view" />
                <span>88</span>
                <img src="/images/icons/heart.png" alt="heart" />
                <span>12</span>
                <img src="/images/icons/chat.png" alt="chat" />
                <span>22</span>
              </ContentsInformationSet>
            </BoardInnerWrapper>
          </BoardContents>
        ) : (
          <PostNotFound />
        )}
        {objects.title ? (
          <BoardContents>
            <BoardInnerWrapper>
              <ContentsTitle>{objects.title}</ContentsTitle>
              <ContentsDate>{objects.time}</ContentsDate>
            </BoardInnerWrapper>
            <BoardInnerWrapper>
              <ContentsContent>{objects.content}</ContentsContent>
              <img
                className="content-img"
                src="/images/icons/square.png"
                alt=""
              />
            </BoardInnerWrapper>
            <BoardInnerWrapper>
              <ContentsType>[type]자유게시판</ContentsType>
              <ContentsInformationSet>
                <img src="/images/icons/view.png" alt="view" />
                <span>88</span>
                <img src="/images/icons/heart.png" alt="heart" />
                <span>12</span>
                <img src="/images/icons/chat.png" alt="chat" />
                <span>22</span>
              </ContentsInformationSet>
            </BoardInnerWrapper>
          </BoardContents>
        ) : (
          <PostNotFound />
        )}
      </BoardWrapper>
    </>
  );
};

BoardComponent.propTypes = {
  noticeExistence: PropTypes.string,
  type: PropTypes.string,
  objects: PropTypes.objectOf,
};

export default BoardComponent;
