export const API_BASE_URL = 'http://10.21.20.21:8080';
// const API_BASE_URL =
// 'http://ec2-13-125-74-97.ap-northeast-2.compute.amazonaws.com:8080';
export const REDIRECT_URL = 'http://localhost:3000/oauth2/redirect';

export const KAKAO_AUTH_URL = `${API_BASE_URL}/oauth2/authorize/kakao?redirect_uri=${REDIRECT_URL}`;
export const NAVER_AUTH_URL = `${API_BASE_URL}/oauth2/authorize/naver?redirect_uri=${REDIRECT_URL}`;
export const GOOGLE_AUTH_URL = `${API_BASE_URL}/oauth2/authorize/google?redirect_uri=${REDIRECT_URL}`;

export const AREAS = {
  서울특별시: { region: 'SEOUL', code: 'B10' },
  부산광역시: { region: 'BUSAN', code: 'C10' },
  대구광역시: { region: 'DAEGU', code: 'D10' },
  인천광역시: { region: 'INCHEON', code: 'E10' },
  광주광역시: { region: 'GWANGJU', code: 'F10' },
  대전광역시: { region: 'DAEJEON', code: 'G10' },
  울산광역시: { region: 'ULSAN', code: 'H10' },
  세종특별시: { region: 'SEJONG', code: 'I10' },
  경기도: { region: 'GYEONGGI', code: 'J10' },
  강원도: { region: 'GANGWON', code: 'K10' },
  충청북도: { region: 'CHUNGBUK', code: 'M10' },
  충청남도: { region: 'CHUNGNAM', code: 'N10' },
  전라북도: { region: 'JEONBUK', code: 'P10' },
  전라남도: { region: 'JEONNAM', code: 'Q10' },
  경상북도: { region: 'GYEONGBUK', code: 'R10' },
  경상남도: { region: 'GYEONGNAM', code: 'S10' },
  제주특별자치도: { region: 'JEJU', code: 'T10' },
};

export const SCHOOL_CODES = {
  서울과학고등학교: '7010084',
  한성과학고등학교: '7010115',
  대원외국어고등학교: '7010143',
  한영외국어고등학교: '7010259',
};

export const GRADES = ['1학년', '2학년', '3학년'];
export const CLASSES = [...new Array(20).fill(0).map((_, idx) => `${idx + 1}반`)];

export const TIMETABLE_FRAME = [
  { name: '0교시', id: '0' },
  { name: '1교시', id: '1' },
  { name: '2교시', id: '2' },
  { name: '3교시', id: '3' },
  { name: '4교시', id: '4' },
  { name: '5교시', id: '5' },
  { name: '6교시', id: '6' },
  { name: '7교시', id: '7' },
  { name: '8교시', id: '8' },
];
