import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import BoardComponent from './common/BoardComponent';
import Button from './common/Button';
import PostNotFound from './common/PostNotFound';
import { getMyPostList } from '../lib/api/board';

const MyInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: white;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const MyInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 94%;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 12px 0 12px 19px;
  margin: 10px;
`;

const TextWrapper = styled.div`
  display: flex;
  margin: 10px 0;

  ${props =>
    props.mainInfo &&
    css`
      flex-direction: column;
    `}
`;

const Text = styled.div`
  font-size: 13px;
  color: ${props => (props.blur ? '#626262' : '#4f4f4f')};
  margin-right: ${props => props.rightMargin && '12px'};
  margin-right: ${props => props.grade && '5px'};
`;

const MyPostMenuList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 20px 0 0 3%;
`;

const PostMenuListWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
`;

const MyPostMenu = styled.div`
  display: flex;

  font-weight: normal;
  font-size: 16px;
  color: #4f4f4f;
  cursor: pointer;

  /* 모바일용 폰트 크기 적용 */
  @media only screen and (max-width: 385px) {
    font-size: 14px;
  }

  ${props =>
    props.menuOn &&
    css`
      color: #5d6e1e;
      font-weight: bold;
    `}
`;

const Bar = styled.div`
  width: 1px;
  height: 18px;
  margin: 0 10px;
  background: #4f4f4f;
`;

const MyPostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ButtonWrapper = styled(Link)`
  width: 94%;
`;

const MyInfo = () => {
  const info = useSelector(({ userInfo }) => userInfo.info);
  const [menuOn, setMenuOn] = useState(true);
  const [data, setData] = useState(null);

  const history = useHistory();

  const onClickWriteBtn = () => setMenuOn(true);
  const onClickCommentBtn = () => setMenuOn(false);

  const onLogout = () => {
    localStorage.removeItem('ACCESS_TOKEN');
    history.push('/');
  };
  const onUpdate = () => history.push('/register');

  useEffect(() => {
    const loadBoard = async () => {
      const response = await getMyPostList();

      if (response.success && response.data.content.length > 0) {
        setData(response.data);
      }
    };

    loadBoard();
  }, []);

  return info ? (
    <MyInfoWrapper>
      <MyInfoBox>
        <TextWrapper mainInfo>
          <Text>{info.username}</Text>
          <Text>{info.email}</Text>
        </TextWrapper>
        <TextWrapper>
          <Text rightMargin>{info.schoolResDTO.region}</Text>
          <Text rightMargin>{info.schoolResDTO.name}</Text>
          <Text grade>{info.grade}학년</Text>
          <Text>{info.classNum}반</Text>
        </TextWrapper>
      </MyInfoBox>
      <Button onClick={onLogout} logoutBtn>
        로그아웃
      </Button>
      <ButtonWrapper to="/modify">
        <Button onClick={onUpdate} modifyBtn>
          내 정보 수정
        </Button>
      </ButtonWrapper>
      <PostMenuListWrapper>
        <MyPostMenuList>
          <MyPostMenu menuOn={menuOn} onClick={onClickWriteBtn}>
            내가 작성한 게시글
          </MyPostMenu>
          {/* <Bar />
          <MyPostMenu menuOn={!menuOn} onClick={onClickCommentBtn}>
            내가 댓글 단 게시글
          </MyPostMenu> */}
        </MyPostMenuList>
      </PostMenuListWrapper>

      {/* 게시글 없을 때 */}
      <MyPostWrapper>
        {data ? (
          <BoardComponent myPost />
        ) : (
          <PostNotFound myInfo={menuOn ? '내가 작성한' : '내가 댓글 단'} />
        )}
      </MyPostWrapper>
    </MyInfoWrapper>
  ) : (
    <></>
  );
};

export default MyInfo;
