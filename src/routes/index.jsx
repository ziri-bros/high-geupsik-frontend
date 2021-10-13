import { Global } from '@emotion/react';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from '../page/Auth';
import NoMatchPage from '../page/NoMatch';
import reset from '../theme/reset';

const RootRoute = () => (
  <>
    <Global styles={reset} />
    <Switch>
      <Route path="/" component={Auth} exact />

      {/* 경로가 유효하지 않을 때 */}
      <Route path="*" component={NoMatchPage} exact />
    </Switch>
  </>
);

export default RootRoute;
