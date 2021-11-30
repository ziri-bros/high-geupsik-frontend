import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Comment from './Comment';
import CommentInput from './common/CommentInput';
import MoreButtonPop from './common/MoreButtonPop';
import { getLike, getPost, postLike } from '../lib/api/board';
import { getComments } from '../lib/api/comment';
import { parseTime } from '../utils';
import Cocomment from './Cocomment';

const PostMainBox = styled.div`
  overflow-y: auto;
`;

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
  margin-right: 20px;
`;

const LeftArrow = styled.div`
  width: 32px;
  height: 32px;
  margin-top: 16px;
  margin-left: -7px;
  img {
    width: 32px;
    height: 32px;
    cursor: pointer;
  }
`;

const PostMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 8px;
`;

const PostTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PostMainTitle = styled.div`
  font-size: 22px;
  line-height: 27px;
`;

const PostSubTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const PostSubTitle = styled.div`
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #626262;
  margin-right: 10px;
`;

const View = styled.div`
  width: 18px;
  height: 18px;
  margin-right: 5px;
  img {
    width: 18px;
    height: 18px;
  }
`;

const PostMoreButton = styled.div`
  width: 40px;
  height: 20px;
  background: #f3f3f3;
  border-radius: 3px;

  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 25px;
  }
  cursor: pointer;
`;

const PostContentsWrapper = styled.div`
  margin-top: 30px;
`;

const PostContents = styled.div`
  font-weight: normal;
  font-size: 16px;
  white-space: pre-line;
`;

const PostImages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    max-width: 420px;
    margin-top: 20px;
  }
`;

const PostCommentsWrapper = styled.div``;

const PostCommentsNumberWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 30px;
  padding-bottom: 20px;
  border-bottom: 2px solid #adadad;
`;

const PostCommentsIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const PostCommentsLikedNumber = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  font-size: 16px;
  img {
    margin-right: 5px;
    width: 30px;
    height: 30px;
  }
`;

const PostCommentsNumber = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  img {
    margin-right: 5px;
    width: 30px;
    height: 30px;
  }
`;

const PostLikedButton = styled.div`
  width: 85px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  color: ${props => (props.isLiked ? '#e27070' : '#626262')};
  font-weight: 500;
  font-size: 14px;

  border: 1px solid ${props => (props.isLiked ? '#e27070' : '#adadad')};

  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
  }
`;

const Post = ({ boardId }) => {
  const info = useSelector(({ userInfo }) => userInfo.info);
  const [morePopOff, setMorePopOff] = useState(false);
  const [data, setData] = useState(null);
  const [comments, setComments] = useState(null);
  const [like, setLike] = useState(null);
  const [editCommentValue, setEditCommentValue] = useState(null);
  const [commentParentId, setCommentParentId] = useState(null);

  const history = useHistory();

  const morePopOn = () => {
    setMorePopOff(!morePopOff);
  };

  const onGoBack = () => history.goBack();

  // 글쓴이인지 체크 한다. 글쓰인이면 true, 아니면 false
  const isMe = () => info.id === data.writerId;

  // 편집시 편집 댓글 정보 받아오기
  const getEditComment = editComment => {
    setEditCommentValue(editComment);
  };

  // 대댓글 작성시 parentId를 받아온다
  const getCommentParentId = parentId => {
    setCommentParentId(parentId);
  };

  const load = async () => {
    try {
      const postData = await getPost(boardId);
      setData(postData.data);

      const commentsData = await getComments(boardId);
      setComments(commentsData.data.content);

      const likeData = await getLike(boardId);
      setLike(likeData.data.likeFlag);
    } catch (e) {
      console.log(e);
    }
  };

  const onClickLoad = () => load();

  const onClickLikeBtn = async () => {
    try {
      await postLike(boardId);
      setLike(!like);
      load();
    } catch (e) {
      console.log(e);
    }
  };

  // 초기 load 렌더링
  useEffect(() => {
    load();
  }, []);

  return (
    <>
      {data && (
        <>
          {morePopOff && (
            <MoreButtonPop
              boardId={boardId}
              type="post"
              isMe={isMe()}
              morePopHandle={morePopOn}
            />
          )}
          <PostMainBox>
            <PostWrapper>
              <LeftArrow onClick={onGoBack}>
                <img src="/images/icons/left_arrow.png" alt="left_arrow" />
              </LeftArrow>

              <PostMainWrapper>
                <PostTitleWrapper>
                  <PostMainTitle>{data.title}</PostMainTitle>
                  <PostMoreButton onClick={morePopOn}>
                    <img src="/images/icons/more.png" alt="more" />
                  </PostMoreButton>
                </PostTitleWrapper>
                <PostSubTitleWrapper>
                  <PostSubTitle>{parseTime(data.createdDate)}</PostSubTitle>
                  <PostSubTitle>|</PostSubTitle>
                  <View>
                    <img src="/images/icons/view.png" alt="view" />
                  </View>
                  <PostSubTitle>123</PostSubTitle>
                </PostSubTitleWrapper>
              </PostMainWrapper>

              <PostContentsWrapper>
                <PostContents>{data.content}</PostContents>
                <PostImages>
                  {data.uploadFileDTOList.map(img => (
                    <img src={img.fileDownloadUri} alt={img.fileName} />
                  ))}
                </PostImages>
              </PostContentsWrapper>

              <PostCommentsWrapper>
                <PostCommentsNumberWrapper>
                  <PostCommentsIconWrapper>
                    <PostCommentsLikedNumber>
                      <img src="/images/icons/heart.png" alt="heart" />
                      {data.likeCount}
                    </PostCommentsLikedNumber>
                    <PostCommentsNumber>
                      <img src="/images/icons/chat.png" alt="comment" />
                      {data.commentCount}
                    </PostCommentsNumber>
                  </PostCommentsIconWrapper>
                  <PostLikedButton isLiked={like} onClick={onClickLikeBtn}>
                    {like ? (
                      <img src="/images/icons/filledHeart.png" alt="liked" />
                    ) : (
                      <img src="/images/icons/emptyHeart.png" alt="like" />
                    )}
                    좋아요
                  </PostLikedButton>
                </PostCommentsNumberWrapper>
                {comments &&
                  comments.map(comment =>
                    comment.parent ? (
                      <Comment
                        comment={comment}
                        boardId={boardId}
                        userId={info.id}
                        onClickLoad={onClickLoad}
                        getEditComment={getEditComment}
                        getCommentParentId={getCommentParentId}
                      />
                    ) : (
                      <Cocomment
                        cocomment={comment}
                        boardId={boardId}
                        userId={info.id}
                        onClickLoad={onClickLoad}
                        getEditComment={getEditComment}
                      />
                    ),
                  )}
              </PostCommentsWrapper>
            </PostWrapper>
            <CommentInput
              boardId={boardId}
              onClickLoad={onClickLoad}
              editCommentValue={editCommentValue}
              commentParentId={commentParentId}
            />
          </PostMainBox>
        </>
      )}
    </>
  );
};

Post.propTypes = {
  boardId: PropTypes.string.isRequired,
};

export default Post;
