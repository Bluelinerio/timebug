//@flow
import React from 'react';
import SvgIcon from 'react-native-svg-icon';
import svgs from '../resources/images/svgIcons';

export type IconProps = {
  name: string,
  fill: string,
  height: string | number,
  width: string | number,
  viewBox?: string,
};

const Icon = (props: IconProps) => <SvgIcon {...props} svgs={svgs} />;

export default Icon;
