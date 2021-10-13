import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../component/Main';
import NoMatchPage from '../page/noMatch';

const RootRoute = () => (
  <>
    <Switch>
      <Route path="/" component={Main} exact />

      {/* 경로가 유효하지 않을 때 */}
      <Route path="*" component={NoMatchPage} exact />
    </Switch>
  </>
);

export default RootRoute;
