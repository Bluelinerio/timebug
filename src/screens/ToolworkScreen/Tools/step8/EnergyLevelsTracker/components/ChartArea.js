//@ flow
import React                           from 'react'
import ChartCarousel                   from './ChartCarousel'
import ChartLegend                     from './ChartLegend'
import type { Props as CarouselProps } from './ChartCarousel'

type Props = CarouselProps

class ChartArea extends React.PureComponent<Props> {
  render() {
    return (
      <React.Fragment>
        <ChartCarousel {...this.props} />
        <ChartLegend />
      </React.Fragment>
    )
  }
}

export default ChartArea
