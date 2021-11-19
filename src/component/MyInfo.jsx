import styled from '@emotion/styled';
import React from 'react';

const MyInfoWrapper = styled.div`
  margin: 20px 10px;
`;

const MyInfoBox = styled.div`
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 12px 0 12px 19px;
  
  .where{
    display: flex;
    margin-top: 10px;
  }
`;

const Name = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #4f4f4f;
  
  
`;

const Text = styled.div`
  font-size: 13px;
  color: ${props => props.blur ? '#626262' : '#4f4f4f'};
  margin-right: ${props => props.area && '15px'};
`;

const MyInfo = () => (
  <MyInfoWrapper>
    <MyInfoBox>
      <Name>이름</Name>
      <Text blur>asdf1234@gmail.com</Text>
      <div className="where">
        <Text area>서울</Text>
        <Text>성신여자고등학교</Text>
      </div>

    </MyInfoBox>
  </MyInfoWrapper>
);

export default MyInfo;
