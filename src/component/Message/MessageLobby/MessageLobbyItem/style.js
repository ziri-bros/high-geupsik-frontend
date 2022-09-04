import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  box-sizing: border-box;

  padding: 15px 20px;

  width: 100%;
  height: 80px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 10px;

  border-bottom: 0.5px solid #828282;

  color: black;
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AnonymousName = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
`;

export const Date = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;

  color: #626262;
`;

export const ChatContent = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;

  width: 400px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  color: #4f4f4f;
`;

export const Notification = styled.div`
  width: 24px;
  height: 24px;

  border-radius: 50%;

  font-weight: 700;
  font-size: 13px;
  line-height: 16px;

  color: #ffffff;

  background: #e27070;

  display: flex;
  justify-content: center;
  align-items: center;
`;
