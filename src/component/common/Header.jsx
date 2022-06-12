import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUserInfo } from '../../lib/api/auth';
import { getUserInfo } from '../../store/userInfo';
import { getNotifications } from '../../lib/api/notification';
import { getNotificationCount } from '../../store/notification';

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
  background: #868e96;
  color: white;
  font-size: 12px;
  height: 30px;
  font-weight: bold;
  padding: 0 10px;
  margin-top: 10px;
  cursor: pointer;
`;

const NotificationNumber = styled.div`
  position: absolute;

  margin-left: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 15px;
  height: 15px;

  background: #e27070;
  border-radius: 50%;

  font-weight: 700;
  font-size: 12px;
  line-height: 16px;

  color: #ffffff;
`;

const Header = ({ admin }) => {
  const info = useSelector(({ userInfo }) => userInfo.info);
  const notificationCount = useSelector(
    ({ notification }) => notification.notificationCount,
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const [remainNotificationCount, setRemainNotificationCount] =
    useState(notificationCount);

  useEffect(() => {
    const loadUser = () => {
      try {
        const user = localStorage.getItem('ACCESS_TOKEN');

        if (!user) {
          history.push('/');
          return;
        }

        const loadAPI = async () => {
          const response = await getCurrentUserInfo();

          // 사용자가 ROLE_USER인 경우
          if (response.status === 200) {
            dispatch(getUserInfo(response.data.data));
          }
        };

        if (!info) loadAPI();
      } catch (e) {
        console.log('localstorage is not working!');
      }
    };

    const loadNotifications = async () => {
      const response = await getNotifications();

      dispatch(getNotificationCount(response.data.remainNotificationCount));
    };

    loadUser();
    loadNotifications();
  }, []);

  useEffect(() => {
    setRemainNotificationCount(notificationCount);
  }, [notificationCount]);

  return (
    <HeaderStyle>
      <LogoBox to="/home">
        <img src="/images/logo/logo.png" alt="logo" />
      </LogoBox>
      {admin ? (
        <LogoutBtn>로그아웃</LogoutBtn>
      ) : (
        <IconBox>
          <IconItem>
            <Link to="/search">
              <img src="/images/icons/search.png" alt="search" />
            </Link>
          </IconItem>
          <IconItem>
            <Link to="/notification">
              {remainNotificationCount > 0 && (
                <NotificationNumber>
                  {remainNotificationCount}
                </NotificationNumber>
              )}
              <img src="/images/icons/bell.png" alt="search" />
            </Link>
          </IconItem>
        </IconBox>
      )}
    </HeaderStyle>
  );
};

Header.propTypes = {
  admin: PropTypes.string,
};

export default Header;
