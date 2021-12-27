import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import MoreButtonPop from './common/MoreButtonPop';
import { parseTime } from '../utils';
import { postCommentsLike } from '../lib/api/comment';

const CommentWrapper = styled.div`
  border-bottom: 1px solid #adadad;
  width: 100%;
  height: 100px;
  width: 100%;
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

const Comment = ({
  comment,
  boardId,
  userId,
  postWriterId,
  onClickLoad,
  getEditComment,
  getCommentParentId,
}) => {
  const [morePopOff, setMorePopOff] = useState(false);
  const [commentLike, setCommentLike] = useState(comment.userLike);
  const [writer, setWriter] = useState('');
  const morePopOn = () => {
    setMorePopOff(!morePopOff);
  };

  const isMe = () => userId === comment.writerId;

  const onClickCommentLikeBtn = async () => {
    try {
      await postCommentsLike(comment.id);
      setCommentLike(!commentLike);
      onClickLoad();
    } catch (e) {
      console.log(e);
    }
  };

  const onClickCommentEdit = () => {
    getEditComment(comment);
  };

  const onClickCommentFocus = () => {
    getCommentParentId(comment.id);
    const commentInput = document.getElementById('comment-input');
    commentInput.focus();
  };

  useEffect(() => {
    if (postWriterId === comment.writerId) {
      setWriter('익명 (글쓴이)');
      return;
    }
    if (userId === comment.writerId) {
      setWriter('익명 (나)');
      return;
    }
    setWriter(`익명 ${comment.anonymousId}`);
  }, []);

  return (
    <>
      {morePopOff && (
        <MoreButtonPop
          boardId={boardId}
          commentId={comment.id}
          type="comment"
          isMe={isMe()}
          onClickLoad={onClickLoad}
          onClickCommentEdit={onClickCommentEdit}
          morePopHandle={morePopOn}
        />
      )}
      <>
        <CommentWrapper>
          <CommentMainWrapper>
            <CommentNameButtonWrapper>
              <CommentName>{writer}</CommentName>
              <CommentMoreButton onClick={morePopOn}>
                <img src="/images/icons/more.png" alt="more" />
              </CommentMoreButton>
            </CommentNameButtonWrapper>
            <CommentTime>{parseTime(comment.createdDate)}</CommentTime>
          </CommentMainWrapper>
          <CommentSubWrapper>
            <CommentContents>
              {comment.deleted ? '삭제된 댓글 입니다.' : comment.content}
            </CommentContents>
          </CommentSubWrapper>
          <CommentIconWrapper>
            <CommentLikeButton onClick={onClickCommentLikeBtn}>
              {commentLike ? (
                <img src="/images/icons/thumb-up-green.png" alt="thumb-up" />
              ) : (
                <img src="/images/icons/thumb-up-grey.png" alt="thumb-up" />
              )}
              {comment.likeCount}
            </CommentLikeButton>
            <CommentNumber onClick={onClickCommentFocus}>
              {comment.replyCount > 0 ? (
                <img src="/images/icons/comment-green.png" alt="comment" />
              ) : (
                <img src="/images/icons/comment-grey.png" alt="comment" />
              )}
              {comment.replyCount}
            </CommentNumber>
          </CommentIconWrapper>
        </CommentWrapper>
      </>
    </>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    content: PropTypes.string,
    id: PropTypes.number,
    likeCount: PropTypes.number,
    parent: PropTypes.bool,
    anonymousId: PropTypes.number,
    writerId: PropTypes.number,
    createdDate: PropTypes.string,
    deleted: PropTypes.bool,
    replyCount: PropTypes.number,
    userLike: PropTypes.bool,
  }).isRequired,
  boardId: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  postWriterId: PropTypes.number.isRequired,
  onClickLoad: PropTypes.func,
  getEditComment: PropTypes.func,
  getCommentParentId: PropTypes.func,
};

export default Comment;
