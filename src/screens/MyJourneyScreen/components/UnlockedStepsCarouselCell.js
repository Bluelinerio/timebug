// @flow
import * as React               from 'react'
import Header                   from './ProgressCells/CellHeader';
import JourneyCarouselComponent from '../containers/JourneyCarouselContainer'

const UnlockedStepsCarouselCell = () => {
    const title = "Unlockables"
    const titleColor = "black"
    return (
        <React.Fragment>
            <Header title={title} titleColor={titleColor} />
            <JourneyCarouselComponent />
        </React.Fragment>
    )
}
export default UnlockedStepsCarouselCell