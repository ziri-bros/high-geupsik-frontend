import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { Link, useHistory } from 'react-router-dom';

const BoardNavigationBox = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 0.5px solid #5d6e1e;
`;

const NavigationItem = styled(Link)`
  width: 50px;
  height: 30px;
  margin-left: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Noto Sans CJK KR, sans-serif;
  font-weight: 500;
  font-size: 14px;
  border: 1px solid #5d6e1e;
  border-radius: 10px;
  color: #626262;
  cursor: pointer;

  &:hover {
    font-weight: bold;
    background-color: #cbe54e;
  }

  ${props =>
    props.focused &&
    css`
      font-weight: bold;
      background-color: #cbe54e;
    `}
`;

const lists = [
  {
    id: 1,
    name: '전체',
    url: '/board',
  },
  {
    id: 2,
    name: '자유',
    url: '/board/free',
  },
  {
    id: 3,
    name: '정보',
    url: '/board/information',
  },
  {
    id: 4,
    name: '인기',
    url: '/board/hot',
  },
  {
    id: 5,
    name: '홍보',
    url: '/board/promotion',
  },
];

const BoardNaviagtion = ({ category }) => {
  const history = useHistory();
  const boardCategory = category && `/board/${category.toLowerCase()}`;

  return (
    <BoardNavigationBox>
      {lists.map(list => (
        <NavigationItem
          to={list.url}
          key={list.id}
          focused={
            list.url === history.location.pathname || list.url === boardCategory
          }
        >
          {list.name}
        </NavigationItem>
      ))}
    </BoardNavigationBox>
  );
};

BoardNaviagtion.propTypes = {
  category: PropTypes.string,
};

export default BoardNaviagtion;
