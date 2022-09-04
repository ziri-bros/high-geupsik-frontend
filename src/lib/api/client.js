import axios from 'axios';

export const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const client = axios.create();
const ACCESS_TOKEN = `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`;

client.defaults.baseURL = BASE_URL;
client.defaults.headers.Authorization = ACCESS_TOKEN;
client.defaults.withCredentials = true;

export default client;
