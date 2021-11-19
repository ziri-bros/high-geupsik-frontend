import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const ButtonBox = styled.div`
  /* 하단에 위치하는 버튼 디자인 */
  ${props => props.footer && css`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 11px 5px 11px;
  `}

  height: 40px;
  background: #5d6e1e;
  border-radius: 5px;
  cursor:pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
`;

const Button = ({ children, footer }) => (
  <ButtonBox footer={footer}>{children}</ButtonBox>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  footer: PropTypes.bool,
};

export default Button;
