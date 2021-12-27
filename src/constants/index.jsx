const API_BASE_URL = 'http://10.21.20.10:8080';
// const API_BASE_URL =
//   'http://ec2-54-180-201-123.ap-northeast-2.compute.amazonaws.com:8080';
const REDIRECT_URL = 'http://localhost:3000/oauth2/redirect';

const KAKAO_AUTH_URL = `${API_BASE_URL}/oauth2/authorize/kakao?redirect_uri=${REDIRECT_URL}`;
const NAVER_AUTH_URL = `${API_BASE_URL}/oauth2/authorize/naver?redirect_uri=${REDIRECT_URL}`;
const GOOGLE_AUTH_URL = `${API_BASE_URL}/oauth2/authorize/google?redirect_uri=${REDIRECT_URL}`;

const areas = {
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

const schoolCodes = {
  서울과학고등학교: '7010084',
  한성과학고등학교: '7010115',
  대원외국어고등학교: '7010143',
  한영외국어고등학교: '7010259',
};

const grades = ['1학년', '2학년', '3학년'];
const classes = [...new Array(20).fill(0).map((_, idx) => `${idx + 1}반`)];

export {
  API_BASE_URL,
  REDIRECT_URL,
  KAKAO_AUTH_URL,
  NAVER_AUTH_URL,
  GOOGLE_AUTH_URL,
  areas,
  schoolCodes,
  grades,
  classes,
};
