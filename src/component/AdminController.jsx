import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { allowUserCard, deleteUserCard, getUserCardList } from '../lib/api/admin';

const AdminControllerWrapper = styled.div`
  border-top: 1px solid #5D6E1E;
  padding: 30px 20px 0;
`;

const Title = styled.div`
  font-size: 18px;
  color: #5D6E1E;
  font-weight: bold;
`;

const StudentInfoList = styled.div`
  margin-top: 20px;
`;

const StudentInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-top:1px solid gray;
  border-bottom: ${props => props.last && '1px solid gray'};
`;

const Text = styled.div`
  font-size: 15px;
  margin-right: 10px;

  /* 모바일용 폰트 크기 적용 */
  @media only screen and (max-width: 385px) {
    font-size: 10px;
  }
`;

const Button = styled.button`
  padding: 5px 10px;
  cursor: pointer;
  margin-right: 5px;

  /* 모바일용 폰트 크기 적용 */
  @media only screen and (max-width: 385px) {
    font-size: 10px;
    margin-right:0;
  }
  
  ${props => props.approve && css`
    background: #5d6e1e;
    color: white;
  `}

  ${props => props.cancel && css`
    background: white;
    border: 1px solid #5d6e1d;
    color: black;
  `}

  ${props => props.view && css`
    background: #ff8787;
    color: white;
  `}
`;

const BlackBackground = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DeleteModal = styled.div`
  background: white; 
  font-size: 14px; 
  font-weight : 500;
  color: #4f4f4f;
  border-radius: 5px;
  width: auto;
  height: auto;
  margin-bottom:50%;
`;

const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 30px;
  border-bottom: 1px solid #adadad;

  .stress{  
    margin-left: 3px;
    color: red;
    font-weight: bold;
  }

  img{
    width:80%;
    height:80%;
  }
`;

const ImgModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  >img{
    width: 400px;
    height: 300px;
  }

  /* 모바일용 폰트 크기 적용 */
  @media only screen and (max-width: 385px) {
    >img{
      width: 300px;
      height: 200px;
    }
  }
`;

const CloseIcon = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;

  img{
    background: white;
    width: 25px;
    height: 25px;
  }
`;

const ModalBtnWrapper = styled.div`
  display: flex;
  height: 42px;

  div:nth-of-type(1){
    border-right: 1px solid #adadad;
  }
`;

const ModalBtn = styled.div`
  color: #5D6E1E;
  width: 50%;
  height: 96%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const StudentInfo = ({ studentInfo, last, loadUserCardList }) => {
  const { email, username, studentCardImage, userId } = studentInfo;

  const [modalOn, setModalOn] = useState(false);
  const [imgViewOn, setImgViewOn] = useState(false);

  const onClickCancel = () => setModalOn('cancel');
  const onClickApprove = () => setModalOn('approve');
  const onClickView = () => setImgViewOn(!imgViewOn);
  const onCancel = () => setModalOn(false);

  const onCancelUserCard = async () => {
    try {
      await deleteUserCard(userId);
      loadUserCardList();
      setModalOn(false);
    } catch (e) {
      console.log(e);
    }
  };

  const onConfirmUserCard = async () => {
    try {
      await allowUserCard(userId);
      loadUserCardList();
      setModalOn(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <StudentInfoWrapper last={last}>
      <Text>{username}<span>({email})</span></Text>
      <Button onClick={onClickView} view>학생증 보기</Button>
      <Button onClick={onClickApprove} approve>승인</Button>
      <Button onClick={onClickCancel} cancel>거부</Button>
      {
        // 승인 & 거부 모달 창
        modalOn && (
        <BlackBackground>
          <DeleteModal>
            <ModalTitle>
              <div>{username}님의 학생증을 <span className="stress"> { modalOn === 'approve' ? '승인' : '거부'}</span>하시겠습니까?</div>
            </ModalTitle>
            <ModalBtnWrapper>
              {
                modalOn === 'approve' ? (
                  <>
                    <ModalBtn onClick={onCancel}>취소</ModalBtn>
                    <ModalBtn onClick={onConfirmUserCard}>확인</ModalBtn>
                  </>
                )
                  :
                  (
                    <>
                      <ModalBtn onClick={onCancel}>취소</ModalBtn>
                      <ModalBtn onClick={onCancelUserCard}>확인</ModalBtn>
                    </>
                  )
              }
            </ModalBtnWrapper>
          </DeleteModal>
        </BlackBackground>
        )
      }
      { // 학생증 보기 모달 창
        imgViewOn && (
          <BlackBackground>
            <DeleteModal>
              <ImgModal>
                <img src={studentCardImage} alt="이미지" />
                <CloseIcon onClick={onClickView}>
                  <img src="/images/icons/close.png" alt="close" />
                </CloseIcon>
              </ImgModal>
            </DeleteModal>
          </BlackBackground>
        )
      }
    </StudentInfoWrapper>
  );
};

const AdminController = () => {
  const [userList, setUserList] = useState(null);

  const loadUserCardList = async () => {
    const response = await getUserCardList();
    setUserList(response.data.content);
  };

  useEffect(() => {
    loadUserCardList();
  }, []);

  return (
    <AdminControllerWrapper>
      <Title>학생증 미 승인 리스트*</Title>
      <StudentInfoList>
        {
          userList && userList.map((user, index) => (
            <StudentInfo
              loadUserCardList={loadUserCardList}
              studentInfo={user}
              last={index === userList.length - 1}
            />
          ))
        }
      </StudentInfoList>
    </AdminControllerWrapper>
  );
};

StudentInfo.propTypes = {
  studentInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
  last: PropTypes.string.isRequired,
  loadUserCardList: PropTypes.func.isRequired,
};

export default AdminController;
