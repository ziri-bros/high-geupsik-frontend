import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const MatchProcedureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top:130px;

  img{
    width: 100px;
    height: 100px;
    margin-bottom: 30px;
  }
`;

const Notice = styled.div`
  color: #5D6E1E;
  font-weight: bold;
  font-size: 18px;
`;

const MatchProcedure = ({ path }) => {
  const [location, setLocation] = useState(null);

  // 초기 화면 렌더링 시, 경로를 통한 상태값 관리
  useEffect(() => {
    if (path === '/allow') setLocation('allow');
    else setLocation('noMatch');
  }, []);

  return (
    <MatchProcedureWrapper>
      {location === 'allow' ? (
        <>
          <img src="/images/icons/allow.png" alt="승인" />
          <Notice>학생증 승인 과정이 진행 중입니다.</Notice>
        </>
      ) : (
        <>
          <img src="/images/icons/notFound.png" alt="404" />
          <Notice>페이지가 존재하지 않습니다.</Notice>
          <Notice>다시 시도해주세요.</Notice>
        </>
      )}
    </MatchProcedureWrapper>
  );
};

MatchProcedure.propTypes = {
  path: PropTypes.string.isRequired,
};

export default MatchProcedure;
