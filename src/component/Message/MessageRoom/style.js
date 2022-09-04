import styled from '@emotion/styled';

export const Container = styled.section`
  position: relative;

  max-height: 83%;
`;

export const FixedHeader = styled.div`
  position: sticky;

  padding: 0 20px;

  width: 100%;
  height: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RoomName = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;

  color: #4f4f4f;
`;

export const LeftArrow = styled.div`
  width: 32px;
  height: 32px;

  img {
    width: 32px;
    height: 32px;
    cursor: pointer;
  }
`;

export const MoreButton = styled.div`
  width: 40px;
  height: 20px;
  border-radius: 3px;

  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 25px;
  }
  cursor: pointer;
`;

export const ContentContainer = styled.div`
  max-height: 80%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MessageInputWrapper = styled.div`
  position: absolute;
  bottom: 0;

  margin-top: 20px;
  background: #f3f3f3;
  width: 100%;
  max-width: 477px;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 90%;
  height: 40px;
  background: #ffffff;
  border-radius: 5px;
  padding: 0 10px;
  margin-left: 15px;

  font-weight: normal;
  font-size: 14px;

  ::placeholder {
    color: #828282;
    font-weight: normal;
    font-size: 14px;
  }
`;

export const SendButton = styled.div`
  cursor: pointer;
  margin: 3px 0 0 5px;

  img {
    width: 32px;
    height: 32px;
  }
`;

export const MessagesContainer = styled.div`
  padding: 0 30px;
  min-height: 575px;

  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 10px;

  overflow-y: auto;
`;

export const OpponentMessageContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;

  gap: 10px;
`;

export const OpponentMessageWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  gap: 10px;
`;

export const OpponentMessageContent = styled.div`
  box-sizing: border-box;

  font-weight: 400;
  font-size: 13px;
  line-height: 19px;

  background: #f4ffc1;
  border-radius: 5px;

  padding: 5px 15px;

  color: black;
`;

export const OpponentMessageTime = styled.div`
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;

  color: #626262;
`;

export const MyMessageContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;

  gap: 10px;
`;

export const MyMessageWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  gap: 10px;
`;

export const MyMessageContent = styled.div`
  box-sizing: border-box;

  font-weight: 400;
  font-size: 13px;
  line-height: 19px;

  background: #8bcd00;
  border-radius: 5px;

  padding: 5px 15px;

  color: white;
`;

export const MyMessageTime = styled.div`
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;

  color: #626262;
`;
