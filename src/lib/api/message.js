import client from './client';

// 메시지 로비 방 리스트 불러오기
export const getMessageRooms = ({ page = 0, userId }) =>
  client
    .get('/rooms', { params: { page, userId } })
    .then(res => res.data.data.content);

// 메시지 방 생성
export const postMessageRoomMake = ({ boardId, receiverId }) =>
  client.post('/rooms', { boardId, receiverId });

// 메시지 목록 조회
export const getRoomMessages = ({ lastMessageId, roomId }) =>
  client
    .get(`/rooms/${roomId}`, { params: { lastMessageId } })
    .then(res => res.data);

// 메시지 룸 삭제
export const deleteMessageRoom = ({ roomId }) =>
  client.delete(`/rooms/${roomId}`);

// 메시지 보내기
export const postMessage = ({ roomId, content }) =>
  client.post(`/rooms/${roomId}/messages`, { content }).then(res => res.data);
