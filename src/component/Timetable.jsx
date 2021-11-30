import { css } from '@emotion/react';
import styled from '@emotion/styled';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Button from './common/Button';
import Modal from './common/Modal';

const TimetableWrapper = styled.div`
  margin: 19px 20px 0 20px;
`;

const Head = styled.div`
  position: relative;
  text-align: center;

  ${props => props.modify && css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
      width: 25px;
      height: 25px;
      display: flex;
      cursor: pointer;
    }
  `}

  .addImg{
    position: absolute;
    right: 0;
    top: 0;
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
`;

const Icon = styled.div``;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #4f4f4f;
`;

const Table = styled.div`
  border: 1px solid gray;
  border-radius:5px;
  margin-top:30px;
`;

const Trow = styled.div`
  display: flex;
`;

const TInput = styled.input`
  width: 20%;
  border-right: 1px solid #828282;
  border-right: ${props => props.last && 'none'};
  border-bottom: 1px solid #828282;
  border-bottom: ${props => props.bottom && 'none'};
  text-align: center;
  font-size: 13px;

  /* 모바일용 폰트 크기 적용 */
  @media only screen and (max-width: 385px) {
    font-size:10px;
  }
  
  color: #4f4f4f;
  margin: 0;
  padding: 12px 0;
  width: ${props => props.first && '16%'};
  padding: ${props => props.head && '5px 0'};
`;

const DeleteBtn = styled.button`
  width: 95px;
  height: 24px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  border: 1px solid #5D6E1E;
  color: #5D6E1E;
  font-weight: 500;
  font-size: 12px;
  cursor: pointer;
`;

const lists = [
  { name: '0교시', id: '0' },
  { name: '1교시', id: '1' },
  { name: '2교시', id: '2' },
  { name: '3교시', id: '3' },
  { name: '4교시', id: '4' },
  { name: '5교시', id: '5' },
  { name: '6교시', id: '6' },
  { name: '7교시', id: '7' },
  { name: '8교시', id: '8' },
];

const Timetable = () => {
  const [buttonOn, setButtonOn] = useState(true);
  const [onDelete, setOnDelete] = useState(true);

  const onClickBtn = () => setButtonOn(!buttonOn);
  const onCancel = () => setOnDelete(!onDelete);
  // 차후에 onConfirm 수정 필요
  const onConfirm = () => setOnDelete(!onDelete);

  return (
    <TimetableWrapper>
      <Head modify={!buttonOn}>
        {buttonOn ? (
          <>
            <Title>2021년 1학기</Title>
            <Icon onClick={onClickBtn}>
              <img className="addImg" src="/images/icons/add_green.png" alt="add" />
            </Icon>
          </>
        ) : (
          <>
            <Icon onClick={onClickBtn}>
              <img className="deleteImg" src="/images/icons/close.png" alt="close" />
            </Icon>
            <DeleteBtn onClick={onCancel} className="deleteBtn">모두 지우기</DeleteBtn>
          </>
        )}
      </Head>
      <Table>
        <Trow>
          <TInput value="" first head disabled />
          <TInput value="월" head disable />
          <TInput value="화" head disabled />
          <TInput value="수" head disabled />
          <TInput value="목" head disabled />
          <TInput value="금" last head disabled />
        </Trow>
        {lists.map((list, index) => (
          <Trow key={list.id}>
            <TInput first value={list.name} bottom={index === lists.length - 1} disabled />
            <TInput maxLength="6" bottom={index === lists.length - 1} disabled={buttonOn} />
            <TInput maxLength="6" bottom={index === lists.length - 1} disabled={buttonOn} />
            <TInput maxLength="6" bottom={index === lists.length - 1} disabled={buttonOn} />
            <TInput maxLength="6" bottom={index === lists.length - 1} disabled={buttonOn} />
            <TInput maxLength="6" last bottom={index === lists.length - 1} disabled={buttonOn} />
          </Trow>
        ))}
      </Table>
      {!buttonOn && <Button footer>저장</Button>}

      {/* 지우기 클릭시 생성되는 모달 창 */}
      {!onDelete && (
        <Modal
          title="시간표를 모두 지우시겠습니까?"
          onCancel={onCancel}
          onConfirm={onConfirm}
        />
      )}
    </TimetableWrapper>
  );
};

export default Timetable;
