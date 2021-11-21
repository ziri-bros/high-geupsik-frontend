import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const PostNotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 18%;
  font-size:18px;

  /* 모바일용 폰트 크기 적용 */
  @media only screen and (max-width: 385px) {
    margin-top: 12%;
    font-size:15px;
  }

  img{
    width: 90px;
    height: 90px;
    margin-bottom: 20px;
  }
`;

const Text = styled.div`
  color: #adadad;
`;

const MoveButton = styled(Link)`
  font-size: 13px;
  padding: 7px 15px;
  margin-top: 25px;
  background: #cbe54e;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

const PostNotFound = ({ myInfo }) => (
  <PostNotFoundWrapper>
    <img src="/images/icons/pencil_blur.png" alt="pencil" />
    {myInfo ? (
      <>
        <Text>{myInfo} 게시글이 존재하지 않습니다.</Text>
        <MoveButton to="/board">게시판 가기</MoveButton>
      </>
    ) : (
      <>
        <Text>현재 게시글이 존재하지 않습니다.</Text>
        <MoveButton to="/postCreate">게시글 작성하기</MoveButton>
      </>
    )}
  </PostNotFoundWrapper>
);

PostNotFound.propTypes = {
  myInfo: PropTypes.string,
};

export default PostNotFound;
