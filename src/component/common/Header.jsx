import styled from '@emotion/styled';
import React from 'react';

const HeaderStyle = styled.div`
    display:flex;
    justify-content:space-between;
    margin:30px 23px 6px 20px;
`;

const LogoBox = styled.div`
    img{
        width:93px;
        cursor:pointer;
    }
`;

const IconBox = styled.div`
    display:flex;
    align-items:center;
`;

const IconItem = styled.div`
    display:flex;
    align-items:center;
    margin-left:12px;
    img{
        width: 26px;
        cursor:pointer;
    }
`;

const Header = () => (
  <HeaderStyle>
    <LogoBox>
      <img src="/images/logo/logo.png" alt="logo" />
    </LogoBox>
    <IconBox>
      <IconItem>
        <img src="/images/icons/search.png" alt="search" />
      </IconItem>
      <IconItem>
        <img src="/images/icons/bell.png" alt="search" />
      </IconItem>
    </IconBox>
  </HeaderStyle>
);

export default Header;
