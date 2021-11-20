import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

const BoardWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 366px;
  background-color: white;
  overflow: auto;
`;

const BoardNotice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 96%;
  height: auto;
  margin: 7px 0 4px 0;
  border: 0.5px solid #adadad;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  span {
    color: #5d6e1e;
    font-size: 11px;
    font-weight: 700;
    margin: 2px 0 0 0;
    :nth-child(3) {
      color: #626262;
      font-size: 11px;
      font-weight: 500;
      margin: 2px 0 0 10px;
    }
  }
  img {
    display: flex;
    width: 15px;
    height: 15px;
    margin: 7px 7px 7px 10px;
  }
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

const BoardPost = () => {
  const sangmin = () => {
    console.log('si');
  };
  const [tmp, setTmp] = useState();
  const [notice, setNotice] = useState();

  useEffect(() => {
    setNotice(1);
  });

  return (
    <>
      <BoardWrapper>
        {notice === 1 ? (
          <BoardNotice>
            <img src="images/icons/pin.png" alt="" />
            <span>공지</span>
            <span>하고싶은말을 자유롭게 적어주세요</span>
          </BoardNotice>
        ) : (
          console.log('nothing')
        )}
        <BoardContents title="tmp">
          <BoardInnerWrapper>
            <ContentsTitle>[Title]안녕하세요</ContentsTitle>
            <ContentsDate>[date]2021.11.11</ContentsDate>
          </BoardInnerWrapper>
          <BoardInnerWrapper>
            <ContentsContent>[content]점심 메뉴 추천좀</ContentsContent>
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
        </BoardContents>{' '}
        <BoardContents title="tmp">
          <BoardInnerWrapper>
            <ContentsTitle>[Title]안녕하세요</ContentsTitle>
            <ContentsDate>[date]2021.11.11</ContentsDate>
          </BoardInnerWrapper>
          <BoardInnerWrapper>
            <ContentsContent>[content]점심 메뉴 추천좀</ContentsContent>
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
        </BoardContents>{' '}
        <BoardContents title="tmp">
          <BoardInnerWrapper>
            <ContentsTitle>[Title]안녕하세요</ContentsTitle>
            <ContentsDate>[date]2021.11.11</ContentsDate>
          </BoardInnerWrapper>
          <BoardInnerWrapper>
            <ContentsContent>[content]점심 메뉴 추천좀</ContentsContent>
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
        <BoardContents title="tmp">
          <BoardInnerWrapper>
            <ContentsTitle>[Title]안녕하세요</ContentsTitle>
            <ContentsDate>[date]2021.11.11</ContentsDate>
          </BoardInnerWrapper>
          <BoardInnerWrapper>
            <ContentsContent>[content]점심 메뉴 추천좀</ContentsContent>
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

export default BoardPost;
