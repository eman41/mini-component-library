import React from 'react';
import { ChevronDown } from 'react-feather';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import { getDisplayedValue } from './Select.helpers';

const CHEVRON_STYLE = {
  display: 'inline-block',
  marginLeft: '24px',
};

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <HiddenSelect value={value} onChange={onChange}>
        {children}
      </HiddenSelect>
      <SelectWrap>
        <Label>{displayedValue}</Label>
        <ChevronDown style={CHEVRON_STYLE}/>
      </SelectWrap>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const HiddenSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0%;
  width: 100%;
  height: 100%;
`;

const Label = styled.p`
  display: inline-block;
  vertical-align: super;
  &:hover: {
    color: red;
  }
`;

const SelectWrap = styled.div`
  pointer-events: none;
  position: relative;
  width: fit-content;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding: 12px 16px 8px 12px;
  color: ${COLORS.gray700};
  ${HiddenSelect}:hover + & {
    color: black;
  }
  ${HiddenSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

export default Select;
