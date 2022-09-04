import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import Button from './common/Button';

const MatchProcedureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 130px;

  img {
    width: 100px;
    height: 100px;
    margin-bottom: 30px;
  }
`;

const Notice = styled.div`
  color: #5d6e1e;
  font-weight: bold;
  font-size: 18px;
`;

const LogoutWapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  margin-top: 50px;
`;

const MatchProcedure = ({ path }) => {
  const [location, setLocation] = useState(null);

  const history = useHistory();

  // 초기 화면 렌더링 시, 경로를 통한 상태값 관리
  useEffect(() => {
    if (path === '/allow') setLocation('allow');
    else setLocation('noMatch');
  }, []);

  const onLogout = () => {
    history.push('/');
    localStorage.removeItem('ACCESS_TOKEN');
  };

  return (
    <MatchProcedureWrapper>
      {location === 'allow' ? (
        <>
          <img src="/images/icons/allow.png" alt="승인" />
          <Notice>학생증 승인 과정이 진행 중입니다.</Notice>
          <LogoutWapper>
            <Button onClick={onLogout} logoutBtn>
              로그아웃
            </Button>
          </LogoutWapper>
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
