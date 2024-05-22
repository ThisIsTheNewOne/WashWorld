import React from 'react';
import Svg, { Path } from 'react-native-svg';

const UserIcon = (props: { width?: number; height?: number; }) => (
  <Svg width={props.width ?? 23} height={props.height ?? 23} viewBox="0 0 23 23" fill="none">
    <Path fillRule="evenodd" clipRule="evenodd" d="M11.5 13.0527C7.63114 13.0527 4.33198 15.4473 3.05663 18.8092C2.82976 19.4072 3.31524 20 3.96535 20H19.0347C19.6848 20 20.1703 19.4072 19.9433 18.8092C18.668 15.4473 15.3689 13.0527 11.5 13.0527ZM16.0004 6.42102C16.0004 8.86269 13.9841 10.842 11.4969 10.842C9.00969 10.842 6.99342 8.86269 6.99342 6.42102C6.99342 3.97936 9.00969 2 11.4969 2C13.9841 2 16.0004 3.97936 16.0004 6.42102Z" fill="white"/>
  </Svg>
);

export default UserIcon;