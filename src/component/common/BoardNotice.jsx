import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const BoardHidingWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: white;
  margin: 1px 0 0 0;
  width: 95%;
  height: 38px;
  border-radius: 0 0 5px 5px;
  outline: 1px solid white;
`;

const BoardNoticeWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: auto;
  border: 0.5px solid #adadad;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  span {
    color: #5d6e1e;
    font-size: 11px;
    font-weight: 700;
    margin: 2px 0 0 0;
    :nth-of-type(2) {
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
        <BoardHidingWrapper>
          <BoardNoticeWrapper>
            <img src="/images/icons/pin.png" alt="" />
            <span>공지</span>
            <span>하고싶은말을 자유롭게 적어주세요</span>
          </BoardNoticeWrapper>
        </BoardHidingWrapper>
      )}
    </>
  );
};

export default BoardNotice;
