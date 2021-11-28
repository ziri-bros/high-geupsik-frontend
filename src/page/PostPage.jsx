import React from 'react';
import PropTypes from 'prop-types';
import BoardNaviagtion from '../component/common/BoardNavigation';
import Header from '../component/common/Header';
import HeaderNavigation from '../component/common/HeaderNavigation';
import Wrapper from '../component/common/Wrapper';
import Post from '../component/Post';

const PostPage = ({ boardId }) => (
  <Wrapper>
    <Header />
    <HeaderNavigation />
    <BoardNaviagtion />
    <Post boardId={14}></Post>
  </Wrapper>
);

export default PostPage;

PostPage.propTypes = {
  boardId: PropTypes.number.isRequired,
};
