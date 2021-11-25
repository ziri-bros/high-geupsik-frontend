import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';

const LoginBox = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction:column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #4f4f4f;
`;

const Profile = styled.div`
  width: 120px;
  height: 120px;
  margin: 40px 0 50px;
  background: #c4c4c4;
`;

const LoginButton = styled.div`
  width: 276px;
  height: 40px;
  border: 1px solid #ADADAD;
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  margin-bottom: 10px;
  cursor: pointer;
  background: #ffffff;
  color: black;

  img{
    width: 18px;
    height: 17.14px;
  }

  background-color: ${props => props.type === 'kakao' && '#f9e54d'};
  background-color: ${props => props.type === 'google' && '#FFFFFF'};
  
  ${props => props.type === 'naver' && css`
    padding-left: 11px;
    img{
      width:24px;
      height:23.14px;
    }
  `}
`;

const LoginText = styled.div`
  font-size: 12px;
  font-weight: 500;
  width: 120px;
  text-align: center;
  margin-left: 50px;
`;

const Bottom = styled.div`
  font-size: 12px;
  font-weight: 500;
  display: flex;
  margin-top:15px;

  div:first-child{
    margin-right: 10px;
  }

  a{
    font-weight: bold;
    color:#5d6e1e;
  }
`;

const Login = ({ type }) => (
  <LoginBox>
    <Title>{type === 'login' ? '로그인' : '회원가입'}</Title>
    <Profile />
    <LoginButton type="kakao">
      <img src="/images/icons/kakao.png" alt="kakao" />
      <LoginText>{`카카오톡으로 ${type === 'login' ? '로그인' : '회원가입'}`}</LoginText>
    </LoginButton>
    <LoginButton type="naver">
      <img src="/images/icons/naver.png" alt="naver" />
      <LoginText>{`네이버로 ${type === 'login' ? '로그인' : '회원가입'}`}</LoginText>
    </LoginButton>
    <LoginButton type="google">
      <img src="/images/icons/google.png" alt="google" />
      <LoginText>{`구글로 ${type === 'login' ? '로그인' : '회원가입'}`}</LoginText>
    </LoginButton>
    <Bottom>
      <div>
        {type === 'login'
          ? '아직 회원이 아니신가요?'
          : '기존에 하이급식을 사용하셨나요?'}
      </div>
      <div>
        {type === 'login' ? (
          <Link to="/signup">회원가입하기</Link>
        ) : (
          <Link to="/">로그인하기</Link>
        )}
      </div>
    </Bottom>
  </LoginBox>
);

Login.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Login;
