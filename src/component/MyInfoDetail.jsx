import styled from '@emotion/styled';
import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  imageUploader,
  signUp,
  updateUserInfo,
  getSchoolByRegion,
} from '../lib/api/auth';

import { AREAS, CLASSES, GRADES } from '../constants';

import Button from './common/Button';
import DropDown from './common/DropDown';
import Modal from './common/Modal';

const RegisterUserInfoBox = styled.div`
  margin: 22px 0 0 22px;

  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
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
  width: 300px;
  padding: 7px;
  border: none;
  margin-right: 10px;
  background: #f5f5f5;
  border: 1px solid #ebebeb;
  overflow: hidden;

  @media only screen and (max-width: 385px) {
    width: 210px;
  }
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
    const idx = Object.values(AREAS).findIndex(
      item => info.schoolResDTO.regionCode === item.code,
    );
    defaultArea = Object.keys(AREAS)[idx];
    defaultSchool = info.schoolResDTO.name;
    defaultGrade = GRADES[info.grade - 1];
    defaultClass = CLASSES[info.classNum - 1];
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
    if (path === '/register' && localStorage.getItem('ACCESS_TOKEN')) {
      setLocation('register');
    }
    if (path === '/register' && !localStorage.getItem('ACCESS_TOKEN')) {
      alert('비정상적인 경로입니다.');
      history.push('/home');
    }
  }, []);

  const onClickModalBtn = () => setModalOn(!modalOn);
  const onClickImgBtn = () => fileInput.current.click();
  const onMoveBack = () => history.push('/myInfo');
  const onChangeArea = value => setArea(value);
  const onChangeSchoolName = value => setSchoolName(value);
  const onChangeGrade = value => setGrade(value);
  const onChangeClassNum = value => setClassNum(value);

  const onChangeImage = async e => {
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

    const gradeValue = GRADES.findIndex(value => value === grade) + 1;
    const classValue = CLASSES.findIndex(value => value === classNum) + 1;

    const userReqDTO = {
      classNum: String(classValue),
      grade: String(gradeValue),
      region: area,
      schoolName,
      studentCardImage: imgUrl,
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
    const gradeValue = GRADES.findIndex(value => value === grade) + 1;
    const classValue = CLASSES.findIndex(value => value === classNum) + 1;

    const userReqDTO = {
      classNum: String(classValue),
      grade: String(gradeValue),
      region: area,
      schoolName,
      studentCardImage: imgUrl,
    };

    try {
      await updateUserInfo(userReqDTO);

      localStorage.removeItem('ACCESS_TOKEN');
      history.push('/');
    } catch (e) {
      console.log('error', e);
    }
  };

  const [highSchoolArr, setHighSchoolArr] = useState([]);
  useEffect(() => {
    const matchSchoolByRegion = async req => {
      try {
        const response = await getSchoolByRegion(req);
        const TMP_ARR = [];
        response.data.data.map(v => TMP_ARR.push(v.name));
        setHighSchoolArr(TMP_ARR);
      } catch (e) {
        console.log(e);
      }
    };
    matchSchoolByRegion(area);
  }, [area]);

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
        <InputText>
          지역<span>*</span>
        </InputText>
        <DropDown
          name={defaultArea}
          list={Object.keys(AREAS)}
          onChangeSelected={onChangeArea}
          narrow
        />
      </InputWrapper>
      <InputWrapper>
        <InputText>
          재학 중인 고등학교<span>*</span>
        </InputText>
        <DropDown
          name={defaultSchool}
          list={highSchoolArr}
          onChangeSelected={onChangeSchoolName}
          narrow
          school
        />
      </InputWrapper>
      <InputWrapper>
        <InputText>
          학년<span>*</span>
        </InputText>
        <DropDown
          name={defaultGrade}
          list={GRADES}
          onChangeSelected={onChangeGrade}
          narrow
        />
      </InputWrapper>
      <InputWrapper>
        <InputText>
          반<span>*</span>
        </InputText>
        <DropDown
          name={defaultClass}
          list={CLASSES}
          onChangeSelected={onChangeClassNum}
          narrow
        />
      </InputWrapper>
      <InputWrapper>
        <InputText>
          학생증 첨부<span>*</span>
        </InputText>
        <ImageWrapper>
          <input
            type="file"
            ref={fileInput}
            onChange={onChangeImage}
            style={{ display: 'none' }}
          />
          <ImageText>{imgData || '파일 없음'}</ImageText>
          <ImageUploadButton onClick={onClickImgBtn}>
            학생증 첨부
          </ImageUploadButton>
        </ImageWrapper>
      </InputWrapper>
      {location === 'register' ? (
        <Button onClick={onClickSubmit} infoBtn>
          가입하기
        </Button>
      ) : (
        <Button onClick={onClickUpdate} infoBtn>
          저장하기
        </Button>
      )}
      {!modalOn && (
        <Modal
          title="모든 정보를 입력해주세요."
          onConfirm={onClickModalBtn}
          single
        />
      )}
    </RegisterUserInfoBox>
  );
};

MyInfoDetail.propTypes = {
  path: PropTypes.string.isRequired,
};

export default MyInfoDetail;
