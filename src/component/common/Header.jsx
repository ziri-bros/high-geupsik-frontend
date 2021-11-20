import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 23px 6px 20px;
`;

const LogoBox = styled(Link)`
  img {
    width: 93px;
    cursor: pointer;
  }
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
`;

const IconItem = styled.div`
  display: flex;
  align-items: center;
  margin-left: 12px;

  img {
    width: 26px;
    cursor: pointer;
  }
`;

const LogoutBtn = styled.button`
  background : #868e96;
  color: white;
  font-size:12px;
  height: 30px;
  font-weight: bold;
  padding:0 10px;
  margin-top: 10px;
  cursor: pointer;
`;

const Header = ({ admin }) => (
  <HeaderStyle>
    <LogoBox to="/home">
      <img src="/images/logo/logo.png" alt="logo" />
    </LogoBox>
    { admin ? (
      <LogoutBtn>로그아웃</LogoutBtn>
    ) : (
      <IconBox>
        <IconItem>
          <img src="/images/icons/search.png" alt="search" />
        </IconItem>
        <IconItem>
          <img src="/images/icons/bell.png" alt="search" />
        </IconItem>
      </IconBox>
    )}
  </HeaderStyle>
);

Header.propTypes = {
  admin: PropTypes.string,
};

export default Header;
