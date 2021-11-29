import React, { useState } from 'react';
import styled from '@emotion/styled';

const CommentInputWrapper = styled.div`
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

const CommentButton = styled.div`
  cursor: pointer;
  margin: 3px 0 0 5px;

  img {
    width: 32px;
    height: 32px;
  }
`;

const CommentInput = () => {
  const [comment, setComment] = useState('');

  const onChangeComment = e => {
    setComment(e.target.value);
  };

  return (
    <CommentInputWrapper>
      <Input
        type="text"
        placeholder="댓글을 입력하세요"
        name="comment"
        value={comment}
        onChange={onChangeComment}
      />
      <CommentButton>
        <img src="/images/icons/send_green.png" alt="send" />
      </CommentButton>
    </CommentInputWrapper>
  );
};

export default CommentInput;
