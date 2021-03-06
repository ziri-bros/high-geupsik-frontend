import styled from '@emotion/styled';
import React from 'react';
import { css } from '@emotion/react';
import { Link, useHistory } from 'react-router-dom';

const HeaderNavigationBox = styled.div`
  height: 40px;
  margin-top: 10px;
  display: flex;

  align-items: center;
  border-bottom: 1px solid #5d6e1e;
`;

const NavigationItem = styled(Link)`
  width: 20%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  color: #5d6e1e;
  cursor: pointer;

  &:hover {
    font-weight: bold;
    border-bottom: 3px solid #5d6e1e;
  }

  ${props =>
    props.focused &&
    css`
      font-weight: bold;
      border-bottom: 3px solid #5d6e1e;
    `}
`;

const lists = [
  {
    id: 1,
    name: '홈',
    url: '/home',
  },
  {
    id: 2,
    name: '게시판',
    url: '/board',
  },
  {
    id: 3,
    name: '시간표',
    url: '/schedule',
  },
  {
    id: 4,
    name: '쪽지함',
    url: '/message',
  },
  {
    id: 5,
    name: '내정보',
    url: '/myInfo',
  },
];

const HeaderNavigation = () => {
  const history = useHistory();

  const checkFocused = (pathname, url) => pathname.match(url);

  return (
    <HeaderNavigationBox>
      {lists.map(list => (
        <NavigationItem
          to={list.url}
          key={list.id}
          focused={checkFocused(history.location.pathname, list.url)}
        >
          {list.name}
        </NavigationItem>
      ))}
    </HeaderNavigationBox>
  );
};

export default HeaderNavigation;
