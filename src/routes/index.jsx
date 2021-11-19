import { Global } from '@emotion/react';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthPage from '../page/AuthPage';
import Board from '../page/Board';
import MyInfoPage from '../page/MyInfoPage';
import NoMatchPage from '../page/NoMatchPage';
import RegisterUserPage from '../page/RegisterUserPage';
import reset from '../theme/reset';

const RootRoute = () => (
  <>
    <Global styles={reset} />
    <Switch>
      <Route path="/" exact>
        <AuthPage type="login" />
      </Route>
      <Route path="/signup" exact>
        <AuthPage type="signup" />
      </Route>
      <Route path="/register" component={RegisterUserPage} exact />
      <Route path="/board" component={Board} exact />
      <Route path="/myInfo" component={MyInfoPage} exact />

      {/* 경로가 유효하지 않을 때 */}
      <Route path="*" component={NoMatchPage} exact />
    </Switch>
  </>
);

export default RootRoute;
