import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import { deletePost } from '../../lib/api/board';
import { deleteComments } from '../../lib/api/comment';

const MoreButtonPopBackground = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: absolute;

  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  background: rgba(0, 0, 0, 0.6);
`;

const MoreButtonWrapper = styled.div`
  width: 100%;
`;

const MoreButtonPopActionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 20px;
  margin-right: 20px;
`;

// type  작성자 게시글, 댓글 더보기

const MoreButtonPopReviseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: white;

  font-weight: 500;
  font-size: 18px;
  color: #4f4f4f;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  border-bottom: 1px solid #adadad;

  cursor: pointer;
`;

const MoreButtonPopDeleteButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: white;

  font-weight: 500;
  font-size: 18px;
  color: #4f4f4f;

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  cursor: pointer;
`;

// type 타인 댓글에서 쪽지 보내기 더보기

const MoreButtonPopLetterSendButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: white;

  font-weight: 500;
  font-size: 18px;
  color: #4f4f4f;

  border-radius: 20px;

  cursor: pointer;
`;

// type 쪽지 페이지 더보기

const MoreButtonPopLetterAllDeleteButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: white;

  font-weight: 500;
  font-size: 18px;
  color: #4f4f4f;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  border-bottom: 1px solid #adadad;

  cursor: pointer;
`;

const MoreButtonPopLetterBlockButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: white;

  font-weight: 500;
  font-size: 18px;
  color: #4f4f4f;

  border-bottom: 1px solid #adadad;

  cursor: pointer;
`;

const MoreButtonPopLetterReportButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: white;

  font-weight: 500;
  font-size: 18px;
  color: #4f4f4f;

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  cursor: pointer;
`;

// 공통 취소하기
const MoreButtonPopCancelButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: white;

  font-weight: bold;
  font-size: 18px;
  color: #e27070;

  border-radius: 20px;

  margin: 15px 20px 15px 20px;

  cursor: pointer;
`;

const MoreButtonPop = ({
  boardId,
  commentId,
  isMe,
  type,
  morePopHandle,
  onClickLoad,
}) => {
  const history = useHistory();

  const onClickRevise = () => {};

  const onClickDelete = async () => {
    if (type === 'post') {
      try {
        await deletePost(boardId);
        morePopHandle();
        history.goBack();
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const response = await deleteComments(boardId, commentId);
        console.log(response);
        morePopHandle();
        onClickLoad();
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <MoreButtonPopBackground>
      <MoreButtonWrapper>
        <MoreButtonPopActionWrapper>
          {isMe ? (
            <>
              <MoreButtonPopReviseButton>수정</MoreButtonPopReviseButton>
              <MoreButtonPopDeleteButton onClick={onClickDelete}>
                삭제
              </MoreButtonPopDeleteButton>
            </>
          ) : (
            <MoreButtonPopLetterSendButton>
              쪽지 보내기
            </MoreButtonPopLetterSendButton>
          )}

          {/* <MoreButtonPopLetterAllDeleteButton>
            쪽지 전체 삭제
          </MoreButtonPopLetterAllDeleteButton>
          <MoreButtonPopLetterBlockButton>차단</MoreButtonPopLetterBlockButton>
          <MoreButtonPopLetterReportButton>
            신고
          </MoreButtonPopLetterReportButton> */}
        </MoreButtonPopActionWrapper>
        <MoreButtonPopCancelButton onClick={morePopHandle}>
          취소
        </MoreButtonPopCancelButton>
      </MoreButtonWrapper>
    </MoreButtonPopBackground>
  );
};

MoreButtonPop.propTypes = {
  boardId: PropTypes.number,
  commentId: PropTypes.number,
  isMe: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  morePopHandle: PropTypes.func.isRequired,
  onClickLoad: PropTypes.func,
};

export default MoreButtonPop;
