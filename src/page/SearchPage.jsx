import React from 'react';
import { useHistory } from 'react-router-dom';

import Wrapper from '../component/common/Wrapper';
import Search from '../component/Search';

const SearchPage = () => (
  <>
    <Wrapper>
      <Search />
    </Wrapper>
  </>
);

export default SearchPage;
