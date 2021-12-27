import { React, useState } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import BoardNaviagtion from '../component/common/BoardNavigation';
import Header from '../component/common/Header';
import HeaderNavigation from '../component/common/HeaderNavigation';
import HeaderWrapper from '../component/common/HeaderWrapper';
import Wrapper from '../component/common/Wrapper';
import Post from '../component/Post';

const PostPage = ({ match }) => {
  const { boardId } = match.params;
  const [category, setCategory] = useState('');

  return (
    <Wrapper>
      <HeaderWrapper>
        <Header />
        <HeaderNavigation />
        <BoardNaviagtion category={category} />
      </HeaderWrapper>
      <Post boardId={boardId} setCategory={setCategory}></Post>
    </Wrapper>
  );
};

export default PostPage;

PostPage.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};
