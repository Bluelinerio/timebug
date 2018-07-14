import * as React                              from 'react'
import { connect }                             from 'react-redux'
import { randomItem }                          from '../../../utils/random'
import CheckinExerciseCellContainer            from './CheckinExerciseCellContainer'
import HowAreYouFeelingSuggestionCellContainer from './HowAreYouFeelingSuggestionCellContainer'
import WhereToStartSuggestionCellContainer     from './WhereToStartSuggestionCellContainer'
import SwipablyDiscardableRow                  from '../../../components/SwipablyDiscardableRow'
import { lastStepGuideVisited }                from '../../../redux/selectors/agregates'
import selectors                               from '../../../redux/selectors'

const pickSuggestion = state => ({
  lastStepGuideVisited: lastStepGuideVisited(state),
  hasCompletedForms: selectors.hasCompletedForms(state)
})

/*
(!props.lastStepGuideVisited ? (
          <WhereToStartSuggestionCellContainer {...props} />
        ) : (
          <CheckinExerciseCellContainer {...props} />
        ),
        randomItem([
          <CheckinExerciseCellContainer {...props} />,
          <HowAreYouFeelingSuggestionCellContainer {...props} />
        ]))
*/

// const yestrdayCheckinWasAlreadySubmitted = () => true
// const itIsTimeToAskForYesterdaysCheking = () => true // noon.

// // feedlin:
// if (yestrdayCheckinWasAlreadySubmitted() === false) {
//   if (itIsTimeToAskForYesterdaysCheking() === true) {
//     <HowAreYouFeelingSuggestionCellContainer day={Yesterday} />
//   }
// }

const SuggestionCellPicker = (props: {
  lastStepGuideVisited: {},
  hasCompletedForms: boolean,
  onClose: () => void
}) => {
  return (
    <SwipablyDiscardableRow onClose={props.onClose}>
      {!props.lastStepGuideVisited && !props.hasCompletedForms? (
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
