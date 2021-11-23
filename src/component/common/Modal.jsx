import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';

const BlackBackground = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
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
`;

const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 30px;
  border-bottom: 1px solid #adadad;
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

const Modal = ({ title, onCancel, onConfirm }) => (
  <BlackBackground>
    <DeleteModal>
      <ModalTitle>{title}</ModalTitle>
      <ModalBtnWrapper>
        <ModalBtn onClick={onCancel}>취소</ModalBtn>
        <ModalBtn onClick={onConfirm}>확인</ModalBtn>
      </ModalBtnWrapper>
    </DeleteModal>
  </BlackBackground>
);

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default Modal;
