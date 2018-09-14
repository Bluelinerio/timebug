// @flow
import * as React               from 'react'
import Header                   from './ProgressCells/CellHeader'
import JourneyCarouselComponent from '../containers/JourneyCarouselContainer'

type Props = {
  component: string,
  reward: string
}

class UnlockedStepsCarouselCell extends React.PureComponent<Props> {
  render() {
    const title = 'Unlockables'
    const titleColor = 'black'
    const { component, reward } = this.props
    return (
      <React.Fragment>
        <Header title={title} titleColor={titleColor} />
        <JourneyCarouselComponent component={component} reward={reward} />
      </React.Fragment>
    )
  }
}
export default UnlockedStepsCarouselCell
