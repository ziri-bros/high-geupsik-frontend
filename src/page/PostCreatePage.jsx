import React from 'react';
import Header from '../component/common/Header';
import HeaderNavigation from '../component/common/HeaderNavigation';
import Wrapper from '../component/common/Wrapper';
import PostCreate from '../component/PostCreate';

const PostCreatePage = () => (
  <Wrapper>
    <Header />
    <HeaderNavigation />
    <PostCreate />
  </Wrapper>
);

export default PostCreatePage;
