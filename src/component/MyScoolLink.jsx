import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
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

const MySchoolLink = () => {
  const info = useSelector(({ userInfo }) => userInfo.info);
  const [schoolURL, setSchoolURL] = useState(null);

  useEffect(() => {
    if (info) {
      const { code, regionCode, name } = info.schoolResDTO;

      const data = {
        code,
        regionCode,
        name,
      };

      const loadSchoolInfoAPI = async () => {
        const response = await loadSchoolInfo(data);
        const xmlToJson = new XMLParser().parseFromString(response);
        const schoolPageUrl = xmlToJson.children[1].children[13].value;

        setSchoolURL(schoolPageUrl.slice(0, schoolPageUrl.length - 2));
      };

      loadSchoolInfoAPI();
    }
  }, [info]);

  return (
    <>
      {schoolURL && (
        <MySchoolLinkWrapper href={`${schoolURL}`} target="_blank">
          <ImageBox>
            <img src="/images/icons/school.png" alt="" />
          </ImageBox>
          <TextBox>학교 홈페이지 바로가기</TextBox>
        </MySchoolLinkWrapper>
      )}
    </>
  );
};

export default MySchoolLink;
