import axios from 'axios';

export const getBoardList = async ({
  category = '',
  page = 0,
  region = '',
}) => {
  let urls = `${process.env.REACT_APP_API_BASE_URL}/boards?category=${category}&region=${region}&page=${page}`;

  if (category === 'HOT') {
    urls = `${process.env.REACT_APP_API_BASE_URL}/boards?region=${region}&page=${page}&likeCount=3`;
  }

  const response = await axios({
    url: urls,
    method: 'get',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });

  return [...response.data.data.content];
};

// 게시글 등록시 boardReqDTO에 (category, content, title, uploadFileDTOList) 필요.
// uploadFileDTOList에는 배열로 객체에(fileDownloadUri, fileName) 필요.
// 응답으로 게시글Id를 받아서 자동으로 내가 쓴 상세게시글로 이동 시킨다.
export const postNewPost = async boardReqDTO => {
  const response = await axios({
    url: `${process.env.REACT_APP_API_BASE_URL}/boards`,
    data: boardReqDTO,
    method: 'post',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
  return response.data;
};

// 게시글 조회를 게시글ID를 통해 조회한다.
export const getPost = async boardId => {
  const response = await axios({
    url: `${process.env.REACT_APP_API_BASE_URL}/boards/${boardId}`,
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
    url: `${process.env.REACT_APP_API_BASE_URL}/boards/${boardId}`,
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
    url: `${process.env.REACT_APP_API_BASE_URL}/boards/${boardId}`,
    method: 'delete',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
};

// 게시글 좋아요 버튼을 누를 시 boardId 받아서 요청한다.
// 좋아요 취소할때도 똑같이 요청하면 된다.
export const postLike = async boardId => {
  await axios({
    url: `${process.env.REACT_APP_API_BASE_URL}/boards/${boardId}/likes`,
    method: 'post',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
};

// 내가 쓴 게시글 리스트 받아오기
export const getMyPostList = async (page = 0) => {
  const response = await axios({
    url: `${process.env.REACT_APP_API_BASE_URL}/boards/my?page=${page}`,
    method: 'get',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
  return [...response.data.data.content];
};
