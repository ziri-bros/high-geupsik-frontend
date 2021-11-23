import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const ButtonBox = styled.div`
  height: 40px;
  background: #5d6e1e;
  border-radius: 5px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;

  /* 하단에 위치하는 버튼 디자인 */
  ${props =>
    props.footer &&
    css`
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0 11px 5px 11px;
    `}

  margin: ${props => props.postBtn && '0 0 5px 0'};

  height: 40px;
  background: #5d6e1e;
  border-radius: 5px;
  cursor: pointer;

  /* 내 정보에 위치하는 로그아웃 버튼 디자인 */
  ${props =>
    props.logoutBtn &&
    css`
      background: white;
      color: black;
      margin-bottom: 7px;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
    `}
`;

const Button = ({ children, footer, onClick, postBtn, logoutBtn }) => (
  <ButtonBox
    footer={footer}
    onClick={onClick}
    postBtn={postBtn}
    logoutBtn={logoutBtn}
  >
    {children}
  </ButtonBox>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  footer: PropTypes.bool,
  onClick: PropTypes.func,
  postBtn: PropTypes.bool,
  logoutBtn: PropTypes.string,
};

export default Button;
