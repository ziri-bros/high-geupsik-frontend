import React from 'react';
import styled from '@emotion/styled';
import Wrapper from '../component/common/Wrapper';
import Search from '../component/Search';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: white;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SearchPage = () => (
  <>
    <Wrapper>
      <HomeWrapper>
        <Search />
      </HomeWrapper>
    </Wrapper>
  </>
);

export default SearchPage;
