import * as React from 'react'
import { randomItem } from '../../../utils/random'
import CheckinExerciseCellContainer from './CheckinExerciseCellContainer'
import HowAreYouFeelingSuggestionCellContainer from './HowAreYouFeelingSuggestionCellContainer'
import WhereToStartSuggestionCellContainer from './WhereToStartSuggestionCellContainer'

const MoreButtonContainer = props => randomItem([
    <CheckinExerciseCellContainer {...props} />,
    <HowAreYouFeelingSuggestionCellContainer {...props} />,
    <WhereToStartSuggestionCellContainer {...props} />
  ])

// const MoreButtonContainer = props => (
//   <HowAreYouFeelingSuggestionCellContainer {...props} />
// )

export default MoreButtonContainer
