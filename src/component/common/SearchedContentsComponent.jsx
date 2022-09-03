import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { parseTime } from '../../utils';

const BoardWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;

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

const SearchedContentsComponent = ({ elem }) => {
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

  return (
    <BoardWrapper>
      {elem.data.content.map(v => (
        <BoardContents to={`/boards/${v.id}`}>
          <BoardInnerWrapper>
            <ContentsTitle>{JSON.stringify(v.title)}</ContentsTitle>
            <ContentsDate>{parseTime(v.createdDate)}</ContentsDate>
          </BoardInnerWrapper>
          <BoardInnerWrapper>
            <ContentsContent>{JSON.stringify(v.content)}</ContentsContent>
            {v.thumbnail && (
              <img className="content-img" src={v.thumbnail} alt="" />
            )}
          </BoardInnerWrapper>
          <BoardInnerWrapper>
            <ContentsType>
              {getCategoryKor(JSON.stringify(v.category))}
            </ContentsType>
            <ContentsInformationSet>
              <img src="/images/icons/heart.png" alt="heart" />
              <span>{JSON.stringify(v.likeCount)}</span>
              <img src="/images/icons/chat.png" alt="chat" />
              <span>{JSON.stringify(v.commentCount)}</span>
            </ContentsInformationSet>
          </BoardInnerWrapper>
        </BoardContents>
      ))}
    </BoardWrapper>
  );
};

SearchedContentsComponent.propTypes = {
  elem: PropTypes.any,
};

export default SearchedContentsComponent;
