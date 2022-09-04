import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getNotifications, putNotifications } from '../../lib/api/notification';
import { getNotificationCount } from '../../store/notification';

const Wrapper = styled.div`
  width: 99%;
  min-width: 300px;
  max-width: 460px;
  height: 90px;

  margin-bottom: 10px;

  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;

  background: ${props => props.readFlag && 'rgba(0, 0, 0, 0.1)'};

  :hover {
    ${props => !props.readFlag && 'background-color: #f4ffc1'};
  }
`;

const IconWrapper = styled.div`
  margin-left: 15px;

  img {
    width: 40px;
    height: 40px;
  }
`;

const Container = styled.div`
  margin-left: 15px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;

  color: #000000;

  margin-bottom: 10px;
`;

const Content = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

  width: 360px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  color: #000000;
`;

const NotificationItem = ({ item }) => {
  const dispatch = useDispatch();

  // 클릭하면 알림 읽힘
  const onClickNotificationItem = async () => {
    await putNotifications(item.notificationId);

    const response = await getNotifications();

    dispatch(getNotificationCount(response.data.remainNotificationCount));
  };

  const getNotificationKind = kind => {
    if (kind === 'COMMENT') {
      return '댓글';
    }

    if (kind === 'REPLY') {
      return '대댓글';
    }

    return '메시지';
  };

  return (
    <Link to={`/boards/${item.boardId}`} onClick={onClickNotificationItem}>
      <Wrapper readFlag={item.readFlag}>
        <IconWrapper>
          <img src="/images/icons/comment-green.png" alt="comment" />
        </IconWrapper>
        <Container>
          <Title>{getNotificationKind(item.notificationType)}</Title>
          <Content>
            {`[익명님의 ${getNotificationKind(item.notificationType)}] : ${
              item.content
            }`}
          </Content>
        </Container>
      </Wrapper>
    </Link>
  );
};

NotificationItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default NotificationItem;
