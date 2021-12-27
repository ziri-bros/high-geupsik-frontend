import React from 'react';
import PropTypes from 'prop-types';

const HeaderWrapper = ({ children }) => <div>{children}</div>;

export default HeaderWrapper;

HeaderWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};
