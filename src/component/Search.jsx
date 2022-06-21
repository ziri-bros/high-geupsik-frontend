import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords));
  }, [keywords]);

  useEffect(() => {
    const getBoardsApi = async () => {
      const boardReqDTO = {
        keyword: keywords[0].text,
      };

      try {
        const response = await getBoards(boardReqDTO);
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    };
    getBoardsApi();
  }, [keywords[0]]);

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
        />
      </SearchWrapper>
    </div>
  );
}

export default Search;
