import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const BottomBar = (props: SvgProps) => (
  <Svg width="370" height="8" viewBox="0 0 398 8" fill="none" {...props}>
    <Path d="M1 7V1H157.58L154.152 7H1Z" fill="#0DCC70" />
    <Path d="M1 0V8M157.868 0.496139L153.868 7.49614M397.5 1H0M155 7H8.74229e-08" stroke="#0DCC70" strokeWidth="2" />
  </Svg>
);

export default BottomBar;