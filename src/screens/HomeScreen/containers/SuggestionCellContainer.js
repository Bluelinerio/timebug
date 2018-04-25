import * as React from 'react'
import { randomItem } from '../../../utils/random'
import CheckinExerciseCellContainer from './CheckinExerciseCellContainer'
import HowAreYouFeelingSuggestionCellContainer from './HowAreYouFeelingSuggestionCellContainer'
import WhereToStartSuggestionCellContainer from './WhereToStartSuggestionCellContainer'
import SwipablyDiscardableRow from '../../../components/SwipablyDiscardableRow'

const SuggestionCellContainer = props => (
  <SwipablyDiscardableRow onClose={props.onClose}>
    {randomItem([
      <CheckinExerciseCellContainer {...props} />,
      <HowAreYouFeelingSuggestionCellContainer {...props} />,
      <WhereToStartSuggestionCellContainer {...props} />
    ])}
  </SwipablyDiscardableRow>
)

export default SuggestionCellContainer
