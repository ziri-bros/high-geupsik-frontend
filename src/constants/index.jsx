export const API_BASE_URL = 'http://10.21.20.33:8080';
export const REDIRECT_URL = 'http://10.21.20.15:3000/oauth2/redirect';

export const KAKAO_AUTH_URL = `${API_BASE_URL}/oauth2/authorize/kakao?redirect_uri=${REDIRECT_URL}`;
export const NAVER_AUTH_URL = `${API_BASE_URL}/oauth2/authorize/naver?redirect_uri=${REDIRECT_URL}`;
export const GOOGLE_AUTH_URL = `${API_BASE_URL}/oauth2/authorize/google?redirect_uri=${REDIRECT_URL}`;
