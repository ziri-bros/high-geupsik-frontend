/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import History from './History';

import SearchedContentsComponent from './SearchedContentsComponent';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

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

const SearchModal = styled.div`
  position: absolute;
  display: flex;
  top: 50px;

  width: 365px;
  height: 400px;

  margin-right: 50px;

  border: 1px solid grey;
  background-color: white;
`;

const SearchedContentsContainer = styled.div`
  display: flex;

  width: 100%;
`;

function SearchBar({
  onAddKeyword,
  keywords,
  onClearKeywords,
  onRemoveKeyword,
  searchedContent,
  setSearchedKeyword,
}) {
  const modalRef = useRef('');

  const [keyword, setKeyword] = useState('');
  const [searchModal, setSearchModal] = useState(false);

  const history = useHistory();

  const handleKeyword = e => {
    setKeyword(e.target.value);
  };
  const handleEnter = e => {
    if (keyword && e.keyCode === 13) {
      onAddKeyword(keyword);
      setKeyword('');
      setSearchModal(false);
      setSearchedKeyword(keyword);
    }
  };

  const handleClearKeyword = () => {
    setKeyword('');
  };

  const hasKeyword = !!keyword;

  useEffect(() => {
    function handleClickOutside(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setSearchModal(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalRef]);

  return (
    <>
      <Container>
        <InputContainer ref={modalRef}>
          <Input
            placeholder=" 검색어 입력"
            maxLength="20"
            active={hasKeyword}
            value={keyword}
            onChange={handleKeyword}
            onKeyDown={handleEnter}
            onClick={() => {
              setSearchModal(true);
            }}
          />
          {searchModal && (
            <SearchModal>
              <History
                keywords={keywords}
                onClearKeywords={onClearKeywords}
                onRemoveKeyword={onRemoveKeyword}
                setSearchModal={setSearchModal}
                setSearchedKeyword={setSearchedKeyword}
              />
            </SearchModal>
          )}
          {!keyword ? (
            <CancelBtn onClick={history.goBack}>취소</CancelBtn>
          ) : (
            keyword && (
              <RemoveIcon onClick={handleClearKeyword}>지우기</RemoveIcon>
            )
          )}
        </InputContainer>
        {searchedContent && (
          <SearchedContentsContainer>
            <SearchedContentsComponent elem={searchedContent} />
          </SearchedContentsContainer>
        )}
      </Container>
    </>
  );
}

SearchBar.propTypes = {
  onAddKeyword: PropTypes.func,
};

export default SearchBar;
