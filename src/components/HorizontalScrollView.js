// @flow
import * as React     from 'react'
import { ScrollView } from 'react-native'

type HorizontalScrollViewProps = {} & {
  horizontalPadding: number,
  marginTop: number
}

const HorizontalScrollView = ({
  horizontalPadding = 0,
  marginTop = 20,
  ...rest
}: HorizontalScrollViewProps) => (
  <ScrollView
    style={{
      marginTop
    }}
    horizontal={true}
    contentInset={{
      top: 0,
      bottom: 0,
      left: horizontalPadding,
      right: 0
    }}
    contentOffset={{
      x: -horizontalPadding,
      y: 0
    }}
    contentContainerStyle={{}}
    {...rest}
  />
)

export default HorizontalScrollView
