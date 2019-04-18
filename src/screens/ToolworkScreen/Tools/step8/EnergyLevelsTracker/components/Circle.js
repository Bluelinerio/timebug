// @flow
import React            from 'react'
import Svg, { Circle }  from 'react-native-svg'
import { displacement } from '../styles'

type Props = {
  height: number,
  width: number,
  fill: string,
  radius: number,
}

class CircleComponent extends React.PureComponent<Props> {
  render() {
    const { height, width, fill, radius } = this.props
    return (
      <Svg height={`${height}`} width={`${width}`}>
        <Circle
          cx={`${displacement}`}
          cy={`${displacement}`}
          r={`${radius}`}
          fill={fill}
        />
      </Svg>
    )
  }
}

export default CircleComponent
