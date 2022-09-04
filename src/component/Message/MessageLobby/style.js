import styled from '@emotion/styled';

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;

  background-color: white;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const InfiniteScrollCheck = styled.div`
  border: 1px solid black;
`;
