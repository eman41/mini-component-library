/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const BAR_WIDTH = 378;

const SIZES = {
  small: {
    '--height': (8 / 16) + 'rem',
    '--padding': '0',
     '--borderRadius': '4px',
  },
  medium: {
    '--height': (12 / 16) + 'rem',
    '--padding': '0',
    '--borderRadius': '4px',
  },
  large: {
    '--height': (24 / 16) + 'rem',
    '--padding': '4px',
    '--borderRadius': '8px',
  }
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return <Prog
    role="progressbar"
    aria-valuenow={value}
    aria-valuemin="0"
    aria-valuemax="100"
    style={styles}
  >
    <Trimmer>
      <Fill size={size} value={value} style={{ '--width': value + '%'}}></Fill>
    </Trimmer>
    <VisuallyHidden>{value}%</VisuallyHidden>
  </Prog>
};

const Trimmer = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Fill = styled.div`
  position: relative;
  background-color: ${COLORS.primary};
  width: var(--width);
  height: ${props => {
    if(props.size === 'large') {
      return '1rem'
    } else {
      return 'var(--height)'
    }
  }};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

const Prog = styled.div`
  height: var(--height);
  border-radius: 4px;
  padding: var(--padding);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--borderRadius);
`;

export default ProgressBar;
