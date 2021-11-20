import React from 'react';
import styled from '@emotion/styled';

const Write = styled.div`
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 25px;
  right: 30px;
  border: 1px solid #5d6e1e;
  border-radius: 100%;
  background-color: #f4ffc1;
`;

const IconItem = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  img {
    display: flex;
    margin: 50% 0 0 0;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;

const Writing = () => (
  <>
    <Write>
      <IconItem>
        <a href="/home">
          <img src="/images/icons/pencil_color.png" alt="pencil_color" />
        </a>
      </IconItem>
    </Write>
  </>
);

export default Writing;
