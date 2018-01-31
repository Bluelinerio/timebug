// @flow
import * as React from 'react';
import {
  ScrollView,
  Dimensions
} from 'react-native';

import Grid from '../Grid';
import { defaultProps } from './defaults';

export default (props: {}) => (
  <Grid
    {...defaultProps}
    {...props}
  />
)
