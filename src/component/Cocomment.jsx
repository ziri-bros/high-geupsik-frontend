import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import MoreButtonPop from './common/MoreButtonPop';
import { parseTime } from '../utils/parseTime';
import { postCommentsLike } from '../lib/api/comment';

const CommentWrapper = styled.div`
  border-bottom: 1px solid #adadad;
  background: #fdfff6;
  width: 100%;
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

const Cocomment = ({
  cocomment,
  boardId,
  userId,
  onClickLoad,
  getEditComment,
}) => {
  const [morePopOff, setMorePopOff] = useState(false);
  const [commentLike, setCommentLike] = useState(cocomment.userLike);

  const morePopOn = () => {
    setMorePopOff(!morePopOff);
  };

  const isMe = () => userId === cocomment.writerId;

  const onClickCommentLikeBtn = async () => {
    try {
      await postCommentsLike(cocomment.id);
      setCommentLike(!commentLike);
      onClickLoad();
    } catch (e) {
      console.log(e);
    }
  };

  const onClickCommentEdit = () => {
    getEditComment(cocomment);
  };

  return (
    <>
      {morePopOff && (
        <MoreButtonPop
          boardId={boardId}
          commentId={cocomment.id}
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
              <CommentArrow>
                <img src="/images/icons/return.png" alt="return" />
              </CommentArrow>
              <CommentName>
                {cocomment.writerId === userId
                  ? '익명 (글쓴이)'
                  : `익명 ${cocomment.anonymousId}`}
              </CommentName>
              <CommentMoreButton onClick={morePopOn}>
                <img src="/images/icons/more.png" alt="more" />
              </CommentMoreButton>
            </CommentNameButtonWrapper>
            <CommentTime>{parseTime(cocomment.createdDate)}</CommentTime>
          </CommentMainWrapper>
          <CommentSubWrapper>
            <CommentContents>{cocomment.content}</CommentContents>
          </CommentSubWrapper>
          <CommentIconWrapper>
            <CommentLikeButton onClick={onClickCommentLikeBtn}>
              {commentLike ? (
                <img src="/images/icons/thumb-up-green.png" alt="thumb-up" />
              ) : (
                <img src="/images/icons/thumb-up-grey.png" alt="thumb-up" />
              )}
              {cocomment.likeCount}
            </CommentLikeButton>
          </CommentIconWrapper>
        </CommentWrapper>
      </>
    </>
  );
};

Cocomment.propTypes = {
  cocomment: PropTypes.shape({
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
  boardId: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  onClickLoad: PropTypes.func,
  getEditComment: PropTypes.func,
};

export default Cocomment;
