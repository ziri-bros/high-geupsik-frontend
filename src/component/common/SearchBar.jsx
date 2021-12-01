import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  margin: 20px 0 10px 0;
`;

const CancelBtn = styled.button`
  width: 60px;
  height: 30px;
  font-size: 13px;
  font-weight: 400;
  color: #5d6e1e;
  cursor: pointer;
  border: 0.5px solid #5d6e1e;
  border-radius: 30px;
`;

const RemoveIcon = styled.button`
  width: 60px;
  height: 30px;
  font-size: 13px;
  font-weight: 400;
  color: #5d6e1e;
  cursor: pointer;
  border: 0.5px solid #5d6e1e;
  border-radius: 30px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
`;

const Input = styled.input`
  display: flex;
  background-color: #fff;
  width: 100%;
  font-weight: 200;
  font-size: 15px;
  border-bottom: 1px solid #666;

  ${({ active }) =>
    active &&
    `
    padding-right: 25px; 
  `}
`;

function SearchBar({ onAddKeyword }) {
  const [keyword, setKeyword] = useState('');
  const history = useHistory();

  const handleKeyword = e => {
    setKeyword(e.target.value);
  };
  const handleEnter = e => {
    if (keyword && e.keyCode === 13) {
      onAddKeyword(keyword);
      setKeyword('');
    }
  };

  const handleClearKeyword = () => {
    setKeyword('');
  };

  const hasKeyword = !!keyword;

  return (
    <Container>
      <InputContainer>
        <Input
          placeholder=" 검색어 입력"
          maxLength="20"
          active={hasKeyword}
          value={keyword}
          onChange={handleKeyword}
          onKeyDown={handleEnter}
        />
        {!keyword ? (
          <CancelBtn onClick={history.goBack}>취소</CancelBtn>
        ) : (
          keyword && (
            <RemoveIcon onClick={handleClearKeyword}>지우기</RemoveIcon>
          )
        )}
      </InputContainer>
    </Container>
  );
}

SearchBar.propTypes = {
  onAddKeyword: PropTypes.func,
};

export default SearchBar;
