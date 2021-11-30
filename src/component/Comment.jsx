import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Cocomment from './Cocomment';
import MoreButtonPop from './common/MoreButtonPop';
import { parseTime } from '../utils/parseTime';
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

const Comment = ({ comment, boardId, userId, onClickLoad, getEditComment }) => {
  const [morePopOff, setMorePopOff] = useState(false);
  const [commentLike, setCommentLike] = useState(false);
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

  // console.log(comment);

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
              <CommentName>
                {comment.userCount === -1
                  ? '익명 (글쓴이)'
                  : `익명 ${comment.userCount}`}
              </CommentName>
              <CommentMoreButton onClick={morePopOn}>
                <img src="/images/icons/more.png" alt="more" />
              </CommentMoreButton>
            </CommentNameButtonWrapper>
            <CommentTime>{parseTime(comment.createdDate)}</CommentTime>
          </CommentMainWrapper>
          <CommentSubWrapper>
            <CommentContents>
              {comment.deleteFlag ? '삭제된 댓글 입니다.' : comment.content}
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
            <CommentNumber>
              {comment.commentResDTOList.length > 0 ? (
                <img src="/images/icons/comment-green.png" alt="comment" />
              ) : (
                <img src="/images/icons/comment-grey.png" alt="comment" />
              )}
              {comment.commentResDTOList.length}
            </CommentNumber>
          </CommentIconWrapper>
        </CommentWrapper>
        {comment.commentResDTOList.length > 0 &&
          comment.commentResDTOList.map(cocomment => (
            <Cocomment cocomments={cocomment} />
          ))}
      </>
    </>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    commentResDTOList: PropTypes.arrayOf(PropTypes.object),
    content: PropTypes.string,
    id: PropTypes.number,
    likeCount: PropTypes.number,
    userCount: PropTypes.number,
    writerId: PropTypes.number,
    createdDate: PropTypes.string,
    deleteFlag: PropTypes.bool,
  }).isRequired,
  boardId: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  onClickLoad: PropTypes.func,
  getEditComment: PropTypes.func,
};

export default Comment;
