import { Global } from '@emotion/react';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthPage from '../page/AuthPage';
import BoardPage from '../page/BoardPage';
import MyInfoPage from '../page/MyInfoPage';
import NoMatchPage from '../page/NoMatchPage';
import MyInfoDetailPage from '../page/MyInfoDetailPage';
import reset from '../theme/reset';
import SchedulePage from '../page/SchedulePage';
import PostPage from '../page/PostPage';
import PostCreatePage from '../page/PostCreatePage';
import AllowPage from '../page/AllowPage';
import AdminPage from '../page/AdminPage';
import Home from '../page/Home';

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
      <Route path="/home" component={Home} exact />
      <Route
        path={['/register', '/modify']}
        component={MyInfoDetailPage}
        exact
      />
      <Route
        path={[
          '/board',
          '/board/free',
          '/board/information',
          '/board/hot',
          '/board/promotion',
        ]}
        component={BoardPage}
        exact
      />
      <Route path="/myInfo" component={MyInfoPage} exact />
      <Route path="/schedule" component={SchedulePage} exact />
      <Route path="/allow" component={AllowPage} exact />

      {/* 관리자 전용 페이지 */}
      <Route path="/admin" component={AdminPage} exact />

      {/* 경로가 유효하지 않을 때 */}
      <Route path="*" component={NoMatchPage} exact />
    </Switch>
  </>
);

export default RootRoute;
