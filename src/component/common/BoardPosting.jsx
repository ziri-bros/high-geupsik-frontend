import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import BoardComponent from './BoardComponent';

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
//
// 예시 DB 2
const examplePost2 = {
  title: '다른거 테스트',
  time: '21/11/11 11:11',
  view: '100',
  content: '시발련아',
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

// 예시 DB 2
const examplePost3 = [];

const BoardPosting = ({ path }) => {
  const [boardType, setBoardType] = useState(path);

  useEffect(() => {
    if (path === '/board') setBoardType('board');
    if (path === '/board/free') setBoardType('free');
    if (path === '/board/information') setBoardType('information');
    if (path === '/board/hot') setBoardType('hot');
    if (path === '/board/promotion') setBoardType('promotion');
  }, [path]);

  return (
    <>
      {boardType === 'board' && (
        <BoardComponent type={boardType} objects={examplePost} />
      )}
      {boardType === 'free' && (
        <BoardComponent type={boardType} objects={examplePost2} />
      )}
      {boardType === 'information' && (
        <BoardComponent type={boardType} objects={examplePost3} />
      )}
      {boardType === 'hot' && (
        <BoardComponent type={boardType} objects={examplePost} />
      )}
      {boardType === 'promotion' && (
        <BoardComponent type={boardType} objects={examplePost} />
      )}
    </>
  );
};

BoardPosting.propTypes = {
  path: PropTypes.string.isRequired,
};

export default BoardPosting;
