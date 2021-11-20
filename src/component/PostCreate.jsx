import React, { useState } from 'react';
import styled from '@emotion/styled';
import Button from './common/Button';
import DropDown from './common/DropDown';

const PostCreateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 10px;
  margin-right: 10px;

  overflow-y: auto;
`;

const PostCreateExitButton = styled.div`
  margin-top: 15px;
  cursor: pointer;

  img {
    width: 28px;
    height: 28px;
  }
`;

const PostCreateTitleInput = styled.input`
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  height: 40px;
  border: 1px solid #828282;
  border-radius: 8px;

  font-weight: normal;
  font-size: 16px;

  ::placeholder {
    color: #adadad;
  }
`;

const PostCreateImgWrapper = styled.div``;

const PostCreateImg = styled.div``;

const PostCreateImgUploadButton = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 120px;
  height: 30px;

  border: 1px solid #828282;
  background: #fdfff6;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  color: #4f4f4f;
  font-weight: normal;
  font-size: 14px;

  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
  }
`;

const PostCreateContentInput = styled.textarea`
  resize: none;

  margin-top: 7px;
  padding: 10px 10px 0 10px;
  height: 320px;
  border: 1px solid #828282;
  border-radius: 8px;

  font-weight: normal;
  font-size: 16px;

  ::placeholder {
    color: #adadad;
    text-align: left;
    vertical-align: initial;
  }

  :focus {
    outline: none;
  }
`;

const PostCreate = () => {
  const list = ['자유게시판', '정보게시판', '홍보게시판'];

  return (
    <PostCreateWrapper>
      <PostCreateExitButton>
        <img src="/images/icons/close_grey.png" alt="close" />
      </PostCreateExitButton>
      <DropDown name="게시판 선택" list={list} />
      <PostCreateTitleInput placeholder="제목을 입력해주세요" />
      <PostCreateImgWrapper></PostCreateImgWrapper>
      <PostCreateImgUploadButton>
        <img src="/images/icons/img_box_fill.png" alt="img" />
        이미지 업로드
      </PostCreateImgUploadButton>
      <PostCreateContentInput placeholder="내용을 입력해주세요" />
      <Button footer>등록</Button>
    </PostCreateWrapper>
  );
};

export default PostCreate;
