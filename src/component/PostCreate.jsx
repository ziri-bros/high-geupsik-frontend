import React, { useState } from 'react';
import styled from '@emotion/styled';
import Button from './common/Button';

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

const PostCreateCategory = styled.div`
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  height: 40px;
  border: 1px solid #828282;
  border-radius: 8px;

  font-weight: 500;
  font-size: 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  img {
    width: 32px;
    height: 32px;
  }

  &:hover {
    background: rgba(244, 255, 193, 0.3);
  }
`;

const PostCreateCategoryContentsBox = styled.div`
  width: 96%;
  position: absolute;
  height: 110px;
  border: 1px solid #828282;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PostCreateCategoryFree = styled.div`
  border-bottom: 1px solid #828282;
`;
const PostCreateCategoryInformation = styled.div`
  border-bottom: 1px solid #828282;
`;
const PostCreateCategoryPromotion = styled.div``;

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

const PostCreateContentInput = styled.input`
  margin-top: 7px;
  padding-left: 10px;
  padding-right: 10px;
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
`;

const PostCreate = () => {
  const [categoryOn, setCategoryOn] = useState(false);

  const onClickCategoryOn = () => {
    setCategoryOn(!categoryOn);
  };

  return (
    <PostCreateWrapper>
      <PostCreateExitButton>
        <img src="/images/icons/close_grey.png" alt="close" />
      </PostCreateExitButton>
      <PostCreateCategory onClick={onClickCategoryOn}>
        게시판 선택
        <img src="/images/icons/drop_down.png" alt="drop_down" />
      </PostCreateCategory>
      {categoryOn && (
        <PostCreateCategoryContentsBox>
          <PostCreateCategoryFree>자유게시판</PostCreateCategoryFree>
          <PostCreateCategoryInformation>
            정보게시판
          </PostCreateCategoryInformation>
          <PostCreateCategoryPromotion>홍보게시판</PostCreateCategoryPromotion>
        </PostCreateCategoryContentsBox>
      )}
      <PostCreateTitleInput placeholder="제목을 입력해주세요" />
      <PostCreateImgWrapper></PostCreateImgWrapper>
      <PostCreateImgUploadButton>
        <img src="/images/icons/img_box_fill.png" alt="img" />
        이미지 업로드
      </PostCreateImgUploadButton>
      <PostCreateContentInput type="text" placeholder="내용을 입력해주세요" />
      <Button footer>등록</Button>
    </PostCreateWrapper>
  );
};

export default PostCreate;
