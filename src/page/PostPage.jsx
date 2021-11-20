import React from 'react';
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

const PostPage = () => <Post data={examplePost}></Post>;

export default PostPage;
