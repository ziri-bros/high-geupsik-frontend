import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';

import { getBoards } from '../lib/api/search';

import SearchBar from './common/SearchBar';

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 464px;
  height: auto;
`;

function Search() {
  const [keywords, setKeywords] = useState(
    JSON.parse(localStorage.getItem('keywords') || '[]'),
  );
  const [searchedContent, setSearchedContent] = useState(null);
  const [searchedKeyword, setSearchedKeyword] = useState('');
  const info = useSelector(({ userInfo }) => userInfo.info);

  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords));
  }, [keywords]);

  useEffect(() => {
    const getBoardsApi = async () => {
      const boardReqDTO = {
        region: info.schoolResDTO.region,
        keyword: searchedKeyword,
      };

      try {
        const target = await getBoards(boardReqDTO);
        setSearchedContent(target);
      } catch (e) {
        console.log(e);
      }
    };
    getBoardsApi();
  }, [keywords, searchedKeyword]);

  const handleAddKeyword = text => {
    const newKeyword = {
      // 고유 id지정 원초적인 방법
      id: Date.now(),
      text,
    };
    setKeywords([newKeyword, ...keywords]);
  };

  const handleRemoveKeyword = id => {
    const nextKeyword = keywords.filter(thisKeyword => thisKeyword.id !== id);
    setKeywords(nextKeyword);
  };

  const handleClearKeywords = () => {
    setKeywords([]);
  };

  return (
    <div>
      <SearchWrapper>
        <SearchBar
          onAddKeyword={handleAddKeyword}
          keywords={keywords}
          onClearKeywords={handleClearKeywords}
          onRemoveKeyword={handleRemoveKeyword}
          searchedContent={searchedContent}
          setSearchedKeyword={setSearchedKeyword}
        />
      </SearchWrapper>
    </div>
  );
}

export default Search;
