import * as React from 'react';
import {
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
import type {
  GridItemProps,
  GridContainerProps,
  GridProps,
} from '../Grid';

const state = [0,3,0,0,0,0,0,0,0,3,0,0,0,0,0,0,2,0,2,2,0,1,0,1,0,1,0,0,1,1,]
const colors = [
  "#E9E9E9",
  "#6AC2ED",
  "#F89A1F",
  "#20B89D",
]

export const renderContainer = (props: GridContainerProps) => (
  <Svg width={props.width} height={props.height} style={props.style || {}}>
    <G id="GridContainerDefault" stroke="none" stroke-widith="1" fill="none" fill-rule="evenodd">
      {props.children}
    </G>
  </Svg>
)

export const renderRect = (props: GridItemProps) => (
  <Rect 
    key={props.index.toString()} 
    id={props.index.toString()} 
    fill={colors[state[props.index]]}
    rx={(props.rx || 1).toString() }
    {...props}
  />
)

export const renderCircle = (props: GridItemProps) => (
  <Circle 
    key={props.index.toString()} 
    id={props.index.toString()} 
    cx={(props.x + (props.width * 0.4)).toString()}
    cy={(props.y + (props.height * 0.4)).toString()}
    r={ (Math.min(props.width, props.height) * 0.4* (state[props.index] === 0 ? 0.5 : 1)).toString() }
    fill={colors[state[props.index]]}
  />
)

type Props = GridProps & {
  width: nummber,
}

export const defaultProps:GridProps = {
  columns:10,
  rows: 3,
  width: Dimensions.get('window').width,
  aspectRatio: 1,
  options: {
    spaceX: ({ tileWidth }) => Math.floor(tileWidth * 0.1),
    spaceY: ({ height }) => Math.floor(height * 0.1),
    renderItem: ({width, height}) => ({
      rx: Math.floor(Math.min(width, height) * 0.5)
    })
  },
  renderItem: renderCircle,
  renderContainer: renderContainer,
}