import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';

const SIZES = {
  small: {
    '--border': '1px solid black',
    '--font-size': '0.875rem',
    '--margin-left': '20px',
    '--padding-bottom': '2px',
  },
  large: {
    '--border': '2px solid black',
    '--font-size': '1.125rem',
    '--margin-left': '30px',
    '--padding-bottom': '4px',
  }
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const iconSize = size === 'large' ? 24 : 12;
  return <InputWrapper width={width} style={SIZES[size]}>
      <IconWrapper size={size}>
        <Icon size={iconSize} id={icon}></Icon>
      </IconWrapper>
      <FancyInput type="text" placeholder={placeholder} style={SIZES[size]}/>
    </InputWrapper>
};

const InputWrapper = styled.div`
  position: relative;
  border-bottom: var(--border);
  width: ${props => props.width + 'px'};
`;

const IconWrapper = styled.span`
  position: absolute;
  left: 0px;
  bottom: 4px;
  display: inline-block;
`;

const FancyInput = styled.input`
  border: 0;
  height: 100%;
  width: 100%;
  margin-left: var(--margin-left);
  font-size: var(--font-size);
  padding-bottom: var(--padding-bottom);
  font-weight: 400;
  color: ${COLORS.gray700};
  &:hover {
    color: black;
    font-weight: 700;
  }
  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

export default IconInput;

