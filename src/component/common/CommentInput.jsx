import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { postComments, putEditComments } from '../../lib/api/comment';

const CommentInputWrapper = styled.form`
  margin-top: 20px;
  background: #f3f3f3;
  width: 100%;
  max-width: 480px;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 90%;
  height: 40px;
  background: #ffffff;
  border-radius: 5px;
  padding: 0 10px;
  margin-left: 15px;

  font-weight: normal;
  font-size: 14px;

  ::placeholder {
    color: #828282;
    font-weight: normal;
    font-size: 14px;
  }
`;

const CommentButton = styled.button`
  cursor: pointer;
  margin: 3px 0 0 5px;

  img {
    width: 32px;
    height: 32px;
  }
`;

const CommentInput = ({
  boardId,
  onClickLoad,
  editCommentValue,
  commentParentId,
}) => {
  const [comment, setComment] = useState('');
  const [isEditComment, setIsEditComment] = useState(false);
  const [parentId, setParentId] = useState(null);

  const onClickSubmitComments = async event => {
    event.preventDefault();
    let dto = {
      content: comment,
    };
    if (parentId) {
      dto = { ...dto, ...parentId };
    }
    try {
      isEditComment
        ? await putEditComments(editCommentValue.id, dto)
        : await postComments(boardId, dto);
      setComment('');
      setIsEditComment(false);
      setParentId(null);
      onClickLoad();
    } catch (e) {
      console.log(e);
    }
  };

  const onChangeComment = e => {
    setComment(e.target.value);
  };

  useEffect(() => {
    setParentId(commentParentId);
  }, [commentParentId]);

  useEffect(() => {
    if (editCommentValue) {
      setComment(editCommentValue.content);
      setIsEditComment(true);
    }
  }, [editCommentValue]);

  return (
    <CommentInputWrapper>
      <Input
        type="text"
        placeholder="댓글을 입력하세요"
        name="comment"
        value={comment}
        onChange={onChangeComment}
        id="comment-input"
      />
      <CommentButton onClick={onClickSubmitComments}>
        <img src="/images/icons/send_green.png" alt="send" />
      </CommentButton>
    </CommentInputWrapper>
  );
};

CommentInput.propTypes = {
  boardId: PropTypes.string.isRequired,
  onClickLoad: PropTypes.func.isRequired,
  editCommentValue: PropTypes.objectOf(PropTypes.object),
  commentParentId: PropTypes.number,
};

export default CommentInput;
