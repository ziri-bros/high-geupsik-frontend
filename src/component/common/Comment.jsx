import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Cocomment from './Cocomment';

const CommentWrapper = styled.div`
  border-bottom: 1px solid #adadad;
  width: 440px;
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
`;

const CommentContents = styled.div`
  font-weight: normal;
  font-size: 14px;
`;

const CommentIconWrapper = styled.div`
  display: flex;
  align-items: center;
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

const Comment = ({ comments }) => (
  <>
    <CommentWrapper>
      <CommentMainWrapper>
        <CommentNameButtonWrapper>
          <CommentName>{comments.name}</CommentName>
          <CommentMoreButton>
            <img src="/images/icons/more.png" alt="more" />
          </CommentMoreButton>
        </CommentNameButtonWrapper>
        <CommentTime>{comments.time}</CommentTime>
      </CommentMainWrapper>
      <CommentSubWrapper>
        <CommentContents>{comments.content}</CommentContents>
      </CommentSubWrapper>
      <CommentIconWrapper>
        <CommentLikeButton>
          {comments.goodCount > 0 ? (
            <img src="/images/icons/thumb-up-green.png" alt="thumb-up" />
          ) : (
            <img src="/images/icons/thumb-up-grey.png" alt="thumb-up" />
          )}
          {comments.goodCount}
        </CommentLikeButton>
        <CommentNumber>
          {comments.cocomments.length > 0 ? (
            <img src="/images/icons/comment-green.png" alt="comment" />
          ) : (
            <img src="/images/icons/comment-grey.png" alt="comment" />
          )}
          {comments.cocomments.length}
        </CommentNumber>
      </CommentIconWrapper>
    </CommentWrapper>
    {comments.cocomments.length > 0 &&
      comments.cocomments.map(cocomment => (
        <Cocomment cocomments={cocomment} />
      ))}
  </>
);

Comment.propTypes = {
  comments: PropTypes.arrayOf,
};

export default Comment;
