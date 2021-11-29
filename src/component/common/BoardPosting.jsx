import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import BoardComponent from './BoardComponent';

const BoardPosting = ({ path }) => {
  const [boardType, setBoardType] = useState(path);

  useEffect(() => {
    if (path === '/board') setBoardType('AUTH');
    if (path === '/board/free') setBoardType('FREE');
    if (path === '/board/information') setBoardType('INFORMATION');
    if (path === '/board/hot') setBoardType('HOT');
    if (path === '/board/promotion') setBoardType('PROMOTION');
  }, [path]);

  return (
    <>
      {boardType === 'AUTH' && (
        <BoardComponent
          noticeExistence={`${true}`}
          type={boardType}
          typeKorean="전체"
        />
      )}
      {boardType === 'FREE' && (
        <BoardComponent
          noticeExistence={`${true}`}
          type={boardType}
          typeKorean="자유"
        />
      )}
      {boardType === 'INFORMATION' && (
        <BoardComponent type={boardType} typeKorean="정보" />
      )}
      {boardType === 'HOT' && (
        <BoardComponent type={boardType} typeKorean="인기" />
      )}
      {boardType === 'PROMOTION' && (
        <BoardComponent type={boardType} typeKorean="홍보" />
      )}
    </>
  );
};

BoardPosting.propTypes = {
  path: PropTypes.string.isRequired,
};

export default BoardPosting;
