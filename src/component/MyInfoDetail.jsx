import styled from '@emotion/styled';
import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from './common/Button';

const RegisterUserInfoBox = styled.div`
  margin: 15px 0 0 22px;
`;

const Menu = styled.div`
  display: flex;

  img{
    width: 20px;
    height: 20px;
    margin-right: 21px;
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 15px;
`;

const InputWrapper = styled.div`
  margin: 0 0 25px 14px;
`;

const InputText = styled.div`
  font-size: 14px;
  color: ${props => props.blur ? '#a4a4a4' : '4f4f4f'};
  margin-bottom: ${props => !props.blur && '3px'};
  
  span{
    color: #E27070;
    font-size: 16px;
    margin-left: 5px;
  }
`;

const DropdownMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px  10px 0 ;
  border: 1px solid gray;
  width: ${props => props.local ? '152px' : '223px'};
  height: 35px;
  border-radius: 5px;
`;

const Icon = styled.div`
  img{
    width: 10px;
    height: 8px;
    cursor: pointer;
    margin-bottom: 2px;
  }
`;

const ImageWrapper = styled.div`
  display:flex;
  align-items: flex-start;
  font-size: 14px;
`;

const ImageText = styled.div`
  width: 220px;
  padding: 7px;
  border: none;
  margin-right: 10px;
  background: #f5f5f5;
  border: 1px solid #ebebeb;
  overflow: hidden;
`;

const ImageUploadButton = styled.div`
  border: none;
  background: #5d6e1e;
  color: white;
  padding: 7px 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const MyInfoDetail = ({ path }) => {
  const [imgData, setImgData] = useState(null);
  const [location, setLocation] = useState(null);
  const fileInput = useRef(null);

  // 초기 화면 렌더링 시, 경로를 통한 상태값 관리
  useEffect(() => {
    if (path === '/modify') setLocation('modify');
    if (path === '/register') setLocation('register');
  }, []);

  const onChange = (e) => setImgData(e.target.value);
  const onClickBtn = () => fileInput.current.click();

  return (
    <RegisterUserInfoBox>
      <Menu>
        <img src="/images/icons/left_arrow.png" alt="arrow" />
        <Title>{location === 'register' ? '회원가입' : '내 정보 수정'}</Title>
      </Menu>
      <InputWrapper>
        <InputText>지역<span>*</span></InputText>
        <DropdownMenu local="local">
          <InputText blur>지역 선택</InputText>
          <Icon>
            <img src="/images/icons/drop_down.png" alt="dropdown" />
          </Icon>
        </DropdownMenu>
      </InputWrapper>
      <InputWrapper>
        <InputText>재학 중인 고등학교<span>*</span></InputText>
        <DropdownMenu>
          <InputText blur>재학 중인 고등학교 선택</InputText>
          <Icon>
            <img src="/images/icons/drop_down.png" alt="dropdown" />
          </Icon>
        </DropdownMenu>
      </InputWrapper>
      {
        location === 'register' && (
          <InputWrapper>
            <InputText>학생증 첨부<span>*</span></InputText>
            <ImageWrapper>
              <input type="file" ref={fileInput} onChange={onChange} style={{ display: 'none' }} />
              <ImageText>{imgData || '파일 없음'}</ImageText>
              <ImageUploadButton onClick={onClickBtn}>학생증 첨부</ImageUploadButton>
            </ImageWrapper>
          </InputWrapper>
        )
      }
      {
        location === 'register' ?
          <Button footer>가입하기</Button> : <Button footer>저장하기</Button>
      }
    </RegisterUserInfoBox>
  );
};

MyInfoDetail.propTypes = {
  path: PropTypes.string.isRequired,
};

export default MyInfoDetail;
