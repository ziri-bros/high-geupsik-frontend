import React from 'react';
import { useHistory } from 'react-router-dom';

import styled from '@emotion/styled';
import Wrapper from '../component/common/Wrapper';

const SearchHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 70px;
`;

const SearchInnerBox = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  height: 30px;
  background-color: #f3f3f3;
  border-radius: 5px;
  img {
    width: 20px;
    height: 20px;
    margin: 0 0 0 12px;
  }
`;

const SearchInput = styled.input`
  display: flex;
  align-items: center;
  width: 80%;
  height: 80%;
  margin: 1px 0 0 12px;
  background-color: #f3f3f3;
  font-size: 13px;
  font-weight: 400;
`;
const CancelBtn = styled.button`
  width: 40px;
  height: 30px;
  font-size: 13px;
  font-weight: 400;
  color: #5d6e1e;
  cursor: pointer;
`;

const Contour = styled.div`
  width: 100%;
  height: 0.5px;
  background-color: #f3f3f3;
`;

const SearchPage = () => {
  const history = useHistory();

  return (
    <>
      <Wrapper>
        <SearchHeader>
          <SearchInnerBox>
            <img src="/images/icons/search.png" alt="search" />
            <SearchInput placeholder="검색어 입력" maxLength={20} />
          </SearchInnerBox>
          <CancelBtn onClick={history.goBack}>취소</CancelBtn>
        </SearchHeader>
        <Contour />
      </Wrapper>
    </>
  );
};

export default SearchPage;
