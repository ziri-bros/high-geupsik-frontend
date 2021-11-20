import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const DropDownCategory = styled.div`
  position: relative;
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  height: 40px;
  border: 1px solid #828282;
  border-radius: 8px;

  font-weight: 500;
  font-size: 16px;

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
  height: auto;
  border: 1px solid #828282;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  left: 0;
  top: 38px;

  background-color: white;

  z-index: 999;
`;

const DropDownContents = styled.div`
  border-bottom: 1px solid #828282;
  color: #4f4f4f;
  font-weight: normal;
  font-size: 16px;

  padding: 10px 10px;

  display: flex;
  align-items: center;

  &:hover {
    background: rgba(244, 255, 193, 0.3);
  }
`;

const DropDown = ({ name, list }) => {
  const [dropDownOn, setDropDownOn] = useState(false);
  const [selected, setSelected] = useState();

  const onClickDropDownOn = () => {
    setDropDownOn(!dropDownOn);
  };

  const onClickSelected = e => {
    setSelected(e.target.innerHTML);
  };

  return (
    <DropDownCategory onClick={onClickDropDownOn}>
      {selected || name}
      <img src="/images/icons/drop_down.png" alt="drop_down" />
      {dropDownOn && (
        <DropDownCategoryBox>
          {list.map(li => (
            <DropDownContents onClick={onClickSelected}>{li}</DropDownContents>
          ))}
        </DropDownCategoryBox>
      )}
    </DropDownCategory>
  );
};

DropDown.propTypes = {
  name: PropTypes.string.isRequired,
  list: PropTypes.arrayOf.isRequired,
};

export default DropDown;
