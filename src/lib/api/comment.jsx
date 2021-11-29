import axios from 'axios';
import { API_BASE_URL } from '../../constants';

// 게시글의 boardId를 받아 댓글을 받아온다.
export const getComments = async boardId => {
  const response = await axios({
    url: `${API_BASE_URL}/boards/${boardId}/comments`,
    method: 'get',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
  return response.data;
};

// 게시글의 boardId, 댓글 정보인 commentReqDTO(content)를 받아 댓글을 단다.
export const postComments = async (boardId, commentReqDTO) => {
  await axios({
    url: `${API_BASE_URL}/boards/${boardId}/comments`,
    data: commentReqDTO,
    method: 'post',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
};

// 게시글의 boardId, 댓글의 commentId를 받아 댓글 삭제를 요청한다.
export const deleteComments = async (boardId, commentId) => {
  const response = await axios({
    url: `${API_BASE_URL}/boards/${boardId}/comments/${commentId}`,
    method: 'delete',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
  return response.data;
};

// 게시글의 boardId, 댓글 정보인 commentReqDTO(content), 대댓글을 달려는 댓글의 Id인 parentId를 받아 대댓글을 단다.
export const postCocomments = async (boardId, commentReqDTO, parentId) => {
  await axios({
    url: `${API_BASE_URL}/boards/${boardId}/comments/${parentId}`,
    data: commentReqDTO,
    method: 'post',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
};

// 수정하려는 댓글의 Id인 commentId, 수정한 댓글 정보인 commentReqDTO(content)를 받아 편집 요청을 한다.
export const putEditComments = async (commentId, commentReqDTO) => {
  await axios({
    url: `${API_BASE_URL}/comments/${commentId}`,
    data: commentReqDTO,
    method: 'put',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
};

// 댓글의 Id인 commentId를 입력하여 해당 댓글의 좋아요 갯수를 요청한다.
export const getCommentsLike = async commentId => {
  const response = await axios({
    url: `${API_BASE_URL}/comments/${commentId}/like`,
    method: 'get',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
  return response.data;
};

// 댓글의 Id인 commentId를 입력하여 댓글의 좋아요를 요청한다.
export const postCommentsLike = async commentId => {
  await axios({
    url: `${API_BASE_URL}/comments/${commentId}/like`,
    method: 'post',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
};
