import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider, useSelector } from 'react-redux';
import App from './App';
import rootReducer from './store';
import { getUserInfo } from './store/userInfo';
import { getCurrentUserInfo } from './lib/api/auth';

const store = createStore(rootReducer, composeWithDevTools());

function loadUser() {
  try {
    const user = localStorage.getItem('ACCESS_TOKEN');
    if (!user) return; // 사용자가 로그인이 안된 경우

    const loadAPI = async () => {
      const response = await getCurrentUserInfo();

      // 사용자가 ROLE_USER인 경우
      if (response.status === 200) {
        store.dispatch(getUserInfo(response.data.data));
      }
    };
    loadAPI();
  } catch (e) {
    console.log('localstorage is not working!');
  }
}
loadUser();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
