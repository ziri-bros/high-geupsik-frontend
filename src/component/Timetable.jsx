import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TIMETABLE_FRAME } from '../constants';
import { loadTimetable } from '../lib/api/timetable';
import { getTargetDate, getWeekIdx } from '../utils';
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

const Timetable = () => {
  const info = useSelector(({ userInfo }) => userInfo.info);

  const [buttonOn, setButtonOn] = useState(true);
  const [onDelete, setOnDelete] = useState(true);

  const onClickBtn = () => setButtonOn(!buttonOn);
  const onCancel = () => setOnDelete(!onDelete);
  // 차후에 onConfirm 수정 필요
  const onConfirm = () => setOnDelete(!onDelete);

  const timeTable = [...new Array(5)].map(_ => new Array(9).fill('-'));

  const reflectDOM = (table, position) => {
    table[position].forEach((_, idx) => {
      const $input = document.getElementById(`input${idx}${position}`);
      $input.value = timeTable[position][idx];
    });
  };

  const trimData = (dataSet, position) => {
    dataSet.forEach(data => {
      timeTable[position][data.PERIO] = data.ITRT_CNTNT;
    });
    reflectDOM(timeTable, position);
  };

  useEffect(() => {
    const weekIdx = getWeekIdx();

    if (info) {
      const { grade, classNum } = info;
      const { code, regionCode } = info.schoolDTO;

      for (let i = weekIdx[0] + 1; i < weekIdx[1]; i += 1) {
        const data = {
          date: getTargetDate(i),
          grade,
          classNum,
          code,
          regionCode,
        };

        const loadTimetableAPI = async () => {
          const response = await loadTimetable(data);

          if (!response) {
            reflectDOM(timeTable, i);
            return;
          }

          const dataSet = response[1].row;

          switch (i) {
            case 0:
              trimData(dataSet, 0);
              break;
            case 1:
              trimData(dataSet, 1);
              break;
            case 2:
              trimData(dataSet, 2);
              break;
            case 3:
              trimData(dataSet, 3);
              break;
            case 4:
              trimData(dataSet, 4);
              break;
            default:
          }
        };

        loadTimetableAPI();
      }
    }
  }, [info]);

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
        {TIMETABLE_FRAME.map((list, idx) => (
          <Trow key={list.id}>
            <TInput first value={list.name} bottom={idx === TIMETABLE_FRAME.length - 1} disabled />
            <TInput id={`input${idx}0`} maxLength="6" bottom={idx === TIMETABLE_FRAME.length - 1} disabled={buttonOn} />
            <TInput id={`input${idx}1`} maxLength="6" bottom={idx === TIMETABLE_FRAME.length - 1} disabled={buttonOn} />
            <TInput id={`input${idx}2`} maxLength="6" bottom={idx === TIMETABLE_FRAME.length - 1} disabled={buttonOn} />
            <TInput id={`input${idx}3`} maxLength="6" bottom={idx === TIMETABLE_FRAME.length - 1} disabled={buttonOn} />
            <TInput id={`input${idx}4`} maxLength="6" last bottom={idx === TIMETABLE_FRAME.length - 1} disabled={buttonOn} />
          </Trow>
        ))}
      </Table>
      {/* 추후 수정 필요 */}
      {!buttonOn && <Button scheduleBtn onClick={onClickBtn}>저장</Button>}

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
