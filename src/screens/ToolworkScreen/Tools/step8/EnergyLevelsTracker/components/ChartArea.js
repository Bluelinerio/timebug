import React                           from 'react'
import ChartCarousel                   from './ChartCarousel'
import type { Props as CarouselProps } from './ChartCarousel'

type Props = CarouselProps

class ChartArea extends React.PureComponent<Props> {
  render() {
    return (
      <React.Fragment>
        <ChartCarousel {...this.props} />
      </React.Fragment>
    )
  }
}

export default ChartArea
