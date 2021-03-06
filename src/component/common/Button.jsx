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
      margin-top: 60px;
      
      /* 모바일용 폰트 크기 적용 */
      @media only screen and (max-width: 385px) {
        font-size: 14px;
        margin-bottom:10px;
      }
    `}

  /* 하단에 위치하는 버튼 디자인 */
  ${props =>
    props.scheduleBtn &&
    css`
      margin-top: 20px;
      
      /* 모바일용 폰트 크기 적용 */
      @media only screen and (max-width: 385px) {
        font-size: 14px;
        margin-top:10px;
        height:32px;
      }
    `}

  /* 하단에 위치하는 버튼 디자인 */
  ${props =>
    props.infoBtn &&
    css`      
      margin: 40px 50px 10px 10px;
      /* 모바일용 폰트 크기 적용 */
      @media only screen and (max-width: 385px) {
        margin: 40px 35px 10px 10px;
        padding: 8px 0;
        
      }

  `}

  margin: ${props => props.postBtn && '-50px 0 0 0'};

  /* 내 정보에 위치하는 로그아웃 버튼 디자인 */
  ${props =>
    props.logoutBtn &&
    css`
      width: 94%;
      margin: 5px 0;
      background: white;
      color: black;
      margin-bottom: 7px;
      padding:10px 0;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
      
       /* 모바일용 폰트 크기 적용 */
      @media only screen and (max-width: 385px) {
        font-size:12px;
        height:30px;  
      }
    `}



  ${props =>
    props.modifyBtn &&
    css`
      width: 100%;
      background: #5d6e1e;
      color: white;
      margin-bottom: 7px;
      padding:10px 0;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);

      /* 모바일용 폰트 크기 적용 */
      @media only screen and (max-width: 385px) {
        font-size:12px;
        height:30px;  
      }
    `}
`;

const Button = ({
  children, footer, onClick, postBtn, logoutBtn, infoBtn, modifyBtn, scheduleBtn,
}) => (
  <ButtonBox
    footer={footer}
    onClick={onClick}
    postBtn={postBtn}
    logoutBtn={logoutBtn}
    infoBtn={infoBtn}
    modifyBtn={modifyBtn}
    scheduleBtn={scheduleBtn}
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
  infoBtn: PropTypes.string,
  modifyBtn: PropTypes.string,
  scheduleBtn: PropTypes.string,
};

export default Button;
