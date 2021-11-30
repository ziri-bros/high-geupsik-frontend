import styled from '@emotion/styled';
import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from './common/Button';
import DropDown from './common/DropDown';
import { getCurrentUserInfo, imageUploader, signUp, updateUserInfo } from '../lib/api/auth';
import Modal from './common/Modal';
import { getUserInfo } from '../store/userInfo';
import { areas, classes, grades, schoolCodes } from '../constants';

const RegisterUserInfoBox = styled.div`
  margin: 22px 0 0 22px;

  display: flex;
  flex-direction: column;
  height: 100%;
  width:100%;
  overflow-y: auto; 
`;

const Menu = styled.div`
  display: flex;

  img {
    width: 20px;
    height: 20px;
    margin-right: 21px;
  }
`;

const Icon = styled.div`
  cursor: pointer;
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
  color: ${props => (props.blur ? '#a4a4a4' : '4f4f4f')};
  margin-bottom: ${props => !props.blur && '3px'};

  span {
    color: #e27070;
    font-size: 16px;
    margin-left: 5px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: flex-end;
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
  const [area, setArea] = useState(null);
  const [schoolName, setSchoolName] = useState(null);
  const [grade, setGrade] = useState(null);
  const [classNum, setClassNum] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [modalOn, setModalOn] = useState(true);

  const fileInput = useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();

  let defaultArea = '지역 선택';
  let defaultSchool = '재학 중인 고등학교 선택';
  let defaultGrade = '학년 선택';
  let defaultClass = '분반 선택';

  const info = useSelector(({ userInfo }) => userInfo.info);

  if (info) {
    const idx = Object.values(areas).findIndex(item => info.schoolDTO.region === item.region);
    defaultArea = Object.keys(areas)[idx];
    defaultSchool = info.schoolDTO.name;
    defaultGrade = grades[info.grade - 1];
    defaultClass = classes[info.classNum - 1];
  }

  useEffect(() => {
    if (info) {
      setArea(defaultArea);
      setSchoolName(defaultSchool);
      setGrade(defaultGrade);
      setClassNum(defaultClass);
    }
  }, [info]);

  // 초기 화면 렌더링 시, 경로를 통한 상태값 관리
  useEffect(() => {
    if (path === '/modify') setLocation('modify');
    if (path === '/register') setLocation('register');
  }, []);

  const onClickModalBtn = () => setModalOn(!modalOn);
  const onClickImgBtn = () => fileInput.current.click();
  const onMoveBack = () => history.push('/myInfo');
  const onChangeArea = (value) => setArea(value);
  const onChangeSchoolName = (value) => setSchoolName(value);
  const onChangeGrade = (value) => setGrade(value);
  const onChangeClassNum = (value) => setClassNum(value);

  const onChangeImage = async (e) => {
    if (e.target.files[0] !== null) {
      const currentImgUrl = URL.createObjectURL(e.target.files[0]);
      setImgData(currentImgUrl);

      const formData = new FormData();
      formData.append('imageList', e.target.files[0]);
      const response = await imageUploader(formData);
      setImgUrl(response.data[0].fileDownloadUri);
    }
  };

  const onClickSubmit = async () => {
    if (!area || !schoolName || !imgUrl || !grade || !classNum) {
      setModalOn(false);
      return;
    }

    const gradeValue = grades.findIndex(value => value === grade) + 1;
    const classValue = classes.findIndex(value => value === classNum) + 1;

    const userReqDTO = {
      studentCardDTO: {
        grade: gradeValue,
        classNum: classValue,
        studentCardImage: imgUrl,
      },
      schoolDTO: {
        code: schoolCodes[schoolName],
        name: schoolName,
        region: areas[area].region,
        regionCode: areas[area].code,
      },
    };

    try {
      await signUp(userReqDTO);
      history.push('/allow');
    } catch (e) {
      console.log('error', e);
    }
  };

  const onClickUpdate = async () => {
    if (!imgUrl) {
      setModalOn(false);
      return;
    }

    const schoolDTO = {
      code: schoolCodes[schoolName],
      name: schoolName,
      region: areas[area].region,
      regionCode: areas[area].code,
    };

    try {
      await updateUserInfo(schoolDTO);

      const loadAPI = async () => {
        const response = await getCurrentUserInfo();
        dispatch(getUserInfo(response.data.data));
      };
      loadAPI();

      history.push('/myInfo');
    } catch (e) {
      console.log('error', e);
    }
  };

  return (
    <RegisterUserInfoBox>
      <Menu>
        {location === 'register' ? (
          <img src="/images/icons/right_arrow.png" alt="arrow" />
        ) : (
          <Icon onClick={onMoveBack}>
            <img src="/images/icons/left_arrow.png" alt="arrow" />
          </Icon>
        )}
        <Title>{location === 'register' ? '회원가입' : '내 정보 수정'}</Title>
      </Menu>
      <InputWrapper>
        <InputText>지역<span>*</span></InputText>
        <DropDown
          name={defaultArea}
          list={Object.keys(areas)}
          onChangeSelected={onChangeArea}
          narrow
        />
      </InputWrapper>
      <InputWrapper>
        <InputText>재학 중인 고등학교<span>*</span></InputText>
        <DropDown
          name={defaultSchool}
          list={Object.keys(schoolCodes)}
          onChangeSelected={onChangeSchoolName}
          narrow
          school
        />
      </InputWrapper>
      <InputWrapper>
        <InputText>학년<span>*</span></InputText>
        <DropDown
          name={defaultGrade}
          list={grades}
          onChangeSelected={onChangeGrade}
          narrow
        />
      </InputWrapper>
      <InputWrapper>
        <InputText>반<span>*</span></InputText>
        <DropDown
          name={defaultClass}
          list={classes}
          onChangeSelected={onChangeClassNum}
          narrow
        />
      </InputWrapper>
      <InputWrapper>
        <InputText>학생증 첨부<span>*</span></InputText>
        <ImageWrapper>
          <input type="file" ref={fileInput} onChange={onChangeImage} style={{ display: 'none' }} />
          <ImageText>{imgData || '파일 없음'}</ImageText>
          <ImageUploadButton onClick={onClickImgBtn}>학생증 첨부</ImageUploadButton>
        </ImageWrapper>
      </InputWrapper>
      {
        location === 'register' ?
          <Button onClick={onClickSubmit} infoBtn>가입하기</Button>
          : <Button onClick={onClickUpdate} infoBtn>저장하기</Button>
      }
      {
        !modalOn && <Modal title="모든 정보를 입력해주세요." onConfirm={onClickModalBtn} single />
      }
    </RegisterUserInfoBox>
  );
};

MyInfoDetail.propTypes = {
  path: PropTypes.string.isRequired,
};

export default MyInfoDetail;
