import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const DropDownCategory = styled.div`
  position: relative;
  margin-top: 10px;
  padding: 0 10px;
  height: 40px;
  border: 1px solid #828282;
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;

  ${props =>
    props.narrow &&
    css`
      width: 152px;
      font-size: 14px;
    `}

  ${props =>
    props.school &&
    css`
      width: 230px;
    `}


  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  img {
    width: 32px;
    height: 32px;
  }

  &:hover {
    background: rgba(244, 255, 193, 0.3);
  }
`;

const DropDownCategoryBox = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: 38px;

  max-height: 291px;
  overflow-y: auto;

  border: 1px solid #828282;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  background-color: white;
  z-index: 999;
`;

const DropDownContents = styled.div`
  border-bottom: 1px solid #828282;
  color: #4f4f4f;
  font-weight: normal;
  font-size: 16px;

  padding: 10px;

  display: flex;
  align-items: center;

  &:hover {
    background: rgba(244, 255, 193, 0.3);
  }

  ${props =>
    props.narrow &&
    css`
      color: #a4a4a4;
      font-size: 14px;

      &:hover {
        color: black;
        font-weight: 600;
      }
    `}
`;

const DropDown = ({ name, list, onChangeSelected, narrow, school }) => {
  const [dropDownOn, setDropDownOn] = useState(false);
  const [selected, setSelected] = useState();

  const onClickDropDownOn = () => setDropDownOn(!dropDownOn);
  const onClickSelected = e => {
    setSelected(e.target.innerHTML);
    onChangeSelected(e.target.innerHTML);
  };

  return (
    <DropDownCategory
      onClick={onClickDropDownOn}
      narrow={narrow}
      school={school}
    >
      {selected || name}
      <img src="/images/icons/drop_down.png" alt="drop_down" />
      {dropDownOn && (
        <DropDownCategoryBox narrow>
          {list.map(li => (
            <DropDownContents onClick={onClickSelected} narrow>
              {li}
            </DropDownContents>
          ))}
        </DropDownCategoryBox>
      )}
    </DropDownCategory>
  );
};

DropDown.propTypes = {
  name: PropTypes.string.isRequired,
  narrow: PropTypes.string,
  school: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChangeSelected: PropTypes.func.isRequired,
};

export default DropDown;
