import * as React from 'react'
import { connect } from 'react-redux'
import { randomItem } from '../../../utils/random'
import CheckinExerciseCellContainer from './CheckinExerciseCellContainer'
import HowAreYouFeelingSuggestionCellContainer from './HowAreYouFeelingSuggestionCellContainer'
import WhereToStartSuggestionCellContainer from './WhereToStartSuggestionCellContainer'
import SwipablyDiscardableRow from '../../../components/SwipablyDiscardableRow'
import { lastStepGuideVisited } from '../../../redux/selectors/agregates'

const pickSuggestion = state => ({
  lastStepGuideVisited: lastStepGuideVisited(state)
})

const SuggestionCellPicker = (props: {
  lastStepGuideVisited: {},
  onClose: () => void
}) => {
  return (
    <SwipablyDiscardableRow onClose={props.onClose}>
      {!props.lastStepGuideVisited ? (
        <WhereToStartSuggestionCellContainer {...props} />
      ) : (
        randomItem([
          <CheckinExerciseCellContainer {...props} />,
          <HowAreYouFeelingSuggestionCellContainer {...props} />
        ])
      )}
    </SwipablyDiscardableRow>
  )
}
const SuggestionCellContainer = connect(pickSuggestion)(SuggestionCellPicker)

export default SuggestionCellContainer
