import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const CommentWrapper = styled.div`
  border-bottom: 1px solid #adadad;
  background: #fdfff6;
  /* width: 440px; */
  width:100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const CommentMainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CommentNameButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CommentArrow = styled.div`
  margin-right: 8px;
  img {
    width: 24px;
    height: 24px;
  }
`;

const CommentName = styled.div`
  font-weight: 500;
  font-size: 14px;
`;

const CommentMoreButton = styled.div`
  margin-left: 15px;
  width: 30px;
  height: 16px;
  background: #f3f3f3;
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 18px;
  }
  cursor: pointer;
`;

const CommentTime = styled.div`
  font-weight: normal;
  font-size: 12px;
  color: #626262;
  margin-right: 10px;
`;

const CommentSubWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 32px;
`;

const CommentContents = styled.div`
  font-weight: normal;
  font-size: 14px;
`;

const CommentIconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 32px;
`;

const CommentLikeButton = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
  color: #626262;
  margin-right: 10px;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
    margin-right: 3px;
  }
`;

const CommentNumber = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
  color: #626262;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
    margin-right: 3px;
  }
`;

const Cocomment = ({ cocomments }) => (
  <CommentWrapper>
    <CommentMainWrapper>
      <CommentNameButtonWrapper>
        <CommentArrow>
          <img src="/images/icons/return.png" alt="return" />
        </CommentArrow>
        <CommentName>{cocomments.name}</CommentName>
        <CommentMoreButton>
          <img src="/images/icons/more.png" alt="more" />
        </CommentMoreButton>
      </CommentNameButtonWrapper>
      <CommentTime>{cocomments.time}</CommentTime>
    </CommentMainWrapper>
    <CommentSubWrapper>
      <CommentContents>{cocomments.content}</CommentContents>
    </CommentSubWrapper>
    <CommentIconWrapper>
      <CommentLikeButton>
        {cocomments.goodCount > 0 ? (
          <img src="/images/icons/thumb-up-green.png" alt="thumb-up" />
        ) : (
          <img src="/images/icons/thumb-up-grey.png" alt="thumb-up" />
        )}
        {cocomments.goodCount}
      </CommentLikeButton>
      <CommentNumber>
        {cocomments.cocommentsCount > 0 ? (
          <img src="/images/icons/comment-green.png" alt="comment" />
        ) : (
          <img src="/images/icons/comment-grey.png" alt="comment" />
        )}
        {cocomments.cocommentsCount}
      </CommentNumber>
    </CommentIconWrapper>
  </CommentWrapper>
);

Cocomment.propTypes = {
  cocomments: PropTypes.arrayOf,
};

export default Cocomment;
