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
        <BoardComponent noticeExistence={`${true}`} type="" />
      )}
      {boardType === 'FREE' && (
        <BoardComponent noticeExistence={`${true}`} type={boardType} />
      )}
      {boardType === 'INFORMATION' && <BoardComponent type={boardType} />}
      {boardType === 'HOT' && <BoardComponent type={boardType} />}
      {boardType === 'PROMOTION' && <BoardComponent type={boardType} />}
    </>
  );
};

BoardPosting.propTypes = {
  path: PropTypes.string.isRequired,
};

export default BoardPosting;
