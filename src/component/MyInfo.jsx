import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BoardComponent from './common/BoardComponent';
import Button from './common/Button';
import PostNotFound from './common/PostNotFound';

const MyInfoWrapper = styled.div`
  margin: 20px 10px;
`;

const MyInfoBox = styled.div`
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 12px 0 12px 19px;
  margin-bottom: 7px;
  
  .where{
    display: flex;
    margin-top: 10px;
  }
`;

const Name = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #4f4f4f;
`;

const Text = styled.div`
  font-size: 13px;
  color: ${props => props.blur ? '#626262' : '#4f4f4f'};
  margin-right: ${props => props.area && '15px'};
`;

const MyPostMenuList = styled.div`
  display: flex;
  align-items: center;
  margin: 34px 0 10px;  
`;

const MyPostMenu = styled.div`
  font-weight: normal;
  font-size: 16px;
  color: #4f4f4f;
  cursor: pointer;
  
  ${props => props.menuOn && css`
    color: #5d6e1e;
    font-weight: bold;
  `}
`;

const Bar = styled.div`
  width:1px;
  height:18px;
  margin:0 10px;
  background: #4f4f4f;
`;

const ButtonWrapper = styled(Link)``;

// 예시 DB
const examplePost = {
  title: '제목입니다',
  time: '21/7/23 11:34',
  view: '100',
  content: '점심메뉴 추천 좀',
  images: ['/images/icons/square.png', '/images/icons/square.png'],
  like: 5,
  liked: true,
  totalCommentCount: 4,
  isMe: true,
  comments: [
    {
      name: '익명1',
      time: '21/7/23 11:50',
      content: '냉모밀 먹어라',
      goodCount: 0,
      cocomments: [],
    },
    {
      name: '익명2',
      time: '21/7/23 11:50',
      content: '치킨 먹어라',
      goodCount: 2,
      cocomments: [
        {
          name: '익명(글쓴이)',
          time: '21/7/23 11:50',
          content: '추천 고마워',
          goodCount: 0,
          cocommentsCount: 1,
        },
        {
          name: '익명2',
          time: '21/7/23 11:50',
          content: '맛있게 먹어',
          goodCount: 1,
          cocommentsCount: 0,
        },
      ],
    },
  ],
};

const MyInfo = () => {
  const [menuOn, setMenuOn] = useState(true);

  const onClickWriteBtn = () => setMenuOn(true);
  const onClickCommentBtn = () => setMenuOn(false);

  // 로그아웃 함수. 차후에 구현
  const onLogout = () => {};

  return (
    <MyInfoWrapper>
      <MyInfoBox>
        <Name>이름</Name>
        <Text blur>asdf1234@gmail.com</Text>
        <div className="where">
          <Text area>서울</Text>
          <Text>성신여자고등학교</Text>
        </div>
      </MyInfoBox>
      <Button onClick={onLogout} logoutBtn>로그아웃</Button>
      <ButtonWrapper to="/modify">
        <Button>내 정보 수정</Button>
      </ButtonWrapper>
      <MyPostMenuList>
        <MyPostMenu menuOn={menuOn} onClick={onClickWriteBtn}>내가 작성한 게시글</MyPostMenu>
        <Bar />
        <MyPostMenu menuOn={!menuOn} onClick={onClickCommentBtn}>내가 댓글 단 게시글</MyPostMenu>
      </MyPostMenuList>
      {/* 게시글 없을 때 */}
      {
        examplePost ?
          <BoardComponent objects={examplePost} /> :
          <PostNotFound myInfo={menuOn ? '내가 작성한' : '내가 댓글 단'} />
      }
    </MyInfoWrapper>
  );
};

export default MyInfo;
