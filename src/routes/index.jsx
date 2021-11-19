import { Global } from '@emotion/react';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from '../page/Auth';
import Board from '../page/Board';
import NoMatchPage from '../page/NoMatch';
import RegisterUser from '../page/RegisterUser';
import reset from '../theme/reset';

const RootRoute = () => (
  <>
    <Global styles={reset} />
    <Switch>
      <Route path="/" exact>
        <Auth type="login" />
      </Route>
      <Route path="/signup" exact>
        <Auth type="signup" />
      </Route>
      <Route path="/register" component={RegisterUser} exact />
      <Route path="/board" component={Board} exact />

      {/* 경로가 유효하지 않을 때 */}
      <Route path="*" component={NoMatchPage} exact />
    </Switch>
  </>
);

export default RootRoute;
