import styled from '@emotion/styled';
import React from 'react';

const AllowProcedureWrapper = styled.div`
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

const AllowProcedure = () => (
  <AllowProcedureWrapper>
    <img src="/images/icons/allow.png" alt="승인" />
    <Notice>학생증 승인 과정이 진행 중입니다.</Notice>
  </AllowProcedureWrapper>
);

export default AllowProcedure;
