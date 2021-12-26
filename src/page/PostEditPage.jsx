import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import BoardNaviagtion from '../component/common/BoardNavigation';
import Header from '../component/common/Header';
import HeaderNavigation from '../component/common/HeaderNavigation';
import HeaderWrapper from '../component/common/HeaderWrapper';
import Wrapper from '../component/common/Wrapper';
import PostEdit from '../component/PostEdit';

const PostEditPage = ({ match }) => {
  const { boardId } = match.params;
  return (
    <Wrapper>
      <HeaderWrapper>
        <Header />
        <HeaderNavigation />
      </HeaderWrapper>
      <BoardNaviagtion />
      <PostEdit boardId={boardId}></PostEdit>
    </Wrapper>
  );
};

export default PostEditPage;

PostEditPage.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};
