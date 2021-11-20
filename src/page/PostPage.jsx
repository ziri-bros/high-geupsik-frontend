import React from 'react';
import BoardNaviagtion from '../component/common/BoardNavigation';
import Header from '../component/common/Header';
import HeaderNavigation from '../component/common/HeaderNavigation';
import MoreButtonPop from '../component/common/MoreButtonPop';
import Wrapper from '../component/common/Wrapper';
import Post from '../component/Post';

const examplePost = {
  title: '안녕하세요',
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

const PostPage = () => (
  <Wrapper>
    <Header />
    <HeaderNavigation />
    <BoardNaviagtion />
    <Post data={examplePost}></Post>
  </Wrapper>
);

export default PostPage;
