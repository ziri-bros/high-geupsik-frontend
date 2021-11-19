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

const CommentLineWrapper1 = styled.div`
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

const CommentLineWrapper2 = styled.div`
  display: flex;
  align-items: center;
`;

const CommentContents = styled.div`
  font-weight: normal;
  font-size: 14px;
`;

const CommentLineWrapper3 = styled.div`
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
      <CommentLineWrapper1>
        <CommentNameButtonWrapper>
          <CommentName>{comments.name}</CommentName>
          <CommentMoreButton>
            <img src="/images/icons/more.png" alt="more" />
          </CommentMoreButton>
        </CommentNameButtonWrapper>
        <CommentTime>{comments.time}</CommentTime>
      </CommentLineWrapper1>
      <CommentLineWrapper2>
        <CommentContents>{comments.content}</CommentContents>
      </CommentLineWrapper2>
      <CommentLineWrapper3>
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
      </CommentLineWrapper3>
    </CommentWrapper>
    {comments.cocomments.length > 0 &&
      comments.cocomments.map(cocomment => (
        <Cocomment cocomments={cocomment} />
      ))}
  </>
);

Comment.propTypes = {
  comments: PropTypes.arrayOf,
  cocomments: PropTypes.arrayOf,
};

export default Comment;
