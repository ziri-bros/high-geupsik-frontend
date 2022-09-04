import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import XMLParser from 'react-xml-parser';
import { loadSchoolInfo } from '../lib/api/schoolInfo';

const MySchoolLinkWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
`;

const ImageBox = styled.div`
  margin-right: 20px;

  img {
    width: 50px;
    height: 50px;
  }
`;

const TextBox = styled.div`
  font-size: 15px;
  margin: 2px 20px 0 0;
`;

const MySchoolLink = ({ schooloInfo }) => (
  <>
    {schooloInfo && (
      <MySchoolLinkWrapper
        href={schooloInfo.schoolResDTO.homepageUrl}
        target="_blank"
      >
        <ImageBox>
          <img src="/images/icons/school.png" alt="" />
        </ImageBox>
        <TextBox>학교 홈페이지 바로가기</TextBox>
      </MySchoolLinkWrapper>
    )}
  </>
);

MySchoolLink.propTypes = {
  schooloInfo: PropTypes.string,
};

export default MySchoolLink;
