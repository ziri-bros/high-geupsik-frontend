import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const BoardNoticeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 96%;
  height: auto;
  margin: 7px 0 4px 0;
  border: 0.5px solid #adadad;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  span {
    color: #5d6e1e;
    font-size: 11px;
    font-weight: 700;
    margin: 2px 0 0 0;
    :nth-child(3) {
      color: #626262;
      font-size: 11px;
      font-weight: 500;
      margin: 2px 0 0 10px;
    }
  }
  img {
    display: flex;
    width: 15px;
    height: 15px;
    margin: 7px 7px 7px 10px;
  }
`;

const BoardNotice = () => {
  const [notice, setNotice] = useState();

  useEffect(() => {
    setNotice(1);
  });

  return (
    <>
      {notice === 1 && (
        <BoardNoticeWrapper>
          <img src="/images/icons/pin.png" alt="" />
          <span>공지</span>
          <span>하고싶은말을 자유롭게 적어주세요</span>
        </BoardNoticeWrapper>
      )}
    </>
  );
};

export default BoardNotice;
