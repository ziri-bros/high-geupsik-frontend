import axios from 'axios';
import { API_BASE_URL } from '../../constants';

export const getBoardList = async (category, pageNumber = 1, region) => {
  const response = await axios({
    url: `${API_BASE_URL}/boards?category=${category}&page=${pageNumber}&region=${region}`,
    method: 'get',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
  return response.data;
};

// 게시글 등록시 boardReqDTO에 (category, content, title, uploadFileDTOList) 필요.
// uploadFileDTOList에는 배열로 객체에(fileDownloadUri, fileName) 필요.
// 응답으로 게시글Id를 받아서 자동으로 내가 쓴 상세게시글로 이동 시킨다.
export const postNewPost = async boardReqDTO => {
  const response = await axios({
    url: `${API_BASE_URL}/boards`,
    data: boardReqDTO,
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
  return response.data;
};

// 게시글 조회를 게시글ID를 통해 조회한다.
export const getPost = async boardId => {
  const response = await axios({
    url: `${API_BASE_URL}/boards/${boardId}`,
    method: 'get',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
  return response.data;
};

// 게시글 id를 통해서 편집 전 게시글 정보를 불러온다
// reponse 받아서 글쓴이 id와 맞는지 확인하고 맞을때만 수정할 수 있게 한다.
export const getEditPost = async boardId => {
  const response = await axios({
    url: `${API_BASE_URL}/boards/${boardId}/edit`,
    method: 'get',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
  return response.data;
};

// 기존 게시글 수정을 요청할때. 게시글 수정되면 바꾼 게시글로 이동시킨다.
export const putEditPost = async (boardId, boardReqDTO) => {
  const response = await axios({
    url: `${API_BASE_URL}/boards/${boardId}`,
    data: boardReqDTO,
    method: 'put',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
  return response.data;
};

// 게시글 id를 통해서 게시글 삭제를 요청한다.
export const deletePost = async boardId => {
  await axios({
    url: `${API_BASE_URL}/boards/${boardId}`,
    method: 'delete',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
};

// 게시글 좋아요 버튼을 누를 시 boardId 받아서 요청한다.
// 좋아요 취소할때도 똑같이 요청하면 된다.
// return response.success true 이면 버튼색깔 바꿔주자.
export const postLike = async boardId => {
  const response = await axios({
    url: `${API_BASE_URL}/boards/${boardId}/like`,
    method: 'post',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
  return response.success;
};

// 내가 쓴 게시글 리스트 받아오기
export const getMyPostList = async () => {
  const response = await axios({
    url: `${API_BASE_URL}/boards/my`,
    method: 'get',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
  return response.data;
};
