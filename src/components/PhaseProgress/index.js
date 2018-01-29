// @flow
import * as React from 'react';
import {
  ScrollView,
  Dimensions
} from 'react-native';
import Svg,{
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text,
  Use,
  Defs,
  Stop
} from 'react-native-svg';

import Grid from '../Grid';
import { defaultProps } from './defaults';

export default (props:{}) => (
  <Grid
    {...defaultProps}
    {...props}
  />
)
