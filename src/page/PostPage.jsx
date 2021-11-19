import React from 'react';
import styled from '@emotion/styled';
import Comment from '../component/common/Comment';
import Cocomment from '../component/common/Cocomment';
import CommentInput from '../component/common/CommentInput';

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
    width: 320px;
    height: 320px;
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

const examplePost = {
  title: '안녕하세요',
  time: '21/7/23 11:34',
  view: '100',
  content: '점심메뉴 추천 좀 아이 시발',
  images: ['/images/icons/square.png', '/images/icons/square.png'],
  like: 5,
  liked: true,
  comments: [
    {
      name: '익명1',
      time: '21/7/23 11:50',
      content: '냉모밀 먹어라',
      goodCount: 0,
      cocomments: [],
    },
    {
      name: '익명2',
      time: '21/7/23 11:50',
      content: '치킨 먹어라',
      goodCount: 2,
      cocomments: [
        {
          name: '익명(글쓴이)',
          time: '21/7/23 11:50',
          content: '추천 고마워',
          goodCount: 0,
        },
        {
          name: '익명2',
          time: '21/7/23 11:50',
          content: '맛있게 먹어',
          goodCount: 0,
        },
      ],
    },
  ],
};

const PostPage = () => (
  <>
    <PostWrapper>
      <LeftArrow>
        <img src="/images/icons/left_arrow.png" alt="left_arrow" />
      </LeftArrow>

      <PostMainWrapper>
        <PostTitleWrapper>
          <PostMainTitle>{examplePost.title}</PostMainTitle>
          <PostMoreButton>
            <img src="/images/icons/more.png" alt="more" />
          </PostMoreButton>
        </PostTitleWrapper>
        <PostSubTitleWrapper>
          <PostSubTitle>{examplePost.time}</PostSubTitle>
          <PostSubTitle>|</PostSubTitle>
          <View>
            <img src="/images/icons/view.png" alt="view" />
          </View>
          <PostSubTitle>{examplePost.view}</PostSubTitle>
        </PostSubTitleWrapper>
      </PostMainWrapper>

      <PostContentsWrapper>
        <PostContents>{examplePost.content}</PostContents>
        <PostImages>
          {examplePost.images.map((img, index) => (
            <img src={img} alt={index} />
          ))}
        </PostImages>
        {examplePost.liked ? (
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
            {examplePost.like}
          </PostCommentsLikedNumber>
          <PostCommentsNumber>
            <img src="/images/icons/chat.png" alt="comment" />
            {examplePost.comments.length}
          </PostCommentsNumber>
        </PostCommentsNumberWrapper>
        {examplePost.comments.map(comment => (
          <Comment comments={comment} />
        ))}

        {/* 이중 map 안되는 부분 */}
        {/* {examplePost.comments.map(comment => (
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

export default PostPage;
