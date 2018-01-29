// @flow
import * as React from 'react';
import {
  View, Dimensions
} from 'react-native';
import OnLayout from './OnLayout'

export type GridItemProps = {
  column: number,
  row: number,
  width: number, 
  height: number,
  x: number,
  y: number,
  index: number,
  options: {}
}

export type GridContainerProps = {
  width: number,
  height : number,
  children: React.Element<any>,
  style?: any
}

export type getSpaceXFn = ({ tileWidth: number}) => number
export type getSpaceYFn = ({ height: number }) => number
export type preRenderItemProps = ({
  width: number,
  height: number
});
export type RenderContainerFnType = (GridContainerProps) => React.Element<any>;
export type RenderItemFnType = (GridItemProps) => React.Element<any>

export type GridProps = {
  width: number,
  rows: number, 
  columns: number, 
  aspectRatio: number,
  spaceX?: number, 
  spaceY?: number,
  options?: {
    spaceX?: getSpaceXFn, 
    spaceY?: getSpaceYFn,
    renderItem?: preRenderItemProps
  },
  renderContainer: RenderContainerFnType,
  renderItem: RenderItemFnType
}

export default (props: GridProps) => {
  const containerWidth = props.width || Dimensions.get('window').width;

  const tileWidth = (containerWidth / props.columns)
  const spaceX = props.spaceX 
    ? props.spaceX 
    : (props.options && props.options.spaceX) 
      ? props.options.spaceX({
        tileWidth: tileWidth,
      }) 
    : Math.max(Math.floor(tileWidth * 0.1), 1)
  const width = tileWidth - spaceX

  const height = width * props.aspectRatio
  const spaceY = props.spaceY 
    ? props.spaceY 
    : (props.options && props.options.spaceY) 
      ? props.options.spaceY({
        height,
      }) 
      : Math.max(Math.floor(height * 0.1), 1)
  const tileHeight = height + spaceY;
  const options = (props.options && props.options.renderItem)
    ? props.options.renderItem({
      width,
      height,
    })
    : null

  const containerHeight = tileHeight * props.rows;
  
  const component = props.renderContainer({
    ...props,
    height: containerHeight,
    children: Array(props.rows * props.columns).fill().map((i ,index) => props.renderItem({
      index,
      column:index % props.columns,
      row:index / props.columns,
      width,
      height,
      x: ((index % props.columns) * tileWidth) + (spaceX * 0.5),
      y: (Math.floor(index / props.columns) * tileHeight) + (spaceY * 0.5),
      ...options,
    }))
  })

  return component;

}