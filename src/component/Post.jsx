import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './common/CommentInput';

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
  margin-right: 20px;
`;

const LeftArrow = styled.div`
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
`;

const PostImages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 440px;
    height: 440px;
    margin-top: 20px;
  }
`;

const PostLikeButton = styled.div`
  margin-top: 20px;
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  color: #626262;
  font-weight: 500;
  font-size: 16px;

  border: 1px solid #adadad;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  cursor: pointer;

  img {
    width: 28px;
    height: 28px;
  }
`;

const PostLikedButton = styled.div`
  margin-top: 20px;
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  color: #e27070;
  font-weight: 500;
  font-size: 16px;

  border: 1px solid #adadad;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  cursor: pointer;

  img {
    width: 28px;
    height: 28px;
  }
`;

const PostCommentsWrapper = styled.div``;

const PostCommentsNumberWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid #adadad;
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

const Post = ({ data }) => (
  <>
    <PostWrapper>
      <LeftArrow>
        <img src="/images/icons/left_arrow.png" alt="left_arrow" />
      </LeftArrow>

      <PostMainWrapper>
        <PostTitleWrapper>
          <PostMainTitle>{data.title}</PostMainTitle>
          <PostMoreButton>
            <img src="/images/icons/more.png" alt="more" />
          </PostMoreButton>
        </PostTitleWrapper>
        <PostSubTitleWrapper>
          <PostSubTitle>{data.time}</PostSubTitle>
          <PostSubTitle>|</PostSubTitle>
          <View>
            <img src="/images/icons/view.png" alt="view" />
          </View>
          <PostSubTitle>{data.view}</PostSubTitle>
        </PostSubTitleWrapper>
      </PostMainWrapper>

      <PostContentsWrapper>
        <PostContents>{data.content}</PostContents>
        <PostImages>
          {data.images.map((img, index) => (
            <img src={img} alt={index} />
          ))}
        </PostImages>
        {data.liked ? (
          <PostLikedButton>
            <img src="/images/icons/filledHeart.png" alt="liked" />
            좋아요
          </PostLikedButton>
        ) : (
          <PostLikeButton>
            <img src="/images/icons/emptyHeart.png" alt="like" />
            좋아요
          </PostLikeButton>
        )}
      </PostContentsWrapper>

      <PostCommentsWrapper>
        <PostCommentsNumberWrapper>
          <PostCommentsLikedNumber>
            <img src="/images/icons/heart.png" alt="heart" />
            {data.like}
          </PostCommentsLikedNumber>
          <PostCommentsNumber>
            <img src="/images/icons/chat.png" alt="comment" />
            {data.totalCommentCount}
          </PostCommentsNumber>
        </PostCommentsNumberWrapper>
        {data.comments.map(comment => (
          <Comment comments={comment} />
        ))}

        {/* 이중 map 안되는 부분 */}
        {/* {data.comments.map(comment => (
          <Comment comments={comment} />
          {comment.cocomments.map((cocomment) => (
            <Cocomment cocomments={cocomment} />
          ))}
        ))} */}
      </PostCommentsWrapper>
    </PostWrapper>
    <CommentInput />
  </>
);

Post.propTypes = {
  data: PropTypes.objectOf,
};

export default Post;
