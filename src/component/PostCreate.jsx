import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
  width: 28px;
  height: 28px;
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

const PostCreateImgWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  overflow-x: auto;
`;

const PostCreateImg = styled.div`
  img {
    width: 60px;
    height: 60px;

    margin-right: 7px;

    border: 1px solid black;
  }
`;

const PostCreateImgUploadButton = styled.label`
  margin-top: 10px;
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

const PostCreateContentTextarea = styled.textarea`
  resize: none;

  margin-top: 7px;
  padding: 10px 10px 0 10px;
  height: ${props => (props.isImgs ? '245px' : '330px')};
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
  const [dropDownSelected, setDropDownSelected] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);
  const history = useHistory();

  const onChangeSelected = selected => setDropDownSelected(selected);
  const onChangeTitle = e => setTitle(e.target.value);
  const onChangeContent = e => setContent(e.target.value);

  const onExit = () => {
    if (title.length > 0 || content.length > 0) {
      const isExit = window.confirm(
        '게시글을 작성중입니다. 정말 나가시겠습니까?',
      );
      // eslint-disable-next-line no-unused-expressions
      isExit && history.goBack();
    } else {
      history.goBack();
    }
  };

  const addImages = e => {
    const imgs = [...e.target.files];
    const imgsUrl = [...images];

    imgs.forEach(img => {
      const currentImgUrl = URL.createObjectURL(img);
      imgsUrl.push(currentImgUrl);
    });
    setImages(imgsUrl);
  };

  console.log(images);

  const onSubmit = () => {};

  return (
    <PostCreateWrapper>
      <PostCreateExitButton onClick={onExit}>
        <img src="/images/icons/close_grey.png" alt="close" />
      </PostCreateExitButton>
      <DropDown
        name="게시판 선택"
        list={list}
        onChangeSelected={onChangeSelected}
      />
      <PostCreateTitleInput
        placeholder="제목을 입력해주세요"
        onChange={onChangeTitle}
      />
      <PostCreateImgWrapper>
        {images.map(img => (
          <PostCreateImg>
            <img src={img} alt="imgs" />
          </PostCreateImg>
        ))}
      </PostCreateImgWrapper>
      <input
        type="file"
        multiple="multiple"
        id="input-file"
        style={{ display: 'none' }}
        accept=".jpg, .jpeg, .png"
        onChange={addImages}
      />
      <PostCreateImgUploadButton htmlFor="input-file">
        <img src="/images/icons/img_box_fill.png" alt="img" />
        이미지 업로드
      </PostCreateImgUploadButton>
      <PostCreateContentTextarea
        placeholder="내용을 입력해주세요"
        onChange={onChangeContent}
        isImgs={images.length}
      />
      <Button footer onClick={onSubmit}>
        등록
      </Button>
    </PostCreateWrapper>
  );
};

export default PostCreate;
