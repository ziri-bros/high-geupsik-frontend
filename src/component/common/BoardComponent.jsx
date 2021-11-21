import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import BoardNotice from './BoardNotice';
import PostNotFound from './PostNotFound';

const BoardWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 366px;
  background-color: white;
  overflow: auto;
`;

const BoardContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 96%;
  height: auto;
  margin: 4px 0 4px 0;
  border: 0.5px solid #adadad;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
`;

const BoardInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 15px 0 15px;
  img {
    display: flex;
    width: 50px;
    height: 50px;
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
`;

const BoardComponent = ({ noticeExistence, type, objects }) => {
  const [tmp, setTmp] = useState();

  return (
    <>
      <BoardWrapper>
        {noticeExistence === 'true' && <BoardNotice />}
        <BoardContents>
          <BoardInnerWrapper>
            <ContentsTitle>{objects.title}</ContentsTitle>
            <ContentsDate>{objects.time}</ContentsDate>
          </BoardInnerWrapper>
          <BoardInnerWrapper>
            <ContentsContent>{objects.content}</ContentsContent>
            <img src="/images/icons/square.png" alt="" />
          </BoardInnerWrapper>
          <BoardInnerWrapper>
            <ContentsType>[type]자유게시판</ContentsType>
            <ContentsInformationSet>
              <img src="/images/icons/view.png" alt="view" />
              10
              <img src="/images/icons/heart.png" alt="heart" />
              11
              <img src="/images/icons/chat.png" alt="chat" />
              12
            </ContentsInformationSet>
          </BoardInnerWrapper>
        </BoardContents>
        <BoardContents>
          <BoardInnerWrapper>
            <ContentsTitle>{objects.title}</ContentsTitle>
            <ContentsDate>{objects.time}</ContentsDate>
          </BoardInnerWrapper>
          <BoardInnerWrapper>
            <ContentsContent>{objects.content}</ContentsContent>
            <img src="/images/icons/square.png" alt="" />
          </BoardInnerWrapper>
          <BoardInnerWrapper>
            <ContentsType>[type]자유게시판</ContentsType>
            <ContentsInformationSet>
              <img src="/images/icons/view.png" alt="view" />
              10
              <img src="/images/icons/heart.png" alt="heart" />
              11
              <img src="/images/icons/chat.png" alt="chat" />
              12
            </ContentsInformationSet>
          </BoardInnerWrapper>
        </BoardContents>
        <BoardContents>
          <BoardInnerWrapper>
            <ContentsTitle>{objects.title}</ContentsTitle>
            <ContentsDate>{objects.time}</ContentsDate>
          </BoardInnerWrapper>
          <BoardInnerWrapper>
            <ContentsContent>{objects.content}</ContentsContent>
            <img src="/images/icons/square.png" alt="" />
          </BoardInnerWrapper>
          <BoardInnerWrapper>
            <ContentsType>[type]자유게시판</ContentsType>
            <ContentsInformationSet>
              <img src="/images/icons/view.png" alt="view" />
              10
              <img src="/images/icons/heart.png" alt="heart" />
              11
              <img src="/images/icons/chat.png" alt="chat" />
              12
            </ContentsInformationSet>
          </BoardInnerWrapper>
        </BoardContents>
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
