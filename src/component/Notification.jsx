import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import { getNotifications } from '../lib/api/notification';
import NotificationItem from './common/NotificationItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 100%;
  background-color: white;
  overflow: auto;

  margin: 0 auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;

  margin: 16px 0 20px -7px;

  font-weight: 700;
  font-size: 19px;
  line-height: 24px;
  color: #4f4f4f;
`;

const LeftArrow = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 10px;

  img {
    width: 32px;
    height: 32px;
    cursor: pointer;
  }
`;

const NotificationNumber = styled.div`
  margin-left: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 23px;
  height: 23px;

  background: #e27070;
  border-radius: 4px;

  font-weight: 700;
  font-size: 18px;
  line-height: 16px;

  color: #ffffff;
`;

const BellWrapper = styled.div`
  margin-top: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-weight: 400;
  line-height: 19px;
  letter-spacing: -0.03em;

  color: #adadad;
`;

const Notification = () => {
  const history = useHistory();
  const [data, setData] = useState(null);
  const [remainNotificationCount, setRemainNotificationCount] = useState(null);

  // const {
  //   data: notificationData,
  //   error,
  //   ref,
  // } = useInfiniteScroll({
  //   key: '/my/notification',
  //   api: (_, pageIndex) => getNotifications(pageIndex),
  // });

  useEffect(() => {
    const loadNotifications = async () => {
      const response = await getNotifications();

      setData(response.data.notifications.content);
      setRemainNotificationCount(response.data.remainNotificationCount);
    };

    loadNotifications();
  }, []);

  return (
    data && (
      <Wrapper>
        <ArrowWrapper>
          <LeftArrow onClick={() => history.goBack()}>
            <img src="/images/icons/left_arrow.png" alt="left_arrow" />
          </LeftArrow>
          알림
          {remainNotificationCount !== 0 && (
            <NotificationNumber>{remainNotificationCount}</NotificationNumber>
          )}
        </ArrowWrapper>
        {data.length !== 0 ? (
          <>
            {data.map(item => (
              <NotificationItem item={item} />
            ))}
          </>
        ) : (
          <BellWrapper>
            <img src="/images/icons/bell_fill.png" alt="bell_fill" />
            알림이 없습니다.
          </BellWrapper>
        )}
      </Wrapper>
    )
  );
};

export default Notification;
