import React from 'react';
import { Redirect } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

const OAuth2RedirectHandler = ({ location }) => {
  const getUrlParameter = (name) => {
    const replacedName = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp(`[\\?&]${replacedName}=([^&#]*)`);

    const results = regex.exec(location.search);
    return results === null
      ? ''
      : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };

  const jwt = getUrlParameter('accessToken');
  const role = getUrlParameter('role');
  const isSubmittedCard = getUrlParameter('isSubmittedCard');

  if (jwt) localStorage.setItem('ACCESS_TOKEN', jwt);

  if (role === 'ROLE_USER') return <Redirect to="/home" />;
  if (role === 'ROLE_ADMIN') return <Redirect to="/admin" />;
  if (isSubmittedCard === 'false') return <Redirect to="/register" />;
  return <Redirect to="/allow" />;
};

OAuth2RedirectHandler.propTypes = {
  location: ReactRouterPropTypes.match.isRequired,
};

export default OAuth2RedirectHandler;
