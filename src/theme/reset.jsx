import { css } from '@emotion/react';

const reset = css`
  * {
    box-sizing: border-box;
  }
  body {
    letter-spacing: -0.03px;
    line-height: 1.5;
    margin: 0;
  }
  input {
    all: unset;
  }
  a {
    text-decoration: none;
  }
  button {
    border: none;
    background-color: transparent;
  }

  *,
  body {
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
  }

  /* 스크롤바 기본 스타일 */

  ::-webkit-scrollbar {
    background-color: #f7f5f9;
    width: 16px;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f7f5f9;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #adadad;
    border-radius: 16px;
    border: 5px solid #f7f5f9;
  }

  ::-webkit-scrollbar-button {
    display: none;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #828282;
  }
`;

export default reset;
