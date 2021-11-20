import React, { useRef } from 'react';
import styled from '@emotion/styled';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';

const MoreButtonPopBackground = styled.div`
  width: 100%;
  max-width: 480px;
  height: 100%;
  margin: 0 auto;
  position: relative;

  background: rgba(0, 0, 0, 0.6);
`;

const MoreButtonPopActionWrapper = styled.div``;

// type  작성자 게시글, 댓글 더보기

const MoreButtonPopReviseButton = styled.div``;

const MoreButtonPopDeleteButton = styled.div``;

// type 타인 댓글에서 쪽지 보내기 더보기

const MoreButtonPopLetterSendButton = styled.div``;

// type 쪽지 페이지 더보기

const MoreButtonPopLetterAllDeleteButton = styled.div``;

const MoreButtonPopLetterBlockButton = styled.div``;

const MoreButtonPopLetterReportButton = styled.div``;

// 공통 취소하기
const MoreButtonPopCancelButton = styled.div``;

const MoreButtonPop = () => {
  const moreRef = useRef(null);
  const [morePopOff, setMorePopOff] = useDetectOutsideClick(moreRef, false);

  return (
    <MoreButtonPopBackground ref={moreRef}>
      <MoreButtonPopActionWrapper>
        <MoreButtonPopReviseButton>수정</MoreButtonPopReviseButton>
        <MoreButtonPopDeleteButton>삭제</MoreButtonPopDeleteButton>
      </MoreButtonPopActionWrapper>
      <MoreButtonPopCancelButton>취소</MoreButtonPopCancelButton>
    </MoreButtonPopBackground>
  );
};

export default MoreButtonPop;
