import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const WrapperStyle = styled.div`
    width:100%;
    max-width:480px;
    height:100vh;
    margin:0 auto;
    position: relative;

  /* 구분을 위한 css 코드 */
  border: 1px solid gray;
`;

const Wrapper = ({ children }) => <WrapperStyle>{children}</WrapperStyle>;

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
